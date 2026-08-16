#!/bin/bash
set -e

echo "Ensure debug mode is off!" # i am a forgetful someone
sleep 3

echo "Initializing..."
rm -rf dist/assets
rm -f dist/main.js

echo "Compiling..."
sbt fullLinkJS

echo "Minifying..."
terser target/scala-3.8.3/webgl-opt/main.js --mangle toplevel=true --output dist/main.js

echo "Copying assets..."
cp -R src/assets dist/