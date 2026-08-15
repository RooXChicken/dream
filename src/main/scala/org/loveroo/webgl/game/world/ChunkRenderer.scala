package org.loveroo.webgl.game.world

import java.lang.IllegalStateException
import java.util.{ArrayList, List}
import org.loveroo.predef.ListUtil
import org.loveroo.webgl.engine.math.{Vec2f, Vec2i, Vec3f}
import org.loveroo.webgl.engine.render.{AtlasID, FloatUniform, RenderBuffer, Renderer, Shader, Texture, TextureAtlas, TextureUniform, Uniform2f}
import org.loveroo.webgl.engine.render.batch.{Batch, BatchDescriptor, BatchElement, Descriptor, DescriptorType, ElementData, FloatElementData, Vec2ElementData, Vec3ElementData}
import org.loveroo.webgl.engine.render.data.TextureSlot
import org.loveroo.webgl.game.world.Chunk.{blockDepthPixelSize, blockPixelSize}
import org.loveroo.webgl.game.world.ChunkMap.distance
import org.loveroo.webgl.game.world.ChunkRenderer.{blockAtlas, depthAtlas, depthShader}
import scala.RuntimeException
import scala.collection.mutable.ArrayBuffer

class ChunkRenderer(private val chunkMap: ChunkMap) {
    private var depthRedraw = true

    val blockShader = new Shader("chunk/block")
    val blockNormalShader = new Shader("chunk/block")
    val blockPositionShader = new Shader("chunk/block_pos")
    val blockDepthShader = new Shader("chunk/block_depth")

    // TODO: hot swap shaders update attrib loc
    private val blockBatch = new Batch[BlockElement](
        "chunk_map_blocks",
        blockShader,
        new BatchDescriptor(ListUtil.of(
            new Descriptor("blockPos", DescriptorType.Vec3),
            new Descriptor("blockUV", DescriptorType.Vec2)
        ))
    )

    private val depthBatch = new Batch[DepthElement](
        "chunk_map_depth",
        blockDepthShader,
        new BatchDescriptor(ListUtil.of(
            new Descriptor("blockPos", DescriptorType.Vec2),
            new Descriptor("zIndex", DescriptorType.Float),
            new Descriptor("block12UV", DescriptorType.Vec4),
            new Descriptor("block34UV", DescriptorType.Vec4)
        ))
    )

    blockShader.setUniform("blockSize", new FloatUniform(Chunk.blockPixelSize))
    blockNormalShader.setUniform("blockSize", new FloatUniform(Chunk.blockPixelSize))
    blockPositionShader.setUniform("blockSize", new FloatUniform(Chunk.blockPixelSize))

    ChunkRenderer.blockAtlas.onLoad(t =>
        blockShader.setUniform("tex", new TextureUniform(TextureSlot.One, t))
    )

    ChunkRenderer.normalAtlas.onLoad(t =>
        blockNormalShader.setUniform("tex", new TextureUniform(TextureSlot.One, t))
    )

    ChunkRenderer.posAtlas.onLoad(t =>
        blockPositionShader.setUniform("tex", new TextureUniform(TextureSlot.One, t))
    )

    ChunkRenderer.depthAtlas.onLoad(t =>
        blockDepthShader.setUniform("tex", new TextureUniform(TextureSlot.One, t))
    )

    def regenerateBatch(): Unit = {
        if(blockAtlas.loaded && depthAtlas.loaded) {
            _regenerateBatch()
            return
        }

        blockAtlas.onLoad(_ => {
            if(depthAtlas.loaded) {
                _regenerateBatch()
            }
        })

        depthAtlas.onLoad(_ => {
            if(blockAtlas.loaded) {
                _regenerateBatch()
            }
        })
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

        depthRedraw = true
    }

    private def submitChunk(chunk: Chunk, blockElements: List[BlockElement], depthElements: List[DepthElement]): Unit = {
        if(chunk == null) {
            return
        }

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

    def depthRedrawNeeded: Boolean = depthRedraw

    def renderDepth(): Unit = {
        if(depthRedraw && depthAtlas.loaded && depthBatch.loaded && blockDepthShader.loaded) {
            depthBatch.render()
            depthRedraw = false
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
            new Vec3ElementData(pos.x, pos.y, pos.z),
            new Vec2ElementData(atlas.u1, atlas.v1)
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
        list.add(new Vec2ElementData(pos.x, pos.y))
        list.add(new FloatElementData(zIndex))

        blockTypes.forEach(t => {
            val atlas = ChunkRenderer.depthAtlas.infoFor(t.id)
            list.add(new Vec2ElementData(atlas.u1, atlas.v1))
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

    protected val depthShader = new Shader("chunk/block_depth")
    depthShader.setUniform("blockSize", new FloatUniform(blockPixelSize))
}