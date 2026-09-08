package org.loveroo.webgl.engine.data.resource

import org.loveroo.webgl.engine.render.texture.ImageTextureResult
import org.loveroo.webgl.engine.runtime.EngineRuntime
import org.scalajs.dom.{Blob, DedicatedWorkerGlobalScope, HttpMethod, ImageBitmap, RequestCache, RequestInit, Response, URL}

import scala.{Exception, StringBuilder}
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.scalajs.js
import scala.scalajs.js.typedarray.{ArrayBuffer, Uint8Array}
import scala.util.Try

class WebResourceLoader extends ResourceLoader {
    override type RawData = ArrayBuffer

    protected override def load(path: String, onLoad: OnLoad[RawData]): Unit = {
        fetch(path)
            .flatMap(_.arrayBuffer().toFuture)
            .onComplete(t => handleTry(t, onLoad))
    }

    private def fetch(path: String): Future[Response] = {
        DedicatedWorkerGlobalScope.self.fetch(
            path,
            new RequestInit {
                method = HttpMethod.GET

                if(EngineRuntime.debug) {
                    cache = RequestCache.reload
                }
            }
        ).toFuture
    }

    private def blob(path: String): Future[Blob] = {
        fetch(path).flatMap(_.blob().toFuture)
    }

    override def loadStr(path: String, onLoad: OnLoad[String]): Unit = {
        fetch(path)
            .flatMap(_.text().toFuture)
            .onComplete(t => handleTry(t, onLoad))
    }

    def loadBlob(path: String, onLoad: OnLoad[Blob]): Unit = {
        blob(path).onComplete(b => handleTry(b, onLoad))
    }

    override def loadRawAsString(path: String, onLoad: OnLoad[String]): Unit = {
        blob(path).flatMap(_.text().toFuture).onComplete(b => handleTry(b, onLoad))
    }

    def loadImage(id: String, onLoad: OnLoad[Array[Short]]): Unit = {
        load(ResourceLoader.texturePath(id), new OnLoad[ArrayBuffer] {
            override def onSuccess(value: ArrayBuffer): Unit = {
                onLoad.onSuccess(new Uint8Array(value).toSeq.toArray)
            }

            override def onFail(error: String): Unit = onLoad.onFail(error)
        })
    }

    private def handleTry[T](value: Try[T], onLoad: OnLoad[T]): Unit = {
        try {
            onLoad.onSuccess(value.get)
        }
        catch {
            case e: Exception => onLoad.onFail(e.toString)
        }
    }
}