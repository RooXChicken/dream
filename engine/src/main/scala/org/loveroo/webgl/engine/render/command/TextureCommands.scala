package org.loveroo.webgl.engine.render.command

import org.loveroo.predef.Either

import java.util.List
import org.loveroo.webgl.engine.render.Renderer
import org.loveroo.webgl.engine.render.data.{ColorFormat, ColorFormats, TextureSlot}
import org.loveroo.webgl.engine.data.DataReader
import org.loveroo.webgl.engine.render.texture.Texture

class CreateTextureCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()

        val internalFormat = reader.int()
        val format = reader.int()
        val dataType = reader.int()

        val textureType = reader.int()

        val width = reader.int()
        val height = reader.int()

        val hasData = reader.boolean()

        val data = hasData.evaluate(
            reader.subReader(reader.int()),
            null
        )

        renderer.createTexture(
            id,
            internalFormat,
            format,
            dataType,
            textureType,
            width,
            height,
            hasData,
            data
        )
    }
}

class DestroyTextureCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        renderer.destroyTexture(id)
    }
}

class BindTextureCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        val slot = reader.byte()

        renderer.bindTexture(slot, id)
    }
}