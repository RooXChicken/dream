package org.loveroo.webgl.engine.render.batch

import java.util.List
import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.data.resource.Resource
import org.loveroo.webgl.engine.math.{Vec2f, Vec3f}
import org.loveroo.webgl.engine.render.frame.command.Command
import org.loveroo.webgl.engine.render.{Renderable, Shader}
import scala.Predef.classOf
import scala.RuntimeException

class Batch[E <: BatchElement](
    val id: String,
    var shader: Shader,
    val descriptor: BatchDescriptor
) extends Resource[Batch[E]], Renderable {
    private var _count = 0
    def count: Int = _count

    shader.onLoad = _ => create()

    override protected def create(): Unit = {
        Game.runtime.newCommand(c => {
            c.command = Command.CreateBatch
            c.write(this)
        })

        postCreate()
    }

    def putBatch(elements: List[E]): Unit = {
        buffer(() => {
            _count = elements.size

            Game.runtime.newCommand(c => {
                c.command = Command.PutBatch

                c.write(this)
                c.write(elements)
            })
        })
    }

    def putElement(index: Int, element: E): Unit = {
        buffer(() => {
            Game.runtime.newCommand(c => {
                c.command = Command.PutBatchElement

                c.write(this)
                c.write(index)
                c.write(element)
            })
        })
    }

    override def render(delta: Double): Unit = {
        if(loaded && shader.loaded) {
            shader.bind()

            Game.runtime.newCommand(c => {
                c.command = Command.RenderBatch
                c.write(this)
            })
        }
    }

    override def destroy(): Unit = {
        shader.destroy()
        Game.runtime.newCommand(c => {
            c.command = Command.DestroyBatch
            c.write(this)
        })
    }
}

class BatchDescriptor(val types: List[Descriptor[?]]) {
    val size: Int = {
        var _size = 0
        types.forEach(t => _size += t.descriptorType.size)

        _size
    }

    val count: Int = {
        var _count = 0
        types.forEach(t => _count += t.descriptorType.count)

        _count
    }
}

class DataType

object DataType {
    val Float = new DataType()
    val Texture2D = new DataType()
}

class ElementData
class FloatElementData(val value: Float) extends ElementData
class Vec2ElementData(val x: Float, val y: Float) extends ElementData
class Vec3ElementData(val x: Float, val y: Float, val z: Float) extends ElementData
class Vec4ElementData(val x: Float, val y: Float, val z: Float, val w: Float) extends ElementData

class Descriptor[T <: ElementData](val id: String, val descriptorType: DescriptorType[T])

class DescriptorType[T <: ElementData] private (
    val size: Int,
    val count: Int,
    val dataType: DataType,
    val elementData: Class[T]
)

object DescriptorType {
    val Float = new DescriptorType(4, 1, DataType.Float, classOf[FloatElementData])
    val Vec2 = new DescriptorType(8, 2, DataType.Float, classOf[Vec2ElementData])
    val Vec3 = new DescriptorType(12, 3, DataType.Float, classOf[Vec3ElementData])
    val Vec4 = new DescriptorType(16, 4, DataType.Float, classOf[Vec4ElementData])
}

class AttributeNotFoundException(id: String, attrib: String) extends
    RuntimeException(s"Attribute pointer ${attrib} not found for ${id}")