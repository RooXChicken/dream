package org.loveroo.webgl.engine.render

import org.loveroo.webgl.engine.data.DataWriter
import org.loveroo.webgl.engine.render.data.{ColorFormat, TextureType}

class EmptyTexture(
    id: String,
    colorFormat: ColorFormat,
    textureType: TextureType,
    private val _width: Int,
    private val _height: Int
) extends Texture(
    id,
    colorFormat,
    textureType
) {
    override def width: Int = _width
    override def height: Int = _height

    create()

    override protected def create(): Unit = {
        super.create()
        postCreate()
    }

    override protected def fillData(writer: DataWriter): Unit = {
        super.fillData(writer)

        writer.boolean(false)

        writer.int(width)
        writer.int(height)
    }
}
