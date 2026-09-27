import { PROFILE, SITE_URL } from "@/lib/site-profile";

export const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const EMPLOYER_ID = `${PROFILE.employer.url}/#organization`;

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
        jobTitle: PROFILE.jobTitle,
        worksFor: { "@id": EMPLOYER_ID },
        address: {
          "@type": "PostalAddress",
          addressLocality: PROFILE.locality,
          addressRegion: PROFILE.region,
          addressCountry: PROFILE.country,
        },
        alumniOf: { "@type": "CollegeOrUniversity", name: "College of Charleston" },
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
        publisher: { "@id": PERSON_ID },
      },
    ],
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
    publisher: { "@id": PERSON_ID },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}
