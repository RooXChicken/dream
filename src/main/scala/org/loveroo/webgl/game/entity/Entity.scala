package org.loveroo.webgl.game.entity

import java.util.{LinkedList, List, UUID}
import org.loveroo.webgl.engine.render.Renderable
import org.loveroo.webgl.engine.math.{Lerp, NumberMove, Vec2f, Vec3f}
import org.loveroo.webgl.engine.math.collision.CenteredAABB
import org.loveroo.webgl.game.scene.World
import org.loveroo.webgl.game.world.{BlockState, Chunk}
import scala.scalajs.js.Math

trait Entity(
    val entityType: EntityType,
    val pos: Vec3f,
    private var _world: World
) extends Renderable {
    private val previousPos = pos
    val vel = new Vec3f()
    val hitbox = new CenteredAABB(() => pos, 0.8f)

    private val _collectedBlocks = new LinkedList[BlockState]()

    private var _uuid: UUID = null

    def uuid: UUID = _uuid
    // can only be used once
    def uuid_=(value: UUID): Unit = {
        if(_uuid == null) {
            _uuid = value
        }
    }

    def world: World = _world

    def tick(): Unit = {
        move()
        previousPos.set(pos)

        if(solid) {
            val movement = vel.clone()

            val blocks = collectBlocks()
            blocks.forEach(b => {
                movement.y = hitbox.resolveY(b.hitbox, movement.y)
            })

            pos.y += movement.y

            blocks.forEach(b => {
                movement.x = hitbox.resolveX(b.hitbox, movement.x)
            })

            pos.x += movement.x

            blocks.forEach(b => {
                movement.z = hitbox.resolveZ(b.hitbox, movement.z)
            })

            pos.z += movement.z

            if(movement.x != vel.x) {
                vel.x = 0.0f
            }
            if(movement.y != vel.y) {
                vel.y = 0.0f
            }
            if(movement.z != vel.z) {
                vel.z = 0.0f
            }
        }
        else {
            pos.add(vel)
        }
    }

    def move(): Unit = {
        vel.x = NumberMove.moveTowardCapped(
            vel.x,
            0.0f,
            deceleration
        )

        vel.z = NumberMove.moveTowardCapped(
            vel.z,
            0.0f,
            deceleration
        )

        vel.y -= gravity
    }

    def gravity: Float = 0.01f
    def deceleration: Float = (2.0f / 60.0f)
    def solid: Boolean = true

    def doesCollision: Boolean = true

    def collectBlocks(offset: Vec3f = vel): List[BlockState] = {
        _collectedBlocks.clear()
        val hitbox = this.hitbox.clone().expand(
            offset.x,
            offset.y,
            offset.z
        )

        val xMin = Math.floor(hitbox.minX)
        val yMin = Math.floor(hitbox.minY)
        val zMin = Math.floor(hitbox.minZ)

        val xMax = Math.ceil(hitbox.maxX)
        val yMax = Math.ceil(hitbox.maxY)
        val zMax = Math.ceil(hitbox.maxZ)

        var x = xMin
        while(x < xMax) {
            var y = yMin
            while(y < yMax) {
                var z = zMin
                while(z < zMax) {
                    world.getBlockState(x.toInt, y.toInt, z.toInt) ?? _collectedBlocks.add
                    z += 1
                }

                y += 1
            }

            x += 1
        }

        _collectedBlocks
    }

    private def blendPos(delta: Double): Vec3f = {
        Entity.xyzToWorld(
            Lerp.lerp(delta, previousPos.x, pos.x, order = false).toFloat,
            Lerp.lerp(delta, previousPos.y, pos.y, order = false).toFloat,
            Lerp.lerp(delta, previousPos.z, pos.z, order = false).toFloat
        )
    }

    override def render(delta: Double): Unit = {
        val blend = blendPos(delta)
        renderEntity(blend)
    }

    def renderShadow(delta: Double): Unit = {
        val blend = blendPos(delta)
        renderEntityShadow(blend)
    }

    protected def renderEntity(blend: Vec3f): Unit
    protected def renderEntityShadow(blend: Vec3f): Unit = {}
}

object Entity {
    def xyzToWorld(x: Float, y: Float, z: Float): Vec3f = {
        val blockPos = Chunk.xyzToWorld(x, y, z)

        new Vec3f(
            blockPos.x,
            blockPos.y + 32,
            -y - z
        )
    }
}