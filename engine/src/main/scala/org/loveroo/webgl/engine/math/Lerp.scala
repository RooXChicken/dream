package org.loveroo.webgl.engine.math

import java.lang.Math

object Lerp {
    def lerp(amount: Double, start: Double, end: Double, order: Boolean = true, clamp: Boolean = true): Double = {
        val max = order.evaluate(Math.max(start, end), end)
        val min = order.evaluate(Math.min(start, end), start)

        ((clamp.evaluate(Math.clamp(amount, 0, 1.0), amount) * (max - min)) + min)
    }

    def unlerp(value: Double, start: Double, end: Double, clamp: Boolean = true): Double = {
        val max = Math.max(start, end)
        val min = Math.min(start, end)

        ((clamp.evaluate(Math.clamp(value, min, max), value) - min) / (max - min))
    }
}
