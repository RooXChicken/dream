package org.loveroo.webgl.game.scene

import java.util.{HashMap, UUID}
import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.input.Input
import org.loveroo.webgl.engine.math.{Vec3f, Vec3i}
import org.loveroo.webgl.engine.render.*
import org.loveroo.webgl.engine.render.data.TextureSlot
import org.loveroo.webgl.engine.render.shader.{Shader, Uniform}
import org.loveroo.webgl.engine.render.texture.{Sprite, Texture}
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER
import org.loveroo.webgl.engine.runtime.{EngineRuntime, Renderer}
import org.loveroo.webgl.game.Scene
import org.loveroo.webgl.game.entity.Entity
import org.loveroo.webgl.game.entity.living.DummyEntity
import org.loveroo.webgl.game.world.{BlockState, BlockType, Chunk, ChunkMap}

import java.lang.Math

class World extends Scene {
    private val frameBuffer = new RenderBuffer(
        "framebuffer",
        Renderer.colorFormats.RGBA8F,
        Camera.sizeX,
        Camera.sizeY
    )

    private val worldBuffer = new RenderBuffer(
        "world",
        Renderer.colorFormats.RGBA8F,
        Camera.sizeX,
        Camera.sizeY
    )

    private val worldNormalBuffer = new RenderBuffer(
        "world_normal",
        Renderer.colorFormats.RGBA8F,
        Camera.sizeX,
        Camera.sizeY
    )

    private val worldPosBuffer = new RenderBuffer(
        "world_position",
        Renderer.colorFormats.RGBA8F,
        Camera.sizeX,
        Camera.sizeY
    )

    private val worldDepthBuffer = new RenderBuffer(
        "world_depth",
        Renderer.colorFormats.RGBA8F,
        ChunkMap.depthMapSize.x,
        ChunkMap.depthMapSize.y
    )

    private val worldSprite = new Sprite(
        worldBuffer.renderTex,
        new Shader("sprite_raw", "world/world_lighting")
    )

    private val framebufferSprite = new Sprite(
        frameBuffer.renderTex,
        new Shader("sprite_raw", "sprite")
    )

    val versionText = new Sprite(
        ER.font.renderText(EngineRuntime.debugVersionString),
        new Shader("sprite_raw", "sprite")
    )

    versionText.pos = new Vec3f(2, 2)

    framebufferSprite.onLoad(_ => {
        framebufferSprite.scale = framebufferSprite.scale.mul(2.0f)
    })

    worldNormalBuffer.renderTex.onLoad(t => worldSprite.shader.setUniform("normalTex", Uniform.texture(TextureSlot.Two, t)))
    worldPosBuffer.renderTex.onLoad(t => worldSprite.shader.setUniform("posTex", Uniform.texture(TextureSlot.Three, t)))
    worldDepthBuffer.renderTex.onLoad(t => worldSprite.shader.setUniform("depthTex", Uniform.texture(TextureSlot.Four, t)))

    worldSprite.shader.setUniform("depthSize", Uniform.vec2(ChunkMap.depthMapSize.x, ChunkMap.depthMapSize.y))

    private val chunkMap = new ChunkMap()
    chunkMap.init()

    private val entities = new HashMap[UUID, Entity]()

    private var _sunPos = new Vec3i()
    var rendered = false

    def sunPos: Vec3i = _sunPos
    def sunPos_=(value: Vec3i): Unit = {
        _sunPos  = value

        worldSprite.shader.setUniform(
            "sunPos", Uniform.vec3(
                value.x,
                value.y,
                value.z
            )
        )
    }

    override def init(): Unit = {
        super.init()

//        spawnEntity(new BlockOutline(this))
        spawnEntity(new DummyEntity(new Vec3f(32, 120, 32), this))
    }

    override protected def tick(): Unit = {
        super.tick()

        entities.forEach((_, e) => e.tick())

        val rad = Math.toRadians(ticks / 2.0)
        sunPos = new Vec3i(
            -160 + (Math.clamp(Math.cos(rad), -0.8, 0.8) * 5.0).toInt,
            120,
            -120 + (Math.clamp(Math.sin(rad), -0.8, 0.8) * 5.0).toInt
        )

        chunkMap.tick(ticks)

        val renderState = ER.input.isButtonPressed(Input.buttons.debugMode).evaluate(
            if(ER.input.isButtonPressed(Input.buttons.debugShowNormal)) {
                1.0f
            }
            else if(ER.input.isButtonPressed(Input.buttons.debugShowPosition)) {
                2.0f
            }
            else if(ER.input.isButtonPressed(Input.buttons.debugShowWorldPosition)) {
                3.0f
            }
            else {
                0.0f
            },
            0.0f
        )

        worldSprite.shader.setUniform("renderState", Uniform.float(renderState))
    }

    override def render(delta: Double): Unit = {
        ER.camera.lerp(delta)

        chunkMap.regenerateIfNeeded()

        Renderer.enableDepthTest()
        worldNormalBuffer.bindBuffer()
        chunkMap.renderNormals()

        worldPosBuffer.bindBuffer()
        chunkMap.renderPositions()

        worldBuffer.bindBuffer()

        chunkMap.renderWorld()
        entities.forEach((_, e) => e.render(delta))

        Renderer.disableDepthTest()

        if(chunkMap.depthRedrawNeeded) {
            worldDepthBuffer.bindBuffer()

            chunkMap.renderDepth()
        }

        frameBuffer.bindBuffer(false)
        worldSprite.render(0.0)

        Renderer.unbindRenderBuffer()
        framebufferSprite.render(0.0)

        if(!EngineRuntime.debug) {
            versionText.render(delta)
        }
    }

    def spawnEntity(entity: Entity): UUID = {
        val id = UUID.randomUUID()
        entity.uuid = id
        entities.put(id, entity)

        id
    }

    @Null
    def getBlock(x: Int, y: Int, z: Int): BlockType = {
        chunkMap.chunkAtBlock(x, z) ?? (c => {
            c.getBlockAt(
                x - (c.chunkX * Chunk.chunkSizeX),
                y,
                z - (c.chunkZ * Chunk.chunkSizeZ)
            )
        })
    }

    @Null
    def getBlockState(x: Int, y: Int, z: Int): BlockState = {
        getBlock(x, y, z) ?? (t => new BlockState(t, new Vec3i(x, y, z)))
    }
    
    def setBlockAt(blockType: BlockType, x: Int, y: Int, z: Int): Unit = {
        chunkMap.setBlockAt(
            blockType,
            x,
            y,
            z
        )
    }
}
