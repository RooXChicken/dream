#include "const.glsl"
#include "bit_util.glsl"
#include "util.glsl"

highp vec2 worldPosToDepthUV(highp vec2 blockPos, highp float zIndex, highp vec2 vertexUV) {
    return vec2(
        (blockPos.x * (const_depthSize * 2.0 * const_distance)) + (zIndex * const_depthSize) + (vertexUV.x * const_depthSize),
        (blockPos.y * const_depthSize) + (vertexUV.y * const_depthSize)
    );
}

bool isPosInBlock(highp vec3 pos, sampler2D depthTex, highp vec2 depthSize) {
    highp vec2 blockPos = floor(pos.xy / 8.0);

    // NOTE: if uv pos is 0.0 on the x axis, inaccuracy may occur
    highp vec2 uvPos = mod(pos.xy + 0.04, 8.0) / 8.0;
    highp vec4 depthPixel = texture2D(depthTex, worldPosToDepthUV(blockPos, floor((pos.z / 8.0) / 4.0), uvPos) / depthSize);

    highp float zIndex = floor(mod(pos.z / 8.0, 4.0));
    highp float pixel;

    if(zIndex == 0.0) {
        pixel = depthPixel.r;
    }
    else if(zIndex == 1.0) {
        pixel = depthPixel.g;
    }
    else if (zIndex == 2.0) {
        pixel = depthPixel.b;
    }
    else {
        pixel = depthPixel.a;
    }

    pixel = ceil(pixel * 255.0);

    highp float pixelIndex = floor(mod(pos.z, 8.0));
    return mod(pixel / pow(2.0, pixelIndex), 2.0) >= 1.0;
}