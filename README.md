# @rustraf/core
The [UNIX command](<http://en.wikipedia.org/wiki/Rm_(Unix)>) `rm -rf` for node written with Rust.

<a href="https://www.npmjs.com/package/@rustraf/core">
  <img alt="Npm verssion" src="https://img.shields.io/npm/v/@rustraf/core?style=for-the-badge"/>
</a>

<a href="https://www.npmjs.com/package/@rustraf/core">
  <img alt="GitHub tag (latest by date)" src="https://img.shields.io/github/v/tag/stijnvanhulle/rustraf?style=for-the-badge"/>
</a>
</br>

<a href="https://www.npmjs.com/package/@rustraf/core">
  <img alt="Npm downloads" src="https://img.shields.io/bundlephobia/min/@rustraf/core?style=for-the-badge"/>
</a>

<a href="https://www.npmjs.com/package/@rustraf/core">
  <img alt="Npm downloads" src="https://img.shields.io/npm/dm/@rustraf/core?style=for-the-badge"/>
</a>



## API

```
import { remove, removeFile, removeDir } from "@rustraf/core";
```

`remove(fileOrFolder)`

Remove a folder or a file, the same behaviour as 'rm -rf fileOrFolder'
It will remove empty directories that lack read access on Linux, and will remove "read-only" files and directories on Windows.

`removeFile(file)`

Remove a file.

`removeDir(dir)`

Remove a folder and all it's underlying content.

## CLI

If installed with

```
npm install @rustraf/core -g
```

```
yarn global add @rustraf/core
```

it can be used as a global
command `rustraf <path> [<path> ...]` which is useful for cross platform support.


## Compared with rimraf
Removing node_modules with a size of 597,5 MB

| Package | Speed                                         |
|---------|-----------------------------------------------|
| [rimraf](https://www.npmjs.com/package/rimraf)  | 1.61s user 11.26s system 218% cpu 5.899 total |
| [@rustraf/core](https://www.npmjs.com/package/@rustraf/core) | 0.28s user 5.79s system 84% cpu 7.218 total   |
| native(darwin-arm64) | 0.06s user 5.38s system 86% cpu 6.293 total |

## Supporting rustraf

Rimraf uses an MIT-licensed open source project with its ongoing development made possible entirely by the support of Sponsors. If you would like to become a sponsor, please consider:

- [Become a Sponsor on GitHub](https://github.com/sponsors/stijnvanhulle)

<p align="center">
  <a href="https://github.com/sponsors/stijnvanhulle">
    <img src="https://raw.githubusercontent.com/stijnvanhulle/sponsors/main/sponsors.svg" alt="My sponsors" />
  </a>
</p>



