package org.loveroo.webgl.engine.math.collision

class BasicAABB(
    private var _minX: Float = 0.0f,
    private var _minY: Float = 0.0f,
    private var _minZ: Float = 0.0f,
    private var _maxX: Float = 0.0f,
    private var _maxY: Float = 0.0f,
    private var _maxZ: Float = 0.0f
) extends AABB {
    override def minX: Float = _minX
    def minX_=(value: Float): Unit = _minX = value

    override def minY: Float = _minY
    def minY_=(value: Float): Unit = _minY = value

    override def minZ: Float = _minZ
    def minZ_=(value: Float): Unit = _minZ = value

    override def maxX: Float = _maxX
    def maxX_=(value: Float): Unit = _maxX = value

    override def maxY: Float = _maxY
    def maxY_=(value: Float): Unit = _maxY = value

    override def maxZ: Float = _maxZ
    def maxZ_=(value: Float): Unit = _maxZ = value

    override def expand(x: Float, y: Float, z: Float): AABB = {
        if(x > 0.0f) {
            maxX += x
        }
        else {
            minX += x
        }

        if(y > 0.0f) {
            maxY += y
        }
        else {
            minY += y
        }

        if(z > 0.0f) {
            maxZ += z
        }
        else {
            minZ += z
        }

        this
    }

    override def grow(x: Float, y: Float, z: Float): AABB = {
        minX -= x
        minY -= y
        minZ -= z

        maxX += x
        maxY += y
        maxZ += z

        this
    }
}
