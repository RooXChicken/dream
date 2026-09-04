#!/bin/bash
set -e

# close all processes when closing script
close_all() {
    for p in "${pids[@]}" ; do
        kill "$p";
    done
}

trap close_all EXIT
pids=()

echo "Running..."

python -m http.server &
pids+=($!)
sbt ~fastLinkJS &
pids+=($!)

wait
