import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api";

const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const now = Date.now();

const blogPost = {
  title: "Now Partnered with Vizible Agency",
  slug: "now-partnered-with-vizible-agency",
  excerpt:
    "I\u2019ve partnered with Vizible Agency to bring local businesses the marketing infrastructure they deserve \u2014 starting with a Personal CMO, a real-time Business Dashboard, and an All-in-One CRM.",
  content: `# Now Partnered with Vizible Agency

I\u2019ve spent over twenty years building technology for businesses. I\u2019ve built marketing platforms, managed campaigns, designed websites, and helped small businesses figure out how to compete online against brands with ten times their budget.

Through all of that, one pattern never changed: **local businesses don\u2019t fail because they lack talent or hustle. They fail because they lack marketing infrastructure.**

They\u2019re posting on Instagram with no strategy. They\u2019re paying for ads they can\u2019t measure. They\u2019re using three different tools that don\u2019t talk to each other. They\u2019re doing everything themselves because they can\u2019t afford an agency \u2014 and the agencies they can afford don\u2019t actually know their business.

That\u2019s why I partnered with Vizible.

## The Three Features That Made the Decision

### 1. The Personal CMO

This is the differentiator. Vizible doesn\u2019t give you a login and say good luck. They assign you a Chief Marketing Officer \u2014 a real strategist who learns your business, builds your strategy, reviews your numbers with you every week, and executes the plan.

One client told me: *"Matt my CMO takes me through the numbers and I finally get it."*

That sentence captures everything wrong with traditional marketing tools. Dashboards are useless if nobody explains what the numbers mean. Vizible\u2019s Personal CMO bridges the gap between data and decisions.

### 2. The Business Dashboard

I\u2019ve built dashboards. I know what makes them useful and what makes them overwhelming. Vizible\u2019s Business Portal is the cleanest marketing analytics dashboard I\u2019ve seen for local businesses.

Everything in one place: your local search rankings, review sentiment, social media performance, lead pipeline, and campaign results. You open it, you see how things are going. Green means good. Red means your CMO is already working on it.

No logging into Google Analytics, then Yelp, then Facebook, then your email tool, then your CRM. One place. One truth.

### 3. The CRM

Most CRMs are built for enterprise sales teams with 50-person pipelines and six-month deal cycles. That\u2019s not what a plumber needs. That\u2019s not what a restaurant needs. That\u2019s not what a law firm with three attorneys needs.

Vizible\u2019s CRM is built for the businesses that actually need one \u2014 local service businesses. Leads management, task tracking, interaction history, calendar scheduling, and reporting. It integrates with your existing tools or replaces the ones that aren\u2019t cutting it.

## What This Means for You

If you\u2019re a local business owner I work with \u2014 or one I haven\u2019t met yet \u2014 this partnership means I can now offer you a complete marketing solution, not just a website or a one-off consultation.

Vizible\u2019s plans start at $497/month for their Vantage tier (local SEO, listing management, and dashboard access) and go up to $1,497/month for Velocity, which adds SMS/email marketing and an AI-powered phone agent that answers calls 24/7.

Beyond the big three, Vizible also offers:
- **Local Search & SEO** with AI-generated business profiles and listing distribution
- **Reputation Management** with AI sentiment analysis on every review
- **Social Media Management** with posting, scheduling, and engagement monitoring
- **AI Assistant** for web chat lead capture and messaging integration
- **AI Phone Agent** that never misses a call
- **Email & SMS Marketing** with 98% open rates on SMS campaigns
- **Paid Advertising** managed by their team
- **Website Design** starting at $2,497

## How to Get Started

Visit [michaelchurley.com/vizible](/vizible) to see the full feature breakdown and pricing, or email me directly at michael@hurleyus.com. I\u2019ll walk you through the options and help you figure out which plan fits your business.

Most marketing platforms give you a login and say good luck. Vizible gives you a person, a platform, and a plan.

That\u2019s different. And that\u2019s why I\u2019m in.

\u2014 Michael C. Hurley`,
  coverImage: undefined,
  tags: [
    "partnership",
    "marketing",
    "vizible",
    "local-business",
    "announcement",
  ],
  featured: true,
  published: true,
  publishedAt: now,
  readingTime: 4,
  createdAt: now,
  updatedAt: now,
};

async function seed() {
  try {
    // Check if post already exists
    const existing = await client.query(api.blogPosts.getBySlug, {
      slug: blogPost.slug,
    });
    if (existing) {
      console.log("Blog post already exists, skipping.");
      return;
    }
  } catch {
    // Query might not exist, continue with insert
  }

  try {
    const id = await client.mutation(api.blogPosts.create, blogPost);
    console.log("Blog post created:", id);
  } catch (e) {
    console.error("Failed to create blog post:", e);
    console.log(
      "\nIf the mutation doesn't exist, you may need to insert manually via the Convex dashboard.",
    );
    console.log("Post data:", JSON.stringify(blogPost, null, 2));
  }
}

seed();
