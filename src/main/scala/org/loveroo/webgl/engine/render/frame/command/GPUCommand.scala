package org.loveroo.webgl.engine.render.frame.command

import java.util.LinkedList
import org.loveroo.webgl.engine.render.Renderer
import scala.Predef.classOf

class GPUCommand {
    @Null
    var command: Command = null
    private val data = new LinkedList[Any]()

    def clear(): Unit = data.clear()

    def write(element: Any): Unit = {
        data.addLast(element)
    }

    def execute(renderer: Renderer): Unit =
        command.execute(data, renderer)
}
