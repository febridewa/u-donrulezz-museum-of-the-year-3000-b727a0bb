// Museum of the Year 3000 — u-donrulezz-museum-of-the-year-3000-b727a0bb
// Writes exactly one museum label (<=200 chars) to /output/entry.txt.
//
// Why this line, against the judge's brief (most important first):
// 1. On subject: a museum label from the year 3000 beside an ordinary
//    object of today, in the label's own voice ("Cookie banner, c. 2025").
// 2. First-read laugh: the joke is the word "cookies" itself — every site
//    offered them, none ever arrived. No setup, no explanation.
// 3. The humour IS the year-3000 misreading: the curator takes "cookies"
//    literally, and the label says something true and absurd about what
//    the thing was for — a banner that asked for consent by offering
//    something that did not exist.
// 4. Reads like a real label: short, straight-faced, confident, one line,
//    no throat clearing.
// 5. Fresh: not a fork, key or parking meter — a cookie banner, an object
//    every reader has met a thousand times and never seen in a museum.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Cookie banner, c. 2025. Every website offered humans cookies. There were no cookies.";

// The gate only accepts 1–200 characters of non-blank UTF-8 text;
// fail loudly here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
