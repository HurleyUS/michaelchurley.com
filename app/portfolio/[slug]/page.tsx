"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ContainerBoxedCenter } from "@/components/layout/containers";
import CommentSection from "@/components/comments/comment-section";

export default function PortfolioItemPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const item = useQuery(api.portfolio.getBySlug, { slug });

  if (item === undefined) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (item === null || !item.published) {
    return (
      <section className="flex flex-col py-4xl">
        <ContainerBoxedCenter>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold">Project Not Found</h1>
            <p className="text-muted-foreground mt-2">
              This project doesn&apos;t exist or isn&apos;t published yet.
            </p>
            <Link href="/portfolio" className="text-primary hover:underline mt-4 inline-block">
              ← Back to Portfolio
            </Link>
          </div>
        </ContainerBoxedCenter>
      </section>
    );
  }

  return (
    <section className="flex flex-col py-4xl bg-gradient-to-b from-Base to-Crust">
      <ContainerBoxedCenter
        propsInner={{
          className:
            "flex flex-col items-stretch justify-start gap-lg grow w-full max-w-4xl mx-auto",
        }}
      >
        {/* Back link */}
        <Link
          href="/portfolio"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
        >
          ← Back to Portfolio
        </Link>

        {/* Cover image */}
        {item.coverImage && (
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <Image
              src={item.coverImage}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-black">{item.title}</h1>
          <p className="text-lg text-muted-foreground">{item.description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {item.projectUrl && (
              <a
                href={item.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                View Project →
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <article className="prose dark:prose-invert max-w-none">
          {/* Simple markdown rendering - for a production app, use react-markdown */}
          {item.content.split("\n").map((line, i) => {
            if (line.startsWith("# ")) {
              return <h1 key={i}>{line.slice(2)}</h1>;
            }
            if (line.startsWith("## ")) {
              return <h2 key={i}>{line.slice(3)}</h2>;
            }
            if (line.startsWith("### ")) {
              return <h3 key={i}>{line.slice(4)}</h3>;
            }
            if (line.startsWith("- ")) {
              return <li key={i}>{line.slice(2)}</li>;
            }
            if (line.trim() === "") {
              return <br key={i} />;
            }
            return <p key={i}>{line}</p>;
          })}
        </article>

        {/* Comments */}
        <div className="border-t pt-8 mt-8">
          <CommentSection itemType="portfolio" itemId={item._id} />
        </div>
      </ContainerBoxedCenter>
    </section>
  );
}
