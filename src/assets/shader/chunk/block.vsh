attribute vec2 vertexUV;

attribute vec3 blockPos;
attribute vec2 blockUV;

uniform vec4 camera;

uniform mediump vec2 frameSize;
uniform mediump float blockSize;

varying highp vec2 uv;

#include "const.glsl"
#include "block_util.glsl"
#include "util.glsl"

void main() {
    uv = correctUV(vertexUV, blockUV, blockSize);
    vec3 blockWorldPos = toWorldPos(blockPos, blockSize);

    gl_Position = vec4(
        ((vertexUV * blockSize) + blockWorldPos.xy - camera.xy) / camera.zw,
        (blockWorldPos.z) / const_depthDiv,
        1.0
    );
}