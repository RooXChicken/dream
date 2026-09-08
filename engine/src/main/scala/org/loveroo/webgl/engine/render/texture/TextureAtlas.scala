package org.loveroo.webgl.engine.render.texture

import org.loveroo.webgl.engine.math.{Vec2i, Vec3f}
import org.loveroo.webgl.engine.render.RenderBuffer
import org.loveroo.webgl.engine.render.shader.Shader
import org.loveroo.webgl.engine.runtime.{EngineRuntime, Renderer}

import java.util.{HashMap, List, Map}

class TextureAtlas(
    id: String,
    val path: String,
    val atlasSize: Vec2i,
    val elementSize: Vec2i,
    @Null private val elements: List[AtlasID] = null
) extends RenderBuffer(
    id,
    Renderer.colorFormats.RGBA8F,
    atlasSize.x,
    atlasSize.y
) {
    @Null
    private var atlasInfo: HashMap[String, AtlasInfo] = _
    private var atlasLoaded = false

    private val shader = new Shader("sprite_raw", "sprite")

    private var xCount: Int = _

    override protected def create(): Unit = {
        super.create()

        xCount = (atlasSize.x / elementSize.x)
        atlasInfo = new HashMap()

        var i = 0
        elements.forEach(id => {
            val posX = (elementSize.x * (i % xCount)).toFloat
            val posY = (atlasSize.y - ((i / xCount) * elementSize.y)).toFloat

            atlasInfo.put(
                id.id,
                new AtlasInfo(
                    posX / atlasSize.x,
                    (posY - elementSize.y) / atlasSize.y,
                    (posX + elementSize.x) / atlasSize.x,
                    (posY / atlasSize.y)
                )
            )

            i += 1
        })

        val textures = new HashMap[String, Texture]()

        var loaded = 0

        elements.forEach(id => {
            val image = new ImageTexture(s"${path}/${id.file}", elementSize.x, elementSize.y)
            textures.put(id.id, image)

            image.onLoad(i => {
                loaded += 1

                if(loaded >= elements.size()) {
                    shader.onLoad(_ => {
                        onTextureLoadComplete(textures)
                    })
                }
            })
        })
    }

    private def onTextureLoadComplete(textures: Map[String, Texture]): Unit = {
        EngineRuntime.debugLog(s"Stitching atlas ${id} with ${textures.size()} elements")

        bindBuffer()
        Renderer.disableDepthTest()

        var i = 0
        elements.forEach(id => {
            val texture = textures.get(id.id)
            val sprite = new Sprite(texture, shader)

            sprite.pos = new Vec3f(
                elementSize.x * (i % xCount),
                atlasSize.y - ((i / xCount) * elementSize.y) - elementSize.y,
                1.0f
            )

            texture.bind()
            sprite.render(0.0)
            i += 1
        })

        shader.destroy()
        textures.forEach((_, t) => t.destroy())

        atlasLoaded = true
        postCreate()
    }

    override protected def postCreate(): Unit = {
        if(atlasLoaded) {
            super.postCreate()
        }
    }

    override def bindBuffer(clear: Boolean): Unit = {
        if(!atlasLoaded) {
            super.bindBuffer(clear)
        }
    }

    @Null
    def infoFor(id: String): AtlasInfo = atlasInfo.get(id)

    private def isValidPos(pos: Vec2i, texture: Texture): Boolean = {
        atlasInfo.forEach((_, t) => {
            if(!(pos.x < t.u2 &&
                 pos.x + texture.width < t.u1 &&
                 pos.y < t.v2 &&
                 pos.y + texture.height > t.v1
                )) {
                return false
            }
        })

        true
    }
}

class AtlasID(val id: String, val file: String) {
    def this(id: String) = {
        this(id, id)
    }

    override def toString: String = s"AtlasID ${id} ${file}"
}

class AtlasInfo(
    val u1: Float,
    val v1: Float,
    val u2: Float,
    val v2: Float
)

