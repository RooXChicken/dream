package org.loveroo.webgl.game.world

import org.loveroo.webgl.engine.math.Vec3i
import org.loveroo.webgl.engine.math.collision.AABB

class BlockState(val blockType: BlockType, val pos: Vec3i) {
    val hitbox: AABB = blockType.shapeFor(pos)

    def isTouching(aabb: AABB): Boolean = {
        hitbox.isTouching(aabb)
    }
}
