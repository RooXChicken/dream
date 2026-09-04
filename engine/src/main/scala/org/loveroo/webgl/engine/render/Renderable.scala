package org.loveroo.webgl.engine.render

trait Renderable {
    def render(delta: Double = 0.0): Unit
}
