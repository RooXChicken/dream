package org.loveroo.webgl.engine.render

import org.loveroo.predef.Either

import java.util.{ArrayList, HashSet}
import org.loveroo.webgl.engine.data.{BufferWrapper, DataReader, JSMap, Uint8DataReader, Uint8DataWriter}
import org.loveroo.webgl.engine.render.batch.{DescriptorDataType, DescriptorType}
import org.loveroo.webgl.engine.render.command.Command
import org.loveroo.webgl.engine.render.data.*
import org.loveroo.webgl.engine.render.shader.{ShaderCompilationFailureException, ShaderLinkFailureException, Uniform}
import org.loveroo.webgl.engine.render.{RenderBufferCreateException, Renderer}
import org.loveroo.webgl.engine.runtime.EngineRuntime
import org.loveroo.webgl.engine.runtime.EngineRuntime.assert
import org.loveroo.webgl.{Dream, Game}
import org.scalajs.dom
import org.scalajs.dom.webgl.extensions.WebGLVertexArrayObjectOES
import org.scalajs.dom.webgl.*
import org.scalajs.dom.*

import java.util
import scala.collection.immutable.ArraySeq
import scala.scalajs.concurrent.JSExecutionContext
import scala.{RuntimeException, Seq}
import scala.scalajs.js
import scala.scalajs.js.JSConverters.JSRichIterableOnce
import scala.scalajs.js.typedarray.{ArrayBuffer, Float32Array, Uint8Array, Uint8ClampedArray}

class WebGLRenderer(
    val gl: WebGLRenderingContext,
    private val prepareNextFrame: () => Unit
) extends Renderer {
    private def enableExtension[T](obj: WebGLExtensionIdentifier[T]): T = {
        val id = obj.value

        val ext = gl.getExtension(id)
        if(ext != null) {
            EngineRuntime.debugLog(s"Loaded WebGL extension: ${id}")
            ext.as[T]
        }
        else {
            throw new ExtensionNotAvailableException(id)
        }
    }

    enableExtension(WEBGL_depth_texture)
    enableExtension(OES_element_index_uint)
    private val vaoExt = enableExtension(OES_vertex_array_object)
    private val instanceExt = enableExtension(ANGLE_instanced_arrays)

    private var lastTime = Dream.time
    private var calcFps = 0
    private var _fps = 0

    def fps: Int = _fps

    private var depthEnabled = false

    private val textures = new JSMap[String, WebGLImage]()
    private val shaders = new JSMap[String, WebGLCompiledShader]()
    private val batches = new JSMap[String, WebGLBatch]()
    private val renderBuffers = new JSMap[String, WebGLRenderBuffer]()

    private val boundTextures = new ArrayList[String](8)

    {
        var i = 0
        while(i < 8) {
            boundTextures.add("")
            i += 1
        }
    }

    private var boundShader: String = ""
    private var boundShaderWasInit = false

    private var boundFramebuffer = ""
    private var activeTextureSlot = -1

    private def canvasWidth: Int = gl.drawingBufferWidth
    private def canvasHeight: Int = gl.drawingBufferHeight

    private var currentViewportWidth = 0
    private var currentViewportHeight = 0

    @Null
    private var queue: Uint8DataReader = null

    private var rendering = false

    def gameTickComplete(value: Uint8DataReader): Boolean = {
        if(!rendering) {
            render(value)
            true
        }
        else {
            queue = value
            false
        }
    }

    gl.clearColor(0.0, 0.0, 0.0, 0.0)
    gl.clearDepth(1.0)

    gl.depthFunc(WebGLRenderingContext.LESS)
    enableDepthTest()

    override def render(reader: DataReader): Unit = {
        if(rendering) {
            return
        }

        rendering = true

        dom.window.requestAnimationFrame(_ => {
            while(reader.index < reader.size) {
                val byte = reader.byte()
                val command = Command.fromOrdinal(byte)
                command.execute(reader, this)
            }

            gl.finish()

            calcFps += 1

            while(Dream.time - lastTime >= 1000.0) {
                lastTime += 1000.0

                _fps = calcFps
                calcFps = 0

                println(s"FPS: ${fps}")
            }

            rendering = false

            if(queue != null) {
                // if the queue is null, a frame is already being prepared
                val _queue = queue
                queue = null

                prepareNextFrame()
                render(_queue)
            }
        })
    }

    override def enableDepthTest(): Unit = {
        if(!depthEnabled) {
            gl.enable(WebGLRenderingContext.DEPTH_TEST)
            depthEnabled = true

            EngineRuntime.verboseLog(s"Depth test enabled")
        }
    }

    override def disableDepthTest(): Unit = {
        if(depthEnabled) {
            gl.disable(WebGLRenderingContext.DEPTH_TEST)
            depthEnabled = false

            EngineRuntime.verboseLog(s"Depth test enabled")
        }
    }

    override def createTexture(
        id: String,
        internalFormat: Int,
        format: Int,
        dataType: Int,
        textureType: Int,
        width: Int,
        height: Int,
        hasData: Boolean,
        @Null data: DataReader
    ): Unit = {
        assert((hasData == (data != null)), "invalid parameters for createTexture")

        if(textures.contains(id)) {
            return
        }

        val ptr = gl.createTexture()
        textures.put(id, new WebGLImage(ptr, textureType))

        bindTexture(0, id)

        gl.texParameteri(
            textureType,
            WebGLRenderingContext.TEXTURE_MIN_FILTER,
            WebGLRenderingContext.NEAREST
        )

        gl.texParameteri(
            textureType,
            WebGLRenderingContext.TEXTURE_MAG_FILTER,
            WebGLRenderingContext.NEAREST
        )

        gl.texParameteri(
            textureType,
            WebGLRenderingContext.TEXTURE_WRAP_S,
            WebGLRenderingContext.CLAMP_TO_EDGE
        )

        gl.texParameteri(
            textureType,
            WebGLRenderingContext.TEXTURE_WRAP_T,
            WebGLRenderingContext.CLAMP_TO_EDGE
        )

        if(hasData) {
            gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, 1)

            gl.texImage2D(
                textureType,
                0,
                internalFormat,
                width,
                height,
                0,
                format,
                dataType,
                data.as[Uint8DataReader].buffer
            )
        }
        else {
            gl.texImage2D(
                textureType,
                0,
                internalFormat,
                width,
                height,
                0,
                format,
                dataType,
                null
            )
        }

        EngineRuntime.verboseLog(s"Texture ${id} created")
    }

    override def activateSlot(slot: Int): Unit = {
        val id = WebGLRenderingContext.TEXTURE0 + slot

        if(activeTextureSlot != id) {
            gl.activeTexture(id)
            activeTextureSlot = id

            EngineRuntime.verboseLog(s"Activated texture slot ${slot}")
        }
    }

    // TODO: check delay of loading image atlas
    override def bindTexture(slot: Int, id: String): Unit = {
        val tex = textures.get(id)
        if(tex == null || boundTextures.get(slot) == id) {
            EngineRuntime.verboseLog(s"${id} is ${tex} and bound (${boundTextures.get(slot) == id})")
            return
        }

        boundTextures.set(slot, id)

        activateSlot(slot)
        gl.bindTexture(tex.textureType, tex.ptr)

        EngineRuntime.verboseLog(s"Bound texture ${id}")
    }

    override def destroyTexture(id: String): Unit = {
        val tex = textures.get(id)
        if(tex == null) {
            return
        }

        gl.deleteTexture(tex.ptr)
        textures.remove(id)

        EngineRuntime.verboseLog(s"Destroyed texture ${id}")
    }

    override def createShader(id: String, vshSource: String, fshSource: String): Unit = {
        if(shaders.contains(id)) {
            return
        }

        EngineRuntime.verboseLog(s"Creating shader ${id}")

        def compileShader(source: String, shaderType: Int, code: String): WebGLShader = {
            val ptr = gl.createShader(shaderType)

            gl.shaderSource(ptr, code)
            gl.compileShader(ptr)

            val status = gl.getShaderParameter(
                ptr,
                WebGLRenderingContext.COMPILE_STATUS
            )

            if(status == WebGLRenderer.GL_FALSE) {
                throw new ShaderCompilationFailureException(
                    id,
                    source,
                    gl.getShaderInfoLog(ptr),
                    code
                )
            }

            EngineRuntime.verboseLog(s"Created shader element ${shaderType}")

            ptr
        }

        val ptrs = new ArrayList[WebGLShader](2)

        ptrs.add(compileShader("vert", WebGLRenderingContext.VERTEX_SHADER, vshSource))
        ptrs.add(compileShader("frag", WebGLRenderingContext.FRAGMENT_SHADER, fshSource))

        val programPtr = gl.createProgram()
        ptrs.forEach(p => gl.attachShader(programPtr, p))

        gl.linkProgram(programPtr)

        val status = gl.getProgramParameter(
            programPtr,
            WebGLRenderingContext.LINK_STATUS
        )

        if(status == WebGLRenderer.GL_FALSE) {
            throw new ShaderLinkFailureException(
                id,
                gl.getProgramInfoLog(programPtr)
            )
        }

        ptrs.forEach(gl.deleteShader)

        val ptr = new WebGLCompiledShader(id, programPtr)
        shaders.put(id, ptr)
    }

    override def destroyShader(id: String): Unit = {
        val shader = shaders.get(id)

        if(shader != null) {
            gl.deleteProgram(shader.ptr)
            shaders.remove(id)

            EngineRuntime.verboseLog(s"Destroyed shader ${id}")
        }
    }

    override def bindShader(id: String, init: Boolean): Unit = {
        if(boundShader == id && !boundShaderWasInit && !init) {
            return
        }

        val obj = shaders.get(id)
        if(obj == null) {
            return
        }

        boundShader = id
        boundShaderWasInit = init

        gl.useProgram(obj.ptr)

        EngineRuntime.verboseLog(s"Bound shader ${id}")

        if(init) {
            obj.boundTextures.forEach((s, t) => {
                bindTexture(s, t)
            })

            val writer = new Uint8DataWriter(2 * 4 + 1)
            Uniform.vec2(currentViewportWidth, currentViewportHeight)(writer)
            writer.writeLength()

            setShaderUniform(
                id,
                "frameSize",
                new Uint8DataReader(writer.buffer)
            )

//            if(obj.toBindCache.size() > 0) {
//                obj.toBindCache.forEach((id, v) => setShaderUniform(id, id, v))
//                obj.toBindCache.clear()
//            }
        }
    }

    override def setShaderUniform(id: String, uniformId: String, reader: DataReader): Boolean = {
        val obj = shaders.get(id)
        if(obj == null) {
            return false
        }

        val cachedLoc = obj.locCache.get(uniformId)

        if(cachedLoc == null && obj.locCache.contains(uniformId)) {
            return false
        }

        // TODO: this
        // don't update if value is the same
//        if(obj.uniformCache.get(uniformId) ?? (_ == value) ? false) {
//            return
//        }

        val loc = cachedLoc ? {
            bindShader(id, false)
            gl.getUniformLocation(obj.ptr, uniformId)
        }

        if(loc == null) {
            EngineRuntime.debugLog(s"Uniform ${uniformId} not found in ${id}")
        }

        obj.locCache.putIfAbsent(uniformId, loc)

        if(loc == null) {
            return false
        }

        bindShader(id, false)
        val dataType = reader.byte()

        dataType match {
            case 1 => gl.uniform1f(loc, reader.float())
            case 2 => gl.uniform2f(loc, reader.float(), reader.float())
            case 3 => gl.uniform3f(loc, reader.float(), reader.float(), reader.float())
            case 4 => gl.uniform4f(loc, reader.float(), reader.float(), reader.float(), reader.float())
            case 5 => {
                val slot = reader.byte()
                val textureId = reader.string()

                obj.boundTextures.put(slot, textureId)
                gl.uniform1i(loc, slot)
            }

            case _ => {}
        }

//        if(boundShader != id) {
//            obj.toBindCache.put(uniformId, value)
//            return
//        }

//        obj.uniformCache.put(uniformId, value)
        EngineRuntime.verboseLog(s"Putting uniform ${uniformId} for shader ${id}")
        true
    }

    override def setShaderUniformGlobal(uniformId: String, reader: DataReader): Unit = {
        EngineRuntime.verboseLog(s"Setting global shader uniform ${uniformId}")

        val start = reader.index

        shaders.forEach((id, _) => {
            setShaderUniform(id, uniformId, reader)
            reader.index = start
        })

        val count = reader.byte()
        reader.index += count * 4
    }

    override def createBatch(id: String, shaderId: String, reader: DataReader): Unit = {
        val descriptorSize = reader.short()
        val descriptorEntryCount = reader.byte()
        val entries = new util.ArrayList[(String, Byte, Boolean)](descriptorEntryCount)

        var i = 0
        while(i < descriptorEntryCount) {
            entries.add((reader.string(), reader.byte(), reader.boolean()))
            i += 1
        }

        if(batches.contains(id)) {
            return
        }

        val vao = vaoExt.createVertexArrayOES()
        vaoExt.bindVertexArrayOES(vao)

        val vbo = gl.createBuffer()
        val tbo = gl.createBuffer()
        val ebo = gl.createBuffer()

        val batchPtr = new WebGLBatch(vao, vbo, ebo, tbo, descriptorSize)

        batches.put(id, batchPtr)

        val indices = new BufferWrapper(new Uint8Array(6))
        indices.put(0)
        indices.put(1)
        indices.put(2)

        indices.put(1)
        indices.put(2)
        indices.put(3)

        gl.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, ebo)
        gl.bufferData(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, indices.buff, WebGLRenderingContext.STATIC_DRAW)

        val vertices = new BufferWrapper(new Float32Array(2 * 4))

        vertices.put(0.0f)
        vertices.put(0.0f)

        vertices.put(1.0f)
        vertices.put(0.0f)

        vertices.put(0.0f)
        vertices.put(1.0f)

        vertices.put(1.0f)
        vertices.put(1.0f)

        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, vbo)
        gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, vertices.buff, WebGLRenderingContext.DYNAMIC_DRAW)

        gl.enableVertexAttribArray(0)
        gl.vertexAttribPointer(
            0,
            2,
            WebGLRenderingContext.FLOAT,
            false,
            2 * 4,
            0
        )

        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, tbo)

        val shader = shaders.get(shaderId)
        bindShader(shaderId, false)

        var offset = 0

        entries.forEach(e => {
            val descriptorId = e._1
            val descriptorType = DescriptorType.fromOrdinal(e._2)

            val valueType = descriptorType.dataType match {
                case DescriptorDataType.Float => WebGLRenderingContext.FLOAT
                case DescriptorDataType.UByte => WebGLRenderingContext.UNSIGNED_BYTE
                case _ => 0
            }

            val index = gl.getAttribLocation(shader.ptr, descriptorId)
            if(index == -1) {
                EngineRuntime.debugLog(s"Attribute ${descriptorId} not found for ${id}")
            }
            else {
                gl.enableVertexAttribArray(index)
                instanceExt.vertexAttribDivisorANGLE(index, 1)

                gl.vertexAttribPointer(
                    index,
                    descriptorType.count,
                    valueType,
                    e._3,
                    descriptorSize,
                    offset
                )
            }

            offset += descriptorType.size
        })

        vaoExt.bindVertexArrayOES(null)
        EngineRuntime.verboseLog(s"Created batch ${id}")
    }

    override def destroyBatch(id: String): Unit = {
        val ptr = batches.get(id)

        if(ptr != null) {
            gl.deleteBuffer(ptr.vbo)
            gl.deleteBuffer(ptr.ebo)
            gl.deleteBuffer(ptr.tbo)
            vaoExt.deleteVertexArrayOES(ptr.vao)

            batches.remove(id)
            EngineRuntime.verboseLog(s"Destroyed batch ${id}")
        }
    }

    override def putBatch(id: String, reader: DataReader): Unit = {
        val ptr = batches.get(id)
        if(ptr == null) {
            return
        }

        ptr.count = reader.int()

        val buff = reader.subReader(ptr.count * ptr.descriptorSize).as[Uint8DataReader]
        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, ptr.tbo)

        gl.bufferData(
            WebGLRenderingContext.ARRAY_BUFFER,
            buff.buffer,
            WebGLRenderingContext.DYNAMIC_DRAW
        )

        EngineRuntime.verboseLog(s"Put batch ${id} elements ${ptr.count}")
    }

    override def putBatchElement(id: String, index: Int, reader: DataReader): Unit = {
        val ptr = batches.get(id)
        if(ptr == null) {
            return
        }

        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, ptr.tbo)

        gl.bufferSubData(
            WebGLRenderingContext.ARRAY_BUFFER,
            index * ptr.descriptorSize,
            reader.subReader(ptr.descriptorSize).as[Uint8DataReader].buffer
        )

        EngineRuntime.verboseLog(s"Put batch ${id} element ${index}")
    }

    override def renderBatch(id: String): Unit = {
        val ptr = batches.get(id)
        if(ptr == null) {
            return
        }

        vaoExt.bindVertexArrayOES(ptr.vao)

        instanceExt.drawElementsInstancedANGLE(
            WebGLRenderingContext.TRIANGLES,
            6,
            WebGLRenderingContext.UNSIGNED_BYTE,
            0,
            ptr.count
        )

        EngineRuntime.verboseLog(s"Rendered batch ${id}")
    }

    override def createRenderBuffer(id: String, renderTexId: String, depthTexId: String, width: Int, height: Int): Unit = {
        if(renderBuffers.contains(id)) {
            return
        }

        val renderTex = textures.get(renderTexId)
        val depthTex = textures.get(depthTexId)

        val ptr = gl.createFramebuffer()
        renderBuffers.put(id, new WebGLRenderBuffer(ptr, width, height))

        EngineRuntime.verboseLog(s"Creating framebuffer ${id}")

        bindRenderBuffer(id)

        gl.framebufferTexture2D(
            WebGLRenderingContext.FRAMEBUFFER,
            WebGLRenderingContext.COLOR_ATTACHMENT0,
            renderTex.textureType,
            renderTex.ptr,
            0
        )

        EngineRuntime.verboseLog(s"Set color attachment as ${renderTexId}")

        gl.framebufferTexture2D(
            WebGLRenderingContext.FRAMEBUFFER,
            WebGLRenderingContext.DEPTH_ATTACHMENT,
            depthTex.textureType,
            depthTex.ptr,
            0
        )

        EngineRuntime.verboseLog(s"Set depth attachment as ${depthTexId}")

        if(gl.checkFramebufferStatus(WebGLRenderingContext.FRAMEBUFFER) != WebGLRenderingContext.FRAMEBUFFER_COMPLETE) {
            throw new RenderBufferCreateException(id)
        }
    }

    override def destroyRenderBuffer(id: String): Unit = {
        val ptr = renderBuffers.get(id)
        if(ptr == null) {
            return
        }

        if(boundFramebuffer == id) {
            unbindRenderBuffer()
        }

        gl.deleteFramebuffer(ptr.ptr)
        renderBuffers.remove(id)

        EngineRuntime.verboseLog(s"Destroyed framebuffer ${id}")
    }

    override def bindRenderBuffer(id: String): Unit = {
        if(boundFramebuffer == id) {
            return
        }

        val ptr = renderBuffers.get(id)
        if(ptr == null) {
            EngineRuntime.verboseLog(s"Framebuffer ${id} is null")
            return
        }

        EngineRuntime.verboseLog(s"Bound framebuffer ${id}")

        gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, ptr.ptr)
        setViewport(ptr.width, ptr.height)

        boundFramebuffer = id
    }

    override def unbindRenderBuffer(): Unit = {
        if(!boundFramebuffer.isEmpty) {
            boundFramebuffer = ""

            gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null)
            setViewport(canvasWidth, canvasHeight)

            EngineRuntime.verboseLog("Unbound framebuffer")
        }
    }

    override def clearRenderBuffer(id: String): Unit = {
        bindRenderBuffer(id)
        gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT)

        EngineRuntime.verboseLog("Cleared framebuffer")
    }

    override def setViewport(width: Int, height: Int): Unit = {
        if(width != currentViewportWidth || height != currentViewportHeight) {
            currentViewportWidth = width
            currentViewportHeight = height

            gl.viewport(0, 0, width, height)
            EngineRuntime.verboseLog(s"Set viewport to ${width} ${height}")
        }
    }
}

object WebGLRenderer {
    private val GL_FALSE = js.Any.fromBoolean(false)
}

class WebGLImage(
    val ptr: WebGLTexture,
    val textureType: Int
)

class WebGLCompiledShader(val id: String, val ptr: WebGLProgram) {
    val locCache = new JSMap[String, WebGLUniformLocation]()
//    val uniformCache = new JSMap[String, UniformValue]()
//    val toBindCache = new JSMap[String, UniformValue]()
    val boundTextures = new JSMap[Int, String]()
}

class WebGLBatch(
    val vao: WebGLVertexArrayObjectOES,
    val vbo: WebGLBuffer,
    val ebo: WebGLBuffer,
    val tbo: WebGLBuffer,
    val descriptorSize: Int
) {
    var count = -1
}

class WebGLRenderBuffer(val ptr: WebGLFramebuffer, val width: Int, val height: Int)

class ExtensionNotAvailableException(ext: String) extends
    RuntimeException(s"WebGL extension ${ext} not found")
