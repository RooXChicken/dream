package org.loveroo.webgl.engine.font

import org.loveroo.predef.ListUtil
import org.loveroo.webgl.engine.data.resource.Resource
import org.loveroo.webgl.engine.math.Vec2f
import org.loveroo.webgl.engine.render.RenderBuffer
import org.loveroo.webgl.engine.render.batch.{Batch, BatchDescriptor, BatchElement, Descriptor, DescriptorType, ElementData}
import org.loveroo.webgl.engine.render.data.TextureSlot
import org.loveroo.webgl.engine.render.shader.{Shader, Uniform}
import org.loveroo.webgl.engine.render.texture.{ImageTexture, Texture}
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER
import org.loveroo.webgl.engine.runtime.Renderer

import java.util

class Font(
    val id: String,
    atlasWidth: Int,
    atlasHeight: Int,
    val maxGlyphWidth: Int,
    val maxGlyphHeight: Int,
    private val glyphs: GlyphManager
) extends Resource[Font] {
    private val atlas = new ImageTexture(s"font/${id}", atlasWidth, atlasHeight)

    private val batch = new Batch[GlyphElement](
        s"font_${id}",
        new Shader("font"),
        new BatchDescriptor(ListUtil.of(
            new Descriptor("glyphPos", DescriptorType.Vec2f),
            new Descriptor("glyphUV", DescriptorType.Vec2f),
            new Descriptor("glyphSize", DescriptorType.Vec2f)
        ))
    )

    atlas.onLoad(_ => {
        batch.shader.setUniform("tex", Uniform.texture(TextureSlot.One, atlas))
        batch.shader.setUniform("atlasSize", Uniform.vec2(atlas.width, atlas.height))
        batch.onLoad(_ => create())
    })

    override protected def create(): Unit = {
        glyphs.calculateUV(atlas.width, atlas.height, maxGlyphWidth, maxGlyphHeight)
        postCreate()
    }

    def renderText(
        text: String,
        _maxLength: Int = 255
    ): Texture = {
        val maxLength = _maxLength - maxGlyphWidth

        var width = 0
        var height = maxGlyphHeight

        var x = 0
        var y = maxGlyphHeight

        val chars = new util.ArrayList[GlyphElement](text.length)

        // calculate size
        loopChars(text, c => {
            val glyph = glyphs.glyphFor(c)

            // a i a
            val xInc = glyph.width + 1
            width += xInc

            if(x >= maxLength) {
                val yInc = maxGlyphHeight * (width / maxLength)
                width = maxLength
                height += yInc
                y += yInc

                x = 0
            }

            chars.add(new GlyphElement(
                new Vec2f(x, y),
                glyph.uv,
                new Vec2f(maxGlyphWidth, maxGlyphHeight)
            ))

            x += xInc
        })

        batch.putBatch(chars)

        val tex = new RenderBuffer(
            s"${id}_text",
            Renderer.colorFormats.RGBA8F,
            width,
            height
        )

        tex.onLoad(_ => {
            tex.bindBuffer()
            batch.render(0.0)
        })

        tex.renderTex
    }

    private def loopChars(text: String, func: String => Unit): Unit = {
        var index = 0

        while(index < text.length) {
            func(text.substring(index, index + 1))
            index += 1
        }
    }

    override def destroy(): Unit = {

    }
}

class GlyphElement(pos: Vec2f, uv: Vec2f, size: Vec2f) extends BatchElement {
    override val data: util.List[_ <: ElementData] = ListUtil.of(
        ElementData.vec2f(pos.x, pos.y),
        ElementData.vec2f(uv.x, uv.y),
        ElementData.vec2f(size.x.toByte, size.y.toByte),
    )
}