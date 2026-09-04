package org.loveroo.webgl.engine.data

import scala.scalajs.js

class JSArray[E] {
    val array = new js.Array[E]()

    def add(value: E): Unit = {
        array.push(value)
    }

    @Null
    def get(index: Int): E = {
        if(index < 0 || index >= array.length) {
            return null.as[E]
        }

        array(index)
    }

    def contains(value: E): Boolean = {
        array.contains(value)
    }

    def forEach(func: E => Unit): Unit = {
        array.foreach(func)
    }

    def size(): Int = array.size

    def clear(): Unit = {
        array.clear()
    }

    def remove(value: E): Unit = {

    }
}
