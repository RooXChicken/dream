package org.loveroo.webgl

import org.loveroo.webgl.engine.data.Translator
import org.loveroo.webgl.engine.data.resource.ResourceLoader
import org.loveroo.webgl.engine.input.Input
import org.loveroo.webgl.engine.render.{ImageTexture, Renderer}
import org.loveroo.webgl.engine.render.impl.WebGLRenderer
import org.loveroo.webgl.engine.runtime.EngineRuntime
import org.loveroo.webgl.engine.runtime.impl.WebEngineRuntime
import org.loveroo.webgl.game.scene.World
import org.scalajs.dom
import org.scalajs.dom.{HTMLCanvasElement, WebGLRenderingContext}

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

    def run(delta: Double): Unit = {
        scene.update()
        scene.render(delta)

        renderer.render(delta)
        dom.window.requestAnimationFrame(run)
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
}