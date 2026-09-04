package org.loveroo.webgl.util

import java.util
import java.util.ArrayList

trait EnumEntry {
    private[util] var _ordinal = -1
    def ordinal: Int = _ordinal

    private[util] var _name = "???"
    def name: String = _name

    override def toString: String = name
}

trait Enum[T <: EnumEntry] {
    private var index = 0
    private val values = new util.HashMap[Int, T]()

    type Entry = T

    protected def register(name: String, value: Entry): Entry = {
        value._name = name

        value._ordinal = index
        values.put(index, value)

        index += 1

        value
    }

    def forEach(func: T => Unit): Unit = {
        values.forEach((_, e) => func(e))
    }

    @Null
    def fromOrdinal(ordinal: Int): Entry = {
        values.get(ordinal)
    }

    @Null
    def fromName(name: String): Entry = {
        values.forEach((_, e) => {
            if(e.name == name) {
                return e
            }
        })

        null.as[T]
    }
}
