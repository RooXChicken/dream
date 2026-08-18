package org.loveroo.webgl.engine.render

import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.data.resource.Resource
import org.loveroo.webgl.engine.render.data.ColorFormat
import org.loveroo.webgl.engine.render.frame.command.Command
import scala.{Exception, RuntimeException}

class RenderBuffer(
    val id: String,
    val format: ColorFormat,
    val width: Int,
    val height: Int
) extends Resource[RenderBuffer] {
    @Null
    private var _renderTex: Texture = _
    def renderTex: Texture = _renderTex

    @Null
    private var _depthTex: Texture = _
    def depthTex: Texture = _depthTex

    create()

    override protected def create(): Unit = {
        _depthTex = new EmptyTexture(
            id + "$depth",
            Renderer.colorFormats.Depth,
            Renderer.textureTypes.Texture2D,
            width,
            height
        )

        _renderTex = new EmptyTexture(
            id + "$render",
            format,
            Renderer.textureTypes.Texture2D,
            width,
            height
        )

        def creationCompleted(): Unit = {
            Game.runtime.newCommand(c => {
                c.command = Command.CreateRenderBuffer
                c.write(this)
            })

            postCreate()
        }

        // delay creation until these have fully loaded
        renderTex.onLoad(_ => {
            if(depthTex.loaded) {
                creationCompleted()
            }
        })

        depthTex.onLoad(_ => {
            if(renderTex.loaded) {
                creationCompleted()
            }
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
        renderTex.destroy()
        depthTex.destroy()

        Game.runtime.newCommand(c => {
            c.command = Command.DestroyRenderBuffer
            c.write(this)
        })
    }
}

class RenderBufferCreateException(id: String) extends
    Exception(s"Failed to create render buffer ${id}")