package org.loveroo.webgl.engine.data

import scala.scalajs.js.typedarray.TypedArray

class BufferWrapper[V, A <: TypedArray[V, A]](val buff: TypedArray[V, A]) {
    private var _index = 0
    def index: Int = _index

    def put(v: V): Unit = {
        buff.set(_index, v)
        _index += 1
    }
}
