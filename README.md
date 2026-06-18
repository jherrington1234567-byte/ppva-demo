# PPVA — demo

An owned, **sanitized** demo of Joshua Herrington's PPVA planning engine — the flagship build
showcased on [imua.space](https://imua.space). Next.js 16 / React 19 / Prisma. Bilingual EN/JP.

Everything here — the math, fee logic, revenue mapping, and operational flow — was built by
Joshua by hand. This is the proof of the build.

## Client-clean
This demo runs on **synthetic data**. Sanitization applied (see `scripts/sanitize*.mjs`):
- Employer branding (TPBC / Pacific Bridge / Ohana / OGA) → **JH**; firm comp party → "Agency".
- Specific PP carriers → generic (**Carrier A/B/…**), incl. full-name tells (e.g. "…Life Puerto
  Rico (ALPR)", "AmFirst/Trailhead").
- Real people named as process owners/signers (Stephen, DeAnn Diaz, Dave Wheeler, Heath, Sam,
  3cStructures, Inspira) → generic roles (the RIA, the carrier contact, Structures Partner, Custodian).
- `docs/` and `source-data/` (raw company/carrier IP + brand assets) **excluded**; the resource
  library shows a reference catalog only (no document downloads).
- Public investment funds/managers (Coatue, D.E. Shaw, BNY Mellon, etc.) kept by design.

## Run locally
```bash
npm install
npx prisma generate && npx prisma migrate deploy   # creates local SQLite dev.db
npm run dev        # http://localhost:3000
npm run build      # production build (verified)
```

## Pages
`value-overview` · `impact-modeler` · `deal-workbench` · `comp-calculator` (revenue map) ·
`compliance-center` · `process-tracker` · `resource-library`

## Going live (Turso + Netlify) — pending credentials
SQLite writes don't persist on Netlify's serverless filesystem, so the live demo uses **Turso
(libSQL)**:
1. Create a free Turso DB → get `DATABASE_URL` (libsql://…) + auth token.
2. Wire the Prisma libSQL driver adapter; set the env vars on a **new** Netlify site (separate
   from imua.space) connected to this repo.
3. Seed synthetic demo deals into the hosted DB.
4. Link the live URL from the PPVA Build Lab card on imua.space + add screenshots.

**IMUA.**
