package org.loveroo.webgl.engine.render.data

import org.loveroo.webgl.util.{Enum, EnumEntry}

class TextureSlot private (val id: Byte) extends EnumEntry {
    override def hashCode(): Int = id
}

object TextureSlot extends Enum[TextureSlot] {
    val None: Entry = register("none", new TextureSlot(-1))

    val One: Entry = register("one", new TextureSlot(0))
    val Two: Entry = register("two", new TextureSlot(1))
    val Three: Entry = register("three", new TextureSlot(2))
    val Four: Entry = register("four", new TextureSlot(3))
}