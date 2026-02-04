import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ConvexClientProvider } from "@/components/providers/convex-client-provider";

export const metadata: Metadata = {
  title: "Michael C. Hurley",
  description: "Hire Michael C. Hurley a professional business operator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col items-stretch justify-start relative bg-background overflow-x-clip overflow-y-auto">
        <ConvexClientProvider>
          <a href="#main" className="sr-only focus:not-sr-only">
            {"Skip to main content"}
          </a>
          <Header />
          <section
            id="top"
            className="flex grow flex-col items-stretch justify-start"
          >
            {children}
          </section>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
