package org.loveroo.webgl

import org.loveroo.webgl.engine.data.{DataWriter, Translator}
import org.loveroo.webgl.engine.data.resource.ResourceLoader
import org.loveroo.webgl.engine.input.Input
import org.loveroo.webgl.engine.render.Renderer
import org.loveroo.webgl.engine.render.texture.ImageTexture
import org.loveroo.webgl.engine.runtime.EngineRuntime
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER
import org.loveroo.webgl.game.scene.World

class Game(val runtime: EngineRuntime) {
    Game._instance = this

    runtime.translator.loadLanguage("english")

    val scene = new World()
    scene.init()

    def tick(): DataWriter = {
        runtime.newFrame()

        scene.update()
        scene.renderScene()

        runtime.endFrame()
    }
}

object Game {
    @Null
    private var _instance: Game = null

    def instance: Game = _instance
}