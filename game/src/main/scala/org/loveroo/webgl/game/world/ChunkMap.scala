package org.loveroo.webgl.game.world

import java.util.{ArrayList, List}
import org.loveroo.webgl.engine.data.resource.Destroyable
import org.loveroo.webgl.engine.math.Vec2i
import org.loveroo.webgl.engine.render.Texture
import org.loveroo.webgl.game.world.ChunkMap.distance
import scala.collection.mutable.{ArrayBuffer, Buffer, ListBuffer}

class ChunkMap extends Destroyable {
    private val chunks: List[Chunk] = {
        val list = new ArrayList[Chunk](distance * distance)

        // init with null
        val targetSize = distance * distance

        var i = 0
        while(i < targetSize) {
            list.add(null)
            i += 1
        }

        list
    }

    private val renderer = new ChunkRenderer(this)

    def init(): Unit = {
        val generator = new TestGenerator()

        val radius = 8.0
        val halfDist = (distance / 2.0)

        var x = -halfDist
        while(x < halfDist) {
            val xDist = (x * x)

            var z = -halfDist
            while(z < halfDist) {
                val zDist = (z * z)
                if(xDist + zDist <= radius) {
                    val xPos = (x + halfDist).toInt
                    val zPos = (z + halfDist).toInt

                    if(chunks.get(chunkIndex(xPos, zPos)) == null) {
                        chunks.set(chunkIndex(xPos, zPos), new Chunk(xPos, zPos, generator))
                    }
                }

                z += 0.1
            }

            x += 0.1
        }

        renderer.queueRegeneration()
    }

    def tick(ticks: Int): Unit = {

    }

    @Null
    def chunkAtBlock(x: Int, z: Int): Chunk = {
        chunkAt(x / Chunk.chunkSizeX, z / Chunk.chunkSizeZ)
    }

    @Null
    def chunkAt(x: Int, z: Int): Chunk = {
        chunks.getOpt(chunkIndex(x, z))
    }

    def chunkIndex(x: Int, z: Int): Int = {
        (x * distance) + z
    }

    def isChunkValid(x: Int, z: Int): Boolean =
        (chunkAt(x, z) != null)

    def forChunks(func: Chunk => Unit): Unit = {
        chunks.forEach(c => {
            if(c != null) {
                func(c)
            }
        })
    }

    def regenerateIfNeeded(): Unit =
        renderer.regenerateIfNeeded()

    def renderWorld(): Unit = {
        renderer.renderWorld()
    }

    def renderNormals(): Unit = {
        renderer.renderNormals()
    }

    def renderPositions(): Unit = {
        renderer.renderPositions()
    }

    def depthRedrawNeeded: Boolean = renderer.depthRedrawNeeded
    def renderDepth(): Unit = {
        renderer.renderDepth()
    }

    override def destroy(): Unit = {
        forChunks(_.destroy())
        chunks.clear()
    }
}

object ChunkMap {
    // max of 8
    val distance = 8

    val depthMapSize = new Vec2i(
        (Chunk.blockDepthPixelSize * Chunk.chunkSizeX * ChunkMap.distance * ChunkMap.distance * Chunk.depthColumnsPerChunk),
        (Chunk.blockDepthPixelSize * Chunk.chunkSizeY)
    )
}