import test from "ava";
import path from "path";
import { dirname } from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

import { sum, removeFile } from "../index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test("sum from native", (t) => {
  t.is(sum(1, 2), 3);
});

test("remove file", async (t) => {
  const filePath = path.join(__dirname, "test.txt");
  await fs.writeFile(filePath, "Learn Node FS module");

  const ok = removeFile(filePath);
  t.is(ok, true);
});
