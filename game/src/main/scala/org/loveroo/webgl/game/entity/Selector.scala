package org.loveroo.webgl.game.entity

import org.loveroo.webgl.engine.input.Input
import org.loveroo.webgl.engine.math.{Vec3f, Vec3i}
import org.loveroo.webgl.engine.render.Camera
import org.loveroo.webgl.engine.render.texture.{ImageTexture, Sprite}
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER
import org.loveroo.webgl.game.entity.living.DummyEntity
import org.loveroo.webgl.game.scene.World
import org.loveroo.webgl.game.world.{BlockType, Chunk}

import java.util.UUID

class Selector(val playerId: UUID, world: World) extends
    Entity(EntityType.Selector, new Vec3f(), world),
    SpriteEntity
{
    override protected val _sprite: Sprite = new Sprite(new ImageTexture("selector", 16, 16))
    _sprite.offset.y = -4
    _sprite.offset.z = -100

    private var placePressed = false
    private var breakPressed = false

    override def solid: Boolean = false

    override def move(): Unit = {

    }

    override def tick(): Unit = {
        setPreviousPos()

        val blockPos = player.pos.clone()
        while(blockPos.y < 128.0f) {
            blockPos.add(-1.0f, 1.0f, 1.0f)
        }

        val mousePos = ER.input.mousePos
        val centeredMouseX = (mousePos.x.toFloat / Camera.sizeX) - 0.5f
        val centeredMouseY = (mousePos.y.toFloat / Camera.sizeY) - 0.5f

        blockPos.add(
            ((centeredMouseX * 20.0f) + (centeredMouseY * -20.0f)),
            -0.5f,
            ((centeredMouseX * 20.0f) + (centeredMouseY * 20.0f))
        )

        // 10
        var selected = false

        var i = 0
        while(!selected && (Chunk.isInBounds(blockPos.x.toInt, blockPos.y.toInt, blockPos.z.toInt) || i < 800)) {
            (i % 3) match {
                case 0 => blockPos.add(0.2f, 0, 0)
                case 1 => blockPos.add(0, 0, -0.2f)
                case 2 => blockPos.add(0, -0.2f, 0)
            }

            val block = world.getBlock(blockPos.x.toInt, blockPos.y.toInt, blockPos.z.toInt) ? BlockType.Air

            if(block.size > 0.0f) {
                selected = true
            }
            else {
                i += 1
            }
        }

        if(selected) {
            val blockPosRounded = blockPos.toVec3i
            pos.set(blockPosRounded.toVec3f)

            if(ER.input.isButtonPressed(Input.buttons.attack)) {
                if(!breakPressed) {
                    breakPressed = true

                    world.setBlockAt(
                        BlockType.Air,
                        blockPosRounded.x,
                        blockPosRounded.y,
                        blockPosRounded.z
                    )
                }
            }
            else {
                breakPressed = false
            }

            if(ER.input.isButtonPressed(Input.buttons.use)) {
                if(!placePressed) {
                    placePressed = true

                    val blockPosOffset = blockPosRounded.clone()
                    (i % 3) match {
                        case 0 => blockPosOffset.x -= 1
                        case 1 => blockPosOffset.z += 1
                        case 2 => blockPosOffset.y += 1
                    }

                    world.setBlockAt(
                        BlockType.Brownie,
                        blockPosOffset.x,
                        blockPosOffset.y,
                        blockPosOffset.z
                    )
                }
            }
            else {
                placePressed = false
            }
        }

        visible = selected
    }

    private def player: DummyEntity =
        world.getEntity(playerId).tryAs[DummyEntity]
}
