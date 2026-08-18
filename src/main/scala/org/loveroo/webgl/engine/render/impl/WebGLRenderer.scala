package org.loveroo.webgl.engine.render.impl

import java.lang.IllegalStateException
import java.util.{ArrayList, HashMap, HashSet, LinkedList, List}
import org.loveroo.predef.ListUtil
import org.loveroo.webgl.engine.data.{BufferWrapper, JSMap}
import org.loveroo.webgl.engine.render.batch.{AttributeNotFoundException, Batch, BatchElement, DataType, ElementData, FloatElementData, Vec2ElementData, Vec3ElementData, Vec4ElementData}
import org.loveroo.webgl.engine.render.data.{ColorFormats, TextureSlot, TextureTypes}
import org.loveroo.webgl.{Game, Runtime}
import org.loveroo.webgl.engine.render.{EmptyTexture, FloatUniform, ImageTexture, RenderBuffer, RenderBufferCreateException, Renderer, Shader, ShaderCompilationFailureException, ShaderID, ShaderLinkFailureException, Texture, TextureUniform, Uniform2f, Uniform3f, Uniform4f, UniformValue}
import org.loveroo.webgl.engine.runtime.{RenderTask, TickTask}
import org.scalajs.dom.webgl.extensions.WebGLVertexArrayObjectOES
import org.scalajs.dom.webgl.{ANGLE_instanced_arrays, OES_element_index_uint, OES_vertex_array_object, WEBGL_depth_texture, WebGLExtensionIdentifier}
import org.scalajs.dom.{ImageData, WebGLBuffer, WebGLFramebuffer, WebGLProgram, WebGLRenderbuffer, WebGLRenderingContext, WebGLShader, WebGLTexture, WebGLUniformLocation, Worker}
import scala.{Exception, RuntimeException}
import scala.scalajs.js
import scala.scalajs.js.Map
import scala.scalajs.js.typedarray.{ArrayBuffer, ArrayBufferView, Float32Array, Uint16Array, Uint32Array, Uint8Array}

class WebGLRenderer(val gl: WebGLRenderingContext) extends Renderer {
    override val textureTypes: TextureTypes = new WebGLTextureTypes()
    override val colorFormats: ColorFormats = new WebGLColorFormats()

    Renderer.initRenderer(
        this,
        gl.drawingBufferWidth,
        gl.drawingBufferHeight
    )

    private def enableExtension[T](obj: WebGLExtensionIdentifier[T]): T = {
        val id = obj.value

        val ext = gl.getExtension(id)
        if(ext != null) {
            Game.runtime.debugLog(s"Loaded WebGL extension: ${id}")
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

    private var lastTime = Runtime.time
    private var calcFps = 0
    private var _fps = 0

    def fps: Int = _fps

    private var depthEnabled = false

    private val textures = new JSMap[String, WebGLTexture]()
    private val shaders = new LinkedList[WebGLCompiledShader]()
    private val batches = new JSMap[String, WebGLBatch]()
    private val renderBuffers = new JSMap[String, WebGLFramebuffer]()

    private val boundTextures = new ArrayList[String](TextureSlot.slots.size())

    TextureSlot.slots.forEach(s => {
        boundTextures.add("")
    })

    @Null
    private var boundShader: Shader = null
    private var boundFramebuffer = ""
    private var activeTextureSlot = -1

    private var currentViewportWidth = 0
    private var currentViewportHeight = 0

    gl.clearColor(0.0, 0.0, 0.0, 0.0)
    gl.clearDepth(1.0)

    gl.depthFunc(WebGLRenderingContext.LESS)
    enableDepthTest()

    override def render(): Unit = {
        val frame = Game.runtime.frame
        Game.runtime.newFrame()

        Game.instance.tick()

        frame.renderFrame(this)

        calcFps += 1

        while(Runtime.time - lastTime >= 1000000.0) {
            lastTime += 1000000.0

            _fps = calcFps
            calcFps = 0

            println(s"FPS: ${fps}")
        }
    }

    override def enableDepthTest(): Unit = {
        if(!depthEnabled) {
            gl.enable(WebGLRenderingContext.DEPTH_TEST)
            depthEnabled = true

            Game.runtime.verboseLog(s"Depth test enabled")
        }
    }

    override def disableDepthTest(): Unit = {
        if(depthEnabled) {
            gl.disable(WebGLRenderingContext.DEPTH_TEST)
            depthEnabled = false

            Game.runtime.verboseLog(s"Depth test enabled")
        }
    }

    override def createTexture(texture: Texture): Unit = {
        if(texture.rendererData != null) {
            return
        }

        if(textures.contains(texture.id)) {
            texture.rendererData = textures.get(texture.id)
            return
        }

        val ptr = gl.createTexture()
        texture.rendererData = ptr

        textures.put(texture.id, ptr)

        bindTexture(TextureSlot.One, texture)

        gl.texParameteri(
            texture.textureType.id,
            WebGLRenderingContext.TEXTURE_MIN_FILTER,
            WebGLRenderingContext.NEAREST
        )

        gl.texParameteri(
            texture.textureType.id,
            WebGLRenderingContext.TEXTURE_MAG_FILTER,
            WebGLRenderingContext.NEAREST
        )

        gl.texParameteri(
            texture.textureType.id,
            WebGLRenderingContext.TEXTURE_WRAP_S,
            WebGLRenderingContext.CLAMP_TO_EDGE
        )

        gl.texParameteri(
            texture.textureType.id,
            WebGLRenderingContext.TEXTURE_WRAP_T,
            WebGLRenderingContext.CLAMP_TO_EDGE
        )

        texture match {
            case img: ImageTexture => {
                gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, 1)

                gl.texImage2D(
                    texture.textureType.id,
                    0,
                    texture.colorFormat.internalFormat,
                    texture.colorFormat.format,
                    texture.colorFormat.dataType,
                    img.image
                )
            }

            case emp: EmptyTexture => {
                gl.texImage2D(
                    texture.textureType.id,
                    0,
                    texture.colorFormat.internalFormat,
                    texture.width,
                    texture.height,
                    0,
                    texture.colorFormat.format,
                    texture.colorFormat.dataType,
                    null
                )
            }
        }

        Game.runtime.verboseLog(s"Texture ${texture.id} created")
    }

    override def activateSlot(slot: TextureSlot): Unit = {
        val id = WebGLRenderingContext.TEXTURE0 + slot.id

        if(activeTextureSlot != id) {
            gl.activeTexture(id)
            activeTextureSlot = id

            Game.runtime.verboseLog(s"Activated texture slot ${slot.id}")
        }
    }

    override def bindTexture(slot: TextureSlot, texture: Texture): Unit = {
        val ptr = texture.rendererData.tryAs[WebGLTexture]
        if(ptr == null || boundTextures.get(slot.id) == texture.id) {
            return
        }

        boundTextures.set(slot.id, texture.id)

        activateSlot(slot)
        gl.bindTexture(texture.textureType.id, ptr)

        Game.runtime.verboseLog(s"Bound texture ${texture.id}")
    }

    override def destroyTexture(texture: Texture): Unit = {
        val ptr = texture.rendererData.tryAs[WebGLTexture]
        if(ptr == null) {
            return
        }

        gl.deleteTexture(ptr)
        textures.remove(texture.id)
        texture.rendererData = null

        Game.runtime.verboseLog(s"Destroyed texture ${texture.id}")
    }

    override def createShader(shader: Shader): Unit = {
        if(shader.rendererData != null) {
            return
        }

        Game.runtime.verboseLog(s"Creating shader ${shader.id}")

        def compileShader(source: String, shaderType: Int, code: String): WebGLShader = {
            val addedConst = new HashSet[String]()

            val finalCode = Renderer.constantsRegex.replaceAllIn(code, m => {
                val const = m.group(1)

                if(!addedConst.contains(const)) {
                    addedConst.add(const)
                    val value = Renderer.constants.get(const)

                    value match {
                        case _f: FloatUniform => s"highp float ${const} = ${_f.value}.0;"
                        case _2f: Uniform2f => s"highp vec2 ${const} = vec2(${_2f.x}.0, ${_2f.y}.0);"
                        case _3f: Uniform3f => s"highp vec3 ${const} = vec3(${_3f.x}.0, ${_3f.y}.0, ${_3f.z}.0);"
                        case _4f: Uniform4f => s"highp vec4 ${const} = vec4(${_4f.x}.0, ${_4f.y}.0, ${_4f.z}.0, ${_4f.w}.0);"

                        case _ => throw new IllegalStateException(s"Constant ${const} in ${shader.id} has an invalid type")
                    }
                }
                else {
                    ""
                }
            })

            val ptr = gl.createShader(shaderType)

            gl.shaderSource(ptr, finalCode)
            gl.compileShader(ptr)

            val status = gl.getShaderParameter(
                ptr,
                WebGLRenderingContext.COMPILE_STATUS
            )

            if(status == WebGLRenderer.GL_FALSE) {
                throw new ShaderCompilationFailureException(
                    shader.id,
                    source,
                    gl.getShaderInfoLog(ptr),
                    finalCode
                )
            }

            Game.runtime.verboseLog(s"Created shader element ${shaderType}")

            ptr
        }

        val ptrs = new ArrayList[WebGLShader](2)

        shader.vshSource ?? (s => ptrs.add(compileShader("vert", WebGLRenderingContext.VERTEX_SHADER, s)))
        shader.fshSource ?? (s => ptrs.add(compileShader("frag", WebGLRenderingContext.FRAGMENT_SHADER, s)))

        val programPtr = gl.createProgram()
        ptrs.forEach(p => gl.attachShader(programPtr, p))

        gl.linkProgram(programPtr)

        val status = gl.getProgramParameter(
            programPtr,
            WebGLRenderingContext.LINK_STATUS
        )

        if(status == WebGLRenderer.GL_FALSE) {
            throw new ShaderLinkFailureException(
                shader.id,
                gl.getProgramInfoLog(programPtr)
            )
        }

        ptrs.forEach(gl.deleteShader)

        val ptr = new WebGLCompiledShader(shader, programPtr)
        shader.rendererData = ptr
        shaders.addLast(ptr)
    }

    override def destroyShader(shader: Shader): Unit = {
        val ptr = shader.rendererData.tryAs[WebGLCompiledShader]

        if(ptr != null) {
            gl.deleteProgram(ptr.ptr)

            shaders.remove(ptr)
            shader.rendererData = null

            Game.runtime.verboseLog(s"Destroyed shader ${shader.id}")
        }
    }

    override def bindShader(shader: Shader, init: Boolean): Unit = {
        if(boundShader == shader) {
            return
        }

        val obj = shader.rendererData.tryAs[WebGLCompiledShader]
        if(obj == null) {
            return
        }

        boundShader = shader
        gl.useProgram(obj.ptr)

        Game.runtime.verboseLog(s"Bound shader ${shader.id}")

        if(init) {
            obj.boundTextures.forEach((s, t) => {
                bindTexture(s, t)
            })

            if(obj.toBindCache.size() > 0) {
                obj.toBindCache.forEach((id, v) => setShaderUniform(shader, id, v))
                obj.toBindCache.clear()
            }

            setShaderUniform(
                shader,
                "frameSize",
                new Uniform2f(
                    currentViewportWidth,
                    currentViewportHeight
                )
            )
        }
    }

    override def setShaderUniform(shader: Shader, id: String, value: UniformValue): Unit = {
        val obj = shader.rendererData.tryAs[WebGLCompiledShader]
        if(obj == null) {
            return
        }

        val cachedLoc = obj.locCache.get(id)

        if(obj.locCache.contains(id) && cachedLoc == null) {
            return
        }

        // don't update if value is the same
        if(obj.uniformCache.get(id) ?? (_ == value) ? false) {
            return
        }

        val loc = cachedLoc ? {
            bindShader(shader, false)
            gl.getUniformLocation(obj.ptr, id)
        }

        if(loc == null) {
            Game.runtime.debugLog(s"Uniform ${id} not found in ${shader.id}")
        }

        obj.locCache.putIfAbsent(id, loc)

        if(loc == null) {
            return
        }

        if(boundShader != shader) {
            obj.toBindCache.put(id, value)
            return
        }

        obj.uniformCache.put(id, value)
        Game.runtime.verboseLog(s"Putting uniform ${id} for shader ${shader.id}")

        value match {
            case _f: FloatUniform => gl.uniform1f(loc, _f.value)
            case _2f: Uniform2f => gl.uniform2f(loc, _2f.x, _2f.y)
            case _3f: Uniform3f => gl.uniform3f(loc, _3f.x, _3f.y, _3f.z)
            case _4f: Uniform4f => gl.uniform4f(loc, _4f.x, _4f.y, _4f.z, _4f.w)

            case _t: TextureUniform => {
                obj.boundTextures.put(_t.slot, _t.texture)
                gl.uniform1i(loc, _t.slot.id)
            }

            case _ => {}
        }
    }

    override def setShaderUniformGlobal(id: String, value: UniformValue): Unit = {
        Game.runtime.verboseLog(s"Setting global shader uniform ${id}")

        shaders.forEach(obj => {
            setShaderUniform(obj.shader, id, value)
        })
    }

    override def createBatch[E <: BatchElement](batch: Batch[E]): Unit = {
        if(batch.rendererData != null) {
            return
        }

        if(batches.contains(batch.id)) {
            batch.rendererData = batches.get(batch.id)
            return
        }

        val shaderPtr = batch.shader.rendererData.tryAs[WebGLCompiledShader]
        if(shaderPtr == null) {
            return
        }

        val vao = vaoExt.createVertexArrayOES()
        vaoExt.bindVertexArrayOES(vao)

        val vbo = gl.createBuffer()
        val tbo = gl.createBuffer()
        val ebo = gl.createBuffer()

        val batchPtr = new WebGLBatch(vao, vbo, ebo, tbo)
        batch.rendererData = batchPtr
        batches.put(batch.id, batchPtr)

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

        bindShader(batch.shader, true)

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

        var offset = 0
        batch.descriptor.types.forEach(d => {
            val valueType = d.descriptorType.dataType match {
                case DataType.Float => WebGLRenderingContext.FLOAT
                case _ => 0
            }

            val index = gl.getAttribLocation(shaderPtr.ptr, d.id)
            if(index == -1) {
                Game.runtime.debugLog(s"Attribute ${d.id} not found for ${batch.id}")
            }
            else {
                gl.enableVertexAttribArray(index)
                instanceExt.vertexAttribDivisorANGLE(index, 1)

                gl.vertexAttribPointer(
                    index,
                    d.descriptorType.count,
                    valueType,
                    false,
                    batch.descriptor.size,
                    offset
                )
            }

            offset += d.descriptorType.size
        })

        vaoExt.bindVertexArrayOES(null)
        Game.runtime.verboseLog(s"Created batch ${batch.id}")
    }

    override def destroyBatch[E <: BatchElement](batch: Batch[E]): Unit = {
        val ptr = batch.rendererData.tryAs[WebGLBatch]

        if(ptr != null) {
            gl.deleteBuffer(ptr.vbo)
            gl.deleteBuffer(ptr.ebo)
            gl.deleteBuffer(ptr.tbo)
            vaoExt.deleteVertexArrayOES(ptr.vao)

            batches.remove(batch.id)
            batch.rendererData = null

            Game.runtime.verboseLog(s"Destroyed batch ${batch.id}")
        }
    }

    override def putBatch[E <: BatchElement](batch: Batch[E], elements: List[E]): Unit = {
        val ptr = batch.rendererData.tryAs[WebGLBatch]
        if(ptr == null) {
            return
        }

        val buffer = new BufferWrapper(new Float32Array(elements.size() * batch.descriptor.count))
        elements.forEach(e => putBuff(buffer, e.data))

        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, ptr.tbo)
        gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, buffer.buff, WebGLRenderingContext.DYNAMIC_DRAW)

        Game.runtime.verboseLog(s"Put batch ${batch.id} elements ${elements.size()}")
    }

    override def putBatchElement[E <: BatchElement](batch: Batch[E], index: Int, element: E): Unit = {
        val ptr = batch.rendererData.tryAs[WebGLBatch]
        if(ptr == null) {
            return
        }

        val buffer = new BufferWrapper(new Float32Array(batch.descriptor.count))
        putBuff(buffer, element.data)

        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, ptr.tbo)
        gl.bufferSubData(WebGLRenderingContext.ARRAY_BUFFER, index * batch.descriptor.size, buffer.buff)

        Game.runtime.verboseLog(s"Put batch ${batch.id} element ${index}")
    }

    private def putBuff(buff: BufferWrapper[Float, Float32Array], data: List[? <: ElementData]): Unit = {
        data.forEach({
            case f: FloatElementData =>
                buff.put(f.value)

            case v2: Vec2ElementData => {
                buff.put(v2.x)
                buff.put(v2.y)
            }

            case v3: Vec3ElementData => {
                buff.put(v3.x)
                buff.put(v3.y)
                buff.put(v3.z)
            }

            case v4: Vec4ElementData => {
                buff.put(v4.x)
                buff.put(v4.y)
                buff.put(v4.z)
                buff.put(v4.w)
            }
        })
    }

    override def renderBatch[E <: BatchElement](batch: Batch[E]): Unit = {
        val ptr = batch.rendererData.tryAs[WebGLBatch]
        if(ptr == null) {
            return
        }

        vaoExt.bindVertexArrayOES(ptr.vao)

        instanceExt.drawElementsInstancedANGLE(
            WebGLRenderingContext.TRIANGLES,
            6,
            WebGLRenderingContext.UNSIGNED_BYTE,
            0,
            batch.count
        )
    }

    override def createRenderBuffer(buffer: RenderBuffer): Unit = {
        if(buffer.rendererData != null) {
            return
        }

        if(renderBuffers.contains(buffer.id)) {
            buffer.rendererData = batches.get(buffer.id)
            return
        }

        val ptr = gl.createFramebuffer()
        buffer.rendererData = ptr

        Game.runtime.verboseLog(s"Creating framebuffer ${buffer.id}")

        bindRenderBuffer(buffer)

        gl.framebufferTexture2D(
            WebGLRenderingContext.FRAMEBUFFER,
            WebGLRenderingContext.COLOR_ATTACHMENT0,
            buffer.renderTex.textureType.id,
            buffer.renderTex.rendererData.as[WebGLTexture],
            0
        )

        Game.runtime.verboseLog(s"Set color attachment as ${buffer.renderTex.id}")

        gl.framebufferTexture2D(
            WebGLRenderingContext.FRAMEBUFFER,
            WebGLRenderingContext.DEPTH_ATTACHMENT,
            buffer.depthTex.textureType.id,
            buffer.depthTex.rendererData.as[WebGLTexture],
            0
        )

        Game.runtime.verboseLog(s"Set depth attachment as ${buffer.depthTex.id}")

        if(gl.checkFramebufferStatus(WebGLRenderingContext.FRAMEBUFFER) != WebGLRenderingContext.FRAMEBUFFER_COMPLETE) {
            throw new RenderBufferCreateException(buffer.id)
        }
    }

    override def destroyRenderBuffer(buffer: RenderBuffer): Unit = {
        val ptr = buffer.rendererData.tryAs[WebGLFramebuffer]
        if(ptr == null) {
            return
        }

        if(boundFramebuffer == buffer.id) {
            unbindRenderBuffer()
        }

        gl.deleteFramebuffer(ptr)
        renderBuffers.remove(buffer.id)
        buffer.rendererData = null

        Game.runtime.verboseLog(s"Destroyed framebuffer ${buffer.id}")
    }

    override def bindRenderBuffer(buffer: RenderBuffer): Unit = {
        if(boundFramebuffer == buffer.id) {
            return
        }

        val ptr = buffer.rendererData.tryAs[WebGLFramebuffer]
        if(ptr == null) {
            Game.runtime.verboseLog(s"Framebuffer ${buffer.id} is null")
            return
        }

        Game.runtime.verboseLog(s"Bound framebuffer ${buffer.id}")

        gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, ptr)
        setViewport(buffer.width, buffer.height)

        boundFramebuffer = buffer.id
    }

    override def unbindRenderBuffer(): Unit = {
        if(!boundFramebuffer.isEmpty) {
            boundFramebuffer = ""

            gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null)
            setViewport(Renderer.width, Renderer.height)

            Game.runtime.verboseLog("Unbound framebuffer")
        }
    }

    override def clearRenderBuffer(buffer: RenderBuffer): Unit = {
        bindRenderBuffer(buffer)
        gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT)

        Game.runtime.verboseLog("Cleared framebuffer")
    }

    override def setViewport(width: Int, height: Int): Unit = {
        if(width != currentViewportWidth || height != currentViewportHeight) {
            currentViewportWidth = width
            currentViewportHeight = height

            gl.viewport(0, 0, width, height)
            Game.runtime.verboseLog(s"Set viewport to ${width} ${height}")
        }
    }
}

object WebGLRenderer {
    private val GL_FALSE = js.Any.fromBoolean(false)
}

class WebGLCompiledShader(val shader: Shader, val ptr: WebGLProgram) {
    val locCache = new JSMap[String, WebGLUniformLocation]()
    val uniformCache = new JSMap[String, UniformValue]()
    val toBindCache = new JSMap[String, UniformValue]()
    val boundTextures = new JSMap[TextureSlot, Texture]()
}

class WebGLBatch(
    val vao: WebGLVertexArrayObjectOES,
    val vbo: WebGLBuffer,
    val ebo: WebGLBuffer,
    val tbo: WebGLBuffer
)

class ExtensionNotAvailableException(ext: String) extends
    RuntimeException(s"WebGL extension ${ext} not found")
