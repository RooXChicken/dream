package org.loveroo.webgl.engine.data

import scala.collection.Seq

trait DataWriter {
    var index = 0

    protected def postWrite(indexCount: Int): Unit = {
        index += indexCount
    }

    def byte(value: Byte): Unit
    def bytes(value: Array[Byte]): Unit

    def short(value: Short): Unit
    def int(value: Int): Unit

    def float(value: Float): Unit

    def string(value: String): Unit

    def boolean(value: Boolean): Unit = {
        byte(value.evaluate(1, 0))
    }

    def size(): Int
    def writeLength(): Unit
}
