package org.loveroo.webgl.engine.render.data

import org.loveroo.webgl.util.{Enum, EnumEntry}

class ColorFormat(
    val internalFormat: Int,
    val dataType: Int,
    val format: Int
) extends EnumEntry

abstract class ColorFormats extends Enum[ColorFormat] {
    val RGBA8F: Entry
    val Depth: Entry
}