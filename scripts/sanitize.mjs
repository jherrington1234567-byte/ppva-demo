// Client-clean pass for the PPVA demo.
// Brand -> JH; specific carriers -> generic ("Carrier A".. ); firm comp-party -> "Agency".
// Case-sensitive, word-boundary: lowercase identifiers (e.g. ohanaShare, adminFeesAdvantage)
// and camelCase component names are intentionally NOT touched (internal, not user-visible),
// and the English word "advantage" (lowercase) is preserved.
//   node scripts/sanitize.mjs
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SRC = 'src';

// Ordered: multi-word / possessive BEFORE single tokens.
const RULES = [
  // company / brand -> JH (owned demo)
  [/The Pacific Bridge Companies/g, 'JH'],
  [/Pacific Bridge/g, 'JH'],
  [/\bTPBC's\b/g, "JH's"],
  [/\bTPBC\b/g, 'JH'],
  [/\bOGAFA\b/g, 'the Alliance'],
  [/\bOGA\b/g, 'the Alliance'],
  [/\bCalabash\b/g, 'JH'],

  // specific carriers / platforms -> generic
  [/\bAdvantage\b/g, 'Carrier A'],   // capitalized only; lowercase "advantage" (the word) kept
  [/\bAxonic\b/g, 'Carrier B'],
  [/\bSALI\b/g, 'Carrier C'],
  [/\bAxcelus\b/g, 'Carrier D'],
  [/\bLombard\b/g, 'Carrier E'],
  [/\bVida\b/g, 'Carrier F'],
  [/\bSyndicated\b/g, 'Capital Partners'],

  // the firm's revenue-split party
  [/\bOhana\b/g, 'Agency'],
];

const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx|json|css|mjs|js)$/.test(e)) files.push(p);
  }
})(SRC);

const totals = new Map();
for (const file of files) {
  let text = readFileSync(file, 'utf8');
  let changed = 0;
  for (const [re, rep] of RULES) {
    const m = text.match(re);
    if (m) { changed += m.length; totals.set(re.source, (totals.get(re.source) ?? 0) + m.length); text = text.replace(re, rep); }
  }
  if (changed) { writeFileSync(file, text); console.log(`  ${String(changed).padStart(3)}  ${file}`); }
}
console.log('\nPer-rule totals:');
for (const [s, n] of [...totals.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(3)}  ${s}`);
console.log(`\n${files.length} files scanned.`);
