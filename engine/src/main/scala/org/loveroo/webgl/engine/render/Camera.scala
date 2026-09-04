package org.loveroo.webgl.engine.render

import org.loveroo.webgl.engine.math.{Lerp, Vec2f, Vec2i}
import org.loveroo.webgl.engine.render.shader.Uniform
import org.loveroo.webgl.engine.runtime.Renderer

import java.lang.Math

class Camera(
    private var _pos: Vec2f,
    private var _zoom: Float
) {
    private var _previousPos: Vec2f = pos
    def previousPos: Vec2f = _previousPos

    def pos: Vec2f = _pos
    def pos_=(value: Vec2f): Unit = {
        _previousPos = pos
        _pos = value
    }

    def zoom: Float = _zoom
    def zoom_=(value: Float): Unit = {
        _zoom = value
    }

    def lerp(delta: Double): Unit = {
        val blendX = Lerp.lerp(delta, previousPos.x, pos.x, order = false)
        val blendY = Lerp.lerp(delta, previousPos.y, pos.y, order = false)

        Renderer.setUniformGlobal("camera", Uniform.vec4(
            Math.round(blendX).toFloat,
            Math.round(blendY).toFloat,
            (Camera.sizeX / 2.0f) / zoom,
            (Camera.sizeY / 2.0f) / zoom
        ))
    }
}

object Camera {
    val sizeX = 320
    val sizeY = 180

    val size = new Vec2i(sizeX, sizeY)
    val center = new Vec2f(sizeX / 2.0f, sizeY / 2.0f)
}