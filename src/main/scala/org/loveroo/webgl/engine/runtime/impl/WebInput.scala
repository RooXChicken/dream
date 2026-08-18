package org.loveroo.webgl.engine.runtime.impl

import java.util.LinkedList
import org.loveroo.webgl.engine.data.JSMap
import org.loveroo.webgl.engine.input.{Button, Buttons, Input}
import org.scalajs.dom
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

    dom.window.onkeydown = event => {
        if(!pressedKeys.contains(event.keyCode)) {
            pressedKeys.put(event.keyCode, null)
        }
    }

    dom.window.onkeyup = event => {
        pressedKeys.remove(event.keyCode)
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