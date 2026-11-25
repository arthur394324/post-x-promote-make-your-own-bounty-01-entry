// Entry for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
//
// The entry is the X post itself: one quote of make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) from the public account
// @arthurrobe11744, with a photo of its own attached, the @makefunai tag and the
// play code in its text. This program only hands the post's address to the gate:
// it copies POST.json from the repository root to the output directory, where the
// house reads it and scores the post's replies + reposts + quotes.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (error) {
  console.error(
    `Could not copy POST.json from ${botDir}: ${(error as Error).message}`,
  );
  process.exit(1);
}
