package org.loveroo.webgl.engine.runtime

import org.loveroo.webgl.engine.data.resource.{ResourceLoader, WebResourceLoader}
import org.loveroo.webgl.engine.data.{DataWriter, Translator, Uint8DataWriter, WebTranslator}
import org.loveroo.webgl.{Dream, Game}
import org.loveroo.webgl.engine.input.Input
import org.loveroo.webgl.engine.math.{Noise, WebNoise}
import org.loveroo.webgl.engine.render.{Renderer, WebGLColorFormats, WebGLTextureTypes}
import org.loveroo.webgl.engine.render.data.{ColorFormats, TextureTypes}
import org.loveroo.webgl.engine.render.shader.{UniformFloatValue, UniformValue, UniformVec2Value, UniformVec3Value, UniformVec4Value}
import org.loveroo.webgl.engine.runtime.input.{WebInput, WebInputEvents}
import org.scalajs.dom
import org.scalajs.dom.HTMLScriptElement

import java.util.UUID
import scala.Exception
import scala.scalajs.js

class WebEngineRuntime extends EngineRuntime {
    override def time: Double = Dream.time

    override val translator: Translator = new WebTranslator()
    override val input: Input = new WebInput()
    override val resourceLoader: ResourceLoader = new WebResourceLoader()

    override val textureTypes: TextureTypes = new WebGLTextureTypes()
    override val colorFormats: ColorFormats = new WebGLColorFormats()

    override val noise: Noise = new WebNoise()

    @Null
    override def formatShaderConst(id: String, value: UniformValue): String = {
        value match {
            case _f: UniformFloatValue => s"highp float ${id} = ${_f.value}.0;"
            case _2f: UniformVec2Value => s"highp vec2 ${id} = vec2(${_2f.x}.0, ${_2f.y}.0);"
            case _3f: UniformVec3Value => s"highp vec3 ${id} = vec3(${_3f.x}.0, ${_3f.y}.0, ${_3f.z}.0);"
            case _4f: UniformVec4Value => s"highp vec4 ${id} = vec4(${_4f.x}.0, ${_4f.y}.0, ${_4f.z}.0, ${_4f.w}.0);"

            case _ => null.as[String]
        }
    }

    override protected def dataWriterSupplier: () => DataWriter =
        () => new Uint8DataWriter()

    override def randomUUID(): UUID = UUID.randomUUID()
    EngineRuntime._engine = this
}