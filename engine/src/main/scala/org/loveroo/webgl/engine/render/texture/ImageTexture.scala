package org.loveroo.webgl.engine.render.texture

import org.loveroo.webgl.engine.data.DataWriter
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER
import org.loveroo.webgl.engine.runtime.Renderer

class ImageTexture(
    id: String,
    val width: Int,
    val height: Int
) extends Texture(
    id,
    Renderer.colorFormats.RGBA8F,
    Renderer.textureTypes.Texture2D
) {
    @Null
    private var data: Array[Short] = null

    override protected def fillData(writer: DataWriter): Unit = {
        super.fillData(writer)

        writer.boolean(true)
        writer.bytes(data)
    }

    ER.resourceLoader.loadImage(id, d => {
        data = d

        create()
        postCreate()
    })
}

class ImageTextureResult(val width: Int, val height: Int, val data: String)