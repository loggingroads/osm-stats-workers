#!/usr/bin/env bash
set -e # halt script on error

mkdir deploy
zip -q --exclude=loggingroads_travis -r deploy/osm-stats-workers.zip *
