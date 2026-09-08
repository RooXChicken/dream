attribute vec2 vertexUV;

attribute vec2 glyphPos;
attribute vec2 glyphUV;
attribute vec2 glyphSize;

uniform vec2 frameSize;

varying highp vec2 uv;

#include "util.glsl"

void main() {
    uv = glyphUV;

    gl_Position = vec4(
        toNDC((vertexUV * glyphSize) + glyphPos.xy, frameSize),
        0.0,
        1.0
    );
}