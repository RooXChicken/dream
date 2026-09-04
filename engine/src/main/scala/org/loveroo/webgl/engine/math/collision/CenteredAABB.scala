package org.loveroo.webgl.engine.math.collision

import org.loveroo.webgl.engine.math.Vec3f

class CenteredAABB(
    val center: () => Vec3f,
    var sizeX: Float,
    var sizeY: Float,
    var sizeZ: Float,
) extends AABB {
    def this(center: () => Vec3f, size: Float) = {
        this(center, size * 0.5f, size * 0.5f, size * 0.5f)
    }

    override def minX: Float = center().x - sizeX
    override def minY: Float = center().y - sizeY
    override def minZ: Float = center().z - sizeZ

    override def maxX: Float = center().x + sizeX
    override def maxY: Float = center().y + sizeY
    override def maxZ: Float = center().z + sizeZ

    override def centerX: Float = center().x
    override def centerY: Float = center().y
    override def centerZ: Float = center().z

    override def expand(x: Float, y: Float, z: Float): AABB = grow(x, y, z)

    override def grow(x: Float, y: Float, z: Float): AABB = {
        sizeX += x
        sizeY += x
        sizeZ += x

        this
    }
}
