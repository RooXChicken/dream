package org.loveroo.webgl.engine.runtime

import org.loveroo.webgl.engine.data.Translator
import org.loveroo.webgl.engine.data.resource.ResourceLoader
import org.loveroo.webgl.engine.input.Input
import org.loveroo.webgl.engine.math.Vec2f
import org.loveroo.webgl.engine.render.Camera
import org.loveroo.webgl.engine.render.frame.Frame
import org.loveroo.webgl.engine.render.frame.command.GPUCommand
import scala.Exception

trait EngineRuntime {
    inline val verbose = false
    inline val debug = true

    def isVerbose: Boolean = verbose
    def isDebug: Boolean = debug

    def crashOrLog(ex: Exception): Unit = {
        if(debug) {
            throw ex
        }
        else {
            ex.printStackTrace()
        }
    }

    inline def verboseLog(msg: String): Unit = {
        inline if(verbose) {
            log(msg)
        }
    }

    inline def debugLog(msg: String): Unit = {
        inline if(debug) {
            log(msg)
        }
    }

    def log(msg: String): Unit = {
        println(msg)
    }

    val translator = new Translator()
    val resourceLoader = new ResourceLoader()
    val input: Input

    val camera = new Camera(new Vec2f(), 1.0f)

    @Null
    protected var _frame: Frame = null
    def frame: Frame = _frame

    private var frameNumber = 0

    def newFrame(): Unit = {
        _frame = new Frame(frameNumber)
        frameNumber += 1
    }

    inline def newCommand(func: GPUCommand => Unit): Unit =
        frame.newCommand(func)
}
