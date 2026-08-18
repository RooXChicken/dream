package org.loveroo.webgl.engine.render.data

import java.util.List
import org.loveroo.predef.ListUtil

class TextureSlot private (val id: Int) {
    override def hashCode(): Int = id
}

object TextureSlot {
    val None = new TextureSlot(-1)

    val One = new TextureSlot(0)
    val Two = new TextureSlot(1)
    val Three = new TextureSlot(2)
    val Four = new TextureSlot(3)

    val slots: List[TextureSlot] = ListUtil.of(
        None,
        One,
        Two,
        Three,
        Four
    )
}