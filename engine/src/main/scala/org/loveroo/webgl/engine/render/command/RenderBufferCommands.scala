package org.loveroo.webgl.engine.render.command

import org.loveroo.webgl.engine.data.DataReader
import org.loveroo.webgl.engine.render.Renderer

import java.util.List

class BindRenderBufferCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        renderer.bindRenderBuffer(id)
    }
}

class ClearRenderBufferCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        renderer.clearRenderBuffer(id)
    }
}

class CreateRenderBufferCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()

        val renderTexId = reader.string()
        val depthTexId = reader.string()

        val width = reader.int()
        val height = reader.int()

        renderer.createRenderBuffer(id, renderTexId, depthTexId, width, height)
    }
}

class DestroyRenderBufferCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        renderer.destroyRenderBuffer(id)
    }
}

class UnbindRenderBufferCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        renderer.unbindRenderBuffer()
    }
}