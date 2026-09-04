attribute vec2 vertexUV;

attribute vec2 blockPos;
attribute float zIndex;
attribute vec4 block12UV;
attribute vec4 block34UV;
attribute vec4 blockTypes;

uniform mediump vec2 frameSize;

varying highp vec2 uv;
varying highp vec4 _block12UV;
varying highp vec4 _block34UV;

#const "airBlockOrdinal"

#include "util.glsl"
#include "depth_util.glsl"

void main() {
    uv = vertexUV;
    _block12UV = block12UV;
    _block34UV = block34UV;

    // skip if all of them are air
    if(
        blockTypes.x == airBlockOrdinal &&
        blockTypes.y == airBlockOrdinal &&
        blockTypes.z == airBlockOrdinal &&
        blockTypes.w == airBlockOrdinal
    ) {
        gl_Position = vec4(-2.0, 0.0, 0.0, 1.0);
    }
    else {
        gl_Position = vec4(
            toNDC(worldPosToDepthUV(blockPos, zIndex, vertexUV), frameSize),
            0.0,
            1.0
        );
    }
}