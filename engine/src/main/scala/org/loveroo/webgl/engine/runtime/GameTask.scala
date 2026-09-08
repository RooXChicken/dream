package org.loveroo.webgl.engine.runtime

import org.loveroo.webgl.engine.data.DataWriter

trait GameTask {
    def init(): Unit
    def postInit(): Unit
    def tick(input: DataWriter): Unit
}

object GameTask {
    val gameInit = "game_init"
    val framePrepared = "frame_prepared"
}
