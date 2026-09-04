package org.loveroo.webgl.engine.math

trait Vec2[N, V <: Vec2[N, ?]] {
    def x: N
    def x_=(value: N): Unit

    def y: N
    def y_=(value: N): Unit

    def add(x: N, y: N): V
    def +(other: V): V = {
        val newV = clone().as[V]
        newV.add(other.x, other.y)

        newV
    }

    def sub(x: N, y: N): V
    def -(other: V): V = {
        val newV = clone().as[V]
        newV.sub(other.x, other.y)

        newV
    }

    def mul(amount: N): V = mul(amount, amount)
    def mul(x: N, y: N): V

    def *(other: V): V = {
        val newV = clone().as[V]
        newV.mul(other.x, other.y)

        newV
    }

    def div(amount: N): V = div(amount, amount)
    def div(x: N, y: N): V

    def /(other: V): V = {
        val newV = clone().as[V]
        newV.div(other.x, other.y)

        newV
    }

    def set(other: V): V

    protected def name: String
    override def toString: String = s"${name} (${x}, ${y})"
}

class Vec2i(
    private var _x: Int = 0,
    private var _y: Int = 0
) extends Vec2[Int, Vec2i] {
    override def x: Int = _x
    override def x_=(value: Int): Unit = _x = value

    override def y: Int = _y
    override def y_=(value: Int): Unit = _y = value

    override def add(x: Int, y: Int): Vec2i = {
        _x += x
        _y += y

        this
    }

    override def sub(x: Int, y: Int): Vec2i = {
        _x -= x
        _y -= y

        this
    }

    override def mul(x: Int, y: Int): Vec2i = {
        _x *= x
        _y *= y

        this
    }

    override def div(x: Int, y: Int): Vec2i = {
        _x /= x
        _y /= y

        this
    }

    override def set(other: Vec2i): Vec2i = {
        x = other.x
        y = other.y

        this
    }

    override def clone(): Vec2i =
        new Vec2i(x, y)

    def toVec2f: Vec2f =
        new Vec2f(x, y)

    override protected def name: String = "Vec2i"
}

class Vec2f(
    private var _x: Float = 0.0f,
    private var _y: Float = 0.0f
) extends Vec2[Float, Vec2f] {
    override def x: Float = _x
    override def x_=(value: Float): Unit = _x = value

    override def y: Float = _y
    override def y_=(value: Float): Unit = _y = value

    override def add(x: Float, y: Float): Vec2f = {
        _x += x
        _y += y

        this
    }

    override def sub(x: Float, y: Float): Vec2f = {
        _x -= x
        _y -= y

        this
    }

    override def mul(x: Float, y: Float): Vec2f = {
        _x *= x
        _y *= y

        this
    }

    override def div(x: Float, y: Float): Vec2f = {
        _x /= x
        _y /= y

        this
    }

    override def set(other: Vec2f): Vec2f = {
        x = other.x
        y = other.y

        this
    }

    override def clone(): Vec2f =
        new Vec2f(x, y)

    def toVec2i: Vec2i =
        new Vec2i(x.toInt, y.toInt)

    override protected def name: String = "Vec2f"
}