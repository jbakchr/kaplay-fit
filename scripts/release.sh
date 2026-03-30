#!/bin/bash
set -e

# --- Color definitions ---
GREEN="\033[1;32m"
CYAN="\033[1;36m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
RESET="\033[0m"


echo -e "\n${CYAN}Bumping version…${RESET}\n"
npm version patch

echo -e "\n${CYAN}Building…${RESET}\n"
npm run build

echo -e "\n${CYAN}Pushing to Git…${RESET}\n"
git push

echo -e "\n${CYAN}Publishing to npm…${RESET}\n"
npm publish

echo -e "\n${GREEN}Done!${RESET}\n"