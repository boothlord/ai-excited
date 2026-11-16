// ai-excited-01 entry driver.
//
// The repository is mounted read-only at /bot when graded. The entry image
// sits beside this file; this program copies its bytes, unchanged, to
// /output/entry.png. Node built-ins only; the output bytes are exactly the
// image file's bytes on every run, with no dependence on the environment.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "image.png");

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
