package org.loveroo.webgl.engine.render.frame.command

import java.util.List
import org.loveroo.webgl.engine.render.Renderer

trait Command {
    type Values = Any
    def execute(data: List[Values], renderer: Renderer): Unit
}

object Command {
    val DepthTest = new DepthTestCommand()

    val CreateTexture = new CreateTextureCommand()
    val DestroyTexture = new DestroyTextureCommand()
    val BindTexture = new BindTextureCommand()

    val CreateShader = new CreateShaderCommand()
    val DestroyShader = new DestroyShaderCommand()
    val BindShader = new BindShaderCommand()
    val SetShaderUniform = new SetShaderUniformCommand()
    val SetShaderUniformGlobal = new SetShaderUniformGlobalCommand()

    val CreateBatch = new CreateBatchCommand()
    val DestroyBatch = new DestroyBatchCommand()
    val PutBatch = new PutBatchCommand()
    val PutBatchElement = new PutBatchElementCommand()
    val RenderBatch = new RenderBatchCommand()

    val BindRenderBuffer = new BindRenderBufferCommand()
    val ClearRenderBuffer = new ClearRenderBufferCommand()
    val CreateRenderBuffer = new CreateRenderBufferCommand()
    val DestroyRenderBuffer = new DestroyRenderBufferCommand()
    val UnbindRenderBuffer = new UnbindRenderBufferCommand()
}