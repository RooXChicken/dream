package org.loveroo.webgl.game.world

import java.util.ArrayList
import org.loveroo.webgl.engine.data.resource.Destroyable
import org.loveroo.webgl.engine.math.{Vec2f, Vec3i}
import org.loveroo.webgl.engine.render.Renderer
import org.loveroo.webgl.engine.render.shader.{Uniform, UniformFloatValue, UniformVec3Value}
import org.loveroo.webgl.engine.runtime.Renderer

class Chunk(val chunkX: Int, val chunkZ: Int, generator: Generator) extends Destroyable {
    private val blocks = generator.generateBlocks(chunkX, chunkZ)
    private val blocksThatUpdate = new ArrayList[Vec3i]()

    @Null
    def getBlockAt(x: Int, y: Int, z: Int): BlockType = {
        blocks.getOpt(Chunk.xyzToIndex(x, y, z))
    }

    def setBlockAt(block: BlockType, x: Int, y: Int, z: Int): Unit = {
        val index = Chunk.xyzToIndex(x, y, z)
        if(index > 0 && index < blocks.size) {
            blocks.set(index, block)
        }
    }

    override def destroy(): Unit = {

    }
}

object Chunk {
    val blockSize = 8
    val blockPixelSize = 16
    val blockDepthPixelSize = 8

    val chunkSizeX = 8
    val chunkSizeY = 128
    val chunkSizeZ = 8

    val maxDepthColumnPixelCount = 32
    val blocksPerDepthColumn: Int = (maxDepthColumnPixelCount / blockDepthPixelSize)
    val depthColumnsPerChunk: Int = (chunkSizeZ / blocksPerDepthColumn)

    val chunkElementSize: Int = (chunkSizeX * chunkSizeY * chunkSizeZ)
    val chunkDepthElementSize: Int = (chunkSizeX * chunkSizeY * depthColumnsPerChunk)

    Renderer.submitConstant("chunkXSize", new UniformFloatValue(Chunk.chunkSizeX))
    Renderer.submitConstant("chunkZSize", new UniformFloatValue(Chunk.chunkSizeZ))

    Renderer.submitConstant("atlasRowAmount", new UniformFloatValue(16.0f))

    Renderer.submitConstant("blockSize", new UniformFloatValue(Chunk.blockSize))
    Renderer.submitConstant("blockPixelSize", new UniformFloatValue(Chunk.blockPixelSize))
    Renderer.submitConstant("blockDepthPixelSize", new UniformFloatValue(Chunk.blockDepthPixelSize))

    Renderer.submitConstant("distance", new UniformFloatValue(ChunkMap.distance))
    Renderer.submitConstant("depthDiv", new UniformFloatValue(63553.0f))
    Renderer.submitConstant("airBlockOrdinal", new UniformFloatValue(BlockType.Air.ordinal))

    Renderer.submitConstant("worldSize", new UniformVec3Value(
        Chunk.chunkSizeX * ChunkMap.distance * Chunk.blockDepthPixelSize,
        Chunk.chunkSizeY * Chunk.blockDepthPixelSize,
        Chunk.chunkSizeZ * ChunkMap.distance * Chunk.blockDepthPixelSize
    ))

    def xyzToIndex(x: Int, y: Int, z: Int): Int = {
        ((x % chunkSizeX) * chunkSizeY * chunkSizeZ) + ((y % chunkSizeY) * chunkSizeZ) + (z % chunkSizeZ)
    }

    def xyzToWorld(x: Float, y: Float, z: Float): Vec2f = {
        val halfSize = blockPixelSize / 2.0f
        val quarterSize = blockPixelSize / 4.0f

        new Vec2f(
            x * halfSize + z * halfSize,
            (x * quarterSize) + (y * halfSize) - (z * quarterSize)
        )
    }

    def xyzLoop(func: (Int, Int, Int) => Unit): Unit = {
        var x = 0
        var y = 0
        var z = 0

        while(x < chunkSizeX) {
            while(y < chunkSizeY) {
                while(z < chunkSizeZ) {
                    func(x, y, z)
                    z += 1
                }

                z = 0
                y += 1
            }

            y = 0
            x += 1
        }
    }

    def xzLoop(func: (Int, Int) => Unit): Unit = {
        var x = 0
        var z = 0

        while(x < chunkSizeX) {
            while(z < chunkSizeZ) {
                func(x, z)
                z += 1
            }

            z = 0
            x += 1
        }
    }

    def xyLoop(func: (Int, Int) => Unit): Unit = {
        var x = 0
        var y = 0

        while(x < chunkSizeX) {
            while(y < chunkSizeY) {
                func(x, y)
                y += 1
            }

            y = 0
            x += 1
        }
    }
}