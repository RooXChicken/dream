package org.loveroo.webgl.engine.runtime.input

import java.util.LinkedList
import org.loveroo.webgl.engine.data.{DataReader, JSMap, Uint8DataWriter}
import org.loveroo.webgl.engine.input.{Button, Buttons, Input}
import org.scalajs.dom
//import org.scalajs.dom
import org.scalajs.dom.{KeyCode, KeyLocation}

import scala.collection.mutable.HashSet

class WebInput extends Input {
    override val buttons: Buttons = new WebButtons()
    private val pressedKeys = new JSMap[Int, AnyRef]()

    Input.initButtons(this)

    // TODO: controller api
    override def buttonStrength(button: Button): Float = {
        pressedKeys.contains(button.location).evaluate(1.0f, 0.0f)
    }

    def handleChanges(data: DataReader): Unit = {
        while(data.index < data.size) {
            val keyCode = data.int().toInt
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

    def writeChanges(): Uint8DataWriter = {
        val writer = new Uint8DataWriter()

        changes.forEach((k, v) => {
            writer.int(k)
            writer.boolean(v)
        })

        changes.clear()
        writer.writeLength()
        writer
    }

    dom.window.onkeydown = event => {
        changes.put(event.keyCode, true)
    }

    dom.window.onkeyup = event => {
        changes.put(event.keyCode, false)
    }
}

class WebButtons extends Buttons {
    override val moveUp: Button = new Button(KeyCode.W)
    override val moveDown: Button = new Button(KeyCode.S)
    override val moveLeft: Button = new Button(KeyCode.A)
    override val moveRight: Button = new Button(KeyCode.D)

    override val jump: Button = new Button(KeyCode.Space)

    override val debugMode: Button = new Button(KeyCode.F3)
    override val debugShowNormal: Button = new Button(KeyCode.N)
    override val debugShowPosition: Button = new Button(KeyCode.P)
    override val debugShowWorldPosition: Button = new Button(KeyCode.O)
}