#!/usr/bin/env bash

error(){
  printf "\033[31m%s\n\033[0m" "$@" >&2
  exit 1
}

# varstrap
##########

REPO_ROOT=${REPO_ROOT:-"$(git rev-parse --show-toplevel)"}
WEBROOT_DIR="site"
BLUEACORNUI_DIR="blueacornui"
WEBROOT_DIR="$REPO_ROOT/$WEBROOT_DIR"
BLUEACORNUI_DIR="$REPO_ROOT/$BLUEACORNUI_DIR"
OS="`uname`"

# Detect the platform (similar to $OSTYPE)
case $OS in
  'Linux')
    OS='Linux'
    ;;
  'FreeBSD')
    OS='FreeBSD'
    ;;
  'WindowsNT')
    OS='Windows'
    ;;
  'Darwin')
    OS='Mac'
    ;;
  'SunOS')
    OS='Solaris'
    ;;
  'AIX') ;;
  *) ;;
esac

prompt_confirm() {
    while true; do
        read -r -n 1 -p "${1:-$1} [y/n]: " REPLY
        case $REPLY in
            [yY]) echo ; return 0 ;;
            [nN]) echo ; return 1 ;;
            *) printf " \033[31m %s \n\033[0m" "invalid input"
        esac
    done
}
