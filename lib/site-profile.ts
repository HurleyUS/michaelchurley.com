/** Canonical facts about Michael C. Hurley shared by robots.txt, llms.txt, and JSON-LD. */
export const SITE_URL = "https://www.michaelchurley.com";

export const PROFILE = {
  name: "Michael C. Hurley",
  alternateName: "Michael Monetized",
  url: SITE_URL,
  image: `${SITE_URL}/headshot-full.jpg`,
  jobTitle: "Director",
  employer: { name: "Hustle Launch", url: "https://www.hustlelaunch.com" },
  locality: "Canton",
  region: "NC",
  country: "US",
  bookingUrl: `${SITE_URL}/book`,
  fieldGuideUrl: "https://hustle-revenue-path.michaelh-rley.chatgpt.site/field-guide",
  sameAs: [
    "https://github.com/michaelmonetized",
    "https://x.com/michaelh_rley",
    "https://www.linkedin.com/in/michaelchurley",
  ],
  knowsAbout: [
    "Technical SEO",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "Structured data",
    "AI agents",
    "Next.js",
    "Convex",
    "Stripe",
    "Local SEO",
  ],
} as const;
