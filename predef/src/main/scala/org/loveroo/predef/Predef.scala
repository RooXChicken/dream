package org.loveroo.predef

import java.util.ArrayList
import scala.collection.mutable.{Buffer, HashMap, ImmutableBuilder}

object Predef {
    // scala default types
    type Byte = scala.Byte
    type Short = scala.Short
    type Int = scala.Int
    type Long = scala.Long
    type Float = scala.Float
    type Double = scala.Double
    type Boolean = scala.Boolean
    type Char = scala.Char
    type Unit = scala.Unit
    type Any = scala.Any
    type AnyVal = scala.AnyVal
    type AnyRef = scala.AnyRef
    type Array = scala.Array

    type String = scala.Predef.String
    type Class[T] = scala.Predef.Class[T]

    def ??? : Nothing = throw new NotImplementedError()

    inline def print(x: Any): Unit = scala.Predef.print(x)
    inline def println(): Unit = scala.Predef.println()
    inline def println(x: Any): Unit = scala.Predef.println(x)

    class Null extends scala.annotation.Annotation {}

    extension [T](list: java.util.List[T]) {
        def random: T = {
            list.get((list.size() * Math.random()).toInt)
        }

        @Null
        def find(condition: T => Boolean): T = {
            list.forEach(e => {
                if(condition(e)) {
                    return e
                }
            })

            null.as[T]
        }

        @Null
        def getOpt(index: Int): T = {
            if(index < 0 || index >= list.size()) {
                null.as[T]
            }
            else {
                list.get(index)
            }
        }

        def map[R](func: T => R): java.util.List[R] = {
            val newList = new ArrayList[R](list.size())
            list.forEach(e => newList.add(func(e)))

            newList
        }
    }

    extension [A](any: A) {
        inline def is[T]: Boolean = {
            any.isInstanceOf[T]
        }

        @Null
        inline def tryAs[T]: T = {
            any match {
                case casted: T => casted
                case _ => null.as[T]
            }
        }

        inline def as[T]: T = {
            any.asInstanceOf[T]
        }

        inline def ?(default: => A): A = {
            if(any == null) {
                default
            }
            else {
                any
            }
        }

        inline def ??[R](func: A => R): R = {
            if(any == null) {
                null.as[R]
            }
            else {
                func(any)
            }
        }
    }

    extension (bool: Boolean) {
        /**
         * Shorthand for <pre>if(boolean) { ifTrue } else { ifFalse }</pre>
         *
         * @param ifTrue  Value if the boolean is true
         * @param ifFalse Value if the boolean is false
         * @tparam V The type of value
         * @return The value determined by if this boolean is true or false
         */
        inline def evaluate[V](ifTrue: => V, ifFalse: => V): V = {
            if(bool) {
                ifTrue
            }
            else {
                ifFalse
            }
        }
    }
}

