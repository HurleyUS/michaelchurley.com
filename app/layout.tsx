import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Providers } from "@/providers";

const siteUrl = "https://www.michaelchurley.com";
const siteName = "Michael C. Hurley";
const siteDescription =
  "Business operations and technology professional with 20+ years of experience in management, sales, marketing, graphic design, and software development. Available for hire.";

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default:
      "Michael C. Hurley | Business Operations & Technology Professional",
    template: "%s | Michael C. Hurley",
  },
  description: siteDescription,
  keywords: [
    "Michael C. Hurley",
    "business operations",
    "technology consultant",
    "software developer",
    "full-stack developer",
    "project manager",
    "CTO",
    "web development",
    "React",
    "Next.js",
    "hire developer",
    "freelance developer",
    "North Carolina",
  ],
  authors: [{ name: "Michael C. Hurley", url: siteUrl }],
  creator: "Michael C. Hurley",
  publisher: "Michael C. Hurley",

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "Michael C. Hurley | Business Operations & Technology Professional",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Michael C. Hurley - Business Operations & Technology Professional",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Michael C. Hurley | Business Operations & Technology Professional",
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@michaelchurley",
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
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
        <Providers>
          <a href="#main" className="sr-only focus:not-sr-only">
            {"Skip to main content"}
          </a>
          <Header />
          <main
            id="main"
            className="flex grow flex-col items-stretch justify-start"
          >
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
