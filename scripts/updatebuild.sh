#!/bin/bash
#

yarn selendra:build

git add selendra-wiki/build

git commit -m "update build folder"

git push
