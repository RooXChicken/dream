package org.loveroo.webgl.engine.data.resource

import org.loveroo.webgl.engine.render.ImageTextureResult
import org.loveroo.webgl.engine.runtime.EngineRuntime
import org.scalajs.dom.{Blob, DedicatedWorkerGlobalScope, HttpMethod, ImageBitmap, RequestCache, RequestInit, Response, URL}

import scala.Exception
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.scalajs.js
import scala.scalajs.js.typedarray.Uint8Array
import scala.util.Try

class WebResourceLoader extends ResourceLoader {
    override type RawData = Uint8Array
    override type Image = org.scalajs.dom.Image

    protected override def load(path: String, onLoad: OnLoad[RawData]): Unit = {
        blob(path)
            .flatMap(_.arrayBuffer().toFuture)
            .map(a => new Uint8Array(a))
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

    def loadImage(id: String, onLoad: OnLoad[ImageTextureResult]): Unit = {
        loadBlob(ResourceLoader.texturePath(id), blob => {
            val data = URL.createObjectURL(blob)
            val imgFuture = DedicatedWorkerGlobalScope.self.createImageBitmap(blob).toFuture

            imgFuture.onComplete(b => handleTry(b, new OnLoad[ImageBitmap] {
                override def onSuccess(value: ImageBitmap): Unit = {1
                    onLoad.onSuccess(new ImageTextureResult(
                        value.width.toInt,
                        value.height.toInt,
                        data
                    ))
                }

                override def onFail(error: String): Unit =
                    onLoad.onFail(error)
            }))
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