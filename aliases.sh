#!/bin/bash
bins="./node_modules/.bin"
alias pkg="${bins}/pkg"
alias webpack="${bins}/webpack"
alias "cross-env"="${bins}/cross-env"

alias "pkg-win"="${bins}/pkg -t node8-win-x64"
alias "pkg-unix"="${bins}/pkg -t node8-linux-x64"
alias "pkg-osx"="${bins}/pkg -t node8-macos-x64"

alias "makeComponent"="./makeComponent.exe"
