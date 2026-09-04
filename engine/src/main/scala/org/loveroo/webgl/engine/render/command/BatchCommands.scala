package org.loveroo.webgl.engine.render.command

import org.loveroo.webgl.engine.data.DataReader

import java.util.List
import org.loveroo.webgl.engine.render.Renderer
import org.loveroo.webgl.engine.render.batch.{Batch, BatchElement}

class CreateBatchCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        val shaderId = reader.string()

        renderer.createBatch(id, shaderId, reader)
    }
}

class DestroyBatchCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        renderer.destroyBatch(id)
    }
}

class PutBatchCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        renderer.putBatch(id, reader)
    }
}

class PutBatchElementCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        val index = reader.int()
        renderer.putBatchElement(id, index, reader)
    }
}

class RenderBatchCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        renderer.renderBatch(id)
    }
}