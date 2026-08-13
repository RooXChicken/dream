package org.loveroo.webgl.engine.render

import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.data.resource.Resource
import org.loveroo.webgl.engine.render.data.{ColorFormat, TextureSlot, TextureType}
import org.loveroo.webgl.engine.render.frame.command.Command
import scala.scalajs.js.typedarray.Uint8Array

abstract class Texture(
    val id: String,
    val colorFormat: ColorFormat,
    val textureType: TextureType
) extends Resource[Texture] {
    def width: Int
    def height: Int

    def bind(slot: TextureSlot = TextureSlot.One): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.BindTexture

            c.write(slot)
            c.write(this)
        })
    }

    override protected def create(): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.CreateTexture
            c.write(this)
        })
    }

    override def destroy(): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.DestroyTexture
            c.write(this)
        })
    }
}
