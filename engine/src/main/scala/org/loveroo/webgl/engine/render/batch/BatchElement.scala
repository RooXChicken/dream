package org.loveroo.webgl.engine.render.batch

import org.loveroo.webgl.engine.data.DataWriter

import java.util.List

abstract class BatchElement {
    val data: List[? <: ElementData]
}

type ElementData = DataWriter => Unit

object ElementData {
    def float(value: Float): ElementData = {
        w => {
            w.float(value)
        }
    }

    def vec2(x: Float, y: Float): ElementData = {
        w => {
            w.float(x)
            w.float(y)
        }
    }

    def vec3(x: Float, y: Float, z: Float): ElementData = {
        w => {
            w.float(x)
            w.float(y)
            w.float(z)
        }
    }

    def vec4(x: Float, y: Float, z: Float, w: Float): ElementData = {
        _w => {
            _w.float(x)
            _w.float(y)
            _w.float(z)
            _w.float(w)
        }
    }
}
