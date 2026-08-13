package org.loveroo.webgl.engine.render.frame

import java.util.{ArrayList, LinkedList, List}
import org.loveroo.webgl.engine.render.Renderer
import org.loveroo.webgl.engine.render.frame.command.{Command, GPUCommand}
import org.loveroo.webgl.engine.render.frame.command.GPUCommand

class Frame(val frameNumber: Int) {
    private var submittedCommands = 0
    def commandCount: Int = submittedCommands

    def commandBuffer: List[GPUCommand] =
        (frameNumber % 2 == 0).evaluate(Frame.commandBuffer1, Frame.commandBuffer2)

    // use this system to avoid creating many new gpu commands per frame
    // instead, it reuses those objects so it only makes more when more are actually needed
    def newCommand(func: GPUCommand => Unit): Unit = {
        if(commandBuffer.size() <= submittedCommands) {
            commandBuffer.add(new GPUCommand())
        }

        val cmd = commandBuffer.get(submittedCommands)
        cmd.clear()

        func(cmd)
        submittedCommands += 1
    }

    def renderFrame(renderer: Renderer): Unit = {
        var i = 0

        while(i < commandCount) {
            commandBuffer.get(i).execute(renderer)
            i += 1
        }
    }
}

object Frame {
    private val commandBuffer1 = new ArrayList[GPUCommand]()
    private val commandBuffer2 = new ArrayList[GPUCommand]()
}