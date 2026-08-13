package org.loveroo.webgl.engine.render.data

class TextureSlot private (val id: Int)

object TextureSlot {
    val None = new TextureSlot(-1)

    val One = new TextureSlot(0)
    val Two = new TextureSlot(1)
    val Three = new TextureSlot(2)
    val Four = new TextureSlot(3)
}