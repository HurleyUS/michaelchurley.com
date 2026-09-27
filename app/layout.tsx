import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Providers } from "@/providers";
import { JsonLd } from "@/components/seo/json-ld";
import { siteGraph } from "@/lib/structured-data";
import { PROFILE } from "@/lib/site-profile";
import { WebMcpTools } from "@/components/agents/webmcp-tools";
import { MarkdownAlternateLink } from "@/components/seo/markdown-alternate-link";

const siteUrl = "https://www.michaelchurley.com";
const siteName = "Michael C. Hurley";
const siteTitle = `Michael C. Hurley | ${PROFILE.headline}`;
const siteDescription =
  "Michael C. Hurley: 20 years of SEO, now focused on AEO and GEO. Director at Hustle Launch; builds production Next.js, Convex, and Stripe sites plus AI agent tooling in Canton, NC.";

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: siteTitle,
    template: "%s | Michael C. Hurley",
  },
  description: siteDescription,
  keywords: [
    "Michael C. Hurley",
    "SEO",
    "AEO",
    "GEO",
    "answer engine optimization",
    "generative engine optimization",
    "technical SEO",
    "llms.txt",
    "structured data",
    "local SEO",
    "AI agents",
    "Next.js",
    "Convex",
    "Hustle Launch",
    "North Carolina",
  ],
  authors: [{ name: "Michael C. Hurley", url: siteUrl }],
  creator: "Michael C. Hurley",
  publisher: "Michael C. Hurley",

  // Canonical URL
  metadataBase: new URL(siteUrl),

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
    site: "@michaelh_rley",
    creator: "@michaelh_rley",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your verification codes here)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },

  // Manifest
  manifest: "/manifest.webmanifest",

  // Category
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col items-stretch justify-start relative bg-background overflow-x-clip overflow-y-auto">
        <JsonLd data={siteGraph()} />
        <Providers>
          <MarkdownAlternateLink />
          <WebMcpTools />
          <a href="#main" className="sr-only focus:not-sr-only">
            {"Skip to main content"}
          </a>
          <Header />
          <main id="main" className="flex grow flex-col items-stretch justify-start">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
