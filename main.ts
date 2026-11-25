// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply (<=280 chars) to /output/entry.txt.
// Pure Node stdlib, no dependencies, no network, deterministic.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

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
