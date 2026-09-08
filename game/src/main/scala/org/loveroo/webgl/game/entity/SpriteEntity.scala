package org.loveroo.webgl.game.entity

import org.loveroo.webgl.engine.math.Vec3f
import org.loveroo.webgl.engine.render.texture.Sprite

trait SpriteEntity extends Entity {
    protected val _sprite: Sprite

    override protected def renderEntity(blend: Vec3f): Unit = {
        _sprite.pos = blend
        _sprite.render(0.0)
    }

    override protected def renderEntityShadow(blend: Vec3f): Unit = {
        _sprite.pos = blend
        _sprite.render(0.0)
    }
}
