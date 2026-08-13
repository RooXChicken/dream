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

        var x = 0
        while(x < distance) {
            var z = 0
            while(z < distance) {
                chunks.set(chunkIndex(x, z), new Chunk(x, z, generator))
                z += 1
            }

            x += 1
        }

        renderer.regenerateBatch()
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

    def renderWorld(): Unit = {
        renderer.renderWorld()
    }

    def renderNormals(): Unit = {
        renderer.renderNormals()
    }

    def renderPositions(): Unit = {
        renderer.renderPositions()
    }

    def redrawNeeded: Boolean = renderer.depthRedrawNeeded
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

    println(depthMapSize)
}