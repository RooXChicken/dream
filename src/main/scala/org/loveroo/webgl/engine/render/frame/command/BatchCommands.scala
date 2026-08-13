package org.loveroo.webgl.engine.render.frame.command

import java.util.List
import org.loveroo.webgl.engine.render.Renderer
import org.loveroo.webgl.engine.render.batch.{Batch, BatchElement}

class CreateBatchCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.createBatch(data.get(0).as[Batch[BatchElement]])
    }
}

class DestroyBatchCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.destroyBatch(data.get(0).as[Batch[BatchElement]])
    }
}

class PutBatchCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.putBatch(data.get(0).as[Batch[BatchElement]], data.get(1).as[List[BatchElement]])
    }
}

class PutBatchElementCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.putBatchElement(data.get(0).as[Batch[BatchElement]], data.get(1).as[Int], data.get(2).as[BatchElement])
    }
}

class RenderBatchCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.renderBatch(data.get(0).as[Batch[BatchElement]])
    }
}