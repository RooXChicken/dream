package org.loveroo.webgl.engine.font

import org.loveroo.webgl.engine.math.Vec2f

import java.util

class GlyphManager {
    private val glyphs = new util.HashMap[String, Glyph]()
    private var index = 0

    def submit(character: String, glyph: Glyph): GlyphManager = {
        glyph.index = index
        index += 1

        glyphs.put(character, glyph)

        this
    }

    def calculateUV(
        atlasWidth: Int,
        maxGlyphWidth: Int,
        maxGlyphHeight: Int
    ): Unit = {
        glyphs.forEach((_, g) => {
            g.uv.x = (g.index * maxGlyphWidth) % atlasWidth
            g.uv.y = (g.index / maxGlyphWidth) * maxGlyphHeight
        })
    }

    @Null
    def glyphFor(character: String): Glyph = {
        glyphs.get(character)
    }
}

class Glyph(
    val width: Int,
    val height: Int,
    val offsetX: Int,
    val offsetY: Int
) {
    private[font] var index = -1
    val uv = new Vec2f()
}