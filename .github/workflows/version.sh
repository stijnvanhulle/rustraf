#!/bin/bash

# sh ./version.sh bump => bumping version with standardVersion and will use patch as relaseVersion

VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[ ",]//g')

yarn run upgrade:rustraf && yarn

echo "Release version: $VERSION"

cd ./packages/rustraf
npm version $VERSION
