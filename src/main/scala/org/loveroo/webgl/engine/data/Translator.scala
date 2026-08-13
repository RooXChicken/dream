package org.loveroo.webgl.engine.data

import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.data.resource.ResourceLoader
import scala.collection.mutable.HashMap
import scala.scalajs.js
import scala.scalajs.js.JSON
import scala.scalajs.js.Object.create

class Translator {
    private var loadedText = new HashMap[String, String]()

    def translate(key: String): String =
        loadedText.getv(key) ? key

    def loadLanguage(lang: String): Unit = {
        Game.resourceLoader.loadStr(
            s"${ResourceLoader.langPath}/${lang}.json",
            l => {
                val json = js.Object.entries(JSON.parse(l).as[js.Object])
                loadedText.clear()

                json.foreach((kv) => {
                    loadedText.put(kv._1, s"${kv._2}")
                })
            }
        )
    }
}
