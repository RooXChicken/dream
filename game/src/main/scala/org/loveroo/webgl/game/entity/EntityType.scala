package org.loveroo.webgl.game.entity

import org.loveroo.webgl.game.entity.EntityType.ordinalInc

class EntityType(val id: String) {
    val ordinal: Int = ordinalInc
}

object EntityType {
    private var ordinal = -1

    private def ordinalInc: Int = {
        ordinal += 1
        ordinal
    }

    val Dummy = new EntityType("dummy")
    val Selector = new EntityType("selector")
    val Player = new EntityType("player")
}