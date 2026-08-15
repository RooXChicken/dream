package org.loveroo.webgl.engine.render

import java.util.{ArrayList, HashMap, HashSet, LinkedList}
import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.data.resource.{Resource, ResourceLoader}
import org.loveroo.webgl.engine.render.data.TextureSlot
import org.loveroo.webgl.engine.render.frame.command.Command
import scala.Exception
import scala.util.matching.Regex

class Shader(
    @Null private val vertex: VertexShaderComponent = null,
    @Null private val fragment: FragmentShaderComponent = null
) extends Resource[Shader] {
    def this(vertex: String, fragment: String) = {
        this(
            new VertexShaderComponent(vertex),
            new FragmentShaderComponent(fragment)
        )
    }

    def this(id: String) = {
        this(id, id)
    }

    val id = new ShaderID(
        vertex ?? (_.id) ? "",
        fragment ?? (_.id) ? ""
    )

    private val totalSources =
        (vertex == null).evaluate(0, 1) +
        (fragment == null).evaluate(0, 1)

    private var loadedSources = 0

    private var _vshSource = ""
    private var _fshSource = ""

    def vshSource: String = _vshSource
    def fshSource: String = _fshSource

    loadShader(vertex, s => _vshSource = s)
    loadShader(fragment, s => _fshSource = s)

    private def loadShader(component: ShaderComponent, setter: String => Unit): Unit = {
        val includes = new HashMap[String, String]()

        var total = 0
        var loaded = 0

        var root: String = null

        def loadIncludes(path: String): Unit = {
            if(includes.containsKey(path)) {
                return
            }

            total += 1

            Game.resourceLoader.loadStr(s"${ResourceLoader.shaderPath}/${path}", s => {
                includes.put(path, s)

                if(root == null) {
                    root = s
                }

                Shader.includeRegex.findAllMatchIn(s).foreach(f => {
                    val path = f.group(1)
                    loadIncludes(path)
                })

                loaded += 1

                if(loaded >= total) {
                    val replaced = new HashSet[String](total - 1)

                    def replaceIncludes(str: String): String = {
                        Shader.includeRegex.replaceAllIn(str, m => {
                            val id = m.group(1)

                            if(!replaced.contains(id)) {
                                replaced.add(id)
                                replaceIncludes(includes.get(id))
                            }
                            else {
                                ""
                            }
                        })
                    }

                    setter(replaceIncludes(root))
                    loadedSources += 1

                    if(loadedSources >= totalSources) {
                        create()
                    }
                }
            })
        }

        loadIncludes(s"${component.id}.${component.suffix}")
    }

    override protected def create(): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.CreateShader
            c.write(this)
        })

        postCreate()
    }

    def setUniform(id: String, value: UniformValue): Unit = {
        buffer(() => {
            Game.runtime.newCommand(c => {
                c.command = Command.SetShaderUniform

                c.write(this)
                c.write(id)
                c.write(value)
            })
        })
    }

    def uniformBufferEmpty: Boolean = (bufferedCount <= 0)

    def bind(): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.BindShader
            c.write(this)
        })
    }

    override def destroy(): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.DestroyShader
            c.write(this)
        })
    }
}

object Shader {
    private val includeRegex = new Regex("#include \"(.+)\"")
}

class ShaderComponent(val id: String, val suffix: String)

class VertexShaderComponent(id: String) extends ShaderComponent(id, "vsh")
class FragmentShaderComponent(id: String) extends ShaderComponent(id, "fsh")

class ShaderID(
    vsh: String,
    fsh: String
) {
    private val str: String = {
        var _str = ""

        if(!vsh.isEmpty) {
            _str += vsh

            if(!fsh.isEmpty) {
                _str += "/"
            }
        }

        if(!fsh.isEmpty) {
            _str += fsh
        }

        _str
    }

    override def toString: String = s"${vsh}/${fsh}"
    override def hashCode(): Int = (vsh.hashCode * 10) + fsh.hashCode
}

class UniformValue

class FloatUniform(val value: Float) extends UniformValue {
    override def equals(obj: Any): Boolean =
        obj.tryAs[FloatUniform] ?? (u => u.value == value) ? false
}

class Uniform2f(val x: Float, val y: Float) extends UniformValue {
    override def equals(obj: Any): Boolean =
        obj.tryAs[Uniform2f] ?? (u => u.x == x && u.y == y) ? false
}

class Uniform3f(val x: Float, val y: Float, val z: Float) extends UniformValue {
    override def equals(obj: Any): Boolean =
        obj.tryAs[Uniform3f] ?? (u => u.x == x && u.y == y && u.z == z) ? false
}

class Uniform4f(val x: Float, val y: Float, val z: Float, val w: Float) extends UniformValue {
    override def equals(obj: Any): Boolean =
        obj.tryAs[Uniform4f] ?? (u => u.x == x && u.y == y && u.z == z && u.w == w) ? false
}

class TextureUniform(val slot: TextureSlot, val texture: Texture) extends UniformValue {
    override def equals(obj: Any): Boolean =
        obj.tryAs[TextureUniform] ?? (u => u.slot == slot && u.texture == texture) ? false
}

class ShaderError(msg: String) extends Exception(msg)

class ShaderCompilationFailureException(id: ShaderID, source: String, error: String, code: String) extends
    ShaderError(s"Failed to compile shader ${source} from ${id}\n${error}\n\nSource:\n${code}")

class ShaderLinkFailureException(id: ShaderID, error: String) extends
    ShaderError(s"Failed to link shader ${id}\n${error}")

class UniformNotFoundException(id: ShaderID, uniformId: String) extends
    ShaderError(s"Uniform ${uniformId} not found for ${id}")
