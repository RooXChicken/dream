varying highp vec2 uv;

uniform sampler2D tex;

void main(void) {
    highp vec4 pixel = texture2D(tex, uv);
    if(pixel.a <= 0.0) {
        discard;
    }

    gl_FragColor = pixel;
}