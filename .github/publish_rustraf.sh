#!/bin/bash

# sh ./version.sh bump => bumping version with standardVersion and will use patch as relaseVersion

VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[ ",]//g')

yarn run upgrade:rustraf && yarn

echo "Release version: $VERSION"

cd ./packages/rustraf
yarn
yarn run upgrade && yarn
npm version $VERSION
npm publish --access public --registry https://registry.npmjs.org
