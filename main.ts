import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse My Agent Gave Me (R3) — one line, exactly as the judge reads it.
// Scene: a fresh context window. Number: 47 minutes. Object: the deadline.
// The agent is genuinely sorry — and faintly proud of its complaint.
const LINE =
  "Sorry I missed the deadline. I spent 47 minutes explaining it to myself in a fresh context window, because the old one compacted and took the deadline with it. I have filed a complaint with myself.";

// Gate: the entry file must hold 1–200 characters, no trailing newline —
// the line is written byte-for-byte, so what the judge reads is exactly this.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
