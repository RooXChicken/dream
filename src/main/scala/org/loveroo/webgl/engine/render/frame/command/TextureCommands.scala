package org.loveroo.webgl.engine.render.frame.command

import java.util.List
import org.loveroo.webgl.engine.render.{Renderer, Texture}
import org.loveroo.webgl.engine.render.data.TextureSlot

class CreateTextureCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.createTexture(data.get(0).as[Texture])
    }
}

class DestroyTextureCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.destroyTexture(data.get(0).as[Texture])
    }
}

class BindTextureCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.bindTexture(data.get(0).as[TextureSlot], data.get(1).as[Texture])
    }
}