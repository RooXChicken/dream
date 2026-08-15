#!/bin/bash
set -e

echo "Initializing..."
rm -r dist/assets
rm dist/main.js

echo "Compiling..."
sbt fullLinkJS
mv target/scala-3.8.3/webgl-opt/main.js dist/

echo "Copying assets..."
cp -R src/assets dist/