package org.loveroo.webgl.engine.render

import org.loveroo.webgl.engine.render.data.{TextureType, TextureTypes}
import org.scalajs.dom.WebGLRenderingContext

class WebGLTextureTypes extends TextureTypes {
    override val Texture2D: Entry = register(
        "texture_2d",
        new TextureType(WebGLRenderingContext.TEXTURE_2D)
    )
}
