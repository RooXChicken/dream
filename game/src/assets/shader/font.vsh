attribute vec2 vertexUV;

attribute vec2 glyphPos;
attribute vec2 glyphUV;
attribute vec2 glyphSize;

uniform vec2 atlasSize;
uniform vec2 frameSize;

varying highp vec2 uv;

#include "util.glsl"

void main() {
    uv = glyphUV + ((vertexUV * glyphSize) / atlasSize);

    gl_Position = vec4(
        toNDC((vertexUV * glyphSize) + vec2(glyphPos.x, frameSize.y - glyphPos.y), frameSize),
        0.0,
        1.0
    );
}