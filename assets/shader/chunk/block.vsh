attribute vec2 vertexUV;

attribute vec3 blockPos;
attribute vec2 blockUV;
attribute float blockType;

uniform vec4 camera;

varying highp vec2 uv;

#const "airBlockOrdinal"

#const "depthDiv"
#const "blockPixelSize"

#include "block_util.glsl"

void main() {
    if(blockType != airBlockOrdinal) {
        uv = correctUV(vertexUV, blockUV);
        vec3 blockWorldPos = toWorldPos(blockPos);

        gl_Position = vec4(
            ((vertexUV * blockPixelSize) + blockWorldPos.xy - camera.xy) / camera.zw,
            blockWorldPos.z / depthDiv,
            1.0
        );
    }
    else {
        uv = vec2(0.0);
        gl_Position = vec4(-2.0, 0.0, 0.0, 1.0);
    }
}