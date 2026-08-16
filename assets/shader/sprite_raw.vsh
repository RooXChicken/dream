attribute vec2 vertexUV;

uniform vec3 pos;
uniform vec2 scale;
uniform mediump vec2 frameSize;

varying highp vec2 uv;

#include "util.glsl"
#const "depthDiv"

void main() {
    uv = vertexUV;

    gl_Position = vec4(
        toNDC((vertexUV * scale) + pos.xy, frameSize),
        pos.z / depthDiv,
        1.0
    );
}