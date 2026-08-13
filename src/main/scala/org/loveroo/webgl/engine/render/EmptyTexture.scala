package org.loveroo.webgl.engine.render

import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.render.data.{ColorFormat, TextureType}
import org.scalajs.dom.Image

class EmptyTexture(
    id: String,
    colorFormat: ColorFormat,
    textureType: TextureType,
    val width: Int,
    val height: Int
) extends Texture(
    id,
    colorFormat,
    textureType
) {
    create()

    override protected def create(): Unit = {
        super.create()
        postCreate()
    }
}
