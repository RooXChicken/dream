attribute vec2 vertexUV;

uniform vec3 pos;
uniform vec2 scale;
uniform mediump vec2 frameSize;

varying highp vec2 uv;

#include "util.glsl"

void main() {
    uv = vertexUV;

    gl_Position = vec4(
        toNDC((vertexUV * scale) + pos.xy, frameSize),
        pos.z / 1000.0,
        1.0
    );
}