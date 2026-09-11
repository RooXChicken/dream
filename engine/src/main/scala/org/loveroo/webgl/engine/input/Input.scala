package org.loveroo.webgl.engine.input

import org.loveroo.webgl.engine.math.{Vec2f, Vec2i}

trait Input {
    val buttons: Buttons

    def isButtonPressed(button: Button): Boolean = buttonStrength(button) >= 1.0f
    def isButtonReleased(button: Button): Boolean = buttonStrength(button) <= 0.0f
    def mousePos: Vec2i

    def buttonStrength(button: Button): Float

    def getCombinedAxis(vertical: Axis, horizontal: Axis, out: Vec2f = new Vec2f()): Vec2f = {
        out.x = getAxis(horizontal)
        out.y = getAxis(vertical)

        out
    }

    def getAxis(axis: Axis): Float =
        buttonStrength(axis.pos) + (buttonStrength(axis.neg) * -1)
}

object Input {
    @Null
    private var _buttons: Buttons = null

    def buttons: Buttons = _buttons

    def initButtons(input: Input): Unit = {
        _buttons = input.buttons
    }
}