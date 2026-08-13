package org.loveroo.webgl.engine.render.impl

import org.loveroo.webgl.engine.render.data.{TextureType, TextureTypes}
import org.scalajs.dom.WebGLRenderingContext

class WebGLTextureTypes extends TextureTypes {
    override val Texture2D: TextureType = new TextureType(WebGLRenderingContext.TEXTURE_2D)
}
