import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vizible Agency Partnership | Digital Marketing for Local Businesses",
  description:
    "Michael C. Hurley has partnered with Vizible Agency to bring local businesses a Personal CMO, real-time Business Dashboard, and an All-in-One CRM — all backed by AI-powered marketing technology.",
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
    company: "Porter Insurance Group",
    location: "Memphis, TN",
  },
  {
    quote:
      "I love the communication I have with Matt C. my Chief Marketing Officer at Vizible. He has helped me gain more reviews, improve my ranking and I actually have had new customers say they chose me because of my reviews online.",
    name: "Paula Marez",
    company: "Flywheel Ventures",
    location: "Santa Fe, NM",
  },
  {
    quote:
      "Finally I have found what I was looking for. A marketing relationship! My CMO is doing the work for me, keeps me in the loop and every month we discuss the results. Folks this is the real one!",
    name: "Frankie V.",
    company: "Full Screen Productions, LLC",
    location: "Client",
  },
  {
    quote:
      "With the Vizible Marketing AI Assistant, we transformed our lead capture process. Its ability to engage with potential clients through web chat and Facebook Messenger has not only increased our response rate but also provided a seamless experience that turns leads into loyal customers. It\u2019s like having a 24/7 marketing team at our fingertips!",
    name: "Jim S.",
    company: "Dental Practice Owner",
    location: "Sarasota, FL",
  },
];

const topFeatures = [
  {
    badge: "01",
    title: "Your Own Chief Marketing Officer",
    subtitle: "Strategy + execution, done for you",
    description:
      "Stop guessing. Your Personal CMO builds your marketing strategy, reviews your data weekly, and executes every campaign. They know your business, your market, and your goals \u2014 because they\u2019re YOUR CMO, not a shared resource across 40 accounts.",
    highlights: [
      "Digital marketing strategy tailored to your business",
      "Data-driven decision making with weekly reviews",
      "Brand development and consistency across all channels",
      "Integrated expertise across SEO, social, ads, and email",
    ],
    testimonial: {
      quote: "Matt my CMO takes me through the numbers and I finally get it.",
      attribution: "Vizible Business Owner",
    },
  },
  {
    badge: "02",
    title: "The Business Dashboard",
    subtitle: "#1 marketing analytics dashboard for local businesses",
    description:
      "Everything in one place. Your local search rankings, review sentiment, social performance, lead pipeline, and campaign ROI \u2014 one screen. No more logging into seven platforms to figure out if your marketing is working.",
    highlights: [
      "Real-time performance dashboard",
      "Manage business profiles across all directories",
      "Client communication hub",
      "AI-powered content generation tools",
    ],
    testimonial: {
      quote: "I trust what I can see and it\u2019s all in one place.",
      attribution: "Vizible Business Owner",
    },
  },
  {
    badge: "03",
    title: "All-in-One CRM",
    subtitle: "Built for local businesses, not enterprise",
    description:
      "You don\u2019t need Salesforce. You need a CRM that works the way you work. Vizible\u2019s CRM handles leads, tasks, interactions, scheduling, and reporting \u2014 and integrates with your existing tools or replaces the ones that aren\u2019t cutting it.",
    highlights: [
      "Leads management with full interaction history",
      "Task management and team workflows",
      "Calendar and scheduling integration",
      "Comprehensive reporting and pipeline analytics",
    ],
    testimonial: {
      quote:
        "Finally I have found what I was looking for. A marketing relationship!",
      attribution: "Frankie V., Full Screen Productions",
    },
  },
];

const secondaryFeatures = [
  {
    title: "Local Search & SEO",
    description:
      "Get found online. Listing management, local keyword tracking, AI-generated business profiles, and distribution to 60+ directories.",
  },
  {
    title: "Reputation Management",
    description:
      "AI-powered review monitoring and response. Sentiment analysis, competitive benchmarking, and review generation.",
  },
  {
    title: "Social Media",
    description:
      "Award-winning social management platform. Scheduling, posting, engagement monitoring, and AI sentiment analysis.",
  },
  {
    title: "AI Assistant",
    description:
      "24/7 web chat lead capture, Instagram and Facebook message integration, SMS texting, email, and shared team inbox.",
  },
  {
    title: "AI Phone Agent",
    description:
      "Never miss another call. AI-powered receptionist answers calls 24/7, captures leads, handles multiple languages, and sends call summaries.",
  },
  {
    title: "Email & SMS Marketing",
    description:
      "AI-powered email builder plus SMS campaigns with 98% open rates. Centralized communications and brand data ownership.",
  },
  {
    title: "Paid Advertising",
    description:
      "Targeted local ads managed by their team. Multi-platform expertise with comprehensive performance tracking.",
  },
  {
    title: "Website Design",
    description:
      "Professional websites from $2,497 for a 3-page local site to full e-commerce builds. Monthly hosting at $47.",
  },
];

const plans = [
  {
    name: "Vantage",
    tagline: "Build Your Foundation",
    price: "$497",
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

export default function ViziblePage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-Surface0">
        <div className="absolute inset-0 bg-gradient-to-b from-Crust to-Base" />
        <div className="relative mx-auto max-w-[72rem] px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[48rem] text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Official Partnership
            </p>
            <h1 className="text-4xl font-black tracking-tight text-Text sm:text-5xl lg:text-6xl">
              Marketing That Finally Works{" "}
              <span className="text-primary">
                and Grows Your Business
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-Subtext0 sm:text-xl">
              I partnered with Vizible Agency because they solve the three
              problems every local business has: no strategy, no visibility, and
              no time. You get a Personal CMO, a real-time dashboard, and a CRM
              that actually fits your business.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#pricing"
                className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-primary-hover"
              >
                See Plans & Pricing
              </a>
              <a
                href="#features"
                className="rounded-lg border border-Surface1 bg-Surface0 px-8 py-3.5 text-base font-semibold text-Text shadow-sm transition hover:bg-Surface1"
              >
                Explore Features
              </a>
            </div>
            <div className="mt-12 mx-auto w-full max-w-[48rem] aspect-video rounded-xl overflow-hidden shadow-2xl border border-Surface0">
              <iframe
                src="https://www.youtube.com/embed/ofZP85rwgek"
                title="Vizible CMO - Your Personal Chief Marketing Officer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-Surface0 bg-Mantle py-6">
        <div className="mx-auto flex max-w-[72rem] flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 text-sm text-Subtext0">
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            30+ Years Serving Small Business
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            Award-Winning Platform
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            Industry-Specific Strategies
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            Zero Client Churn
          </span>
        </div>
      </section>

      {/* Top 3 Features */}
      <section id="features" className="py-24 bg-Base">
        <div className="mx-auto max-w-[72rem] px-6">
          <div className="mx-auto mb-16 max-w-[42rem] text-center">
            <h2 className="text-3xl font-black tracking-tight text-Text sm:text-4xl">
              The Three Things That Convinced Me
            </h2>
            <p className="mt-4 text-lg text-Subtext0">
              I&apos;ve worked with a lot of marketing tools. I&apos;ve built
              marketing tools. These are the three features that made Vizible
              different.
            </p>
          </div>

          <div className="space-y-20">
            {topFeatures.map((feature) => (
              <div
                key={feature.badge}
                className="grid gap-8 lg:grid-cols-2 lg:gap-16"
              >
                <div>
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-sm font-bold text-primary">
                    {feature.badge}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-Text">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-base font-medium text-primary">
                    {feature.subtitle}
                  </p>
                  <p className="mt-4 text-base leading-7 text-Subtext0">
                    {feature.description}
                  </p>
                </div>
                <div>
                  <ul className="space-y-3">
                    {feature.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-base text-Subtext1"
                      >
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <blockquote className="mt-8 border-l-2 border-primary pl-4">
                    <p className="text-base italic text-Overlay2">
                      &ldquo;{feature.testimonial.quote}&rdquo;
                    </p>
                    <cite className="mt-2 block text-sm font-medium text-Overlay1">
                      &mdash; {feature.testimonial.attribution}
                    </cite>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Features Grid */}
      <section className="border-y border-Surface0 bg-Mantle py-24">
        <div className="mx-auto max-w-[72rem] px-6">
          <div className="mx-auto mb-16 max-w-[42rem] text-center">
            <h2 className="text-3xl font-black tracking-tight text-Text sm:text-4xl">
              The Full Marketing Stack
            </h2>
            <p className="mt-4 text-lg text-Subtext0">
              Beyond the big three, Vizible covers every channel your local
              business needs.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-Surface0 bg-Base p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-Text">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-Subtext0">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-Base">
        <div className="mx-auto max-w-[72rem] px-6">
          <h2 className="mb-16 text-center text-3xl font-black tracking-tight text-Text">
            What Business Owners Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-Surface0 bg-Crust p-8"
              >
                <p className="text-base italic leading-7 text-Subtext0">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-Surface0 pt-4">
                  <p className="text-sm font-semibold text-Text">
                    {t.name}
                  </p>
                  <p className="text-sm text-Overlay1">
                    {t.company} &middot; {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="border-y border-Surface0 bg-Mantle py-24"
      >
        <div className="mx-auto max-w-[72rem] px-6">
          <div className="mx-auto mb-16 max-w-[42rem] text-center">
            <h2 className="text-3xl font-black tracking-tight text-Text sm:text-4xl">
              Plans & Pricing
            </h2>
            <p className="mt-4 text-lg text-Subtext0">
              Every plan includes access to Vizible&apos;s award-winning
              platform. No contracts &mdash; they earn your business every month.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-8 ${
                  plan.highlighted
                    ? "border-primary bg-Base ring-1 ring-primary shadow-lg"
                    : "border-Surface0 bg-Base"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-Text">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-Overlay1">
                  {plan.tagline}
                </p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-Text">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm text-Overlay1">
                      /month
                    </span>
                  )}
                </p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-Subtext1"
                    >
                      <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:michael@hurleyus.com?subject=Vizible%20Inquiry"
                  className={`mt-8 block rounded-lg py-2.5 text-center text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary-primary-hover"
                      : "border border-Surface1 text-Text hover:bg-Surface0"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-Base">
        <div className="mx-auto max-w-[48rem] px-6 text-center">
          <h2 className="text-3xl font-black tracking-tight text-Text sm:text-4xl">
            Ready to Stop Guessing?
          </h2>
          <p className="mt-4 text-lg text-Subtext0">
            Most marketing platforms give you a login and say good luck. Vizible
            gives you a person, a platform, and a plan. Let&apos;s talk about
            what that looks like for your business.
          </p>
          <a
            href="mailto:michael@hurleyus.com?subject=Vizible%20Partnership%20Inquiry"
            className="mt-8 inline-flex rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-primary-hover"
          >
            Get Started with Vizible
          </a>
          <p className="mt-4 text-sm text-Overlay1">
            Or email michael@hurleyus.com directly
          </p>
        </div>
      </section>
    </main>
  );
}
