#!/bin/bash
set -e

echo "Initializing..."
rm -r dist/assets
rm dist/main.js

echo "Compiling..."
sbt fullLinkJS

echo "Minifying..."
terser target/scala-3.8.3/webgl-opt/main.js --mangle toplevel=true --output dist/main.js

echo "Copying assets..."
cp -R src/assets dist/