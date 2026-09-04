package org.loveroo.webgl.engine.render.command

import org.loveroo.predef.Either

import java.util.List
import org.loveroo.webgl.engine.render.{Renderer, Texture}
import org.loveroo.webgl.engine.render.data.{ColorFormat, ColorFormats, TextureSlot}
import org.loveroo.webgl.engine.data.DataReader

class CreateTextureCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()

        val internalFormat = reader.int()
        val format = reader.int()
        val dataType = reader.int()

        val textureType = reader.int()

        val hasData = reader.boolean()

        val data = hasData.evaluate(
            Either.left(reader.string()),
            Either.right((reader.int(), reader.int()))
        )

        renderer.createTexture(
            id,
            internalFormat,
            format,
            dataType,
            textureType,
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