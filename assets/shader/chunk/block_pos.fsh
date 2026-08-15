varying highp vec2 uv;
varying highp vec3 _blockPos;

uniform sampler2D tex;

#include "block_util.glsl"

void main(void) {
    highp vec4 pixel = texture2D(tex, uv);
    if(pixel.a <= 0.0) {
        discard;
    }

    highp vec3 worldPos = vec3(
        (_blockPos.x * 8.0) + ceil(pixel.r * 255.0),
        (_blockPos.y * 8.0) + ceil(pixel.g * 255.0),
        (_blockPos.z * 8.0) + ceil(pixel.b * 255.0)
    );

    gl_FragColor = posToPixel(worldPos);
}