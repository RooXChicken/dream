package org.loveroo.webgl.engine.data

import scala.collection.Seq
import scala.scalajs.js
import scala.scalajs.js.typedarray.Uint8Array
import js.JSConverters.*
import scala.collection.immutable.ArraySeq

class Uint8DataWriter(initialSize: Int = 1024) extends DataWriter {
    private var _buffer = new Uint8Array(initialSize + 4)
    def buffer: Uint8Array = _buffer

    int(0)

    private def ensureSize(needed: Int): Unit = {
        var newSize = buffer.length
        while(index + needed >= newSize) {
            newSize = (newSize * 1.5).toInt
        }

        if(newSize != buffer.length) {
            val old = _buffer
            _buffer = new Uint8Array(newSize)

            buffer.set(old)
        }
    }

    override def byte(value: Byte): Unit = {
        ensureSize(1)

        buffer.set(index, toUByte(value))
        postWrite(1)
    }

    override def bytes(value: Array[Byte]): Unit = {
        bytes(ArraySeq.unsafeWrapArray(value).toJSArray)
    }

    def bytes(value: js.Array[Byte]): Unit = {
        ensureSize(4 + value.length)

        int(value.length)
        val ubytes = new js.Array[Short](value.length)

        var i = 0
        while(i < ubytes.length) {
            ubytes.update(i, (value(i).toShort + DataOps.byteMax).toShort)
            i += 1
        }

        buffer.set(ubytes, index)
        postWrite(value.length)
    }

    def bytes(value: Uint8Array): Unit = {
        ensureSize(4 + value.length)

        int(value.length)
        buffer.set(value, index)

        postWrite(value.byteLength)
    }

    override def short(value: Short): Unit = {
        ensureSize(2)
        val ushort = toUShort(value)

        buffer.set(index, (ushort & 0xFF).toShort)
        buffer.set(index + 1, ((ushort & 0xFF00) >> 8).toShort)

        postWrite(2)
    }

    override def int(value: Int): Unit = {
        ensureSize(4)
        val uint = toUInt(value)

        buffer.set(index, (uint & 0xFF).toShort)
        buffer.set(index + 1, ((uint & 0xFF00) >> 8).toShort)
        buffer.set(index + 2, ((uint & 0xFF0000) >> 16).toShort)
        buffer.set(index + 3, ((uint & 0xFF000000) >> 24).toShort)

        postWrite(4)
    }

    override def float(value: Float): Unit = {
        int(java.lang.Float.floatToIntBits(value))
    }

    override def string(value: String): Unit = {
        bytes(value.getBytes())
    }

    override def size(): Int =
        buffer.size

    override def writeLength(): Unit = {
        val oldIndex = index

        index = 0
        int(oldIndex)

        index = oldIndex
    }

    private def toUByte(value: Byte): Short = {
        if(value >= 0) {
            value
        }
        else {
            ((DataOps.byteMax * 2) + value).toShort
        }
    }

    private def toUShort(value: Short): Int = {
        if(value >= 0) {
            value
        }
        else {
            (DataOps.shortMax * 2) + value
        }
    }

    private def toUInt(value: Int): Long = {
        if(value >= 0) {
            value
        }
        else {
            ((DataOps.intMax.toLong * 2) + value)
        }
    }
}