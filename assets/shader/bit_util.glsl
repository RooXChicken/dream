bool isBitSet(highp float byte, lowp float index) {
    return (step(0.5, mod(float(byte) / (pow(2.0, index)), 1.0)) >= 1.0);
}

highp float shift(highp float byte, lowp float index) {
    return (byte * pow(2.0, index));
}