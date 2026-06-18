// Second client-clean pass: real PEOPLE and named partners in the process flow / waterfall
// (user-visible as step owners, signers, and waterfall parties) -> generic roles.
// Covers English and the Japanese (katakana/romaji) translation values.
//   node scripts/sanitize2.mjs
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const RULES = [
  // strip person names attached to partner firms / carriers (parentheticals first)
  [/\s*\(DeAnn Diaz\)/g, ''],
  [/\s*\(Heath\)/g, ''],
  [/\s*\(Sam\)/g, ''],
  [/Dave Wheeler \(Carrier B\)/g, 'Carrier B'],
  [/Stephen \(RIA\)/g, 'the RIA'],
  [/Inspira Custodian/g, 'Custodian'],

  // firms -> generic roles
  [/3cStructures/g, 'Structures Partner'],
  [/\bInspira\b/g, 'the Custodian'],

  // people -> roles (English)
  [/\bStephen\b/g, 'the RIA'],
  [/Dave Wheeler/g, 'the carrier rep'],
  [/\bWheeler\b/g, 'the carrier rep'],
  [/DeAnn Diaz/g, 'the carrier contact'],
  [/\bDeAnn\b/g, 'the carrier contact'],
  [/\bDiaz\b/g, 'the carrier contact'],
  [/\bHeath\b/g, 'the structuring partner'],
  [/\bSam\b/g, 'the structuring partner'],

  // Japanese transliterations
  [/スティーブン/g, 'RIA'],   // Stephen
  [/インスピラ/g, 'カストディアン'], // Inspira -> Custodian (katakana, if present)
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
for (const file of files) {
  let t = readFileSync(file, 'utf8');
  let changed = 0;
  for (const [re, rep] of RULES) {
    const m = t.match(re);
    if (m) { changed += m.length; totals.set(re.source, (totals.get(re.source) ?? 0) + m.length); t = t.replace(re, rep); }
  }
  if (changed) { writeFileSync(file, t); console.log(`  ${String(changed).padStart(3)}  ${file}`); }
}
console.log('\nPer-rule:');
for (const [s, n] of [...totals.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${String(n).padStart(3)}  ${s}`);
