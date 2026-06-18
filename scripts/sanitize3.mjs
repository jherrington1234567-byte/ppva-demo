// Third pass: scrub carrier full-name TELLS left after the first-word genericization
// (e.g. "Carrier A Life Puerto Rico (ALPR)" still identifies the carrier).
//   node scripts/sanitize3.mjs
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const RULES = [
  [/\s*\(ALPR\)/gi, ''],
  [/Carrier A Life Puerto Rico/g, 'Carrier A'],
  [/Life Puerto Rico/g, 'Carrier A'],
  [/\bALPR\b/gi, 'Carrier A'],
  [/\s*\(AmFirst\s*\/\s*Trailhead\)/gi, ''],
  [/AmFirst\s*\/\s*Trailhead/gi, ''],
  [/\bAmFirst\b/gi, ''],
  [/\bTrailhead\b/gi, ''],
];

const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx|json)$/.test(e)) files.push(p);
  }
})('src');

const totals = new Map();
for (const f of files) {
  let t = readFileSync(f, 'utf8'); let c = 0;
  for (const [re, rep] of RULES) { const m = t.match(re); if (m) { c += m.length; totals.set(re.source, (totals.get(re.source) ?? 0) + m.length); t = t.replace(re, rep); } }
  if (c) { writeFileSync(f, t); console.log(`  ${String(c).padStart(3)}  ${f}`); }
}
for (const [s, n] of [...totals.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(3)}  ${s}`);
