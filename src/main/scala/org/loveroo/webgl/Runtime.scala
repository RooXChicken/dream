package org.loveroo.webgl

import org.loveroo.webgl.engine.math.Noise
import org.scalajs.dom
import org.scalajs.dom.html.Document
import scala.main
import scala.scalajs.js
import scala.scalajs.js.annotation.JSGlobalScope

@main
def main(): Unit = {
    val game = new Game()
    game.run(0.0)
}

object Runtime {
    val document: Document = dom.document
    def time: Double = dom.window.performance.now()
}