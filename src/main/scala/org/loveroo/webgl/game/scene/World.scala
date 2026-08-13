package org.loveroo.webgl.game.scene

import java.util.{HashMap, UUID}
import org.loveroo.webgl.engine.render.*
import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.input.{Button, Input}
import org.loveroo.webgl.engine.math.{Vec3f, Vec3i, clamp, toRadians}
import org.loveroo.webgl.engine.render.Renderer
import org.loveroo.webgl.engine.render.data.TextureSlot
import org.loveroo.webgl.game.Scene
import org.loveroo.webgl.game.entity.Entity
import org.loveroo.webgl.game.entity.living.DummyEntity
import org.loveroo.webgl.game.world.{BlockState, BlockType, Chunk, ChunkMap, ChunkRenderer}
import org.scalajs.dom
import scala.scalajs.js
import scala.scalajs.js.Math

class World extends Scene {
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

    private val worldPositionBuffer = new RenderBuffer(
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
        worldBuffer,
        new Shader("sprite_raw", "world/world_lighting")
    )

    worldSprite.onLoad = _ => {
        worldSprite.scale = worldSprite.scale.mul(2.0f)
    }

    worldSprite.shader.setUniform("worldSize", new Uniform3f(
        Chunk.chunkSizeX * ChunkMap.distance * Chunk.blockDepthPixelSize,
        Chunk.chunkSizeY * Chunk.blockDepthPixelSize,
        Chunk.chunkSizeZ * ChunkMap.distance * Chunk.blockDepthPixelSize
    ))

    worldSprite.shader.setUniform("normalTex", new TextureUniform(TextureSlot.Two, worldNormalBuffer))
    worldSprite.shader.setUniform("posTex", new TextureUniform(TextureSlot.Three, worldPositionBuffer))

    private val chunkMap = new ChunkMap()
    chunkMap.init()

    worldSprite.shader.setUniform("depthTex", new TextureUniform(TextureSlot.Four, worldDepthBuffer))
    worldSprite.shader.setUniform("depthSize", new Uniform2f(ChunkMap.depthMapSize.x, ChunkMap.depthMapSize.y))

    private val entities = new HashMap[UUID, Entity]()

    private var _sunPos = new Vec3i()

    def sunPos: Vec3i = _sunPos
    def sunPos_=(value: Vec3i): Unit = {
        _sunPos  = value

        worldSprite.shader.setUniform(
            "sunPos", new Uniform3f(
                value.x,
                value.y,
                value.z
            )
        )
    }

    override def init(): Unit = {
        super.init()

//        spawnEntity(new BlockOutline(this))
        spawnEntity(new DummyEntity(new Vec3f(10, 90, 10), this))
    }

    override protected def tick(): Unit = {
        super.tick()

//        val input = Game.input.getAxis(Axis.Movement)
//        Game.window.camera.pos = Game.window.camera.pos + input

        entities.forEach((_, e) => e.tick())

//        val mouse = Game.input.mousePos
//        val dir = Math.atan2(
//            (mouse.y - (Camera.sizeY / 2.0)),
//            (mouse.x - (Camera.sizeX / 2.0))
//        ) + (Math.PI / 4.0)
//
//        sunPos = new Vec3i(
//            (Math.cos(dir) * 100).toInt,
//            100,
//            (Math.sin(dir) * 100).toInt
//        )

        val rad = Math.toRadians(ticks / 2.0)
        sunPos = new Vec3i(
            -160 + (Math.clamp(Math.cos(rad), -0.8, 0.8) * 5.0).toInt,
            120,
            -120 + (Math.clamp(Math.sin(rad), -0.8, 0.8) * 5.0).toInt
        )

        chunkMap.tick(ticks)

        val renderState = Game.runtime.input.isButtonPressed(Input.buttons.debugMode).evaluate(
            if(Game.runtime.input.isButtonPressed(Input.buttons.debugShowNormal)) {
                1.0f
            }
            else if(Game.runtime.input.isButtonPressed(Input.buttons.debugShowPosition)) {
                2.0f
            }
            else if(Game.runtime.input.isButtonPressed(Input.buttons.debugShowWorldPosition)) {
                3.0f
            }
            else {
                0.0f
            },
            0.0f
        )

        worldSprite.shader.setUniform("renderState", new FloatUniform(renderState))
    }

    override def render(delta: Double): Unit = {
        Game.runtime.camera.lerp(delta)

        if(chunkMap.redrawNeeded) {
            Renderer.disableDepthTest()
            worldDepthBuffer.bindBuffer()

            chunkMap.renderDepth()

            Renderer.enableDepthTest()
        }

        worldNormalBuffer.bindBuffer()
        chunkMap.renderNormals()

        worldPositionBuffer.bindBuffer()
        chunkMap.renderPositions()

        worldBuffer.bindBuffer()

        chunkMap.renderWorld()
        entities.forEach((_, e) => e.render(delta))

        Renderer.unbindRenderBuffer()

        worldSprite.render(delta)
    }

    def spawnEntity(entity: Entity): UUID = {
        val id = new UUID(0, 0)
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
        chunkMap.chunkAtBlock(x, z) ?? (_.setBlockAt(
            blockType,
            x % Chunk.chunkSizeX,
            y % Chunk.chunkSizeY,
            z % Chunk.chunkSizeZ
        ))
    }
}
