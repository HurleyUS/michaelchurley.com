import type { Metadata } from "next";
import { ContainerBoxedCenter } from "@/components/layout/containers";
import Gallery from "@/components/portfolio/gallery";
import { listPieces } from "@/lib/portfolio/pieces";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, portfolioSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Sites, interfaces, and marks by Michael C. Hurley.",
  alternates: { canonical: "/portfolio" },
};

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string }>;
}) {
  const { kind } = await searchParams;
  const pieces = listPieces();

  return (
    <section className="flex flex-col bg-gradient-to-b from-Base to-Crust py-4xl">
      <JsonLd data={portfolioSchema(pieces)} />
      <JsonLd data={breadcrumbSchema([["Portfolio", "/portfolio"]])} />
      <ContainerBoxedCenter
        propsInner={{
          className: "flex w-full grow flex-col items-stretch justify-start gap-lg",
        }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-black">Portfolio</h1>
          <p className="text-lg text-muted-foreground">Sites, interfaces, and marks</p>
        </div>
        <Gallery pieces={pieces} kind={kind} />
      </ContainerBoxedCenter>
    </section>
  );
}
