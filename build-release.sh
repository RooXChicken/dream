#!/bin/bash
set -e

#echo "Ensure debug mode is off!" # i am a forgetful someone
#sleep 3
#
#echo "Initializing..."
#rm -rf dist/assets
#rm -f dist/main.js
#
#echo "Compiling..."
#sbt fullLinkJS

echo "Minifying..."

cd impl/target/scala-3.8.3/impl-opt/
js=$(ls *.js)
cd ../../../../

for file in $js
do
  terser impl/target/scala-3.8.3/impl-opt/$file -c --mangle toplevel=true --output dist/$file
done

echo "Copying assets..."
cp -R game/src/assets dist/