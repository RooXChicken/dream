package org.loveroo.webgl.game.world

import java.util.{ArrayList, List}
import org.loveroo.webgl.Game
import org.loveroo.webgl.engine.math.Noise
import org.loveroo.webgl.engine.runtime.EngineRuntime
import org.loveroo.webgl.engine.runtime.EngineRuntime.ER

import java.lang.Math

trait Generator {
    def generateBlocks(chunkX: Int, chunkZ: Int): List[BlockType]
}

class TestGenerator extends Generator {
    ER.noise.noiseSeed(EngineRuntime.isDebug.evaluate(0.0, ER.time))

    override def generateBlocks(chunkX: Int, chunkZ: Int): List[BlockType] = {
        val blocks = new ArrayList[BlockType](Chunk.chunkElementSize)
        while(blocks.size < Chunk.chunkElementSize) {
            blocks.add(BlockType.Air)
        }

        Chunk.xzLoop((x, z) => {
            val height = ER.noise.noise(
                (x + (chunkX * Chunk.chunkSizeX)) / 10.0,
                (z + (chunkZ * Chunk.chunkSizeZ)) / 10.0
            ) * 8 + 70

            var y = 0
            while(y < height) {
                val index = Chunk.xyzToIndex(x, y, z)

                val blockType = if(y < 66) {
                    BlockType.Stone
                }
                else if(y < height - 2) {
                    BlockType.Dirt
                }
                else if(y <= height - 1) {
                    BlockType.Grass
                }
                else {
                    BlockType.Air
                }

                blocks.set(index, blockType)

                y += 1
            }

//            y -= 1
//            if(x == 3 && z == 5) {
//                while(y < 82) {
//                    blocks.set(Chunk.xyzToIndex(x, y, z), BlockType.Stone)
//                    y += 1
//                }
//            }
        })

        blocks
    }
}

class ShadowTestGen extends Generator {
    override def generateBlocks(chunkX: Int, chunkZ: Int): List[BlockType] = {
        val blocks = new ArrayList[BlockType](Chunk.chunkElementSize)
        while(blocks.size < Chunk.chunkElementSize) {
            blocks.add(BlockType.Air)
        }

        val randX = (Math.random() * 8.0).toInt
        val randZ = (Math.random() * 8.0).toInt

        Chunk.xzLoop((x, z) => {
            var y = 0
            while(y < 80 + (x == randX && z == randZ).evaluate(20, 0)) {
                blocks.set(Chunk.xyzToIndex(x, y, z), BlockType.Stone)
                y += 1
            }
        })

        blocks
    }
}

class BrownieGen extends Generator {
    override def generateBlocks(chunkX: Int, chunkZ: Int): List[BlockType] = {
        val blocks = new ArrayList[BlockType](Chunk.chunkElementSize)
        while(blocks.size < Chunk.chunkElementSize) {
            blocks.add(BlockType.Air)
        }

        val size = 6
        val sizeHalf = 3

        Chunk.xyzLoop((x, y, z) => {
            val dist = Math.pow(x - sizeHalf, 2) + Math.pow(y - sizeHalf, 2) + Math.pow(z - sizeHalf, 2)

            blocks.set(Chunk.xyzToIndex(x, y, z), (dist < size).evaluate(BlockType.Brownie, BlockType.Air))
        })

        blocks
    }
}