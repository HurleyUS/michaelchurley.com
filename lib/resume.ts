import { PROFILE, SITE_URL } from "@/lib/site-profile";

/**
 * Michael's resume: the single source for the home page, /resume.md, /resume.json, and /llms.txt.
 * Dates are "YYYY-MM" or "YYYY"; a missing endDate means the role is current.
 */
export type ResumeWork = {
  name: string;
  position: string;
  url?: string;
  location?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  note?: string;
  highlights: string[];
  earlier?: boolean;
};

export type ResumeSkill = { name: string; keywords: string[] };

export type ResumeEducation = {
  institution: string;
  studyType: string;
  area: string;
  startDate: string;
  endDate: string;
};

/** Date the resume content was last revised (used for lastmod and dateModified). */
export const RESUME_UPDATED = "2026-09-27";

export const RESUME = {
  location: `${PROFILE.locality}, ${PROFILE.region}`,
  headline: PROFILE.headline,
  summary:
    "Search and growth operator with 20 years of SEO (2005–present), now focused on AEO and GEO. Founded the local SEO agency studioTWELVE, ran all operations at SEO agency White Fox Studios for nine years, did SEO for his own restaurant, owned marketing and martech as CTO of a real estate SaaS, and now leads SEO at Hustle Launch. Builds the sites being optimized: production Next.js, Convex, and Stripe sites plus the AI agent tooling around them, and writes and teaches technical SEO for answer engines and browsing agents.",
  profiles: [
    {
      network: "LinkedIn",
      username: "michaelchurley",
      url: "https://www.linkedin.com/in/michaelchurley",
    },
    { network: "GitHub", username: "michaelmonetized", url: "https://github.com/michaelmonetized" },
    { network: "X", username: "michaelh_rley", url: "https://x.com/michaelh_rley" },
  ],
  skills: [
    {
      name: "AEO / GEO",
      keywords: [
        "llms.txt and agent-readable (Markdown) content",
        "AI crawler policy (training vs. retrieval bots)",
        "JSON-LD structured data and entity markup (Organization, Person, FAQPage, sameAs)",
        "citation-focused content structure",
        "measuring AI citations and referrals",
      ],
    },
    {
      name: "Technical SEO",
      keywords: [
        "server rendering vs. client-rendered content",
        "crawlability and indexation",
        "sitemaps and robots.txt",
        "information architecture and topic clusters",
        "page performance",
        "local SEO and Google Business Profile",
        "directory citations and NAP consistency",
      ],
    },
    {
      name: "Analytics & reporting",
      keywords: [
        "PostHog",
        "Ahrefs",
        "SpyFu",
        "first-party event tracking",
        "user-intent analysis to prioritize roadmaps",
      ],
    },
    {
      name: "AI & agents",
      keywords: [
        "MCP-based agent harnesses",
        "multi-agent orchestration",
        "token-efficient HTML-to-Markdown ingestion for LLMs",
        "OpenRouter",
        "Claude Code / Cursor workflows",
      ],
    },
    {
      name: "Engineering",
      keywords: [
        "TypeScript",
        "Next.js (App Router, SSR)",
        "TanStack Start",
        "React",
        "Convex",
        "Vercel",
        "Stripe API",
        "Clerk",
        "Bash",
        "PHP",
        "Swift",
        "Rust",
      ],
    },
  ] satisfies ResumeSkill[],
  work: [
    {
      name: "Hustle Launch",
      position: "Director",
      url: "https://www.hustlelaunch.com",
      description:
        "Performance marketing and web design agency serving businesses in FL, SC, GA, NC, and TN",
      startDate: "2024-02",
      highlights: [
        "Lead SEO and local search delivery for client accounts: Google Business Profile, directory listings and citations, link building, and editorial placements.",
        "Wrote a full technical SEO and GEO audit and phased roadmap for hustlelaunch.com covering structured data gaps, rendering, IA and topic clusters, and AI crawler policy, sequenced into a 4–6 week foundation sprint and a 6–10 week architecture and performance phase.",
        "Built a 50+ directory NAP citation checklist used for client local-SEO audits.",
        "Built the Assessment Toolbar Chrome extension (2024) that opens the current page in Google's Rich Results Test, the Schema.org validator, PageSpeed Insights, WAVE, SpyFu, and other audit tools in one click.",
        "Build and maintain client and agency sites on Next.js, Convex, and Vercel, plus My.HustleLaunch.com, an AI marketing SaaS with a Buffer integration.",
      ],
    },
    {
      name: "Zaxby's Franchising LLC",
      position: "Contract Product Engineer",
      location: "Sylva, NC, then Waynesville, NC",
      description:
        'Martech, product engineering, and DevOps for the Zaxby\'s "Zamily" franchise network',
      startDate: "2024-08",
      endDate: "2026-02",
      highlights: [
        "Built and shipped YourZaxbys local store marketing (LSM) and operations software that ZFL franchise owners could license for their stores.",
        "Contracted to train on site first at the Sylva, NC store (Aug 2024 – Mar 2025), then in Waynesville, NC, learning store workflows firsthand before building the software.",
        "LSM: store-level pages (menu, catering, events, community, careers) with location-specific metadata, event promotions, and a guest satisfaction survey; local growth playbook covering Google Business Profile, events, and partnerships.",
        "Ops: live shift dashboard (sales, labor % vs. goal, speed of service, COGS %, SMG guest satisfaction) fed by PAR, Crunchtime, Berry-AI, and SMG CSV ingestion; above-store dashboards for stores, schedules, audits, and reports; hiring, onboarding with encrypted SSNs, checklists, and Steritech tracking.",
        "Stack and DevOps: Next.js, Convex, Clerk, Recharts, Vercel, CI gates, Sentry, PostHog, Resend. Demos: wwwyourzaxbyscom.vercel.app, waynesvilleyourzaxbyscom.vercel.app",
      ],
    },
    {
      name: "HurleyUS / Michael Monetized",
      position: "Founder",
      url: "https://www.hurleyus.com",
      description: "Independent products and open source",
      highlights: [
        "Technical SEO in the Age of Agentic AI (Sep 2026): 68-page, 10-chapter field guide on pages that people and browsing agents can understand and use (rendering, structured data and entity facts, crawler access policy, measurement), with a workbook, four sector playbooks, and a Python page-inspector toolkit with tests.",
        "url-to-md: CLI that converts HTML pages to clean Markdown for LLM ingestion, cutting token usage by about 40% compared with raw HTML.",
        "shagent / agent-os: Bun and TypeScript agent harness using MCP and OpenRouter, and a shell-native multi-agent orchestrator with a real-time WebSocket dashboard.",
        "stripe-convex: reusable Stripe + Convex payments package (checkout, cart, coupons, 19 webhook events).",
        "Ship and run production sites on Next.js, Convex, Clerk, Stripe, PostHog, Sentry, and Vercel, including michaelchurley.com, bestwnc.com (Western NC local business directory), and uncap.us.",
      ],
    },
    {
      name: "Realay.com (Kaibo, LLC)",
      position: "Chief Technology Officer",
      description: "Real estate SaaS platform",
      startDate: "2023-03",
      endDate: "2024-05",
      note: "Overlapped White Fox Studios and Hustle Launch",
      highlights: [
        "Owned product engineering plus all marketing and martech development for a real estate SaaS platform, while the sales side handled outbound sales and partner onboarding.",
        "Took the product from a WordPress MVP to a React build.",
      ],
    },
    {
      name: "White Fox Studios",
      position: "Director of Operations",
      description: "SEO agency",
      startDate: "2015-02",
      endDate: "2024-02",
      highlights: [
        "The owner's only direct report; ran all agency operations: SEO strategy and delivery, sales, marketing, client delivery, and growth; built internal software and client systems.",
        "Built and still maintain the Rotary Swing iOS app.",
      ],
    },
    {
      name: "Papa John's franchise partnership",
      position: "Franchise Partner (LSM)",
      startDate: "2014-05",
      endDate: "2015-02",
      earlier: true,
      highlights: [
        "Franchise partnership that dissolved; the role included local store marketing (LSM).",
      ],
    },
    {
      name: "Hurley's Creekside Dining & Rhum Bar",
      position: "Co-Owner / Operator",
      location: "Maggie Valley, NC",
      startDate: "2010-07",
      endDate: "2014-05",
      earlier: true,
      highlights: [
        "Rebranded and relaunched his restaurant, ran operations, marketing, and SEO; grew annual revenue from $1.3M to $5.33M.",
      ],
    },
    {
      name: "studioTWELVE",
      position: "Founder",
      location: "South Florida",
      startDate: "2007",
      endDate: "2010",
      earlier: true,
      highlights: [
        "Web design and local SEO for small businesses in South Florida; grew annual net profit from $50K to $387K.",
      ],
    },
    {
      name: "Signs R Us",
      position: "Production Manager",
      startDate: "2005",
      endDate: "2007",
      earlier: true,
      highlights: ["Production management with SEO as part of the role."],
    },
    {
      name: "Lowcountry Today",
      position: "Software Developer and Systems Administrator",
      startDate: "2005",
      endDate: "2009",
      earlier: true,
      highlights: [
        "COBOL and ColdFusion applications, Windows Server administration, banner ad design.",
      ],
    },
  ] satisfies ResumeWork[] as ResumeWork[],
  education: [
    {
      institution: "College of Charleston",
      studyType: "B.S.",
      area: "Computer Science",
      startDate: "2003",
      endDate: "2007",
    },
    {
      institution: "Trident Technical College",
      studyType: "A.A.",
      area: "Commercial Graphics",
      startDate: "2001",
      endDate: "2003",
    },
  ] satisfies ResumeEducation[],
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatResumeDate(value: string) {
  const [year, month] = value.split("-");
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : (year ?? value);
}

/** "Feb 2024 – Present", "2007 – 2010", or "Current" when there is no start date. */
export function formatWorkDates(work: Pick<ResumeWork, "startDate" | "endDate">) {
  if (!work.startDate) return "Current";
  const end = work.endDate ? formatResumeDate(work.endDate) : "Present";
  return `${formatResumeDate(work.startDate)} – ${end}`;
}

function workMarkdown(work: ResumeWork) {
  const meta = [formatWorkDates(work), work.location, work.description, work.note]
    .filter(Boolean)
    .join(" · ");
  const heading = work.url ? `[${work.name}](${work.url})` : work.name;
  const bullets = work.highlights.map((item) => `- ${item}`).join("\n");
  return `### ${work.position}, ${heading}\n\n**${meta}**\n\n${bullets}`;
}

/** Contact line shared by the resume Markdown and llms.txt. */
export function contactMarkdown() {
  return [
    RESUME.location,
    `[${PROFILE.telephoneDisplay}](${PROFILE.telephoneHref})`,
    `[${PROFILE.email}](mailto:${PROFILE.email})`,
    `[michaelchurley.com](${SITE_URL})`,
    ...RESUME.profiles.map((p) => `[${p.network}](${p.url})`),
  ].join(" · ");
}

/** Resume body (everything after the H1 and summary). */
export function resumeSectionsMarkdown() {
  const skills = RESUME.skills.map((s) => `- **${s.name}:** ${s.keywords.join(", ")}`).join("\n");
  const main = RESUME.work
    .filter((w) => !w.earlier)
    .map(workMarkdown)
    .join("\n\n");
  const earlier = RESUME.work
    .filter((w) => w.earlier)
    .map(
      (w) =>
        `- **${w.position}, ${w.name}**${w.location ? `, ${w.location}` : ""} (${formatWorkDates(w)}): ${w.highlights.join(" ")}`,
    )
    .join("\n");
  const education = RESUME.education
    .map((e) => `- **${e.studyType} ${e.area}**, ${e.institution} (${e.startDate}–${e.endDate})`)
    .join("\n");
  return `## Core Skills\n\n${skills}\n\n## Experience\n\n${main}\n\n### Earlier SEO and Marketing Roles\n\n${earlier}\n\n## Education\n\n${education}\n`;
}

/** Full resume as Markdown (served at /resume.md). */
export function resumeMarkdown() {
  return `# ${PROFILE.name}\n\n${contactMarkdown()}\n\n## ${RESUME.headline}\n\n${RESUME.summary}\n\n${resumeSectionsMarkdown()}`;
}

/** Resume in JSON Resume v1.0.0 format (https://jsonresume.org/schema). */
export function jsonResume() {
  return {
    $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: PROFILE.name,
      label: RESUME.headline,
      image: PROFILE.image,
      email: PROFILE.email,
      phone: PROFILE.telephoneDisplay,
      url: SITE_URL,
      summary: RESUME.summary,
      location: { city: PROFILE.locality, region: PROFILE.region, countryCode: PROFILE.country },
      profiles: RESUME.profiles,
    },
    work: RESUME.work.map((w) => ({
      name: w.name,
      position: w.position,
      ...(w.url ? { url: w.url } : {}),
      ...(w.location ? { location: w.location } : {}),
      ...(w.description ? { description: w.description } : {}),
      ...(w.startDate ? { startDate: w.startDate } : {}),
      ...(w.endDate ? { endDate: w.endDate } : {}),
      ...(w.note ? { summary: w.note } : {}),
      highlights: w.highlights,
    })),
    education: RESUME.education,
    skills: RESUME.skills,
    meta: {
      canonical: `${SITE_URL}/resume.json`,
      version: "v1.0.0",
      markdown: `${SITE_URL}/resume.md`,
    },
  };
}
