package org.loveroo.webgl.engine.data.resource

import java.util.LinkedList

trait Resource[R <: Resource[?]] extends Destroyable {
    private val buffered = new LinkedList[() => Unit]()
    protected def bufferedCount: Int = buffered.size()

    private var _loaded = false
    def loaded: Boolean = _loaded

    private var _onLoad: R => Unit = _ => {}

    def onLoad: R => Unit = _onLoad
    def onLoad_=(value: R => Unit): Unit = {
        _onLoad = value

        if(loaded) {
            _onLoad(this.as[R])
        }
    }

    protected def postCreate(): Unit = {
        _loaded = true

        buffered.forEach(_())
        buffered.clear()

        _onLoad(this.as[R])
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
