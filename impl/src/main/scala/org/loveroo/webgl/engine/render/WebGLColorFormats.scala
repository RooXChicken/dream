package org.loveroo.webgl.engine.render

import org.loveroo.webgl.engine.render.data.{ColorFormat, ColorFormats}
import org.scalajs.dom.WebGLRenderingContext

class WebGLColorFormats extends ColorFormats {
    override val RGBA8F: Entry = register("rgba8f", new ColorFormat(
        WebGLRenderingContext.RGBA,
        WebGLRenderingContext.UNSIGNED_BYTE,
        WebGLRenderingContext.RGBA
    ))

    override val Depth: Entry = register("depth", new ColorFormat(
        WebGLRenderingContext.DEPTH_COMPONENT,
        WebGLRenderingContext.UNSIGNED_SHORT,
        WebGLRenderingContext.DEPTH_COMPONENT
    ))
}
