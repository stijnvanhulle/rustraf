The [UNIX command](<http://en.wikipedia.org/wiki/Rm_(Unix)>) `rm -rf` for node written with Rust.

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/stijnvanhulle/rustraf?style=for-the-badge)

![npm](https://img.shields.io/npm/v/@rustraf/core?style=for-the-badge)

![npm](https://img.shields.io/npm/dm/@rustraf/core?style=for-the-badge)

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
