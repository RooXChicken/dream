package org.loveroo.webgl.engine.render.batch

import org.loveroo.webgl.engine.data.DataWriter
import org.loveroo.webgl.engine.data.resource.Resource
import org.loveroo.webgl.engine.render.Renderable
import org.loveroo.webgl.engine.render.command.Command
import org.loveroo.webgl.engine.render.shader.Shader
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER
import org.loveroo.webgl.util.{Enum, EnumEntry}

import java.util.List
import scala.Exception

class Batch[E <: BatchElement](
    val id: String,
    var shader: Shader,
    val descriptor: BatchDescriptor
) extends Resource[Batch[E]], Renderable {
    private var _count = 0
    def count: Int = _count

    shader.onLoad(_ => create())

    override protected def create(): Unit = {
        ER.submit(Command.CreateBatch, w => {
            w.string(id)
            w.string(shader.id.toString)

            w.short(descriptor.size.toShort)
            descriptor.write(w)
        })

        postCreate()
    }

    def putBatch(elements: List[E]): Unit = {
        buffer(() => {
            _count = elements.size()

            ER.submit(Command.PutBatch, w => {
                w.string(id)

                w.int(elements.size())
                elements.forEach(_.data.forEach(_(w)))
            })
        })
    }

    def putElement(index: Int, element: E): Unit = {
        buffer(() => {
            ER.submit(Command.PutBatchElement, w => {
                w.string(id)
                w.int(index)

                element.data.forEach(_(w))
            })
        })
    }

    override def render(delta: Double): Unit = {
        if(loaded) {
            shader.bind()

            ER.submit(Command.RenderBatch, w => {
                w.string(id)
            })
        }
    }

    override def destroy(): Unit = {
        shader.destroy()

        ER.submit(Command.DestroyBatch, w => {
            w.string(id)
        })
    }
}

class BatchDescriptor(val types: List[Descriptor]) {
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

    def write(writer: DataWriter): Unit = {
        writer.byte(types.size().toByte)

        types.forEach(t => {
            writer.string(t.id)
            writer.byte(t.descriptorType.ordinal.toByte)
            writer.boolean(t.normalized)
        })
    }
}

class DescriptorDataType private extends EnumEntry

object DescriptorDataType extends Enum[DescriptorDataType] {
    val Float: Entry = register("float", new DescriptorDataType())
    val UByte: Entry = register("ubyte", new DescriptorDataType())
}

class Descriptor(
    val id: String,
    val descriptorType: DescriptorType,
    val normalized: Boolean = false
)

class DescriptorType private (
    val size: Byte,
    val count: Byte,
    val dataType: DescriptorDataType
) extends EnumEntry

object DescriptorType extends Enum[DescriptorType] {
    val Float: Entry = register("float", new DescriptorType(4, 1, DescriptorDataType.Float))
    val Vec2f: Entry = register("vec2f", new DescriptorType(8, 2, DescriptorDataType.Float))
    val Vec3f: Entry = register("vec3f", new DescriptorType(12, 3, DescriptorDataType.Float))
    val Vec4f: Entry = register("vec4f", new DescriptorType(16, 4, DescriptorDataType.Float))

    val UByte: Entry = register("float", new DescriptorType(1, 1, DescriptorDataType.UByte))
    val Vec2UB: Entry = register("vec2ub", new DescriptorType(2, 2, DescriptorDataType.UByte))
    val Vec3UB: Entry = register("vec3ub", new DescriptorType(3, 3, DescriptorDataType.UByte))
    val Vec4UB: Entry = register("vec4ub", new DescriptorType(4, 4, DescriptorDataType.UByte))
}

class AttributeNotFoundException(id: String, attrib: String) extends
    Exception(s"Attribute pointer ${attrib} not found for ${id}")