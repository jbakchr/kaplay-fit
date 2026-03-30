#!/bin/bash
set -e

# --- Color definitions ---
GREEN="\033[0;32m"
CYAN="\033[0;36m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
RESET="\033[0m"

echo -e "${CYAN}Bumping version…${RESET}"
npm version patch

echo -e "${CYAN}Building…${RESET}"
npm run build

echo -e "${CYAN}Pushing to Git…${RESET}"
git push

echo -e "${CYAN}Publishing to npm…${RESET}"
npm publish

echo -e "${GREEN}Done!${RESET}"