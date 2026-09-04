package org.loveroo.webgl.engine.input

class Axis(val pos: Button, val neg: Button)

object Axis {
    val leftVertical = new Axis(Input.buttons.moveUp, Input.buttons.moveDown)
    val leftHorizontal = new Axis(Input.buttons.moveRight, Input.buttons.moveLeft)
}
