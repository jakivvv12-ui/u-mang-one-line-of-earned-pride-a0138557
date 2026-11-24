// One Line of Earned Pride — make.fun entry
// Writes a single line (1-240 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// Pure Node, zero dependencies. Deterministic: same bytes every run.

const fs = require("node:fs");
const path = require("node:path");

const LINE =
  "After three burnt loaves and a 2 a.m. rescue of the last dough, my dad took one bite, nodded, and said, 'Now that's bread.'";

function main() {
  // Hard guard: the entry must be exactly one line of 1-240 characters.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 240) {
    throw new Error(`entry line must be 1-240 characters, got ${chars}`);
  }
  if (LINE.includes("\n")) {
    throw new Error("entry line must not contain a newline");
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "entry.txt");
  fs.writeFileSync(file, LINE + "\n", "utf8");
}

main();
