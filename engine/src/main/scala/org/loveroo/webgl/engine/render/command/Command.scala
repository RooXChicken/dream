package org.loveroo.webgl.engine.render.command

import org.loveroo.webgl.engine.data.DataReader

import java.util.List
import org.loveroo.webgl.engine.render.Renderer
import org.loveroo.webgl.engine.data.DataReader
import org.loveroo.webgl.util.{Enum, EnumEntry}

trait Command extends EnumEntry {
    type Values = Any
    def execute(reader: DataReader, renderer: Renderer): Unit
}

//@JSExportTopLevel(name = "Command", moduleID = "render")
object Command extends Enum[Command] {
    val DepthTest: Entry = register("depth_test", new DepthTestCommand())

    val CreateTexture: Entry = register("create_texture", new CreateTextureCommand())
    val DestroyTexture: Entry = register("destroy_texture", new DestroyTextureCommand())
    val BindTexture: Entry = register("bind_texture", new BindTextureCommand())

    val CreateShader: Entry = register("create_shader", new CreateShaderCommand())
    val DestroyShader: Entry = register("destroy_shader", new DestroyShaderCommand())
    val BindShader: Entry = register("bind_shader", new BindShaderCommand())
    val SetShaderUniform: Entry = register("set_shader_uniform", new SetShaderUniformCommand())
    val SetShaderUniformGlobal: Entry = register("set_shader_uniform_global", new SetShaderUniformGlobalCommand())

    val CreateBatch: Entry = register("create_batch", new CreateBatchCommand())
    val DestroyBatch: Entry = register("destroy_batch", new DestroyBatchCommand())
    val PutBatch: Entry = register("put_batch", new PutBatchCommand())
    val PutBatchElement: Entry = register("put_batch_element", new PutBatchElementCommand())
    val RenderBatch: Entry = register("render_batch", new RenderBatchCommand())

    val BindRenderBuffer: Entry = register("bind_render_buffer", new BindRenderBufferCommand())
    val ClearRenderBuffer: Entry = register("clear_render_buffer", new ClearRenderBufferCommand())
    val CreateRenderBuffer: Entry = register("create_render_buffer", new CreateRenderBufferCommand())
    val DestroyRenderBuffer: Entry = register("destroy_render_buffer", new DestroyRenderBufferCommand())
    val UnbindRenderBuffer: Entry = register("unbind_render_buffer", new UnbindRenderBufferCommand())
}