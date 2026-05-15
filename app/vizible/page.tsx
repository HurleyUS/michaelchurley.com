import type { Metadata } from "next";
import { ContainerBoxedCenter } from "@/components/layout/containers";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vizible Agency Partnership | Digital Marketing for Local Businesses",
  description:
    "Michael C. Hurley has partnered with Vizible Agency to bring local businesses a Personal CMO, real-time Business Dashboard, and an All-in-One CRM.",
  openGraph: {
    title: "Vizible Agency Partnership | Michael C. Hurley",
    description:
      "Get a Personal CMO, real-time marketing dashboard, and CRM built for local businesses.",
    url: "https://www.michaelchurley.com/vizible",
    type: "website",
  },
};

const testimonials = [
  {
    quote:
      "I love the fact that I have a personal connection that helps guide me, strategize with me and then do the work for me. This truly is the best marketing technology and I want to be on the top of Google local search.",
    name: "Chauncey Porter",
    title: "Porter Insurance Group",
    location: "Memphis, TN",
  },
  {
    quote:
      "I love the communication I have with Matt C. my Chief Marketing Officer at Vizible. He has helped me gain more reviews, improve my ranking and I actually have had new customers say they chose me because of my reviews online.",
    name: "Paula Marez",
    title: "Flywheel Ventures",
    location: "Santa Fe, NM",
  },
  {
    quote:
      "Finally I have found what I was looking for. A marketing relationship! My CMO is doing the work for me, keeps me in the loop and every month we discuss the results. Folks this is the real one!",
    name: "Frankie V.",
    title: "Full Screen Productions, LLC",
    location: "",
  },
  {
    quote:
      "With the Vizible Marketing AI Assistant, we transformed our lead capture process. Its ability to engage with potential clients through web chat and Facebook Messenger has not only increased our response rate but also provided a seamless experience that turns leads into loyal customers. It\u2019s like having a 24/7 marketing team at our fingertips!",
    name: "Jim S.",
    title: "Dental Practice Owner",
    location: "Sarasota, FL",
  },
];

const plans = [
  {
    name: "Vantage",
    tagline: "Build Your Foundation",
    price: "$497",
    period: "/mo",
    features: [
      "Local SEO & Listings",
      "Access to Business Portal",
      "Listing Sync Pro & Distribution",
      "Local SEO Reporting",
      "AI Generated Business Profiles",
    ],
    highlighted: false,
  },
  {
    name: "Visionary",
    tagline: "Strategy & Execution",
    price: "$997",
    period: "/mo",
    features: [
      "Everything in Vantage",
      "Personal CMO Guidance",
      "AI Assistant (Chat Lead Capture)",
      "Reputation Management",
      "Social Media Posting & Reporting",
    ],
    highlighted: true,
  },
  {
    name: "Velocity",
    tagline: "Lead Generation Engine",
    price: "$1,497",
    period: "/mo",
    features: [
      "Everything in Visionary",
      "SMS Marketing",
      "Email Marketing",
      "AI Agent (Voice Receptionist)",
      "Advanced Engagement Tools",
    ],
    highlighted: false,
  },
  {
    name: "Viral",
    tagline: "Full Growth Engine",
    price: "Custom",
    period: "",
    features: [
      "Everything in Velocity",
      "Paid Advertising Campaigns",
      "Vizible Leads Analytics",
      "Advanced CRM Implementation",
      "Custom API Integrations",
    ],
    highlighted: false,
  },
];

const stackFeatures = [
  {
    name: "Local Search & SEO",
    desc: "Listing management, keyword tracking, AI business profiles, 60+ directories.",
  },
  {
    name: "Reputation Mgmt",
    desc: "AI review monitoring, sentiment analysis, competitive benchmarking.",
  },
  {
    name: "Social Media",
    desc: "Scheduling, posting, engagement monitoring, AI sentiment analysis.",
  },
  {
    name: "AI Assistant",
    desc: "Web chat lead capture, Instagram/FB integration, SMS, shared inbox.",
  },
  {
    name: "AI Phone Agent",
    desc: "24/7 AI receptionist, multi-language, lead capture, call summaries.",
  },
  {
    name: "Email & SMS",
    desc: "AI email builder + SMS campaigns with 98% open rates.",
  },
  {
    name: "Paid Advertising",
    desc: "Managed local ads, multi-platform, performance tracking.",
  },
  {
    name: "Website Design",
    desc: "From $2,497 for 3-page sites to full e-commerce builds.",
  },
];

const trustStats = [
  { label: "30+ Years", sub: "Serving Small Biz" },
  { label: "Zero Churn", sub: "Client Retention" },
  { label: "No Contracts", sub: "Month to Month" },
  { label: "Award-Winning", sub: "Platform" },
];

export default function ViziblePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-b from-Latte-Base to-Latte-Crust dark:from-Mocha-Base dark:to-Mocha-Crust">
        <ContainerBoxedCenter
          propsInner={{
            className: "grid gap-lg lg:grid-cols-2 lg:items-center w-full py-4xl",
          }}
        >
          {/* Left — copy */}
          <div className="flex flex-col items-start gap-md order-2 lg:order-1">
            <span className="text-xs tracking-[0.25em] uppercase text-Overlay2 font-medium">
              Official Partnership
            </span>

            <h1 className="text-xl font-black">A Quiet Revolution in Local Marketing</h1>

            {/* Mobile video — between title and description */}
            <div className="w-full aspect-[16/9] rounded-lg overflow-hidden lg:hidden border border-Surface0/50">
              <iframe
                src="https://www.youtube.com/embed/ofZP85rwgek"
                title="Vizible CMO — Your Personal Chief Marketing Officer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <p className="text-xs text-Subtext0 leading-relaxed">
              I partnered with Vizible because they solve the three problems every local business
              owner has — no strategy, no visibility, and no time. You get a Personal CMO, a
              real-time dashboard, and a CRM that actually fits your business. No contracts.
            </p>

            <div className="flex flex-wrap items-center gap-sm">
              <Link href="#pricing">
                <Button>See Plans</Button>
              </Link>
              <Link href="#features">
                <Button variant="outline">Explore Features</Button>
              </Link>
            </div>
          </div>

          {/* Right — video (desktop) */}
          <div className="hidden lg:block order-1 lg:order-2">
            <div className="w-full aspect-[16/9] rounded-lg overflow-hidden border border-Surface0/50">
              <iframe
                src="https://www.youtube.com/embed/ofZP85rwgek"
                title="Vizible CMO — Your Personal Chief Marketing Officer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </ContainerBoxedCenter>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-Latte-Crust dark:bg-Mocha-Crust border-y border-Surface0/30">
        <ContainerBoxedCenter propsInner={{ className: "py-lg w-full" }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-md w-full">
            {trustStats.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <span className="text-sm font-black text-Text">{s.label}</span>
                <span className="text-xs text-Overlay1">{s.sub}</span>
              </div>
            ))}
          </div>
        </ContainerBoxedCenter>
      </section>

      {/* ── THE BIG THREE ── */}
      <section
        id="features"
        className="bg-gradient-to-b from-Latte-Crust to-Latte-Mantle dark:from-Mocha-Crust dark:to-Mocha-Mantle py-4xl"
      >
        <ContainerBoxedCenter
          propsInner={{ className: "flex flex-col items-center gap-lg w-full" }}
        >
          <div className="flex flex-col items-center text-center gap-sm max-w-prose">
            <span className="text-xs tracking-[0.25em] uppercase text-Overlay2 font-medium">
              Core Platform
            </span>
            <h2 className="font-black text-lg">Three Things That Convinced Me</h2>
            <p className="text-xs text-Subtext0 leading-relaxed">
              I&apos;ve built marketing tools. I&apos;ve managed campaigns. These are the three
              features that made Vizible different from everything else.
            </p>
          </div>

          <div className="grid gap-md md:grid-cols-3 w-full">
            {[
              {
                num: "01",
                title: "Your Own Chief Marketing Officer",
                desc: "A real strategist who learns your business, builds your plan, reviews numbers with you weekly, and executes every campaign. Not a chatbot — a person.",
                checks: [
                  "Custom marketing strategy",
                  "Weekly data reviews",
                  "Brand development",
                  "SEO, social, ads, email expertise",
                ],
                quote: "Matt my CMO takes me through the numbers and I finally get it.",
              },
              {
                num: "02",
                title: "The Business Dashboard",
                desc: "#1 marketing analytics dashboard for local businesses. Rankings, reviews, social, leads, campaigns — one screen. No more logging into seven platforms.",
                checks: [
                  "Real-time performance metrics",
                  "Profile management",
                  "Client communication hub",
                  "AI content generation",
                ],
                quote: "I trust what I can see and it\u2019s all in one place.",
              },
              {
                num: "03",
                title: "All-in-One CRM",
                desc: "Built for local businesses, not enterprise. Leads, tasks, interactions, scheduling, reporting — integrates with existing tools or replaces what isn\u2019t working.",
                checks: [
                  "Leads with full history",
                  "Task & team workflows",
                  "Calendar scheduling",
                  "Pipeline analytics",
                ],
                quote: "Finally I have found what I was looking for. A marketing relationship!",
              },
            ].map((card) => (
              <div key={card.num} className="border-gradient-animated">
                <div className="flex flex-col gap-sm bg-background rounded-lg p-lg h-full">
                  <span className="text-xs font-bold text-Overlay2 tracking-[0.2em]">
                    {card.num}
                  </span>
                  <h3 className="text-md font-black">{card.title}</h3>
                  <p className="text-xs text-Subtext0 leading-relaxed">{card.desc}</p>
                  <ul className="text-xs text-Subtext1 space-y-1 mt-auto pt-sm">
                    {card.checks.map((c) => (
                      <li key={c} className="flex gap-2">
                        <span className="text-primary shrink-0">&#10003;</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="border-l-2 border-Surface0 pl-sm mt-sm">
                    <p className="text-xs italic text-Overlay2">&ldquo;{card.quote}&rdquo;</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </ContainerBoxedCenter>
      </section>

      {/* ── FULL MARKETING STACK ── */}
      <section className="bg-gradient-to-b from-Latte-Mantle to-Latte-Base dark:from-Mocha-Mantle dark:to-Mocha-Base py-4xl">
        <ContainerBoxedCenter
          propsInner={{ className: "flex flex-col items-center gap-lg w-full" }}
        >
          <div className="flex flex-col items-center text-center gap-sm max-w-prose">
            <span className="text-xs tracking-[0.25em] uppercase text-Overlay2 font-medium">
              Full Stack
            </span>
            <h2 className="font-black text-lg">Everything Else, Handled</h2>
            <p className="text-xs text-Subtext0 leading-relaxed">
              Beyond the big three, Vizible covers every channel your local business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm w-full">
            {stackFeatures.map((f) => (
              <div
                key={f.name}
                className="border-gradient-grayscale hover:border-gradient-animated transition-all"
              >
                <div className="flex flex-col gap-xs p-md rounded-lg bg-background h-full">
                  <h3 className="text-xs font-bold text-Text">{f.name}</h3>
                  <p className="text-xs text-Overlay2 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContainerBoxedCenter>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-gradient-to-b from-Latte-Base to-Latte-Crust dark:from-Mocha-Base dark:to-Mocha-Crust py-4xl">
        <ContainerBoxedCenter
          propsInner={{ className: "flex flex-col items-center gap-lg w-full" }}
        >
          <div className="flex flex-col items-center text-center gap-sm max-w-prose">
            <span className="text-xs tracking-[0.25em] uppercase text-Overlay2 font-medium">
              Testimonials
            </span>
            <h2 className="font-black text-lg">What Business Owners Say</h2>
          </div>

          <div className="grid gap-sm md:grid-cols-2 w-full">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border-gradient-grayscale hover:border-gradient-animated"
              >
                <div className="flex flex-col gap-sm bg-background rounded-lg p-lg h-full">
                  <p className="text-xs italic text-Subtext0 leading-relaxed grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="pt-sm border-t border-Surface0/50">
                    <p className="text-xs font-bold text-Text">{t.name}</p>
                    <p className="text-xs text-Overlay1">
                      {t.title}
                      {t.location && ` \u00B7 ${t.location}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContainerBoxedCenter>
      </section>

      {/* ── PRICING ── */}
      <section
        id="pricing"
        className="bg-gradient-to-b from-Latte-Crust to-Latte-Mantle dark:from-Mocha-Crust dark:to-Mocha-Mantle py-4xl"
      >
        <ContainerBoxedCenter
          propsInner={{ className: "flex flex-col items-center gap-lg w-full" }}
        >
          <div className="flex flex-col items-center text-center gap-sm max-w-prose">
            <span className="text-xs tracking-[0.25em] uppercase text-Overlay2 font-medium">
              Investment
            </span>
            <h2 className="font-black text-lg">Plans &amp; Pricing</h2>
            <p className="text-xs text-Subtext0 leading-relaxed">
              Every plan includes Vizible&apos;s award-winning platform. No contracts — they earn
              your business every month.
            </p>
          </div>

          <div className="grid gap-sm sm:grid-cols-2 lg:grid-cols-4 w-full">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.highlighted ? "border-gradient-animated" : "border-gradient-grayscale"
                }
              >
                <div className="flex flex-col gap-sm bg-background rounded-lg p-lg h-full relative">
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold bg-primary text-primary-foreground rounded-full px-3 py-0.5 whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="text-sm font-black text-Text">{plan.name}</h3>
                    <p className="text-xs text-Overlay1">{plan.tagline}</p>
                  </div>
                  <p className="flex items-baseline gap-1">
                    <span className="text-lg font-black text-Text">{plan.price}</span>
                    {plan.period && <span className="text-xs text-Overlay1">{plan.period}</span>}
                  </p>
                  <ul className="text-xs text-Subtext1 space-y-1 pt-xs">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-primary shrink-0">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-sm">
                    <Link href="mailto:michael@hurleyus.com?subject=Vizible%20Inquiry">
                      <Button variant={plan.highlighted ? "default" : "outline"}>
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContainerBoxedCenter>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-b from-Latte-Mantle to-Latte-Base dark:from-Mocha-Mantle dark:to-Mocha-Base py-4xl">
        <ContainerBoxedCenter
          propsInner={{
            className: "flex flex-col items-center text-center gap-md w-full max-w-prose mx-auto",
          }}
        >
          <h2 className="font-black text-lg">Ready to Stop Guessing?</h2>
          <p className="text-xs text-Subtext0 leading-relaxed">
            Most marketing platforms give you a login and say good luck. Vizible gives you a person,
            a platform, and a plan.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-sm">
            <Link href="mailto:michael@hurleyus.com?subject=Vizible%20Partnership%20Inquiry">
              <Button>Get Started with Vizible</Button>
            </Link>
            <Link href="tel:+18285931935">
              <Button variant="outline">Call or Text Me</Button>
            </Link>
          </div>
          <p className="text-xs text-Overlay1">Or email michael@hurleyus.com directly</p>
        </ContainerBoxedCenter>
      </section>
    </>
  );
}
