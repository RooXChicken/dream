package org.loveroo.webgl.engine.data.resource

import org.loveroo.webgl.{Game, Runtime}
import org.scalajs.dom
import org.scalajs.dom.{Blob, FileReader, HttpMethod, Image, RequestInit}
import scala.concurrent.ExecutionContext.Implicits.global
import scala.scalajs.js
import scala.scalajs.js.{Promise, Thenable, |}
import scala.scalajs.js.typedarray.Uint8Array

class ResourceLoader {
    @Null
    def load(path: String, onLoad: Uint8Array => Unit): Unit = {
        dom.fetch(
            s"${dom.window.location.href}${path}",
            new RequestInit { method = HttpMethod.GET }
        )
            .toFuture.flatMap(_.blob().toFuture)
            .flatMap(_.arrayBuffer().toFuture)
            .map(b => onLoad(new Uint8Array(b)))
    }

    @Null
    def loadStr(path: String, onLoad: String => Unit): Unit = {
        dom.fetch(
                s"${dom.window.location.href}${path}",
                new RequestInit {
                    method = HttpMethod.GET
                }
            )
            .toFuture.flatMap(_.text().toFuture)
            .map(t => onLoad(t))
    }

    def loadImage(path: String, onLoad: Image => Unit): Unit = {
        val img = new Image()
        img.onload = (_ => onLoad(img))

        img.src = s"${dom.window.location.href}${ResourceLoader.texturePath}/${path}.png"
    }
}

object ResourceLoader {
    val root = s"${Game.runtime.isDebug.evaluate("src/assets", "assets")}"

    val shaderPath = s"${root}/shader"
    val texturePath = s"${root}/texture"
    val dataPath = s"${root}/data"
    val langPath = s"${root}/lang"

    def getPath(path: String): String = {
        s"${ResourceLoader.root}/${path}"
    }
}