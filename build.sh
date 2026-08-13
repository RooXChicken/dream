#!/bin/bash
set -e

#npm run dev &
python -m http.server &
sbt ~fastLinkJS &

echo "Running..."
wait
