package org.loveroo.webgl.engine.data

import scala.scalajs.js
import scala.scalajs.js.JSON

class WebTranslator extends Translator {
    override protected def loadLangFile(text: String): Unit = {
        val json = js.Object.entries(JSON.parse(text).as[js.Object])
        loadedText.clear()

        json.foreach((kv) => {
            loadedText.put(kv._1, s"${kv._2}")
        })
    }
}
