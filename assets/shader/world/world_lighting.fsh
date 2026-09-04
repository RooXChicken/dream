varying highp vec2 uv;

uniform sampler2D tex;
uniform sampler2D normalTex;
uniform sampler2D posTex;

uniform sampler2D depthTex;
uniform highp vec2 depthSize;

uniform mediump vec3 sunPos;
uniform mediump float renderState;

#include "block_util.glsl"
#include "depth_util.glsl"

bool isAffectedByLight(highp vec3 pos, highp vec3 normal, highp vec3 dir) {
    highp vec3 dotNormal = normal;

    dotNormal.x *= -1.0;

    // if the normal is facing opposite of the light, zero chance of it being lit by it
    if(dot((dir * -1.0), normalize(dotNormal)) > 0.0) {
        return true;
    }
    else {
        highp vec3 worldPos = pos;

        for(mediump float i = 0.0; i < 1024.0; i += 1.0) {
            worldPos += dir;

            if(isOutOfBounds(worldPos)) {
                return false;
            }

            if(isPosInBlock(worldPos, depthTex, depthSize)) {
                return true;
            }
        }
    }

    return false;
}

void main(void) {
    highp vec4 pixel = texture2D(tex, uv);
    if(pixel.a <= 0.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    highp vec4 posPixel = texture2D(posTex, uv);
    if(renderState == 2.0) {
        gl_FragColor = posPixel;
        return;
    }

    highp vec3 worldPos = pixelToPos(posPixel);
    highp vec4 _normal = texture2D(normalTex, uv);
    highp vec3 normal = floor(ceil(_normal.rgb * 255.0) / 16.0);

    // make the start position not inside the block
    highp float edgeCheck = mod(ceil(_normal.g * 255.0), 16.0);

    if(edgeCheck > 0.0) {
        highp vec3 blockCheckPos = worldPos;

        blockCheckPos.x += normal.r;
        blockCheckPos.z -= normal.b;

        if(isOutOfBounds(blockCheckPos) || !isPosInBlock(blockCheckPos, depthTex, depthSize)) {
            pixel.rgb *= 0.9;
        }
//        else {
//            blockCheckPos.x -= normal.r * 2.0;
//            blockCheckPos.z += normal.b * 2.0;
//
//            if(isOutOfBounds(blockCheckPos) || !isPosInBlock(blockCheckPos, depthTex, depthSize)) {
//                pixel.rgb *= 0.9;
//            }
//        }

        normal.g = ceil((ceil(_normal.g * 255.0) - edgeCheck) / 16.0);

        if(edgeCheck == 1.0) {
            normal.r = 0.0;
            normal.b = 0.0;
        }
        else {
            normal.g = 0.0;

            highp float oldR = normal.r;
            normal.r = normal.b;
            normal.b = oldR;
        }
    }

    if(renderState == 1.0) {
        gl_FragColor = vec4(normal / 8.0, 1.0);
        return;
    }

    worldPos.x -= normal.r;
    worldPos.y += normal.g;
    worldPos.z += normal.b;

    if(renderState == 3.0) {
        gl_FragColor = vec4(
            mod(worldPos, 256.0) / 255.0,
            1.0
        );

        return;
    }

    highp vec3 sunDir = normalize(sunPos);

    if(isAffectedByLight(worldPos, normal, sunDir)) {
        pixel.rgb *= 0.5;
    }

    gl_FragColor = pixel;
}