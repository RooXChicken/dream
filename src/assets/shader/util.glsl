highp vec2 toNDC(highp vec2 pos, mediump vec2 size) {
    highp vec2 _size = size * 0.5;
    return ((pos - _size) / _size);
}

highp float roundV(highp float value) {
    return floor(value + 0.5);
}

highp vec2 roundV(highp vec2 value) {
    return floor(value + 0.5);
}

highp vec3 roundV(highp vec3 value) {
    return floor(value + 0.5);
}

highp vec4 roundV(highp vec4 value) {
    return floor(value + 0.5);
}