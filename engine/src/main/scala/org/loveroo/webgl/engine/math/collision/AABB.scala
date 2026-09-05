package org.loveroo.webgl.engine.math.collision

import java.lang.Math

trait AABB {
    def minX: Float
    def minY: Float
    def minZ: Float

    def maxX: Float
    def maxY: Float
    def maxZ: Float

    def centerX: Float = ((minX + maxX) / 2.0f)
    def centerY: Float = ((minY + maxY) / 2.0f)
    def centerZ: Float = ((minZ + maxZ) / 2.0f)

    def lengthX: Float = (Math.max(minX, maxX) - Math.min(maxX, minX)).toFloat
    def lengthY: Float = (Math.max(minY, maxY) - Math.min(maxY, minY)).toFloat
    def lengthZ: Float = (Math.max(minZ, maxZ) - Math.min(maxZ, minZ)).toFloat

    def expand(x: Float, y: Float, z: Float): AABB
    def grow(x: Float, y: Float, z: Float): AABB

    def shrink(x: Float, y: Float, z: Float): AABB =
        grow(-x, -y, -z)

    def touchingX(other: AABB): Boolean =
        (minX < other.maxX && maxX > other.minX)

    def touchingY(other: AABB): Boolean =
        (minY < other.maxY && maxY > other.minY)

    def touchingZ(other: AABB): Boolean =
        (minZ < other.maxZ && maxZ > other.minZ)

    def isTouching(other: AABB): Boolean =
        (touchingX(other) && touchingY(other) && touchingZ(other))

    def resolveX(other: AABB, speed: Float): Float = {
        if(other.lengthX <= 0.0f) {
            return speed
        }

        if(touchingY(other) && touchingZ(other)) {
            resolveAxis(speed, minX, maxX, other.minX, other.maxX)
        }
        else {
            speed
        }
    }

    def resolveY(other: AABB, speed: Float): Float = {
        if(other.lengthY <= 0.0f) {
            return speed
        }

        if(touchingX(other) && touchingZ(other)) {
            resolveAxis(speed, minY, maxY, other.minY, other.maxY)
        }
        else {
            speed
        }
    }

    def resolveZ(other: AABB, speed: Float): Float = {
        if(other.lengthZ <= 0.0f) {
            return speed
        }

        if(touchingX(other) && touchingY(other)) {
            resolveAxis(speed, minZ, maxZ, other.minZ, other.maxZ)
        }
        else {
            speed
        }
    }

    private def resolveAxis(vel: Float, min: Float, max: Float, otherMin: Float, otherMax: Float): Float = {
        if(vel > 0.0f && max <= otherMin) {
            Math.min(vel, otherMin - max)
        }
        else if(vel < 0.0f && min >= otherMax) {
            Math.max(vel, otherMax - min)
        }
        else {
            vel
        }
    }

    override def clone(): AABB = new BasicAABB(
        minX,
        minY,
        minZ,
        maxX,
        maxY,
        maxZ
    )
}
