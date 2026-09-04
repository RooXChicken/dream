package org.loveroo.webgl.engine.math

trait Noise {
    def noise(x: Double, y: Double = 0.0, z: Double = 0.0): Double
    def noiseSeed(seed: Double): Unit
}
