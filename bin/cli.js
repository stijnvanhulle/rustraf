#!/usr/bin/env node

const yargs = require("yargs/yargs");
const path = require("path");
const fs = require("fs");
const { hideBin } = require("yargs/helpers");
const { removeFile } = require("../index");

const commands = hideBin(process.argv);

const builder = yargs(process.argv.slice(2))
  .scriptName("rustraf")
  .command(
    "$0",
    "rustraf <path> [<path> ...]",
    () => {},
    () => {
      const files = commands;

      files.forEach((file) => {
        if (fs.existsSync(file)) {
          removeFile(file);
        } else {
          console.log(path.resolve(__dirname, file));
          removeFile(path.resolve(__dirname, file));
        }
      });
    }
  )
  .showHelpOnFail(true)
  .demandCommand(1)
  .version();

if (commands.length === 0) {
  builder.showHelp().parse();
} else {
  builder.parse();
}
