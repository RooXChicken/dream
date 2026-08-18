package org.loveroo.webgl.engine.runtime

import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.runtime.impl.WebBackgroundTask
import scala.scalajs.js
import scala.scalajs.js.PropertyDescriptor
import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel, JSGlobal}

class RenderTask extends WebBackgroundTask {
    def render(): Unit = run("render")

    override def onMessage(msg: String): Unit = {
        msg match {
            case Game.frameCompleteMsg => {
                if(RenderTask.isRendering) {
                    RenderTask.renderQueued = true
                }
                else {
                    render()
                }
            }
        }
    }
}

@JSExportTopLevel(name = "RenderTask", moduleID = "tasks")
object RenderTask {
    val tickGameMsg = "tick_game"

    private var isRendering = false
    private var renderQueued = false

    @JSExport
    def render(): Unit = {
        isRendering = true
        Game.instance.renderer.render()
        isRendering = false

        if(renderQueued) {
            render()
        }
    }
}
