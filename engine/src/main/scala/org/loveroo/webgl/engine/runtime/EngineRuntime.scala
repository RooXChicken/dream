package org.loveroo.webgl.engine.runtime

import org.loveroo.webgl.engine.data.{DataWriter, Translator}
import org.loveroo.webgl.engine.data.resource.ResourceLoader
import org.loveroo.webgl.engine.input.Input
import org.loveroo.webgl.engine.math.{Noise, Vec2f}
import org.loveroo.webgl.engine.render.Camera
import org.loveroo.webgl.engine.render.command.Command
import org.loveroo.webgl.engine.render.data.{ColorFormats, TextureTypes}
import org.loveroo.webgl.engine.render.frame.Frame
import org.loveroo.webgl.engine.render.shader.{Uniform, UniformValue}
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER

import java.util.{HashMap, UUID}
import scala.Exception
import scala.util.matching.Regex

trait EngineRuntime {
    def time: Double

    val translator: Translator
    val resourceLoader: ResourceLoader
    val input: Input

    val textureTypes: TextureTypes
    val colorFormats: ColorFormats

    val noise: Noise

    val camera = new Camera(new Vec2f(), 1.0f)

    def randomUUID(): UUID

    private var ticking = false
    private var renderQueued = false

    def formatShaderConst(id: String, value: UniformValue): String
    protected def dataWriterSupplier: () => DataWriter
    private val frame = new Frame(dataWriterSupplier)

    def newFrame(): Unit = frame.newFrame()

    def endFrame(): DataWriter = {
        val writer = frame.endFrame()
        frame.newFrame()

        writer.writeLength()
        writer
    }

    def submit(command: Command, func: DataWriter => Unit): Unit =
        frame.submit(command, func)
}

object EngineRuntime {
    @Null
    private[runtime] var _engine: EngineRuntime = null

    def ER: EngineRuntime = _engine

    inline final val verbose = false
    inline final val debug = false

    def isVerbose: Boolean = verbose
    def isDebug: Boolean = debug

    inline def crashOrLog(ex: Exception): Unit = {
        inline if(debug) {
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
}

object Renderer {
    inline def textureTypes: TextureTypes = ER.textureTypes
    inline def colorFormats: ColorFormats = ER.colorFormats

    val constantsRegex = new Regex("#const \"(.+)\"")
    val constants = new HashMap[String, UniformValue]()

    def submitConstant(id: String, value: UniformValue): Unit = {
        constants.put(id, value)
    }

    def enableDepthTest(): Unit = {
        ER.submit(Command.DepthTest, c => {
            c.boolean(true)
        })
    }

    def disableDepthTest(): Unit = {
        ER.submit(Command.DepthTest, c => {
            c.boolean(false)
        })
    }

    def unbindRenderBuffer(): Unit = {
        ER.submit(Command.UnbindRenderBuffer, _ => {})
    }

    def setUniformGlobal(id: String, value: Uniform): Unit = {
        ER.submit(Command.SetShaderUniformGlobal, c => {
            c.string(id)
            value(c)
        })
    }
}