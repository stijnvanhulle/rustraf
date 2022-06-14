#!/usr/bin/env node

const yargs = require("yargs/yargs");
const path = require("path");
const fs = require("fs");
const { hideBin } = require("yargs/helpers");
const rustraf = require("../index");

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
        const pathTo = fs.existsSync(file)
          ? file
          : path.resolve(process.cwd(), file);

        rustraf.remove(pathTo);
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
