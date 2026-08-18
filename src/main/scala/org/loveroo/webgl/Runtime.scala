package org.loveroo.webgl

import org.loveroo.webgl.engine.math.Noise
import org.loveroo.webgl.engine.runtime.impl.WebBackgroundTask
import org.scalajs.dom
import org.scalajs.dom.html.Document
import scala.main
import scala.scalajs.js
import scala.scalajs.js.annotation.{JSExport, JSExportStatic, JSExportTopLevel, JSGlobalScope}

object Runtime {
    val document: Document = dom.document
    def time: Double = dom.window.performance.now()

    // scala.Unit cuz stupid
    def main(): scala.Unit = {
        val game = new Game()
    }
}