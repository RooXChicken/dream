package org.loveroo.webgl.engine.data

import scala.collection.Seq

trait DataReader(_size: Int = -1) {
    var index = 0
    val size: Int = (_size == -1).evaluate(int(), _size)

    protected def postRead(indexCount: Int): Unit = {
        index += indexCount
    }

    def byte(): Byte

    def bytes(): Array[Byte]

    def short(): Short
    def int(): Int

    def float(): Float

    def string(): String

    def boolean(): Boolean = {
        (byte() == 1)
    }

    def subReader(length: Int): DataReader
}
