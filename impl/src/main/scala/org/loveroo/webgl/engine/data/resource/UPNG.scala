package org.loveroo.webgl.engine.data.resource

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport
import scala.scalajs.js.typedarray.Uint8Array

@js.native
@JSImport("/lib/upng.js", "UPNG")
object UPNG {
    def decode(data: Uint8Array): Uint8Array = js.native
}
