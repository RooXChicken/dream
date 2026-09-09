package org.loveroo.webgl.engine.data.resource

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import scala.scalajs.js.typedarray.{ArrayBuffer, Uint8Array}

@js.native
@JSImport("/lib/upng.js")
object UPNG extends js.Object {
    def decode(data: ArrayBuffer): PNG = js.native
}

trait PNG extends js.Object {
    val width: Int
    val height: Int
    val depth: Int
    val data: Uint8Array
}