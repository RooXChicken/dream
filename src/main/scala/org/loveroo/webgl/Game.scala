package org.loveroo.webgl

import org.loveroo.webgl.engine.data.Translator
import org.loveroo.webgl.engine.data.resource.ResourceLoader
import org.loveroo.webgl.engine.input.Input
import org.loveroo.webgl.engine.render.{ImageTexture, Renderer}
import org.loveroo.webgl.engine.render.impl.WebGLRenderer
import org.loveroo.webgl.engine.runtime.{BackgroundTask, EngineRuntime, RenderTask}
import org.loveroo.webgl.engine.runtime.impl.{WebBackgroundTask, WebEngineRuntime}
import org.loveroo.webgl.game.scene.World
import org.scalajs.dom
import org.scalajs.dom.{HTMLCanvasElement, WebGLRenderingContext, Worker}
import scala.scalajs.js
import scala.scalajs.js.annotation.JSExport

class Game {
    val runtime = new WebEngineRuntime()
    Game._instance = this

    runtime.newFrame()
    runtime.translator.loadLanguage("english")

    val renderer: Renderer = new WebGLRenderer(
        Runtime.document.getElementById("gl_canvas").as[HTMLCanvasElement]
            .getContext("webgl").as[WebGLRenderingContext]
    )

    val scene = new World()
    scene.init()

    val renderTask = new RenderTask()

    private var isTicking = false
    private var tickQueued = false

    def tick(): Unit = {
        if(isTicking) {
            tickQueued = true
        }
        else {
            tick()
        }
    }

    private def _tick(): Unit = {
        isTicking = true

        scene.update()
        scene.renderScene()

        renderTask.send(Game.frameCompleteMsg)

        isTicking = false

        if(tickQueued) {
            tick()
        }
    }
}

object Game {
    @Null
    private var _instance: Game = null

    def instance: Game = _instance

    def runtime: EngineRuntime = instance.runtime
    def resourceLoader: ResourceLoader = runtime.resourceLoader
    def translator: Translator = runtime.translator
    def input: Input = runtime.input

    val frameCompleteMsg = "frame_complete"
}