"use client";

export const dynamic = "force-dynamic";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import { ContainerBoxedCenter } from "@/components/layout/containers";

export default function PortfolioPage() {
  const portfolioItems = useQuery(api.portfolio.list, { onlyPublished: true });

  return (
    <section className="flex flex-col py-4xl bg-gradient-to-b from-Base to-Crust">
      <ContainerBoxedCenter
        propsInner={{
          className:
            "flex flex-col items-stretch justify-start gap-lg grow w-full",
        }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-black">Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            Explore my projects and work
          </p>
        </div>

        {portfolioItems === undefined ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : portfolioItems.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p>No portfolio items yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <Link
                key={item._id}
                href={`/portfolio/${item.slug}`}
                className="group rounded-lg border bg-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                {item.coverImage && (
                  <div className="aspect-video relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4 space-y-2">
                  <h2 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 bg-muted rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 4 && (
                      <span className="text-xs text-muted-foreground">
                        +{item.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  {item.featured && (
                    <span className="inline-block text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">
                      Featured
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </ContainerBoxedCenter>
    </section>
  );
}
