package org.loveroo.webgl.engine.render.data

class ColorFormat(
    val internalFormat: Int,
    val dataType: Int,
    val format: Int
)

abstract class ColorFormats {
    val RGBA8F: ColorFormat
    val Depth: ColorFormat
}