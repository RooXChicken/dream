package org.loveroo.webgl.engine.render.frame.command

import java.util.List
import org.loveroo.webgl.engine.render.{RenderBuffer, Renderer}

class BindRenderBufferCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.bindRenderBuffer(data.get(0).as[RenderBuffer])
    }
}

class ClearRenderBufferCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.clearRenderBuffer(data.get(0).as[RenderBuffer])
    }
}

class CreateRenderBufferCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.createRenderBuffer(data.get(0).as[RenderBuffer])
    }
}

class DestroyRenderBufferCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.destroyRenderBuffer(data.get(0).as[RenderBuffer])
    }
}

class UnbindRenderBufferCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.unbindRenderBuffer()
    }
}