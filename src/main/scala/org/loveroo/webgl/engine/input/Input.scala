package org.loveroo.webgl.engine.input

import org.loveroo.webgl.engine.math.Vec2f

trait Input {
    val buttons: Buttons

    def isButtonPressed(button: Button): Boolean = buttonStrength(button) >= 1.0f
    def isButtonReleased(button: Button): Boolean = buttonStrength(button) <= 0.0f

    def buttonStrength(button: Button): Float

    def getCombinedAxis(vertical: Axis, horizontal: Axis): Vec2f = new Vec2f(
        getAxis(horizontal),
        getAxis(vertical)
    )

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