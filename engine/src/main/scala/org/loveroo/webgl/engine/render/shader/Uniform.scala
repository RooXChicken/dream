package org.loveroo.webgl.engine.render.shader

import org.loveroo.webgl.engine.data.DataWriter
import org.loveroo.webgl.engine.render.Texture
import org.loveroo.webgl.engine.render.data.TextureSlot

type Uniform = DataWriter => Unit

object Uniform {
    private var ordinal: Byte = 0

    def float(value: Float): Uniform = {
        w => {
            w.byte(1)
            w.float(value)
        }
    }

    def vec2(x: Float, y: Float): Uniform = {
        w => {
            w.byte(2)
            w.float(x)
            w.float(y)
        }
    }

    def vec3(x: Float, y: Float, z: Float): Uniform = {
        w => {
            w.byte(3)
            w.float(x)
            w.float(y)
            w.float(z)
        }
    }

    def vec4(x: Float, y: Float, z: Float, w: Float): Uniform = {
        _w => {
            _w.byte(4)
            _w.float(x)
            _w.float(y)
            _w.float(z)
            _w.float(w)
        }
    }

    def texture(slot: TextureSlot, texture: Texture): Uniform = {
        w => {
            w.byte(5)
            w.byte(slot.id)
            w.string(texture.id)
        }
    }
}

class UniformValue
class UniformFloatValue(val value: Float) extends UniformValue
class UniformVec2Value(val x: Float, val y: Float) extends UniformValue
class UniformVec3Value(val x: Float, val y: Float, val z: Float) extends UniformValue
class UniformVec4Value(val x: Float, val y: Float, val z: Float, val w: Float) extends UniformValue
class UniformTextureValue(val slot: TextureSlot, val texture: Texture) extends UniformValue
