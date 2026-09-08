package org.loveroo.webgl

import org.loveroo.webgl.engine.data.Uint8DataReader
import org.loveroo.webgl.engine.render.WebGLRenderer
import org.loveroo.webgl.engine.data.DataReader
import org.loveroo.webgl.engine.runtime.input.WebInputEvents
import org.loveroo.webgl.engine.runtime.{EngineRuntime, GameTask, WebEngineRuntime, WebGameTask}
import org.scalajs.dom
import org.scalajs.dom.{HTMLCanvasElement, WebGLRenderingContext}

import scala.scalajs.js
import scala.scalajs.js.Date
import scala.scalajs.js.typedarray.Uint8Array

object Dream {
    def time: Double = Date.now()

    // scala.Unit cuz stupid
    def main(): scala.Unit = {
        if(EngineRuntime.debug) {
            // add spector webgl debugger
            js.eval(
                """
                    var newScript = document.createElement("script")
                    newScript.onload = function() {
                        var spector = new SPECTOR.Spector()
                        spector.displayUI()
                    }

                    document.head.appendChild(newScript)
                    newScript.src = "lib/spector.js"
                """
            )
        }

        val document = dom.document

        val inputEvents = new WebInputEvents()

        var renderer: WebGLRenderer = null
        var gameTask: GameTask = null

        gameTask = new WebGameTask(msg => {
            msg.message match {
                case GameTask.gameInit => {
                    gameTask.postInit()
                    gameTask.tick(inputEvents.writeChanges())
                }

                case GameTask.framePrepared => {
                    val buff = msg.buffer

                    if(renderer.gameTickComplete(new Uint8DataReader(buff))) {
                        gameTask.tick(inputEvents.writeChanges())
                    }
                }

                case _ => {}
            }
        })

        renderer = new WebGLRenderer(
            document.getElementById("gl_canvas").as[HTMLCanvasElement]
                .getContext("webgl").as[WebGLRenderingContext],
            () => gameTask.tick(inputEvents.writeChanges())
        )

        gameTask.init()
    }
}
