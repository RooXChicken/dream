package org.loveroo.webgl.engine.render

import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.render.data.ColorFormat
import org.loveroo.webgl.engine.render.frame.command.Command
import scala.{Exception, RuntimeException}

class RenderBuffer(
    id: String,
    format: ColorFormat,
    width: Int,
    height: Int
) extends EmptyTexture(
    id + "$render",
    format,
    Renderer.textureTypes.Texture2D,
    width,
    height
) {
    @Null
    private var _depthTex: Texture = _
    def depthTex: Texture = _depthTex

    override protected def create(): Unit = {
        _depthTex = new EmptyTexture(
            id + "$depth",
            Renderer.colorFormats.Depth,
            Renderer.textureTypes.Texture2D,
            width,
            height
        )

        super.create()

        Game.runtime.newCommand(c => {
            c.command = Command.CreateRenderBuffer
            c.write(this)
        })
    }

    def bindBuffer(clear: Boolean = true): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.BindRenderBuffer
            c.write(this)
        })

        if(clear) {
            this.clear()
        }
    }

    def clear(): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.ClearRenderBuffer
            c.write(this)
        })
    }

    override def destroy(): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.DestroyRenderBuffer
            c.write(this)
        })

        super.destroy()
        depthTex.destroy()
    }
}

class RenderBufferCreateException(id: String) extends
    Exception(s"Failed to create render buffer ${id}")