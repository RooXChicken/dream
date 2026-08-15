#include "util.glsl"
#include "bit_util.glsl"
#include "const.glsl"

highp vec4 posToPixel(highp vec3 worldPos) {
    highp float blockX = floor(worldPos.x / 8.0);
    highp float blockY = floor(worldPos.y / 8.0);
    highp float blockZ = floor(worldPos.z / 8.0);

    highp float blockOffsetX = mod(worldPos.x, 8.0);
    highp float blockOffsetY = mod(worldPos.y, 8.0);
    highp float blockOffsetZ = mod(worldPos.z, 8.0);

    return vec4(
        (blockX + (floor(blockOffsetX / 4.0) * 128.0)) / 255.0,
        blockY / 255.0,
        (blockZ + (floor(mod(blockOffsetX, 4.0)) * 64.0)) / 255.0,
        (blockOffsetZ + floor(blockOffsetY * 8.0)) / 255.0
    );
}

highp vec3 pixelToPos(highp vec4 _pixel) {
    highp vec4 pixel = ceil(_pixel * 255.0);

    highp float blockX = floor(mod(pixel.r, 128.0));
    highp float blockY = floor(pixel.g);
    highp float blockZ = floor(mod(pixel.b, 64.0));

    highp float blockXOffset = (floor(pixel.r / 128.0) * 4.0) + floor(pixel.b / 64.0);
    highp float blockYOffset = floor(pixel.a / 8.0);
    highp float blockZOffset = floor(mod(pixel.a, 8.0));

    return vec3(
        (blockX * 8.0) + blockXOffset,
        (blockY * 8.0) + blockYOffset,
        (blockZ * 8.0) + blockZOffset
    );
}

highp vec2 correctUV(highp vec2 vertexUV, highp vec2 blockUV, mediump float blockSize) {
    highp vec2 correctedUV = (vertexUV / blockSize);
    return blockUV + correctedUV;
}

highp vec3 toWorldPos(highp vec3 blockPos, mediump float blockSize) {
    mediump float halfSize = blockSize / 2.0;
    mediump float quarterSize = blockSize / 4.0;

    return vec3(
        blockPos.x * halfSize + blockPos.z * halfSize,
        (blockPos.x * quarterSize) + (blockPos.y * halfSize) - ((blockPos.z - 7.0) * quarterSize),
        -blockPos.y - blockPos.z
    );
}