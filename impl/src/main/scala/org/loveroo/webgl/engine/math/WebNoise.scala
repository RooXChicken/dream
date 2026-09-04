package org.loveroo.webgl.engine.math

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

class WebNoise extends Noise {
    override def noise(x: Double, y: Double = 0.0, z: Double = 0.0): Double =
        WebNoise.noise(x, y, z)

    override def noiseSeed(seed: Double): Unit =
        WebNoise.noiseSeed(seed)
}

object WebNoise {
    @js.native
    @JSImport("/lib/noise.js", "noise")
    def noise(x: Double, y: Double = 0.0, z: Double = 0.0): Double = js.native

    @js.native
    @JSImport("/lib/noise.js", "noiseSeed")
    def noiseSeed(seed: Double): Unit = js.native
}