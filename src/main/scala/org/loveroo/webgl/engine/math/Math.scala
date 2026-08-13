package org.loveroo.webgl.engine.math

import scala.scalajs.js.Math

extension (math: Math.type) {
    inline def clamp(value: Double, min: Double, max: Double): Double =
        Math.min(max, Math.max(min, value))

    inline def toRadians(degrees: Double): Double =
        degrees * _Math.toRad
}

object _Math {
    val toRad: Double = Math.PI / 180.0
}