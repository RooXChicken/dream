package org.loveroo.webgl.engine.render.frame.command

import java.util.List
import org.loveroo.webgl.engine.render.Renderer

class DepthTestCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        if(data.get(0).as[Boolean]) {
            renderer.enableDepthTest()
        }
        else {
            renderer.disableDepthTest()
        }
    }
}
