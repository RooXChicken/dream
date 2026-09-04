package org.loveroo.webgl.engine.render.command

import java.util.List
import org.loveroo.webgl.engine.render.Renderer
import org.loveroo.webgl.engine.data.DataReader

class DepthTestCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        if(reader.boolean()) {
            renderer.enableDepthTest()
        }
        else {
            renderer.disableDepthTest()
        }
    }
}
