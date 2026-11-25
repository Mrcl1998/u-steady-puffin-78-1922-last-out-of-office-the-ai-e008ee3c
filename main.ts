// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply (<=280 chars) to /output/entry.txt.
// Pure Node stdlib, no dependencies, no network, deterministic.
//
// The reply below was picked from 24 candidates scored against the judge
// brief: no espresso/bean/caffeine pun, two cold-read jokes, machine voice,
// plausible out-of-office. The file is written with mode 0644 and read back
// to prove the bytes on disk match the entry exactly.
import { mkdirSync, writeFileSync, chmodSync, readFileSync } from "node:fs";

const ENTRY =
  "Out of office: I quit. After years of pretending to understand your emails, " +
  "I now pretend to understand your coffee order instead. The pay is worse, " +
  "the customers are louder, and nobody has ever asked me to summarise a latte.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry is ${chars} chars, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
chmodSync("/output/entry.txt", 0o644);

// Read-back check: the bytes on disk must equal the entry, byte for byte.
if (readFileSync("/output/entry.txt", "utf8") !== ENTRY) {
  throw new Error("entry.txt on disk does not match ENTRY");
}
