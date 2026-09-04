package org.loveroo.webgl.engine.runtime

import org.loveroo.webgl.engine.data.DataWriter

trait GameTask {
    def init(): Unit
    def tick(input: DataWriter): Unit
}

object GameTask {
    val framePrepared = "frame_prepared"
}
