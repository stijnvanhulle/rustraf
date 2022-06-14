import test from "ava";
import path from "path";
import { dirname } from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

import { remove, removeFile, removeDir } from "../index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test("remove file", async (t) => {
  const filePath = path.join(__dirname, "test.txt");
  await fs.writeFile(filePath, "Learn Node FS module");

  const ok = removeFile(filePath);
  t.is(ok, true);
});

test("remove dir", async (t) => {
  const dirPath = path.join(__dirname, "test");
  try {
    await fs.mkdir(dirPath);
  } catch (e) {}

  const ok = removeDir(dirPath);
  t.is(ok, true);
});

test("remove file advanced", async (t) => {
  const filePath = path.join(__dirname, "test_advanced.txt");
  await fs.writeFile(filePath, "Learn Node FS module");

  const ok = remove(filePath);
  t.is(ok, true);
});

test("remove folder advanced", async (t) => {
  const dirPath = path.join(__dirname, "test_advanced");
  try {
    await fs.mkdir(dirPath);
  } catch (e) {}

  const ok = remove(dirPath);
  t.is(ok, true);
});
