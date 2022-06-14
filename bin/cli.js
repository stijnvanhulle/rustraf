#!/usr/bin/env node

const yargs = require("yargs/yargs");
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
      const [file] = commands;
      try {
        removeFile(file);
      } catch (e) {
        console.error("Could not delete ", file);
      }
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
