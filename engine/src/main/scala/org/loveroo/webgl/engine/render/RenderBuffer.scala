package org.loveroo.webgl.engine.render

import org.loveroo.webgl.engine.data.resource.Resource
import org.loveroo.webgl.engine.render.command.Command
import org.loveroo.webgl.engine.render.data.ColorFormat
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER
import org.loveroo.webgl.engine.runtime.Renderer

import scala.Exception

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
            ER.submit(Command.CreateRenderBuffer, w => {
                w.string(id)

                w.string(_renderTex.id)
                w.string(_depthTex.id)

                w.int(width)
                w.int(height)
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
        ER.submit(Command.BindRenderBuffer, w => {
            w.string(id)
        })

        if(clear) {
            this.clear()
        }
    }

    def clear(): Unit = {
        ER.submit(Command.ClearRenderBuffer, w => {
            w.string(id)
        })
    }

    override def destroy(): Unit = {
        renderTex.destroy()
        depthTex.destroy()

        ER.submit(Command.DestroyRenderBuffer, w => {
            w.string(id)
        })
    }
}

class RenderBufferCreateException(id: String) extends
    Exception(s"Failed to create render buffer ${id}")