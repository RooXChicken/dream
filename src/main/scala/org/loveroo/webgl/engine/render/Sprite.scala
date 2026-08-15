package org.loveroo.webgl.engine.render

import java.util.List
import org.loveroo.predef.ListUtil
import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.math.{Vec2f, Vec3f}
import org.loveroo.webgl.engine.render.batch.{Batch, BatchDescriptor, BatchElement, Descriptor, DescriptorType, ElementData, FloatElementData, Vec2ElementData, Vec3ElementData}
import org.loveroo.webgl.engine.render.data.TextureSlot

class Sprite(
    val texture: Texture,
    shader: Shader,
    private val _pos: Vec3f = new Vec3f(),
    private val _scale: Vec2f = new Vec2f(1.0f, 1.0f)
) extends Batch[BatchElement](
    texture.id,
    shader,
    new BatchDescriptor(ListUtil.of())
) {
    def this(id: String) = {
        this(
            new ImageTexture(id),
            new Shader(id)
        )
    }

    override def count: Int = 1

    def pos: Vec3f = _pos
    def pos_=(value: Vec3f): Unit = {
        _pos.set(value)
        updatePos()
    }

    def scale: Vec2f = _scale
    def scale_=(value: Vec2f): Unit = {
        _scale.set(value)
        updateScale()
    }

    private def updatePos(): Unit = {
        shader.setUniform("pos", new Uniform3f(pos.x, pos.y, pos.z))
    }

    private def updateScale(): Unit = {
        shader.setUniform("scale", new Uniform2f(scale.x * texture.width, scale.y * texture.height))
    }

    override protected def create(): Unit = {
        super.create()

        texture.onLoad(_ => {
            updatePos()
            updateScale()

            shader.setUniform("tex", new TextureUniform(TextureSlot.One, texture))
        })
    }

    override def render(delta: Double): Unit = {
        if(texture.loaded) {
            super.render(delta)
        }
    }

    override def destroy(): Unit = {
        texture.destroy()
        super.destroy()
    }
}