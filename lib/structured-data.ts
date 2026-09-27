import type { Piece } from "@/lib/portfolio/pieces";
import { RESUME, RESUME_UPDATED } from "@/lib/resume";
import { PROFILE, SITE_URL } from "@/lib/site-profile";

export const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const EMPLOYER_ID = `${PROFILE.employer.url}/#organization`;

const PERSON_REF = { "@id": PERSON_ID };

/** Site-wide graph: Person, WebSite, and the Organization he works for. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: PROFILE.name,
        alternateName: PROFILE.alternateName,
        url: PROFILE.url,
        image: PROFILE.image,
        description: RESUME.summary,
        jobTitle: PROFILE.jobTitle,
        email: `mailto:${PROFILE.email}`,
        telephone: PROFILE.telephone,
        worksFor: { "@id": EMPLOYER_ID },
        hasOccupation: {
          "@type": "Occupation",
          name: "SEO, AEO, and GEO specialist",
          description: RESUME.headline,
          skills: RESUME.skills.flatMap((s) => s.keywords).join(", "),
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: PROFILE.locality,
          addressRegion: PROFILE.region,
          addressCountry: PROFILE.country,
        },
        alumniOf: RESUME.education.map((e) => ({
          "@type": "CollegeOrUniversity",
          name: e.institution,
        })),
        knowsAbout: PROFILE.knowsAbout,
        sameAs: PROFILE.sameAs,
      },
      {
        "@type": "Organization",
        "@id": EMPLOYER_ID,
        name: PROFILE.employer.name,
        url: PROFILE.employer.url,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: PROFILE.name,
        inLanguage: "en-US",
        publisher: PERSON_REF,
      },
    ],
  };
}

/** Home page: ProfilePage about the site Person. */
export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: `${SITE_URL}/`,
    name: `${PROFILE.name}: ${PROFILE.headline}`,
    dateModified: RESUME_UPDATED,
    mainEntity: PERSON_REF,
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en-US",
  };
}

/** BreadcrumbList from [name, path] pairs, starting at Home. */
export function breadcrumbSchema(trail: [string, string][]) {
  const items: [string, string][] = [["Home", "/"], ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
}

type ArticleInput = {
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: string;
  publishedAt?: number;
  tags?: string[];
};

/** BlogPosting for a single post, authored by the site Person. */
export function blogPostingSchema(post: ArticleInput) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const published = post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: post.title,
    description: post.excerpt || post.title,
    ...(post.coverImage ? { image: new URL(post.coverImage, SITE_URL).toString() } : {}),
    ...(published ? { datePublished: published, dateModified: published } : {}),
    ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
    author: { "@id": PERSON_ID, "@type": "Person", name: PROFILE.name, url: PROFILE.url },
    publisher: PERSON_REF,
    isPartOf: { "@id": WEBSITE_ID },
    encodingFormat: "text/html",
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl: `${url}.md`,
      encodingFormat: "text/markdown",
    },
  };
}

/** Open-source projects shown in the portfolio, with their public repositories. */
const SOURCE_REPOS: Record<string, { repo: string; language: string; description: string }> = {
  "art-omadesign": {
    repo: "https://github.com/michaelmonetized/omadesign",
    language: "Rust",
    description: "Native Linux studio for design, paint, and photograph.",
  },
  "ui-naarchy-home-alive": {
    repo: "https://github.com/michaelmonetized/naarchy",
    language: "Rust",
    description: "Dynamic Island for Linux: native GTK4 and Hyprland layer-shell.",
  },
};

/** Portfolio: CollectionPage with an ItemList of CreativeWork / SoftwareSourceCode items. */
export function portfolioSchema(pieces: Piece[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/portfolio#page`,
    url: `${SITE_URL}/portfolio`,
    name: "Portfolio",
    description: `Sites, interfaces, and marks by ${PROFILE.name}.`,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: pieces.length,
      itemListElement: pieces.map((piece, index) => {
        const source = SOURCE_REPOS[piece.id];
        const media = `${SITE_URL}${piece.src}`;
        const isVideo = piece.src.endsWith(".mp4");
        return {
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": source ? "SoftwareSourceCode" : "CreativeWork",
            name: piece.title,
            genre: piece.category,
            creator: PERSON_REF,
            ...(piece.href ? { url: piece.href } : {}),
            ...(isVideo
              ? {
                  associatedMedia: {
                    "@type": "MediaObject",
                    contentUrl: media,
                    encodingFormat: "video/mp4",
                  },
                }
              : { image: media }),
            ...(source
              ? {
                  codeRepository: source.repo,
                  programmingLanguage: source.language,
                  description: source.description,
                }
              : {}),
          },
        };
      }),
    },
  };
}

/** FAQPage from question/answer pairs that are visible on the page. */
export function faqSchema(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
