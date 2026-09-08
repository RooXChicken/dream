package org.loveroo.webgl.engine.data.resource

import org.loveroo.webgl.engine.render.texture.ImageTextureResult
import org.loveroo.webgl.engine.runtime.EngineRuntime
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER

trait ResourceLoader {
    type RawData

    protected def load(path: String, onLoad: OnLoad[RawData]): Unit

    def loadStr(path: String, onLoad: OnLoad[String]): Unit
    def loadRawAsString(path: String, onLoad: OnLoad[String]): Unit

    def loadImage(path: String, onLoad: OnLoad[Array[Short]]): Unit
}

object ResourceLoader {
    def root = ""

    def getPath(path: String): String = {
        s"${ResourceLoader.root}${path}"
    }

    def shaderPath(path: String, @Null suffix: String = null): String = {
        (suffix != null).evaluate(
            s"${getPath("shader")}/${path}.${suffix}",
            s"${getPath("shader")}/${path}"
        )
    }

    def texturePath(path: String): String =
        s"${getPath("texture")}/${path}.png"

    def langPath(path: String): String =
        s"${getPath("lang")}/${path}.json"
}

trait OnLoad[T] {
    def onSuccess(value: T): Unit
    def onFail(error: String): Unit = {
        println(s"error ${error}")
    }
}