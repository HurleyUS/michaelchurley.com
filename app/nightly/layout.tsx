import type { Metadata } from "next";
import "./nightly.css";

export const metadata: Metadata = {
  title: "Nightly · Daily Stand Up",
  description:
    "Michael Hurley’s nightly stand-up dashboard — ships, landing, inbox, open loops.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.michaelchurley.com/nightly" },
};

export default function NightlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="nightly-root">{children}</div>;
}
