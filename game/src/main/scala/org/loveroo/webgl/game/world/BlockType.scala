package org.loveroo.webgl.game.world

import java.util.LinkedList
import org.loveroo.webgl.engine.math.{Vec3f, Vec3i}
import org.loveroo.webgl.engine.math.collision.{AABB, CenteredAABB}
import org.loveroo.webgl.game.world.BlockType.ordinalInc

class BlockType(
    val id: String,
    val size: Float = 1.0f,
    val hasNormal: Boolean = false,
    val hasDepth: Boolean = false,
    val hasPos: Boolean = false
) {
    val ordinal: Int = ordinalInc

    BlockType.types.add(this)

    def isTouching(other: AABB, x: Int, y: Int, z: Int): Boolean = {
        if(size <= 0.0f) {
            return false
        }

        shapeFor(new Vec3i(x, y, z)).isTouching(other)
    }

    def shapeFor(pos: Vec3i): AABB = {
        val center = new Vec3f(pos.x + 0.5f, pos.y + 0.5f, pos.z + 0.5f)
        new CenteredAABB(() => center, size)
    }

    override def toString: String = s"BlockType ${id}"
}

object BlockType {
    private var _ordinal = -1

    private def ordinalInc: Int = {
        _ordinal += 1
        _ordinal
    }

    val types = new LinkedList[BlockType]()

    val Air = new BlockType("air", 0.0f, true, true, true)
    val Outline = new BlockType("outline", 0.0f)
    val Grass = new BlockType("grass")
    val Dirt = new BlockType("dirt")
    val Stone = new BlockType("stone")
    val Brownie = new BlockType("brownie")
    val Leaves = new BlockType("leaves", 0.8f)
    val Smiles = new BlockType("smiles", 0.6f)
    val Lantern = new BlockType("lantern", 0.4f)
    val Barrier = new BlockType("barrier", 1.0f, true, true, true)
    val Rose = new BlockType("rose", 0.0f, true, true, true)
}