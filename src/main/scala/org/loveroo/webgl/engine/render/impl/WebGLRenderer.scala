package org.loveroo.webgl.engine.render.impl

import java.util.{ArrayList, HashMap, List}
import org.loveroo.webgl.engine.data.BufferWrapper
import org.loveroo.webgl.engine.render.batch.{AttributeNotFoundException, Batch, BatchElement, DataType, ElementData, FloatElementData, Vec2ElementData, Vec3ElementData, Vec4ElementData}
import org.loveroo.webgl.engine.render.data.{ColorFormats, TextureSlot, TextureTypes}
import org.loveroo.webgl.{Game, Runtime}
import org.loveroo.webgl.engine.render.{EmptyTexture, FloatUniform, ImageTexture, RenderBuffer, RenderBufferCreateException, Renderer, Shader, ShaderCompilationFailureException, ShaderID, ShaderLinkFailureException, Texture, TextureUniform, Uniform2f, Uniform3f, Uniform4f, UniformValue}
import org.scalajs.dom.webgl.extensions.WebGLVertexArrayObjectOES
import org.scalajs.dom.webgl.{ANGLE_instanced_arrays, OES_element_index_uint, OES_vertex_array_object, WEBGL_depth_texture, WebGLExtensionIdentifier}
import org.scalajs.dom.{ImageData, WebGLBuffer, WebGLFramebuffer, WebGLProgram, WebGLRenderbuffer, WebGLRenderingContext, WebGLShader, WebGLTexture, WebGLUniformLocation}
import scala.{Exception, RuntimeException}
import scala.scalajs.js
import scala.scalajs.js.typedarray.{ArrayBuffer, ArrayBufferView, Float32Array, Uint16Array, Uint32Array, Uint8Array}

// TODO: Use a cache of gpu commands so instead of allocating new objects it grabs the first unused one and fills out the data. Use frame number instead of resetting them. Use weak references so that when the objects used as data don’t get kept around forever if another command doesn’t overwrite the data. Have each type of gpu command be an enum that handles the data in its own function
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

    private var lastUpdate = 0.0
    private var calcFps = 0
    private var _fps = 0

    def fps: Int = _fps

    private var depthEnabled = false

    private val textures = new HashMap[String, WebGLTexture]()
    private val shaders = new HashMap[ShaderID, WebGLCompiledShader]()
    private val batches = new HashMap[String, WebGLBatch]()
    private val renderBuffers = new HashMap[String, WebGLFramebuffer]()

    private val boundTextures = new HashMap[TextureSlot, WebGLTexture]()

    @Null
    private var boundShader: ShaderID = null
    private var boundFramebuffer = ""
    private var activeTexture = -1

    private var currentViewportWidth = 0
    private var currentViewportHeight = 0

    gl.clearColor(0.0, 0.0, 0.0, 0.0)
    gl.clearDepth(1.0)

    gl.depthFunc(WebGLRenderingContext.LESS)
    enableDepthTest()

    override def render(delta: Double): Unit = {
        gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT)

        val frame = Game.runtime.frame
        Game.runtime.newFrame()

        frame.renderFrame(this)

        calcFps += 1

        while(delta - lastUpdate >= 1000.0) {
            lastUpdate += 1000.0

            _fps = calcFps
            calcFps = 0

            Game.runtime.debugLog(s"FPS: ${fps}")
        }
    }

    override def enableDepthTest(): Unit = {
        if(!depthEnabled) {
            gl.enable(WebGLRenderingContext.DEPTH_TEST)
            depthEnabled = true
        }
    }

    override def disableDepthTest(): Unit = {
        if(depthEnabled) {
            gl.disable(WebGLRenderingContext.DEPTH_TEST)
            depthEnabled = false
        }
    }

    override def createTexture(texture: Texture): Unit = {
        if(textures.containsKey(texture.id)) {
            return
        }

        val ptr = gl.createTexture()
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
    }

    override def activateSlot(slot: TextureSlot): Unit = {
        val id = WebGLRenderingContext.TEXTURE0 + slot.id

        if(activeTexture != id) {
            gl.activeTexture(id)
            activeTexture = id
        }
    }

    override def bindTexture(slot: TextureSlot, texture: Texture): Unit = {
        val ptr = textures.get(texture.id)
        if(ptr == null || boundTextures.get(slot) == ptr) {
            return
        }

        boundTextures.put(slot, ptr)

        activateSlot(slot)
        gl.bindTexture(texture.textureType.id, ptr)
    }

    override def destroyTexture(texture: Texture): Unit = {
        val ptr = textures.get(texture.id)
        if(ptr == null) {
            return
        }

        gl.deleteTexture(ptr)
        textures.remove(texture.id)
    }

    override def createShader(shader: Shader): Unit = {
        if(shaders.containsKey(shader.id)) {
            return
        }

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
                    shader.id,
                    source,
                    gl.getShaderInfoLog(ptr),
                    code
                )
            }

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
        shaders.put(shader.id, new WebGLCompiledShader(shader, programPtr))
    }

    override def destroyShader(shader: Shader): Unit = {
        val ptr = shaders.get(shader.id)

        if(ptr != null) {
            gl.deleteProgram(ptr.ptr)
            shaders.remove(shader.id)
        }
    }

    override def bindShader(shader: Shader): Unit = {
        if(boundShader == shader.id) {
            return
        }

        val obj = shaders.get(shader.id)
        if(obj == null) {
            return
        }

        boundShader = shader.id
        gl.useProgram(obj.ptr)

        obj.boundTextures.forEach((s, t) => {
            bindTexture(s, t)
        })

        obj.toBindCache.forEach((id, v) => setShaderUniform(shader, id, v))
        obj.toBindCache.clear()

        setShaderUniform(
            shader,
            "frameSize",
            new Uniform2f(
                currentViewportWidth,
                currentViewportHeight
            )
        )
    }

    override def setShaderUniform(shader: Shader, id: String, value: UniformValue): Unit = {
        val obj = shaders.get(shader.id)
        if(obj == null) {
            return
        }

        if(obj.locCache.containsKey(id) && obj.locCache.get(id) == null) {
            return
        }

        // don't update if value is the same
        if(obj.uniformCache.get(id) ?? (_ == value) ? false) {
            return
        }

        val loc = obj.locCache.get(id) ? {
            bindShader(shader)
            gl.getUniformLocation(obj.ptr, id)
        }

        if(loc == null) {
            Game.runtime.debugLog(s"Uniform ${id} not found in ${shader.id}")
        }

        if(!obj.locCache.containsKey(id)) {
            obj.locCache.put(id, loc)
        }

        if(loc == null) {
            return
        }

        if(boundShader != shader.id) {
            obj.toBindCache.put(id, value)
            return
        }

        obj.uniformCache.put(id, value)

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
        shaders.forEach((_, obj) => {
            setShaderUniform(obj.shader, id, value)
        })
    }

    override def createBatch[E <: BatchElement](batch: Batch[E]): Unit = {
        if(batches.containsKey(batch.id)) {
            return
        }

        val shaderPtr = shaders.get(batch.shader.id)
        if(shaderPtr == null) {
            return
        }

        val vao = vaoExt.createVertexArrayOES()
        vaoExt.bindVertexArrayOES(vao)

        val vbo = gl.createBuffer()
        val tbo = gl.createBuffer()
        val ebo = gl.createBuffer()

        batches.put(batch.id, new WebGLBatch(vao, vbo, ebo, tbo))

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

        bindShader(batch.shader)

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
                throw new AttributeNotFoundException(batch.id, d.id)
            }

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

            offset += d.descriptorType.size
        })

        vaoExt.bindVertexArrayOES(null)
    }

    override def destroyBatch[E <: BatchElement](batch: Batch[E]): Unit = {
        val ptr = batches.get(batch.id)

        if(ptr != null) {
            gl.deleteBuffer(ptr.vbo)
            gl.deleteBuffer(ptr.ebo)
            gl.deleteBuffer(ptr.tbo)
            vaoExt.deleteVertexArrayOES(ptr.vao)

            batches.remove(batch.id)
        }
    }

    override def putBatch[E <: BatchElement](batch: Batch[E], elements: List[E]): Unit = {
        val ptr = batches.get(batch.id)
        if(ptr == null) {
            return
        }

        val buffer = new BufferWrapper(new Float32Array(elements.size() * batch.descriptor.count))
        elements.forEach(e => putBuff(buffer, e.data))

        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, ptr.tbo)
        gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, buffer.buff, WebGLRenderingContext.DYNAMIC_DRAW)
    }

    override def putBatchElement[E <: BatchElement](batch: Batch[E], index: Int, element: E): Unit = {
        val ptr = batches.get(batch.id)
        if(ptr == null) {
            return
        }

        val buffer = new BufferWrapper(new Float32Array(batch.descriptor.count))
        putBuff(buffer, element.data)

        gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, ptr.tbo)
        gl.bufferSubData(WebGLRenderingContext.ARRAY_BUFFER, index * batch.descriptor.size, buffer.buff)
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
        val ptr = batches.get(batch.id)
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
        if(renderBuffers.containsKey(buffer.id)) {
            return
        }

        val ptr = gl.createFramebuffer()
        renderBuffers.put(buffer.id, ptr)

        bindRenderBuffer(buffer)

        gl.framebufferTexture2D(
            WebGLRenderingContext.FRAMEBUFFER,
            WebGLRenderingContext.COLOR_ATTACHMENT0,
            buffer.textureType.id,
            textures.get(buffer.id),
            0
        )

        gl.framebufferTexture2D(
            WebGLRenderingContext.FRAMEBUFFER,
            WebGLRenderingContext.DEPTH_ATTACHMENT,
            buffer.depthTex.textureType.id,
            textures.get(buffer.depthTex.id),
            0
        )

        if(gl.checkFramebufferStatus(WebGLRenderingContext.FRAMEBUFFER) != WebGLRenderingContext.FRAMEBUFFER_COMPLETE) {
            throw new RenderBufferCreateException(buffer.id)
        }
    }

    override def destroyRenderBuffer(buffer: RenderBuffer): Unit = {
        val ptr = renderBuffers.get(buffer.id)
        if(ptr == null) {
            return
        }

        if(boundFramebuffer == buffer.id) {
            unbindRenderBuffer()
        }

        gl.deleteFramebuffer(ptr)
        renderBuffers.remove(buffer.id)
    }

    override def bindRenderBuffer(buffer: RenderBuffer): Unit = {
        if(boundFramebuffer == buffer.id) {
            return
        }

        val ptr = renderBuffers.get(buffer.id)
        if(ptr == null) {
            return
        }

        gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, ptr)
        setViewport(buffer.width, buffer.height)

        boundFramebuffer = buffer.id
    }

    override def unbindRenderBuffer(): Unit = {
        if(!boundFramebuffer.isEmpty) {
            boundFramebuffer = ""

            gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null)
            setViewport(Renderer.width, Renderer.height)
        }
    }

    override def clearRenderBuffer(buffer: RenderBuffer): Unit = {
        bindRenderBuffer(buffer)
        gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT)
    }

    override def setViewport(width: Int, height: Int): Unit = {
        if(width != currentViewportWidth || height != currentViewportHeight) {
            currentViewportWidth = width
            currentViewportHeight = height

            gl.viewport(0, 0, width, height)
        }
    }
}

object WebGLRenderer {
    private val GL_FALSE = js.Any.fromBoolean(false)
}

class WebGLCompiledShader(val shader: Shader, val ptr: WebGLProgram) {
    val locCache = new HashMap[String, WebGLUniformLocation]()
    val uniformCache = new HashMap[String, UniformValue]()
    val toBindCache = new HashMap[String, UniformValue]()
    val boundTextures = new HashMap[TextureSlot, Texture]()
}

class WebGLBatch(
    val vao: WebGLVertexArrayObjectOES,
    val vbo: WebGLBuffer,
    val ebo: WebGLBuffer,
    val tbo: WebGLBuffer
)

class ExtensionNotAvailableException(ext: String) extends
    RuntimeException(s"WebGL extension ${ext} not found")