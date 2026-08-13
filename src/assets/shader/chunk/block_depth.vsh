attribute vec2 vertexUV;

attribute vec2 blockPos;
attribute float zIndex;
attribute vec4 block12UV;
attribute vec4 block34UV;

uniform mediump vec2 frameSize;

varying highp vec2 uv;
varying highp vec4 _block12UV;
varying highp vec4 _block34UV;

#include "util.glsl"
#include "depth_util.glsl"

void main() {
    uv = vertexUV;
    _block12UV = block12UV;
    _block34UV = block34UV;

    gl_Position = vec4(
        toNDC(worldPosToDepthUV(blockPos, zIndex, vertexUV), frameSize),
        0.0,
        1.0
    );
}