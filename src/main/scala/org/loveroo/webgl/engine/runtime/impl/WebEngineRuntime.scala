package org.loveroo.webgl.engine.runtime.impl

import org.loveroo.webgl.Runtime
import org.loveroo.webgl.engine.input.Input
import org.loveroo.webgl.engine.runtime.EngineRuntime
import org.scalajs.dom
import org.scalajs.dom.HTMLScriptElement
import scala.scalajs.js

class WebEngineRuntime extends EngineRuntime {
    override val input: Input = new WebInput()

    if(debug) {
        js.eval(
            """
                var newScript = document.createElement("script")
                newScript.onload = function() {
                    var spector = new SPECTOR.Spector()
                    spector.displayUI()
                }

                document.head.appendChild(newScript)
                newScript.src = "lib/spector.js"
            """)
    }
}