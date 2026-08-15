varying highp vec2 uv;

uniform sampler2D tex;
varying highp vec4 _block12UV;
varying highp vec4 _block34UV;

#include "block_util.glsl"

void main(void) {
    gl_FragColor = vec4(
        texture2D(tex, correctUV(uv, _block12UV.xy, 16.0)).a,
        texture2D(tex, correctUV(uv, _block12UV.zw, 16.0)).a,
        texture2D(tex, correctUV(uv, _block34UV.xy, 16.0)).a,
        texture2D(tex, correctUV(uv, _block34UV.zw, 16.0)).a
    );
}