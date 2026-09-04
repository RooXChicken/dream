package org.loveroo.webgl.engine.render.command

import org.loveroo.webgl.engine.render.Renderer
import org.loveroo.webgl.engine.data.DataReader

class CreateShaderCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()

        val vsh = reader.string()
        val fsh = reader.string()

        renderer.createShader(id, vsh, fsh)
    }
}

class DestroyShaderCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        renderer.destroyShader(id)
    }
}

class BindShaderCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        val init = reader.boolean()

        renderer.bindShader(id, init)
    }
}

class SetShaderUniformCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val id = reader.string()
        val uniformId = reader.string()

        val index = reader.index
        // didn't read all values
        if(!renderer.setShaderUniform(id, uniformId, reader)) {
            reader.index = index

            // TODO: this is a data type id not a count
            val dataType = reader.byte()
            dataType match {
                case 5 => {
                    reader.index += 1
                    reader.string()
                }

                case _ => reader.index += dataType * 4
            }
        }
    }
}

class SetShaderUniformGlobalCommand extends Command {
    override def execute(reader: DataReader, renderer: Renderer): Unit = {
        val uniformId = reader.string()

        renderer.setShaderUniformGlobal(uniformId, reader)
    }
}
