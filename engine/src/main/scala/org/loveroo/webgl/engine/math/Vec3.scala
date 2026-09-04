package org.loveroo.webgl.engine.math

trait Vec3[N, V <: Vec3[N, ?]] {
    def x: N
    def x_=(value: N): Unit

    def y: N
    def y_=(value: N): Unit

    def z: N
    def z_=(value: N): Unit

    def add(other: V): V = add(other.x, other.y, other.z)
    def add(x: N, y: N, z: N): V

    def +(other: V): V = {
        val newV = clone().as[V]
        newV.add(other.x, other.y, other.z)

        newV
    }

    def sub(other: V): V = sub(other.x, other.y, other.z)
    def sub(x: N, y: N, z: N): V

    def -(other: V): V = {
        val newV = clone().as[V]
        newV.sub(other.x, other.y, other.z)

        newV
    }

    def mul(other: V): V = mul(other.x, other.y, other.z)
    def mul(amount: N): V = mul(amount, amount, amount)
    def mul(x: N, y: N, z: N): V

    def *(other: V): V = {
        val newV = clone().as[V]
        newV.mul(other.x, other.y, other.z)

        newV
    }

    def div(other: V): V = div(other.x, other.y, other.z)
    def div(amount: N): V = div(amount, amount, amount)
    def div(x: N, y: N, z: N): V

    def /(other: V): V = {
        val newV = clone().as[V]
        newV.div(other.x, other.y, other.z)

        newV
    }

    def set(other: V): V

    protected def name: String
    override def toString: String = s"${name} (${x}, ${y}, ${z})"
}

class Vec3i(
    private var _x: Int = 0,
    private var _y: Int = 0,
    private var _z: Int = 0
) extends Vec3[Int, Vec3i] {
    override def x: Int = _x
    override def x_=(value: Int): Unit = _x = value

    override def y: Int = _y
    override def y_=(value: Int): Unit = _y = value

    override def z: Int = _z
    override def z_=(value: Int): Unit = _z = value

    override def add(x: Int, y: Int, z: Int): Vec3i = {
        _x += x
        _y += y
        _z += z

        this
    }

    override def sub(x: Int, y: Int, z: Int): Vec3i = {
        _x -= x
        _y -= y
        _z -= z

        this
    }

    override def mul(x: Int, y: Int, z: Int): Vec3i = {
        _x *= x
        _y *= y
        _z *= z

        this
    }

    override def div(x: Int, y: Int, z: Int): Vec3i = {
        _x /= x
        _y /= y
        _z /= z

        this
    }

    override def set(other: Vec3i): Vec3i = {
        x = other.x
        y = other.y
        z = other.z

        this
    }

    override def clone(): Vec3i =
        new Vec3i(x, y, z)

    def toVec3f: Vec3f =
        new Vec3f(x, y, z)

    override protected def name: String = "Vec3i"
}

class Vec3f(
    private var _x: Float = 0.0f,
    private var _y: Float = 0.0f,
    private var _z: Float = 0.0f
) extends Vec3[Float, Vec3f] {
    override def x: Float = _x
    override def x_=(value: Float): Unit = _x = value

    override def y: Float = _y
    override def y_=(value: Float): Unit = _y = value

    override def z: Float = _z
    override def z_=(value: Float): Unit = _z = value

    override def add(x: Float, y: Float, z: Float): Vec3f = {
        _x += x
        _y += y
        _z += z

        this
    }

    override def sub(x: Float, y: Float, z: Float): Vec3f = {
        _x -= x
        _y -= y
        _z -= z

        this
    }

    override def mul(x: Float, y: Float, z: Float): Vec3f = {
        _x *= x
        _y *= y
        _z *= z

        this
    }

    override def div(x: Float, y: Float, z: Float): Vec3f = {
        _x /= x
        _y /= y
        _z /= z

        this
    }

    override def set(other: Vec3f): Vec3f = {
        x = other.x
        y = other.y
        z = other.z

        this
    }

    override def clone(): Vec3f =
        new Vec3f(x, y, z)

    def toVec3i: Vec3i =
        new Vec3i(x.toInt, y.toInt, z.toInt)

    override protected def name: String = "Vec3f"
}