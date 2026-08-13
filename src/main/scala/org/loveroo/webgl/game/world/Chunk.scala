package org.loveroo.webgl.game.world

import java.util.ArrayList
import org.loveroo.webgl.engine.data.resource.Destroyable
import org.loveroo.webgl.engine.math.{Vec2f, Vec3i}

class Chunk(val chunkX: Int, val chunkZ: Int, generator: Generator) extends Destroyable {
    // TODO: look into ensuring order is blocks closer first
    // to optimize depth
    private val blocks = generator.generateBlocks(chunkX, chunkZ)
    private val blocksThatUpdate = new ArrayList[Vec3i]()

//    {
//        val world = Chunk.xyzToWorld(chunkX * chunkSizeX, 0, chunkZ * chunkSizeZ)
//
//        blocksSprite.pos = new Vec3f(
//            world.x,
//            world.y,
//            -chunkZ + chunkX
//        )
//
//        blockBatch.shader.setUniform(
//            "blockSize",
//            new FloatUniform(blockSize)
//        )
//
//        blockBatch.shader.setUniform(
//            "blockTex",
//            new TextureUniform(TextureSlot.One, Chunk.blockAtlas)
//        )
//
//        blockBatch.shader.setUniform(
//            "normalTex",
//            new TextureUniform(TextureSlot.Two, Chunk.normalAtlas)
//        )
//
//        blockBatch.shader.setUniform(
//            "posTex",
//            new TextureUniform(TextureSlot.Three, Chunk.posAtlas)
//        )
//
//        depthSprite.pos = new Vec3f(
//            chunkX * chunkSizeX * blockSize,
//            chunkZ,
//            0
//        )
//    }

    @Null
    def getBlockAt(x: Int, y: Int, z: Int): BlockType = {
        blocks.getOpt(Chunk.xyzToIndex(x, y, z))
    }

    def setBlockAt(block: BlockType, x: Int, y: Int, z: Int): Unit = {
        val index = Chunk.xyzToIndex(x, y, z)
        if(index > 0 && index < blocks.size) {
            blocks.set(index, block)

//            blockBatch.putElement(index, blockElementFor(x, y, z))
//            depthBatch.putElement((x * chunkSizeX) + y, depthElementFor(x, y))
//
//            needsRedraw = true
        }
    }

    override def destroy(): Unit = {

    }
}

object Chunk {
    val blockPixelSize = 16
    val blockDepthPixelSize = 8

    val chunkSizeX = 8
    val chunkSizeY = 128
    val chunkSizeZ = 8

    val chunkElementSize: Int = (chunkSizeX * chunkSizeY * chunkSizeZ)

    val maxDepthColumnPixelCount = 32
    val blocksPerDepthColumn: Int = (maxDepthColumnPixelCount / blockDepthPixelSize)
    val depthColumnsPerChunk: Int = (chunkSizeZ / blocksPerDepthColumn)

//    val chunkTextureSize = new Vec2i(
//        ((chunkSizeX * (blockSize / 2)) + (chunkSizeZ * (blockSize / 2))),
//        ((chunkSizeX * (blockSize / 4)) + (chunkSizeY * (blockSize / 2)) + (chunkSizeZ * (blockSize / 4)))
//    )

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