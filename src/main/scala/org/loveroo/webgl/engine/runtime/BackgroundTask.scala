package org.loveroo.webgl.engine.runtime

trait BackgroundTask {
    def send(msg: String): Unit = onMessage(msg)
    def onMessage(msg: String): Unit = {}
}
