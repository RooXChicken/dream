package org.loveroo.webgl.engine.render

import org.loveroo.webgl.Game
import org.scalajs.dom
import org.scalajs.dom.Image
import scala.collection.mutable.Buffer
import scala.scalajs.js.typedarray.Uint8Array

class ImageTexture(id: String) extends Texture(
    id,
    Renderer.colorFormats.RGBA8F,
    Renderer.textureTypes.Texture2D
) {
    @Null
    private var _image: Image = null
    def image: Image = _image

    override def width: Int = _image ?? (_.width) ? 0
    override def height: Int = _image ?? (_.height) ? 0

    Game.resourceLoader.loadImage(id, i => {
        _image = i

        create()
        postCreate()
    })
}
