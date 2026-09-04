package org.loveroo.webgl.game

import org.loveroo.webgl.engine.render.Renderable
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER

import java.lang.Math

trait Scene {
    private val targetTimestep = (1.0 / 60.0) * 1000.0
    private val maxLag = targetTimestep * 30

    private var accumulator = 0.0
    private var lastTime = ER.time

    private var _ticks = 0
    def ticks: Int = _ticks

    def init(): Unit = {

    }

    def update(): Unit = {
        val current = ER.time

        accumulator += current - lastTime
        lastTime = current

        if(accumulator >= maxLag) {
            println("Ticking is taking too long!")
            accumulator = maxLag
        }

        while(accumulator >= targetTimestep) {
            accumulator -= targetTimestep
            tick()
        }
    }

    protected def tick(): Unit = {
        _ticks += 1
    }

    def renderScene(): Unit = {
        val delta = Math.min(1.0, accumulator / targetTimestep)
        render(delta)
    }

    def render(delta: Double): Unit
}
