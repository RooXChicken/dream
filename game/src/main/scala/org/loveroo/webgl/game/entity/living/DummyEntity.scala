package org.loveroo.webgl.game.entity.living

import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.input.{Axis, Button, Input}
import org.loveroo.webgl.engine.math.{NumberMove, Vec2f, Vec3f}
import org.loveroo.webgl.engine.render.shader.Shader
import org.loveroo.webgl.engine.render.{ImageTexture, Sprite}
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER
import org.loveroo.webgl.game.entity.{Entity, EntityType, SpriteEntity}
import org.loveroo.webgl.game.scene.World
import org.loveroo.webgl.game.world.BlockType

import java.lang.Math

class DummyEntity(_pos: Vec3f, world: World) extends
    SpriteEntity,
    Entity(EntityType.Dummy, _pos, world)
{
    override protected val _sprite: Sprite = new Sprite(
        new ImageTexture("hitbox"),
        new Shader("sprite")
    )

    private val input = new Vec2f()
    private val movement = new Vec2f()

    override def move(): Unit = {
        // rotate movement
        ER.input.getCombinedAxis(Axis.leftVertical, Axis.leftHorizontal, input)

        if(input.x != 0.0f || input.y != 0.0f) {
            val angle = Math.atan2(-input.y, input.x) + (Math.PI / 4.0)

            movement.x = Math.cos(angle).toFloat
            movement.y = Math.sin(angle).toFloat
        }
        else {
            movement.set(input)
        }

        vel.x = NumberMove.moveTowardCapped(
            vel.x,
            movement.x * topSpeed,
            (Math.abs(movement.x) > 0.0).evaluate(acceleration, deceleration)
        )

        vel.z = NumberMove.moveTowardCapped(
            vel.z,
            movement.y * topSpeed,
            (Math.abs(movement.y) > 0.0).evaluate(acceleration, deceleration)
        )

        if(isGrounded && ER.input.isButtonPressed(Input.buttons.jump)) {
            vel.y = jumpHeight
        }

        vel.y -= gravity
    }

    override def tick(): Unit = {
        super.tick()

        if(ER.input.isButtonPressed(Input.buttons.dummy)) {
            world.setBlockAt(BlockType.Brownie, pos.x.toInt, pos.y.toInt - 1, pos.z.toInt)
        }

        val cameraPos = Entity.xyzToWorld(pos.x, pos.y, pos.z)
        ER.camera.pos = new Vec2f(cameraPos.x, cameraPos.y)
    }

    def acceleration: Float = (0.4f / 60.0f)
    def topSpeed: Float = (4.0f / 60.0f)

    def jumpHeight: Float = 0.18f
}
