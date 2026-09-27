import type { Metadata } from "next";
import Link from "next/link";
import { ContainerBoxedCenter } from "@/components/layout/containers";
import { JsonLd } from "@/components/seo/json-ld";
import { AEO_FAQ, AEO_GROUPS, AEO_INTRO } from "@/lib/aeo";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "How this site is built for AI search and agents",
  description:
    "Every machine-readable surface on michaelchurley.com (llms.txt, Markdown routes, JSON-LD, JSON endpoints, MCP, WebMCP) with live links and why each exists.",
  alternates: { canonical: "/aeo" },
};

export default function AeoPage() {
  return (
    <section className="flex flex-col py-4xl bg-gradient-to-b from-Base to-Crust">
      <JsonLd data={breadcrumbSchema([["AEO", "/aeo"]])} />
      <JsonLd data={faqSchema(AEO_FAQ)} />
      <ContainerBoxedCenter
        propsInner={{
          className:
            "flex flex-col items-stretch justify-start gap-lg grow w-full max-w-[56rem] mx-auto text-sm",
        }}
      >
        <h1 className="text-2xl font-black">How this site is built for AI search and agents</h1>
        <p>{AEO_INTRO}</p>
        {AEO_GROUPS.map((group) => (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={`${group.id}-heading`}
            className="flex flex-col gap-md"
          >
            <h2 id={`${group.id}-heading`} className="text-lg font-black">
              {group.title}
            </h2>
            <dl className="flex flex-col gap-md">
              {group.surfaces.map((surface) => (
                <div key={surface.name} className="flex flex-col gap-xs">
                  <dt className="font-bold">
                    <Link href={surface.href} className="underline">
                      {surface.name}
                    </Link>
                  </dt>
                  <dd>{surface.what}</dd>
                  <dd className="text-muted-foreground">
                    <strong>Why:</strong> {surface.why}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
        <section id="faq" aria-labelledby="faq-heading" className="flex flex-col gap-md">
          <h2 id="faq-heading" className="text-lg font-black">
            FAQ
          </h2>
          {AEO_FAQ.map((item) => (
            <div key={item.question}>
              <h3 className="font-bold">{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>
      </ContainerBoxedCenter>
    </section>
  );
}
