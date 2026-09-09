package org.loveroo.webgl.engine.runtime

import org.loveroo.webgl.engine.data.{DataWriter, Translator}
import org.loveroo.webgl.engine.data.resource.{Resource, ResourceLoader}
import org.loveroo.webgl.engine.font.{Font, Glyph, GlyphManager}
import org.loveroo.webgl.engine.input.Input
import org.loveroo.webgl.engine.math.{Noise, Vec2f}
import org.loveroo.webgl.engine.render.Camera
import org.loveroo.webgl.engine.render.command.Command
import org.loveroo.webgl.engine.render.data.{ColorFormats, TextureTypes}
import org.loveroo.webgl.engine.render.frame.Frame
import org.loveroo.webgl.engine.render.shader.{Uniform, UniformValue}
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER

import java.util
import java.util.{HashMap, UUID}
import scala.Exception
import scala.util.matching.Regex

trait EngineRuntime() {
    EngineRuntime._engine = this
    private var resourceCount = 0
    private var loadedResourceCount = 0

    @Null
    private var onLoad: EngineRuntime => Unit = null

    def time: Double

    val translator: Translator
    val resourceLoader: ResourceLoader
    val input: Input

    val textureTypes: TextureTypes
    val colorFormats: ColorFormats

    val noise: Noise

    @Null
    private var _font: Font = null
    def font: Font = _font

    def postInit(onLoad: EngineRuntime => Unit): Unit = {
        this.onLoad = onLoad

        if(_font == null) {
            _font = submitResource(new Font(
                "micro_chat",
                256,
                110,
                8,
                10,
                new GlyphManager()
                    .submit(" ", new Glyph(3, 5, 0, 0))
                    .submit("A", new Glyph(5, 5, 0, 0))
                    .submit("B", new Glyph(5, 5, 0, 0))
                    .submit("C", new Glyph(5, 5, 0, 0))
                    .submit("D", new Glyph(5, 5, 0, 0))
                    .submit("E", new Glyph(5, 5, 0, 0))
                    .submit("F", new Glyph(5, 5, 0, 0))
                    .submit("G", new Glyph(5, 5, 0, 0))
                    .submit("H", new Glyph(5, 5, 0, 0))
                    .submit("I", new Glyph(5, 5, 0, 0))
                    .submit("J", new Glyph(5, 5, 0, 0))
                    .submit("K", new Glyph(5, 5, 0, 0))
                    .submit("L", new Glyph(5, 5, 0, 0))
                    .submit("M", new Glyph(5, 5, 0, 0))
                    .submit("N", new Glyph(5, 5, 0, 0))
                    .submit("O", new Glyph(5, 5, 0, 0))
                    .submit("P", new Glyph(5, 5, 0, 0))
                    .submit("Q", new Glyph(5, 6, 0, 0))
                    .submit("R", new Glyph(5, 5, 0, 0))
                    .submit("S", new Glyph(5, 5, 0, 0))
                    .submit("T", new Glyph(5, 5, 0, 0))
                    .submit("U", new Glyph(5, 5, 0, 0))
                    .submit("V", new Glyph(5, 5, 0, 0))
                    .submit("W", new Glyph(5, 5, 0, 0))
                    .submit("X", new Glyph(5, 5, 0, 0))
                    .submit("Y", new Glyph(5, 5, 0, 0))
                    .submit("Z", new Glyph(5, 5, 0, 0))
                    .submit("a", new Glyph(4, 4, 0, 0))
                    .submit("b", new Glyph(4, 5, 0, 0))
                    .submit("c", new Glyph(4, 4, 0, 0))
                    .submit("d", new Glyph(4, 5, 0, 0))
                    .submit("e", new Glyph(4, 4, 0, 0))
                    .submit("f", new Glyph(4, 5, 0, 0))
                    .submit("g", new Glyph(4, 6, 0, 0))
                    .submit("h", new Glyph(4, 5, 0, 0))
                    .submit("i", new Glyph(1, 5, 0, 0))
                    .submit("j", new Glyph(3, 6, 0, 0))
                    .submit("k", new Glyph(4, 5, 0, 0))
                    .submit("l", new Glyph(1, 5, 0, 0))
                    .submit("m", new Glyph(5, 4, 0, 0))
                    .submit("n", new Glyph(4, 4, 0, 0))
                    .submit("o", new Glyph(4, 4, 0, 0))
                    .submit("p", new Glyph(4, 5, 0, 0))
                    .submit("q", new Glyph(4, 5, 0, 0))
                    .submit("r", new Glyph(3, 4, 0, 0))
                    .submit("s", new Glyph(4, 4, 0, 0))
                    .submit("t", new Glyph(4, 5, 0, 0))
                    .submit("u", new Glyph(4, 4, 0, 0))
                    .submit("v", new Glyph(4, 4, 0, 0))
                    .submit("w", new Glyph(5, 4, 0, 0))
                    .submit("x", new Glyph(4, 4, 0, 0))
                    .submit("y", new Glyph(4, 5, 0, 0))
                    .submit("z", new Glyph(4, 4, 0, 0))
                    .submit("0", new Glyph(5, 5, 0, 0))
                    .submit("1", new Glyph(5, 5, 0, 0))
                    .submit("2", new Glyph(5, 5, 0, 0))
                    .submit("3", new Glyph(5, 5, 0, 0))
                    .submit("4", new Glyph(5, 5, 0, 0))
                    .submit("5", new Glyph(5, 5, 0, 0))
                    .submit("6", new Glyph(5, 5, 0, 0))
                    .submit("7", new Glyph(5, 5, 0, 0))
                    .submit("8", new Glyph(5, 5, 0, 0))
                    .submit("9", new Glyph(5, 5, 0, 0))
                    .submit("_", new Glyph(4, 1, 0, 0))
                    .submit("!", new Glyph(1, 6, 0, 0))
                    .submit("\"", new Glyph(3, 2, 0, 0))
                    .submit("#", new Glyph(5, 5, 0, 0))
                    .submit("$", new Glyph(5, 7, 0, 0))
                    .submit("÷", new Glyph(5, 5, 0, 0))
                    .submit("&", new Glyph(5, 5, 0, 0))
                    .submit("'", new Glyph(1, 2, 0, 1))
                    .submit("(", new Glyph(3, 5, 0, 0))
                    .submit(")", new Glyph(3, 5, 0, 0))
                    .submit("*", new Glyph(3, 3, 0, 0))
                    .submit("+", new Glyph(5, 5, 0, 0))
                    .submit(",", new Glyph(1, 2, 0, 0))
                    .submit("-", new Glyph(5, 1, 0, 0))
                    .submit(".", new Glyph(1, 1, 0, 0))
                    .submit("/", new Glyph(5, 5, 0, 0))
                    .submit(":", new Glyph(1, 5, 0, 0))
                    .submit(";", new Glyph(1, 5, 0, 0))
                    .submit("<", new Glyph(5, 5, 0, 0))
                    .submit("=", new Glyph(5, 5, 0, 0))
                    .submit(">", new Glyph(5, 5, 0, 0))
                    .submit("?", new Glyph(4, 5, 0, 0))
                    .submit("[", new Glyph(3, 5, 0, 0))
                    .submit("]", new Glyph(3, 5, 0, 0))
                    .submit("\\", new Glyph(5, 5, 0, 0))
                    .submit("^", new Glyph(3, 2, 0, 1))
                    .submit("\u0000", new Glyph(0, 0, 0, 0))
                    .submit("\u0000", new Glyph(0, 0, 0, 0))
                    .submit("{", new Glyph(4, 5, 0, 0))
                    .submit("}", new Glyph(4, 5, 0, 0))
                    .submit("|", new Glyph(1, 5, 0, 0))
                    .submit("~", new Glyph(4, 2, 0, 2))
                    .submit("@", new Glyph(5, 5, 0, 0))
            ))
        }
    }

    val camera = new Camera(new Vec2f(), 1.0f)

    def randomUUID(): UUID

    private var ticking = false
    private var renderQueued = false

    def formatShaderConst(id: String, value: UniformValue): String
    protected def dataWriterSupplier: () => DataWriter
    private val frame = new Frame(dataWriterSupplier)

    protected def submitResource[R <: Resource[?]](resource: R): R = {
        resourceCount += 1

        resource.onLoad(_ => {
            loadedResourceCount += 1

            if(loadedResourceCount >= resourceCount) {
                onLoad(this)
            }
        })

        resource
    }

    def newFrame(): Unit =
        frame.newFrame()

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

    val name = "dream"
    val version = "v0.0.1a"

    val debugVersionString = s"${name} ${version}"

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

    inline def assert(condition: Boolean, msg: String): Unit = {
        inline if(debug) {
            if(!condition) {
                throw new Exception(s"Assertion failed ${msg}")
            }
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