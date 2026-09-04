package org.loveroo.webgl.engine.render

import org.loveroo.webgl.engine.data.DataWriter
import org.loveroo.webgl.engine.data.resource.ResourceLoader
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER
import org.loveroo.webgl.engine.runtime.Renderer

class ImageTexture(id: String) extends Texture(
    id,
    Renderer.colorFormats.RGBA8F,
    Renderer.textureTypes.Texture2D
) {
    @Null
    private var data: String = null

    private var _width = 0
    private var _height = 0

    override def width: Int = _width
    override def height: Int = _height

    override protected def fillData(writer: DataWriter): Unit = {
        super.fillData(writer)

        writer.boolean(true)
        writer.string(data)
    }

    ER.resourceLoader.loadImage(id, r => {
        _width = r.width
        _height = r.height
        data = r.data

        create()
        postCreate()
    })
}

class ImageTextureResult(val width: Int, val height: Int, val data: String)