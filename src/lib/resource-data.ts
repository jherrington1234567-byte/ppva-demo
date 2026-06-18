export interface Resource {
  id: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  sourceFile?: string;
  type: "document" | "spreadsheet" | "pdf" | "template" | "guide";
}

export const CATEGORIES = [
  "Product Knowledge",
  "Carrier Profiles",
  "Investment Universe",
  "Compliance References",
  "Partner Guides",
  "Process Documents",
  "Templates",
  "Case Materials",
  "Fee Structures",
];

export const RESOURCES: Resource[] = [
  // Product Knowledge
  {
    id: "ppva-overview",
    title: "PPVA Overview",
    category: "Product Knowledge",
    tags: ["ppva", "overview", "product", "annuity"],
    summary: "Comprehensive overview of Private Placement Variable Annuity structure, benefits, and mechanics.",
    type: "pdf",
  },
  {
    id: "ppli-basics",
    title: "PPLI Basics",
    category: "Product Knowledge",
    tags: ["ppli", "basics", "education", "insurance"],
    summary: "Foundational education on Private Placement Life Insurance — structure, tax benefits, and use cases.",
    type: "pdf",
  },
  {
    id: "ppva-vs-ppli",
    title: "PPVA vs PPLI Comparison",
    category: "Product Knowledge",
    tags: ["ppva", "ppli", "comparison", "differences"],
    summary: "Side-by-side comparison of PPVA and PPLI structures, highlighting when each is appropriate.",
    type: "guide",
  },
  {
    id: "current-build",
    title: "Current Build — Private Placement at JH",
    category: "Product Knowledge",
    tags: ["tpbc", "positioning", "platform", "current"],
    summary: "JH's current positioning and institutional-grade planning structure for private placement.",
    type: "pdf",
  },
  // Carrier Profiles
  {
    id: "advantage-Carrier A",
    title: "Carrier A",
    category: "Carrier Profiles",
    tags: ["advantage", "Carrier A", "carrier", "primary"],
    summary: "Primary carrier profile — Carrier A. Fee structure, process, entity architecture, and compliance framework.",
    type: "guide",
  },
  {
    id: "axcelus-factsheet",
    title: "Carrier D Financial Fact Sheet",
    category: "Carrier Profiles",
    tags: ["axcelus", "factsheet", "carrier"],
    summary: "Carrier D Financial fact sheet with carrier background, capabilities, and product overview.",
    type: "pdf",
  },
  {
    id: "lombard-guidelines",
    title: "Carrier E PPLI Underwriting Guidelines",
    category: "Carrier Profiles",
    tags: ["lombard", "underwriting", "guidelines"],
    summary: "Carrier E International underwriting guidelines for PPLI placement.",
    type: "document",
  },
  // Investment Universe
  {
    id: "sali-options",
    title: "Carrier C Investment Options and Overview",
    category: "Investment Universe",
    tags: ["sali", "investments", "funds", "managers"],
    summary: "Comprehensive list of ~80 investment managers and fund options available through Carrier C for private placement.",
    type: "spreadsheet",
  },
  {
    id: "portfolio-proposal",
    title: "Detailed Portfolio Proposal (Carrier A)",
    category: "Investment Universe",
    tags: ["portfolio", "proposal", "advantage", "performance"],
    summary: "Detailed portfolio proposal with Crystal Funds performance data and allocation frameworks.",
    type: "pdf",
  },
  // Compliance References
  {
    id: "817h-rules",
    title: "IRC 817(h) Diversification Rules",
    category: "Compliance References",
    tags: ["817h", "diversification", "compliance", "irs"],
    summary: "Detailed explanation of IRC 817(h) diversification requirements — the 5 rules that must be maintained at all times.",
    type: "guide",
  },
  {
    id: "investor-control",
    title: "Investor Control Doctrine",
    category: "Compliance References",
    tags: ["investor-control", "compliance", "doctrine"],
    summary: "Comprehensive guide to the investor control doctrine — what clients can and cannot do regarding investment decisions.",
    type: "guide",
  },
  {
    id: "bd-ria-separation",
    title: "BD/RIA Separation Guidelines",
    category: "Compliance References",
    tags: ["bd", "ria", "separation", "compliance", "fiduciary"],
    summary: "Strict temporal separation rules between broker-dealer and RIA phases. Key compliance framework for PPVA placement.",
    type: "guide",
  },
  {
    id: "underwriting-guidance",
    title: "International PPVA Underwriting Guidance",
    category: "Compliance References",
    tags: ["underwriting", "international", "eligibility"],
    summary: "Carrier eligibility matrix based on client nationality, residency, and entity type.",
    type: "spreadsheet",
  },
  // Partner Guides
  {
    id: "ria-guide",
    title: "RIA Partner Guide",
    category: "Partner Guides",
    tags: ["ria", "partner", "guide", "fiduciary"],
    summary: "How RIAs participate in PPVA cases — from engagement through ongoing portfolio management.",
    type: "guide",
  },
  {
    id: "insurance-pro-guide",
    title: "Insurance Professional Guide",
    category: "Partner Guides",
    tags: ["insurance", "professional", "guide", "placement"],
    summary: "Guide for insurance professionals on PPVA placement — compensation, process, and case management.",
    type: "guide",
  },
  {
    id: "opportunity-brief",
    title: "Carrier A/Carrier D Opportunity Brief",
    category: "Partner Guides",
    tags: ["advantage", "axcelus", "opportunity", "pitch"],
    summary: "Master opportunity brief for the Carrier A and Carrier D PPLI/PPVA platform.",
    type: "document",
  },
  // Process Documents
  {
    id: "workflow-narrative",
    title: "Policy Placement Workflow Narrative",
    category: "Process Documents",
    tags: ["workflow", "narrative", "process", "phases"],
    summary: "Complete 4-phase process architecture with detailed narrative for each phase and transition rules.",
    type: "document",
  },
  {
    id: "15-step-task-list",
    title: "Detailed 15-Step Task List",
    category: "Process Documents",
    tags: ["15-step", "task", "execution", "roadmap"],
    summary: "Execution roadmap with all 15 steps, owners, prerequisites, documents, and timing for each.",
    type: "document",
  },
  {
    id: "implementation-process",
    title: "PPLI Implementation Process",
    category: "Process Documents",
    tags: ["implementation", "process", "steps"],
    summary: "JH's PPLI implementation process document — step-by-step placement guide.",
    type: "pdf",
  },
  // Templates
  {
    id: "intake-form",
    title: "PPLI/PPVA Intake Form (Fillable)",
    category: "Templates",
    tags: ["intake", "form", "fillable", "client"],
    summary: "Fillable client intake form for PPLI/PPVA cases — captures all required information for case initiation.",
    type: "template",
  },
  {
    id: "due-diligence",
    title: "VUL Due Diligence Document",
    category: "Templates",
    tags: ["due-diligence", "vul", "questionnaire"],
    summary: "Due diligence framework and questionnaire for variable universal life and private placement cases.",
    type: "template",
  },
  // Fee Structures
  {
    id: "deal-model",
    title: "PPVA Deal Model — Master Build",
    category: "Fee Structures",
    tags: ["deal-model", "excel", "calculations", "master"],
    summary: "The canonical calculation engine. Contains all financial logic for premium waterfall, fund allocation, carrier illustration, and tax impact.",
    type: "spreadsheet",
  },
  {
    id: "ohana-split",
    title: "Agency Split Sheets",
    category: "Fee Structures",
    tags: ["ohana", "split", "compensation", "fees"],
    summary: "Fee sharing structure between PBWR and Agency partners — commission splits and recurring revenue allocation.",
    type: "spreadsheet",
  },
  {
    id: "sou-fees",
    title: "Statement of Understanding — Fee Schedule",
    category: "Fee Structures",
    tags: ["sou", "fees", "3c", "oga", "advantage"],
    summary: "Official fee schedule for Structures Partner, the Alliance, and Carrier A — premium loads, admin fees, and annual charges.",
    type: "pdf",
  },
  // Case Materials
  {
    id: "master-playbook",
    title: "JH PPVA Master Playbook (Phase 1)",
    category: "Case Materials",
    tags: ["playbook", "master", "tpbc", "phase1"],
    summary: "Master playbook document covering JH's PPVA platform, positioning, and operational framework.",
    type: "document",
  },
  {
    id: "impact-tool",
    title: "PPVA Impact Analysis Tool v10",
    category: "Case Materials",
    tags: ["impact", "analysis", "tool", "interactive"],
    summary: "Interactive HTML-based impact analysis tool showing PPVA vs current portfolio scenarios with multiple surrender designs.",
    type: "template",
  },
];
