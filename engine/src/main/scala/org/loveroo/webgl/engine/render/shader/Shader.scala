package org.loveroo.webgl.engine.render.shader

import org.loveroo.webgl.engine.data.resource.{Resource, ResourceLoader}
import org.loveroo.webgl.engine.render.command.Command
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER
import org.loveroo.webgl.engine.runtime.Renderer

import java.util.{HashMap, HashSet, UUID}
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
        val addedConst = new HashSet[String]()

        var total = 0
        var loaded = 0

        var root: String = null

        def loadIncludes(path: String): Unit = {
            if(includes.containsKey(path)) {
                return
            }

            total += 1

            ER.resourceLoader.loadStr(ResourceLoader.shaderPath(path), s => {
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

                    // TODO: clean this mess up
                    def replaceConst(str: String): String = {
                        Renderer.constantsRegex.replaceAllIn(str, m => {
                            val const = m.group(1)

                            if(!addedConst.contains(const)) {
                                addedConst.add(const)

                                val value = Renderer.constants.get(const)
                                val formatted = ER.formatShaderConst(const, value)

                                if(formatted == null) {
                                    throw new InvalidConstTypeException(id.toString, const)
                                }

                                formatted
                            }
                            else {
                                ""
                            }
                        })
                    }

                    val result = replaceConst(replaceIncludes(root))
                    setter(result)
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
        ER.submit(Command.CreateShader, w => {
            w.string(id.toString)

            w.string(vshSource)
            w.string(fshSource)
        })

        postCreate()
    }

    def setUniform(id: String, value: Uniform): Unit = {
        buffer(() => {
            ER.submit(Command.SetShaderUniform, w => {
                w.string(this.id.toString)

                w.string(id)
                value(w)
            })
        })
    }

    def uniformBufferEmpty: Boolean = (bufferedCount <= 0)

    def bind(): Unit = {
        ER.submit(Command.BindShader, w => {
            w.string(id.toString)
            w.boolean(true)
        })
    }

    override def destroy(): Unit = {
        ER.submit(Command.DestroyShader, w => {
            w.string(id.toString)
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

        _str + "$" + UUID.randomUUID().toString
    }

    override def toString: String = str
    override def hashCode(): Int = str.hashCode
}

class ShaderError(msg: String) extends Exception(msg)

class ShaderCompilationFailureException(id: String, source: String, error: String, code: String) extends
    ShaderError(s"Failed to compile shader ${source} from ${id}\n${error}\n\nSource:\n${code}")

class ShaderLinkFailureException(id: String, error: String) extends
    ShaderError(s"Failed to link shader ${id}\n${error}")

class UniformNotFoundException(id: String, uniformId: String) extends
    ShaderError(s"Uniform ${uniformId} not found for ${id}")

class InvalidConstTypeException(id: String, const: String) extends
    ShaderError(s"Constant ${const} in ${id} has an invalid type")
