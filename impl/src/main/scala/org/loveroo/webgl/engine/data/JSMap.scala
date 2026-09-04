package org.loveroo.webgl.engine.data

import scala.scalajs.js.Map

// for some reason, scalajs hashmaps are stupidly slow
// this is a js map wrapper
class JSMap[K, V] {
    val map = new Map[K, V]()

    def put(key: K, value: V): Unit = {
        map.update(key, value)
    }

    def putIfAbsent(key: K, value: => V): Unit = {
        if(!contains(key)) {
            put(key, value)
        }
    }

    @Null
    def get(key: K): V = {
        map.getOrElse(key, null.as[V])
    }

    def contains(key: K): Boolean = {
        map.contains(key)
    }

    def forEach(func: (K, V) => Unit): Unit = {
        map.foreach((k, v) => func(k, v))
    }

    def size(): Int = map.size

    def clear(): Unit = {
        map.clear()
    }

    def remove(key: K): Unit = {
        map.remove(key)
    }
}
