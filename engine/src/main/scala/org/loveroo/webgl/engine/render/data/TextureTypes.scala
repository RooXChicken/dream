package org.loveroo.webgl.engine.render.data

import org.loveroo.webgl.util.{Enum, EnumEntry}

class TextureType(
    val id: Int
) extends EnumEntry

abstract class TextureTypes extends Enum[TextureType] {
    val Texture2D: Entry
}
