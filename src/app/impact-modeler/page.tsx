"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Tabs } from "@/components/ui/Tabs";
import { TaxDeferralPower } from "@/components/impact-modeler/TaxDeferralPower";
import { CrossBorderModule } from "@/components/impact-modeler/CrossBorderModule";
import { ImpactOptimizer } from "@/components/impact-modeler/ImpactOptimizer";

export default function ImpactModelerPage() {
  const tabs = [
    {
      label: "Tax Deferral Power",
      content: <TaxDeferralPower />,
    },
    {
      label: "Cross-Border / JPY",
      content: <CrossBorderModule />,
    },
    {
      label: "Carrier B Portfolio Optimizer",
      content: <ImpactOptimizer />,
    },
  ];

  return (
    <>
      <PageHeader
        title="Impact Modeler"
        description="Client-facing visualization showing the power of tax deferral and cross-border impact"
      />
      <div className="max-w-[1600px] mx-auto p-6">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}
