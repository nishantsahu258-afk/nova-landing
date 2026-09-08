// Centralized copy and data for the landing page.
// Keeping content separate from markup makes each section component
// reusable and makes the copy easy to review or swap out.

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const LOGOS = [
  "Aperture", "Northwind", "Kestrel", "Fieldstone", "Marbletree", "Loom & Co",
];

export const FEATURES = [
  {
    title: "Automated task routing",
    description:
      "NOVA reads incoming work and assigns it to the right person based on skills, load and deadlines.",
  },
  {
    title: "Live project timelines",
    description:
      "See every dependency and deadline on one timeline that updates itself as work moves.",
  },
  {
    title: "AI meeting notes",
    description:
      "Every call is transcribed, summarized and turned into tasks automatically, no note-taker needed.",
  },
  {
    title: "Smart status reports",
    description:
      "Weekly updates write themselves from real activity, so no one has to chase anyone for a status.",
  },
  {
    title: "Cross-team workspaces",
    description:
      "Shared spaces connect design, engineering and marketing without duplicated files or threads.",
  },
  {
    title: "Workflow automations",
    description:
      "Build no-code rules that move cards, notify owners and close loops while you focus on the work.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Connect your tools",
    description: "Link your calendar, chat and file storage in under five minutes, no IT ticket required.",
  },
  {
    step: "02",
    title: "Import your work",
    description: "NOVA scans open threads and documents and turns them into a clean, structured backlog.",
  },
  {
    step: "03",
    title: "Let automation run",
    description: "Routing, reminders and reports start working in the background from day one.",
  },
  {
    step: "04",
    title: "Review and refine",
    description: "Adjust the rules that matter to your team; NOVA learns your patterns as you go.",
  },
];

export const STATS = [
  { value: 42, suffix: "%", label: "less time in status meetings" },
  { value: 3.5, suffix: "×", label: "faster project handoffs" },
  { value: 128, suffix: "k+", label: "teams building on NOVA" },
  { value: 99.95, suffix: "%", label: "platform uptime" },
];

export const SOLUTIONS = [
  {
    title: "Product teams",
    description: "Turn customer feedback into a prioritized roadmap without losing context between tools.",
  },
  {
    title: "Engineering teams",
    description: "Route bugs and tickets automatically, and keep sprint boards accurate without manual updates.",
  },
  {
    title: "Marketing teams",
    description: "Plan campaigns across channels with shared timelines everyone can see and trust.",
  },
  {
    title: "Operations teams",
    description: "Standardize recurring processes into templates that run themselves every cycle.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We moved four tools into NOVA and cut our weekly status meeting from an hour to fifteen minutes.",
    name: "Priya Nair",
    role: "Head of Product, Aperture",
  },
  {
    quote:
      "The automated routing alone paid for the subscription in the first month. Nothing sits unassigned anymore.",
    name: "Daniel Osei",
    role: "Engineering Manager, Kestrel",
  },
  {
    quote:
      "Our team finally trusts one timeline instead of three spreadsheets that never agreed with each other.",
    name: "Marisol Vega",
    role: "Operations Lead, Fieldstone",
  },
  {
    quote:
      "Meeting notes turning into tasks automatically sounds small until you realize how much it saves.",
    name: "Tom Whitfield",
    role: "Founder, Marbletree",
  },
];

export const PRICING = [
  {
    name: "Starter",
    description: "For small teams getting organized for the first time.",
    monthly: 12,
    annual: 9,
    features: [
      "Up to 10 members",
      "Unlimited projects",
      "Basic automations",
      "1 GB file storage",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For teams ready to automate how work actually moves.",
    monthly: 29,
    annual: 23,
    features: [
      "Up to 50 members",
      "Advanced automations",
      "AI meeting notes",
      "50 GB file storage",
      "Priority support",
      "Custom workflows",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    description: "For organizations running many teams on one platform.",
    monthly: 59,
    annual: 47,
    features: [
      "Unlimited members",
      "Enterprise automations",
      "Dedicated success manager",
      "Unlimited storage",
      "SSO & audit logs",
      "99.95% uptime SLA",
    ],
    highlighted: false,
  },
];

export const FAQ = [
  {
    question: "How long does it take to set up NOVA?",
    answer:
      "Most teams connect their tools and import their first projects in under fifteen minutes. Full automation setup usually takes a first week to tune to your workflow.",
  },
  {
    question: "Can NOVA replace our existing project management tool?",
    answer:
      "Yes. NOVA imports projects, tasks and files from most common tools, so teams typically retire their old tool within the first billing cycle.",
  },
  {
    question: "Does NOVA work for non-technical teams?",
    answer:
      "NOVA is built for any team that manages recurring work, including marketing, operations and customer success, not only engineering.",
  },
  {
    question: "Is our data secure?",
    answer:
      "All data is encrypted in transit and at rest. Scale plans include SSO, audit logs and role-based access controls for stricter compliance needs.",
  },
  {
    question: "What happens if we exceed our plan's member limit?",
    answer:
      "We will notify you before any limit is reached so you can upgrade with no interruption to your team's work.",
  },
  {
    question: "Can I cancel or change plans at any time?",
    answer:
      "Yes, you can upgrade, downgrade or cancel from your billing settings at any time, with no long-term contract required.",
  },
];

export const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Resources: ["Help center", "Community", "API docs", "Status"],
  Legal: ["Privacy", "Terms", "Security"],
};
