package org.loveroo.webgl.engine.render

import java.util.{HashMap, List}
import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.render.batch.{Batch, BatchElement}
import org.loveroo.webgl.engine.render.data.{ColorFormats, TextureSlot, TextureTypes}
import org.loveroo.webgl.engine.render.frame.command.{Command, DepthTestCommand}
import org.loveroo.webgl.game.world.{BlockType, Chunk, ChunkMap}
import scala.util.matching.Regex

trait Renderer {
    val textureTypes: TextureTypes
    val colorFormats: ColorFormats

    def render(): Unit

    def enableDepthTest(): Unit
    def disableDepthTest(): Unit

    def createTexture(texture: Texture): Unit
    def destroyTexture(texture: Texture): Unit

    def activateSlot(slot: TextureSlot): Unit
    def bindTexture(slot: TextureSlot, texture: Texture): Unit

    def createShader(shader: Shader): Unit
    def destroyShader(shader: Shader): Unit

    def bindShader(shader: Shader, init: Boolean): Unit
    def setShaderUniform(shader: Shader, id: String, value: UniformValue): Unit
    def setShaderUniformGlobal(id: String, value: UniformValue): Unit

    def createBatch[E <: BatchElement](batch: Batch[E]): Unit
    def destroyBatch[E <: BatchElement](batch: Batch[E]): Unit

    def putBatch[E <: BatchElement](batch: Batch[E], elements: List[E]): Unit
    def putBatchElement[E <: BatchElement](batch: Batch[E], index: Int, element: E): Unit
    def renderBatch[E <: BatchElement](batch: Batch[E]): Unit

    def createRenderBuffer(buffer: RenderBuffer): Unit
    def destroyRenderBuffer(buffer: RenderBuffer): Unit

    def bindRenderBuffer(buffer: RenderBuffer): Unit
    def unbindRenderBuffer(): Unit
    def clearRenderBuffer(buffer: RenderBuffer): Unit

    def setViewport(width: Int, height: Int): Unit
}

object Renderer {
    @Null
    private var _textureTypes: TextureTypes = null

    @Null
    private var _colorFormats: ColorFormats = null

    private var _width = 0
    private var _height = 0

    def textureTypes: TextureTypes = _textureTypes
    def colorFormats: ColorFormats = _colorFormats

    def width: Int = _width
    def height: Int = _height

    val constantsRegex = new Regex("#const \"(.+)\"")
    val constants = new HashMap[String, UniformValue]()

    constants.put("chunkXSize", new FloatUniform(Chunk.chunkSizeX))
    constants.put("chunkZSize", new FloatUniform(Chunk.chunkSizeZ))

    constants.put("atlasRowAmount", new FloatUniform(16.0f))

    constants.put("blockSize", new FloatUniform(Chunk.blockSize))
    constants.put("blockPixelSize", new FloatUniform(Chunk.blockPixelSize))
    constants.put("blockDepthPixelSize", new FloatUniform(Chunk.blockDepthPixelSize))

    constants.put("distance", new FloatUniform(ChunkMap.distance))
    constants.put("depthDiv", new FloatUniform(63553.0f))
    constants.put("airBlockOrdinal", new FloatUniform(BlockType.Air.ordinal))

    constants.put("worldSize", new Uniform3f(
        Chunk.chunkSizeX * ChunkMap.distance * Chunk.blockDepthPixelSize,
        Chunk.chunkSizeY * Chunk.blockDepthPixelSize,
        Chunk.chunkSizeZ * ChunkMap.distance * Chunk.blockDepthPixelSize
    ))

    def initRenderer(renderer: Renderer, width: Int, height: Int): Unit = {
        _textureTypes = renderer.textureTypes
        _colorFormats = renderer.colorFormats

        _width = width
        _height = height
    }

    def enableDepthTest(): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.DepthTest
            c.write(true)
        })
    }

    def disableDepthTest(): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.DepthTest
            c.write(false)
        })
    }

    def unbindRenderBuffer(): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.UnbindRenderBuffer
        })
    }

    def setUniformGlobal(id: String, value: UniformValue): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.SetShaderUniformGlobal

            c.write(id)
            c.write(value)
        })
    }
}