#!/bin/bash
set -e

echo "Building…"
npm run build

echo "Bumping version…"
npm version patch

echo "Pushing to Git…"
git push

echo "Publishing to npm…"
npm publish

echo "Done!"
