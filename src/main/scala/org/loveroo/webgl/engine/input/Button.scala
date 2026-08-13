package org.loveroo.webgl.engine.input

class Button(val location: Int)

abstract class Buttons {
    val moveUp: Button
    val moveDown: Button
    val moveLeft: Button
    val moveRight: Button

    val jump: Button

    val debugMode: Button
    val debugShowNormal: Button
    val debugShowPosition: Button
    val debugShowWorldPosition: Button
}