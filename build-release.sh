#!/bin/bash
set -e

echo "Ensure debug mode is off!" # i am a forgetful someone
sleep 3

echo "Initializing..."
rm -rf dist/assets
rm -f dist/*.js
rm -rf dist/lib/

echo "Compiling..."
sbt fullLinkJS

echo "Minifying..."

cd impl/target/scala-3.3.8/impl-opt/
js=$(ls *.js)
cd ../../../../

for file in $js
do
  terser impl/target/scala-3.3.8/impl-opt/$file -c --mangle toplevel=true --output dist/$file
done

cd lib/
libs=$(ls *.js)
cd ../

mkdir dist/lib/
for file in $libs
do
  terser lib/$file -c --mangle toplevel=true --output dist/lib/$file
done

echo "Copying assets..."
cp -R game/src/assets dist/