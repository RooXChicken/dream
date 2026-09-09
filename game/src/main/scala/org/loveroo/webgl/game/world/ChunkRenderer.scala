package org.loveroo.webgl.game.world

import java.util.{ArrayList, List}
import org.loveroo.predef.ListUtil
import org.loveroo.webgl.engine.math.{Vec2f, Vec2i, Vec3f}
import org.loveroo.webgl.engine.render.batch
import org.loveroo.webgl.engine.render.batch.{Batch, BatchDescriptor, BatchElement, Descriptor, DescriptorType, ElementData}
import org.loveroo.webgl.engine.render.data.TextureSlot
import org.loveroo.webgl.engine.render.shader.{Shader, Uniform}
import org.loveroo.webgl.engine.render.texture.{AtlasID, TextureAtlas}
import org.loveroo.webgl.game.world.Chunk.{blockDepthPixelSize, blockPixelSize, chunkSizeX, chunkSizeZ}
import org.loveroo.webgl.game.world.ChunkMap.distance

import scala.RuntimeException

class ChunkRenderer(private val chunkMap: ChunkMap) {
    private var redrawDepth = false

    val blockShader = new Shader("chunk/block")
    val blockNormalShader = new Shader("chunk/block")
    val blockPositionShader = new Shader("chunk/block_pos")
    val blockDepthShader = new Shader("chunk/block_depth")

    // TODO: hot swap shaders update attrib loc
    private val blockBatch = new Batch[BlockElement](
        "chunk_map_blocks",
        blockShader,
        new BatchDescriptor(ListUtil.of(
            new Descriptor("blockPos", DescriptorType.Vec3UB),
            new Descriptor("blockType", DescriptorType.UByte),
            new Descriptor("blockUV", DescriptorType.Vec2UB, true)
        ))
    )

    // TODO: optimize data
    private val depthBatch = new Batch[DepthElement](
        "chunk_map_depth",
        blockDepthShader,
        new BatchDescriptor(ListUtil.of(
            new Descriptor("blockPos", DescriptorType.Vec2f),
            new Descriptor("zIndex", DescriptorType.Float),
            new Descriptor("block12UV", DescriptorType.Vec4f),
            new Descriptor("block34UV", DescriptorType.Vec4f),
            new Descriptor("blockTypes", DescriptorType.Vec4f)
        ))
    )

    private val batchCount = 2
    private var loadedBatches = 0

    blockBatch.onLoad(_ => postBatchCreate())
    depthBatch.onLoad(_ => postBatchCreate())

    private val atlasCount = 4
    private var loadedAtlases = 0

    private var regenerateQueued = false

    ChunkRenderer.blockAtlas.onLoad(t =>
        blockShader.setUniform("tex", Uniform.texture(TextureSlot.One, t.renderTex))
        postAtlasCreate()
    )

    ChunkRenderer.normalAtlas.onLoad(t =>
        blockNormalShader.setUniform("tex", Uniform.texture(TextureSlot.One, t.renderTex))
        postAtlasCreate()
    )

    ChunkRenderer.posAtlas.onLoad(t =>
        blockPositionShader.setUniform("tex", Uniform.texture(TextureSlot.One, t.renderTex))
        postAtlasCreate()
    )

    ChunkRenderer.depthAtlas.onLoad(t =>
        blockDepthShader.setUniform("tex", Uniform.texture(TextureSlot.One, t.renderTex))
        postAtlasCreate()
    )

    private def postBatchCreate(): Unit = {
        loadedBatches += 1
    }

    private def postAtlasCreate(): Unit = {
        loadedAtlases += 1
    }

    private def allBatchesLoaded: Boolean = (loadedBatches == batchCount)
    private def allAtlasesLoaded: Boolean = (loadedAtlases == atlasCount)

    private val chunkPosToIndex = new Array[Int](distance * distance)
    private var chunkGenerationIndex = 0

    {
        var i = 0
        while(i < chunkPosToIndex.length) {
            chunkPosToIndex.update(i, -1)
            i += 1
        }
    }

    def queueRegeneration(): Unit =
        regenerateQueued = true

    def regenerateIfNeeded(): Unit = {
        if(regenerateQueued && allAtlasesLoaded && allBatchesLoaded) {
            _regenerateBatch()
            regenerateQueued = false
        }
    }

    private def _regenerateBatch(): Unit = {
        val blockElements = new ArrayList[BlockElement](
            (ChunkMap.distance * ChunkMap.distance) *
            (Chunk.chunkSizeX * Chunk.chunkSizeY * Chunk.chunkSizeZ)
        )

        val depthElements = new ArrayList[DepthElement](
            (ChunkMap.distance * ChunkMap.distance) *
            (Chunk.chunkSizeX * Chunk.chunkSizeY * Chunk.depthColumnsPerChunk)
        )

        chunkGenerationIndex = 0

        var x = 0
        while(x < distance) {
            var z = distance - 1
            while(z >= 0) {
                submitChunk(
                    chunkMap.chunkAt(x, z),
                    blockElements,
                    depthElements
                )

                z -= 1
            }
            x += 1
        }

        blockBatch.putBatch(blockElements)
        depthBatch.putBatch(depthElements)

        redrawDepth = true
    }

    private def submitChunk(chunk: Chunk, blockElements: List[BlockElement], depthElements: List[DepthElement]): Unit = {
        if(chunk == null) {
            return
        }

        chunkPosToIndex.update((chunk.chunkX * distance) + chunk.chunkZ, chunkGenerationIndex)
        chunkGenerationIndex += 1

        var x = 0
        while(x < Chunk.chunkSizeX) {
            var z = Chunk.chunkSizeZ - 1
            while(z >= 0) {
                var y = Chunk.chunkSizeY - 1
                while(y >= 0) {
                    blockElements.add(blockElementFor(
                        x,
                        y,
                        z,
                        chunk.chunkX,
                        chunk.chunkZ
                    ))

                    y -= 1
                }

                z -= 1
            }

            x += 1
        }

        x = 0
        while(x < Chunk.chunkSizeX) {
            var y = 0
            while(y < Chunk.chunkSizeY) {
                var z = 0
                while(z < Chunk.depthColumnsPerChunk) {
                    depthElements.add(depthElementFor(
                        x,
                        y,
                        z,
                        chunk.chunkX,
                        chunk.chunkZ
                    ))

                    z += 1
                }

                y += 1
            }

            x += 1
        }
    }

    private def blockElementFor(x: Int, y: Int, z: Int, chunkX: Int, chunkZ: Int): BlockElement = {
        val chunk = chunkMap.chunkAt(chunkX, chunkZ)

        new BlockElement(
            new Vec3f(x + (Chunk.chunkSizeX * chunkX), y, z + (Chunk.chunkSizeZ * chunkZ)),
            chunk.getBlockAt(x, y, z)
        )
    }

    private def depthElementFor(x: Int, y: Int, z: Int, chunkX: Int, chunkZ: Int): DepthElement = {
        val chunk = chunkMap.chunkAt(chunkX, chunkZ)

        val blockTypes = new ArrayList[BlockType](Chunk.blocksPerDepthColumn)

        var blockZ = (z * Chunk.blocksPerDepthColumn)
        val end = blockZ + Chunk.blocksPerDepthColumn

        while(blockZ < end) {
            blockTypes.add(chunk.getBlockAt(x, y, blockZ))
            blockZ += 1
        }

        new DepthElement(
            new Vec2f(x + (Chunk.chunkSizeX * chunkX), y),
            z + (chunkZ * Chunk.depthColumnsPerChunk),
            blockTypes
        )
    }

    def submitBlock(x: Int, y: Int, z: Int, blockType: BlockType): Unit = {
        val chunkX = (x / Chunk.chunkSizeX)
        val chunkZ = (z / Chunk.chunkSizeZ)

        val blockX = x % Chunk.chunkSizeX
        val blockY = y % Chunk.chunkSizeY
        val blockZ = z % Chunk.chunkSizeZ

        val chunkIndex = chunkPosToIndex((chunkX * distance) + chunkZ)

        // monstrosity
        val blockBatchIndex =
            (chunkIndex * Chunk.chunkElementSize) +
            (Chunk.chunkSizeY - blockY - 1) +
            ((Chunk.chunkSizeZ - blockZ - 1) * Chunk.chunkSizeY) +
            (blockX * Chunk.chunkSizeY * Chunk.chunkSizeZ)

        val depthBatchIndex =
            (chunkIndex * Chunk.chunkDepthElementSize) +
            (blockZ / Chunk.blocksPerDepthColumn) +
            (blockY * Chunk.depthColumnsPerChunk) +
            (blockX * Chunk.chunkSizeY * Chunk.depthColumnsPerChunk)

        blockBatch.putElement(
            blockBatchIndex,
            blockElementFor(
                blockX,
                blockY,
                blockZ,
                chunkX,
                chunkZ
            )
        )

        depthBatch.putElement(
            depthBatchIndex,
            depthElementFor(
                blockX,
                blockY,
                blockZ / Chunk.blocksPerDepthColumn,
                chunkX,
                chunkZ
            )
        )

        redrawDepth = true
    }

    def renderWorld(): Unit = {
        blockBatch.shader = blockShader
        blockBatch.render()
    }

    def renderNormals(): Unit = {
        blockBatch.shader = blockNormalShader
        blockBatch.render()
    }

    def renderPositions(): Unit = {
        blockBatch.shader = blockPositionShader
        blockBatch.render()
    }

    def depthRedrawNeeded: Boolean = (redrawDepth && depthBatch.loaded)

    def renderDepth(): Unit = {
        if(depthRedrawNeeded) {
            depthBatch.render()
            redrawDepth = false
        }
    }
}

class BlockElement(
    private val pos: Vec3f,
    private val blockType: BlockType
) extends BatchElement {
    override val data: List[? <: ElementData] = {
        val atlas = ChunkRenderer.blockAtlas.infoFor(blockType.id)

        ListUtil.of(
            ElementData.vec3ub(pos.x.toByte, pos.y.toByte, pos.z.toByte),
            ElementData.ubyte(blockType.ordinal.toByte),
            // TODO: why is u 256 and v 255
            ElementData.vec2ub((atlas.u1 * 256.0f).toByte, (atlas.v1 * 255.0f).toByte)
        )
    }
}

class DepthElement(
    private val pos: Vec2f,
    private val zIndex: Float,
    private val blockTypes: List[BlockType]
) extends BatchElement {
    override val data: List[? <: ElementData] = {
        if(blockTypes.size() != Chunk.blocksPerDepthColumn) {
            throw new RuntimeException(s"Block types size not ${Chunk.blocksPerDepthColumn}")
        }

        val list = new ArrayList[ElementData](blockTypes.size() + 2)
        list.add(ElementData.vec2f(pos.x, pos.y))
        list.add(ElementData.float(zIndex))

        blockTypes.forEach(t => {
            val atlas = ChunkRenderer.depthAtlas.infoFor(t.id)
            list.add(ElementData.vec2f(atlas.u1, atlas.v1))
        })

        blockTypes.forEach(t => {
            list.add(ElementData.float(t.ordinal))
        })

        list
    }
}

object ChunkRenderer {
    private def getTypeIf(blockType: BlockType, filter: BlockType => Boolean): AtlasID = {
        if(filter(blockType)) {
            new AtlasID(blockType.id)
        }
        else {
            new AtlasID(blockType.id, "default")
        }
    }

    val blockAtlas = new TextureAtlas(
        "block_atlas",
        "block",
        new Vec2i(256, 256),
        new Vec2i(blockPixelSize, blockPixelSize),
        BlockType.types.map(t => getTypeIf(t, _ => true))
    )

    val normalAtlas = new TextureAtlas(
        "normal_atlas",
        "block/normal",
        new Vec2i(256, 256),
        new Vec2i(blockPixelSize, blockPixelSize),
        BlockType.types.map(t => getTypeIf(t, _.hasNormal))
    )

    val posAtlas = new TextureAtlas(
        "position_atlas",
        "block/position",
        new Vec2i(256, 256),
        new Vec2i(blockPixelSize, blockPixelSize),
        BlockType.types.map(t => getTypeIf(t, _.hasPos))
    )

    val depthAtlas = new TextureAtlas(
        "depth_atlas",
        "block/depth",
        new Vec2i(128, 128),
        new Vec2i(blockDepthPixelSize, blockDepthPixelSize),
        BlockType.types.map(t => getTypeIf(t, _.hasDepth))
    )

    val atlasSize = new Vec2i(blockAtlas.width, blockAtlas.height)

    val elementSize = new Vec2i(
        atlasSize.x / blockPixelSize,
        atlasSize.y / blockPixelSize
    )
}