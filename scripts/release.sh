#!/bin/bash
set -e

# --- Color definitions ---
GREEN="\033[1;32m"
CYAN="\033[1;36m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
WHITE="033[1;37m"

BG_BLACK="\033[40m"
BG_RED="\033[41m"
BG_GREEN="\033[42m"
BG_YELLOW="\033[43m"
BG_BLUE="\033[44m"
BG_MAGENTA="\033[45m"
BG_CYAN="\033[46m"
BG_WHITE="\033[47m"

RESET="\033[0m"



echo -e "\n${CYAN}Bumping${RESET} ${BG_RED}${WHITE}npm version…${RESET}\n"
npm version patch

echo -e "\n${CYAN}Building…${RESET}\n"
npm run build

echo -e "\n${CYAN}Pushing to ${RESET}${BG_BLACK}${WHITE}GitHub…${RESET}\n"
git push

echo -e "\n${CYAN}Publishing to ${RESET}${BG_RED}${WHITE}npm…${RESET}\n"
npm publish

echo -e "\n${BG_GREEN}${WHITE}Done${RESET}\n"