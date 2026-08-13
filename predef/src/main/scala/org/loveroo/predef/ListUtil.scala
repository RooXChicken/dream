package org.loveroo.predef

object ListUtil {
    def of[E](elements: E*): java.util.List[E] = {
        val list = new java.util.ArrayList[E](elements.size)
        elements.foreach(list.add)

        list
    }
}
