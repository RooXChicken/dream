package org.loveroo.webgl.engine.data

import org.loveroo.webgl.engine.data.resource.ResourceLoader
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER

import java.util.HashMap

trait Translator {
    protected var loadedText = new HashMap[String, String]()

    def translate(key: String): String =
        loadedText.get(key) ? key

    def loadLanguage(lang: String): Unit = {
        ER.resourceLoader.loadStr(
            ResourceLoader.langPath(lang),
            loadLangFile
        )
    }

    protected def loadLangFile(text: String): Unit
}
