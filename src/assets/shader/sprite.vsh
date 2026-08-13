attribute vec2 vertexUV;

uniform vec3 pos;
uniform vec2 scale;

// pos: xy | scale: zw
uniform vec4 camera;

varying highp vec2 uv;

#include "const.glsl"

void main() {
    uv = vertexUV;

    gl_Position = vec4(
        ((vertexUV * scale) + pos.xy - camera.xy) / camera.zw,
        pos.z / const_depthDiv,
        1.0
    );
}