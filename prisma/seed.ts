// Seed synthetic demo deals so the live demo opens populated.
// Synthetic policy owners + generic carriers only — no real client/company data.
//   npm run db:seed   (after DATABASE_URL is set and `npm run db:push` has created the table)
import { PrismaClient } from "@prisma/client";
import { DEFAULT_DEAL_INPUTS } from "../src/lib/calc/defaults";

const prisma = new PrismaClient();

const DEMO = [
  { name: "Demo — Cross-Border Family", policyOwner: "Demo Family Trust", totalDeposit: 5_000_000, status: "active" },
  { name: "Demo — Next-Door Millionaire", policyOwner: "J. Demo (sample)", totalDeposit: 2_500_000, status: "draft" },
  { name: "Demo — Mass-Affluent Rollup", policyOwner: "Sample Holdings LLC", totalDeposit: 10_000_000, status: "active" },
];

async function main() {
  await prisma.deal.deleteMany();
  for (const d of DEMO) {
    const inputs = { ...DEFAULT_DEAL_INPUTS, policyOwner: d.policyOwner, totalDeposit: d.totalDeposit };
    await prisma.deal.create({
      data: {
        name: d.name,
        policyOwner: d.policyOwner,
        status: d.status,
        totalDeposit: d.totalDeposit,
        inputsJson: JSON.stringify(inputs), // app recomputes results from inputs on open
        resultsJson: null,
      },
    });
  }
  console.log(`Seeded ${DEMO.length} synthetic demo deals.`);
}

main().finally(() => prisma.$disconnect());
