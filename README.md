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

## Going live (Neon Postgres + Netlify) — pending the connection string
The DB is **Neon (Postgres)**; Prisma is already configured for it (`schema.prisma`
`provider = "postgresql"`, `url = env("DATABASE_URL")`).
1. Create a free Neon project → copy the **pooled** connection string (host contains
   `-pooler`, ends with `?sslmode=require`).
2. Set it as `DATABASE_URL` — locally in `.env`, and as a Netlify env var on a **new** site
   (separate from imua.space) connected to this repo.
3. Create the table + seed: `npm run db:push` then `npm run db:seed`.
4. Deploy on Netlify (build runs `prisma generate && next build`); link the live URL from the
   PPVA Build Lab card on imua.space + add screenshots.

**IMUA.**
