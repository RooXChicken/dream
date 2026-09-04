package org.loveroo.webgl.engine.render

import org.loveroo.webgl.engine.data.DataWriter
import org.loveroo.webgl.engine.data.resource.Resource
import org.loveroo.webgl.engine.render.command.Command
import org.loveroo.webgl.engine.render.data.{ColorFormat, TextureSlot, TextureType}

import org.loveroo.webgl.engine.runtime.EngineRuntime.ER

abstract class Texture(
    val id: String,
    val colorFormat: ColorFormat,
    val textureType: TextureType
) extends Resource[Texture] {
    def width: Int
    def height: Int

    def bind(slot: TextureSlot = TextureSlot.One): Unit = {
        ER.submit(Command.BindTexture, w => {
            w.string(id)
            w.byte(slot.ordinal.toByte)
        })
    }

    override protected def create(): Unit = {
        ER.submit(Command.CreateTexture, w => {
            w.string(id)
            fillData(w)
        })
    }

    protected def fillData(writer: DataWriter): Unit = {
        writer.int(colorFormat.internalFormat)
        writer.int(colorFormat.format)
        writer.int(colorFormat.dataType)

        writer.int(textureType.id)
    }

    override def destroy(): Unit = {
        ER.submit(Command.DestroyTexture, w => {
            w.string(id)
        })
    }
}
