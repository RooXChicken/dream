package org.loveroo.webgl.engine.render.frame.command

import java.util.List
import org.loveroo.webgl.engine.render.{Renderer, Shader, UniformValue}

class CreateShaderCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.createShader(data.get(0).as[Shader])
    }
}

class DestroyShaderCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.destroyShader(data.get(0).as[Shader])
    }
}

class BindShaderCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.bindShader(data.get(0).as[Shader])
    }
}

class SetShaderUniformCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.setShaderUniform(data.get(0).as[Shader], data.get(1).as[String], data.get(2).as[UniformValue])
    }
}

class SetShaderUniformGlobalCommand extends Command {
    override def execute(data: List[Values], renderer: Renderer): Unit = {
        renderer.setShaderUniformGlobal(data.get(0).as[String], data.get(1).as[UniformValue])
    }
}
