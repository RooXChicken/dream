package org.loveroo.webgl.engine.render

import org.loveroo.predef.Either
import org.loveroo.webgl.engine.data.DataReader
import org.loveroo.webgl.engine.render.command.Command
import org.loveroo.webgl.engine.render.data.{ColorFormats, TextureTypes}
import org.loveroo.webgl.engine.render.shader.Uniform
import org.loveroo.webgl.engine.runtime.EngineRuntime

import java.util.HashMap
import scala.util.matching.Regex

trait Renderer {
    def render(reader: DataReader): Unit

    def enableDepthTest(): Unit
    def disableDepthTest(): Unit

    def createTexture(
        id: String,
        internalFormat: Int,
        format: Int,
        dataType: Int,
        textureType: Int,
        hasData: Boolean,
        data: Either[String, (Int, Int)]
    ): Unit

    def destroyTexture(id: String): Unit

    def activateSlot(slot: Int): Unit
    def bindTexture(slot: Int, id: String): Unit

    def createShader(id: String, vshSource: String, fshSource: String): Unit
    def destroyShader(id: String): Unit

    def bindShader(id: String, init: Boolean): Unit
    def setShaderUniform(id: String, uniformId: String, reader: DataReader): Boolean
    def setShaderUniformGlobal(uniformId: String, reader: DataReader): Unit

    def createBatch(id: String, shaderId: String, reader: DataReader): Unit
    def destroyBatch(id: String): Unit

    def putBatch(id: String, reader: DataReader): Unit
    def putBatchElement(id: String, index: Int, reader: DataReader): Unit
    def renderBatch(id: String): Unit

    def createRenderBuffer(id: String, renderTexId: String, depthTexId: String, width: Int, height: Int): Unit
    def destroyRenderBuffer(id: String): Unit

    def bindRenderBuffer(id: String): Unit
    def unbindRenderBuffer(): Unit
    def clearRenderBuffer(id: String): Unit

    def setViewport(width: Int, height: Int): Unit
}