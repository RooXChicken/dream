package org.loveroo.webgl.engine.render.batch

import java.util.List

abstract class BatchElement {
    val data: List[? <: ElementData]
}
