package org.loveroo.webgl.engine.data.resource

import java.util.LinkedList

trait Resource[R <: Resource[?]] extends Destroyable {
    private val buffered = new LinkedList[() => Unit]()
    protected def bufferedCount: Int = buffered.size()

    private var _loaded = false
    def loaded: Boolean = _loaded

    private val onLoads = new LinkedList[R => Unit]()

    def onLoad(value: R => Unit): Unit = {
        if(!loaded) {
            onLoads.addLast(value)
        }
        else {
            value(this.as[R])
        }
    }

    protected def postCreate(): Unit = {
        _loaded = true

        onLoads.forEach(_(this.as[R]))
        onLoads.clear()

        buffered.forEach(_())
        buffered.clear()
    }

    protected def create(): Unit

    protected def buffer(func: () => Unit): Unit = {
        if(loaded) {
            func()
        }
        else {
            buffered.add(func)
        }
    }
}
