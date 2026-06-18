import { NextResponse } from "next/server";

// Demo build: source documents are not bundled (the catalog is shown for reference only).
// The production app serves real reference files; this owned demo omits them by design.
export async function GET() {
  return NextResponse.json(
    { error: "Reference documents are not included in this public demo." },
    { status: 404 },
  );
}
