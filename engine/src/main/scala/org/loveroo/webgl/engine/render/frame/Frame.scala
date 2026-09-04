package org.loveroo.webgl.engine.render.frame

import org.loveroo.webgl.engine.data.DataWriter
import org.loveroo.webgl.engine.render.command.Command

import java.lang.Exception
import java.util

class Frame(writerSupplier: () => DataWriter) {
    @Null
    private var writer: DataWriter = null

    private val queue = new util.LinkedList[() => Unit]()

    def newFrame(): Unit = {
        if(writer == null) {
            writer = writerSupplier()

            queue.forEach(_())
        }
    }

    def submit(command: Command, func: DataWriter => Unit): Unit = {
        if(writer == null) {
            queue.add(() => _submit(command, func))
        }
        else {
            _submit(command, func)
        }
    }

    private def _submit(command: Command, func: DataWriter => Unit): Unit = {
        writer.byte(command.ordinal.toByte)
        func(writer)
    }

    def endFrame(): DataWriter = {
        val _writer = writer
        writer = null

        _writer
    }
}