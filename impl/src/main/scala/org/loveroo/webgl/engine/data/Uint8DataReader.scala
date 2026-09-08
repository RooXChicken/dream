package org.loveroo.webgl.engine.data

import scala.collection.{Seq, mutable}
import scala.scalajs.js
import scala.scalajs.js.JSConverters.*
import scala.scalajs.js.typedarray.Uint8Array

class Uint8DataReader(val buffer: Uint8Array, _size: Int = -1) extends DataReader(_size) {
    override def byte(): Byte = {
        val value = toSByte(buffer.get(index))

        postRead(1)
        value
    }

    override def bytes(): Array[Byte] = {
        val length = int()

        val value = buffer.subarray(index, index + length)
        val ubytes = new Array[Byte](length)

        var i = 0
        while(i < length) {
            ubytes.update(i, (value(i) - DataOps.byteMax).toByte)
            i += 1
        }

        postRead(length)
        ubytes
    }

    override def short(): Short = {
        val value = toSShort(
            buffer.get(index).toInt |
            (buffer.get(index + 1).toInt << 8)
        )

        postRead(2)
        value
    }

    override def int(): Int = {
        val value = toSInt(
            buffer.get(index).toLong |
            (buffer.get(index + 1).toLong << 8) |
            (buffer.get(index + 2).toLong << 16) |
            (buffer.get(index + 3).toLong << 24)
        )

        postRead(4)
        value
    }

    override def float(): Float = {
        java.lang.Float.intBitsToFloat(int())
    }

    override def string(): String = {
        new java.lang.String(bytes())
    }

    override def subReader(length: Int): DataReader = {
        if(length == 0) {
            new Uint8DataReader(new Uint8Array(0), 0)
        }
        else {
            val value = new Uint8DataReader(buffer.subarray(index, index + length), length)
            postRead(length)

            value
        }
    }

    private def toSByte(value: Short): Byte = {
        if(value < DataOps.byteMax) {
            value.toByte
        }
        else {
            (value - (DataOps.byteMax * 2)).toByte
        }
    }

    private def toSShort(value: Int): Short = {
        if(value < DataOps.shortMax) {
            value.toShort
        }
        else {
            (value - (DataOps.shortMax * 2)).toShort
        }
    }

    private def toSInt(value: Long): Int = {
        if(value < DataOps.intMax) {
            value.toInt
        }
        else {
            (value - (DataOps.intMax.toLong * 2)).toInt
        }
    }
}
