package org.loveroo.webgl.engine.runtime.input

import java.util.LinkedList
import org.loveroo.webgl.engine.data.{DataReader, JSMap, Uint8DataWriter}
import org.loveroo.webgl.engine.input.{Button, Buttons, Input}
import org.loveroo.webgl.engine.math.{Vec2f, Vec2i}
import org.loveroo.webgl.engine.render.Camera
import org.scalajs.dom

import java.lang.Math
//import org.scalajs.dom
import org.scalajs.dom.{KeyCode, KeyLocation}

import scala.collection.mutable.HashSet

class WebInput extends Input {
    override val buttons: Buttons = new WebButtons()
    private val pressedKeys = new JSMap[Int, AnyRef]()
    val mousePos = new Vec2i()

    Input.initButtons(this)

    // TODO: controller api
    override def buttonStrength(button: Button): Float = {
        pressedKeys.contains(button.location).evaluate(1.0f, 0.0f)
    }

    def handleChanges(data: DataReader): Unit = {
        if(data.boolean()) {
            mousePos.x = Math.round(data.float() * Camera.sizeX)
            mousePos.y = Math.round(data.float() * Camera.sizeY)
        }

        while(data.index < data.size) {
            val keyCode = data.int()
            val pressed = data.boolean()

            if(pressed) {
                if(!pressedKeys.contains(keyCode)) {
                    pressedKeys.put(keyCode, null)
                }
            }
            else {
                pressedKeys.remove(keyCode)
            }
        }
    }
}

class WebInputEvents {
    private val changes = new JSMap[Int, Boolean]()

    private var mouseUpdated = false
    private val mousePos = new Vec2f()

    def writeChanges(): Uint8DataWriter = {
        // rough estimate
        val writer = new Uint8DataWriter((changes.size() * 5) + 9)

        writer.boolean(mouseUpdated)

        if(mouseUpdated) {
            writer.float(mousePos.x)
            writer.float(mousePos.y)
        }

        changes.forEach((k, v) => {
            writer.int(k)
            writer.boolean(v)
        })

        changes.clear()

        writer.writeLength()
        writer
    }

    def mouseEvent(posX: Float, posY: Float): Unit = {
        mouseUpdated = true

        mousePos.x = posX
        mousePos.y = posY
    }

    dom.window.onkeydown = event => {
        changes.put(event.keyCode, true)
    }

    dom.window.onkeyup = event => {
        changes.put(event.keyCode, false)
    }

    dom.window.onmousedown = event => {
        changes.put((event.button == 0).evaluate(-1, -2), true)
    }

    dom.window.onmouseup = event => {
        changes.put((event.button == 0).evaluate(-1, -2), false)
    }

    dom.document.oncontextmenu = _ => false
    dom.document.body.oncontextmenu = _ => false
}

class WebButtons extends Buttons {
    override val moveUp: Button = new Button(KeyCode.W)
    override val moveDown: Button = new Button(KeyCode.S)
    override val moveLeft: Button = new Button(KeyCode.A)
    override val moveRight: Button = new Button(KeyCode.D)
    override val jump: Button = new Button(KeyCode.Space)

    override val attack: Button = new Button(-1) // mouse left
    override val use: Button = new Button(-2) // mouse right

    override val dummy: Button = new Button(KeyCode.E)

    override val debugMode: Button = new Button(KeyCode.F3)
    override val debugShowNormal: Button = new Button(KeyCode.N)
    override val debugShowPosition: Button = new Button(KeyCode.P)
    override val debugShowWorldPosition: Button = new Button(KeyCode.O)
}