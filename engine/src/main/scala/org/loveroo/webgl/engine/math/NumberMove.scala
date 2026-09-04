package org.loveroo.webgl.engine.math

import java.lang.Math

object NumberMove {
    def moveTowardCapped(value: Float, target: Float, amount: Float): Float = {
        val ahead = (target > value)
        val newValue = value + ahead.evaluate(amount, -amount)

        ahead.evaluate(
            Math.min(newValue, target),
            Math.max(newValue, target)
        ).toFloat
    }

    def moveToward(value: Float, target: Float, amount: Float): Float = {
        if(amount > 0) {
            value + Math.min(amount, Math.max(0, target - value)).toFloat
        }
        else {
            value - Math.min(-amount, Math.max(0, value - target)).toFloat
        }
    }
}
