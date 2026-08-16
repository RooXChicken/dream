attribute vec2 vertexUV;

attribute vec3 blockPos;
attribute vec2 blockUV;

uniform vec4 camera;

uniform mediump vec2 frameSize;

varying highp vec2 uv;
varying highp vec3 _blockPos;

#const "depthDiv"
#const "blockPixelSize"

#include "block_util.glsl"
#include "util.glsl"

void main() {
    _blockPos = blockPos;

    uv = correctUV(vertexUV, blockUV);
    vec3 blockWorldPos = toWorldPos(blockPos);

    gl_Position = vec4(
        ((vertexUV * blockPixelSize) + blockWorldPos.xy - camera.xy) / camera.zw,
        (blockWorldPos.z) / depthDiv,
        1.0
    );
}