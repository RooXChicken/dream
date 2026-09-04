package org.loveroo.predef

import org.loveroo.predef.Predef.as
import org.loveroo.predef.Predef.Null

class Either[+L, +R] private (
    @Null val left: L = null.as[L],
    @Null val right: R = null.as[R]
) {
    val isLeft: Boolean = (left != null)
    val isRight: Boolean = (right != null)

    def evaluate[V](ifLeft: L => V, ifRight: R => V): V = {
        if(isLeft) {
            ifLeft(left)
        }
        else {
            ifRight(right)
        }
    }
}

object Either {
    def left[L, R](left: L): Either[L, R] = {
        new Either(left, null.as[R])
    }

    def right[L, R](right: R): Either[L, R] = {
        new Either(null.as[L], right)
    }
}
