import OmadesignCounts from "@/components/omadesign-counts";

/**
 * Official Product Hunt product badges for omadesign (product_id=1313169).
 * Plain <img> tags — not next/image — so no remotePatterns config is required.
 * Dual-theme: light SVGs in Latte, dark SVGs in Mocha via Tailwind dark: classes.
 */
export default function ProductHuntOmadesignEmbed() {
  const alt =
    "omadesign - Native Linux studio for design, paint, photo & motion | Product Hunt";

  return (
    <section
      className="flex flex-col bg-Latte-Base dark:bg-Mocha-Base border-y border-Latte-Surface0 dark:border-Mocha-Surface0 py-lg"
      aria-label="omadesign on Product Hunt"
    >
      <div className="flex flex-col items-center justify-center gap-md px-md w-full max-w-[1170px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-md w-full">
          <div className="flex flex-col items-center sm:items-start gap-xs text-center sm:text-left shrink-0">
            <p className="text-sm font-black text-Text">omadesign on Product Hunt</p>
            <a
              href="https://omadesign.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-Subtext0 hover:text-Blue underline-offset-2 hover:underline"
            >
              omadesign.app
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-md">
            <a
              href="https://www.producthunt.com/products/omadesign/reviews?utm_source=badge-product_rating&utm_medium=badge&utm_source=badge-omadesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/product_rating.svg?product_id=1313169&theme=light"
                alt={alt}
                width={242}
                height={108}
                className="dark:hidden"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/product_rating.svg?product_id=1313169&theme=dark"
                alt={alt}
                width={242}
                height={108}
                className="hidden dark:inline"
              />
            </a>

            <a
              href="https://www.producthunt.com/products/omadesign/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-omadesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1313169&theme=light"
                alt={alt}
                width={250}
                height={54}
                className="dark:hidden"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1313169&theme=dark"
                alt={alt}
                width={250}
                height={54}
                className="hidden dark:inline"
              />
            </a>

            <a
              href="https://www.producthunt.com/products/omadesign?utm_source=badge-follow&utm_medium=badge&utm_source=badge-omadesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=1313169&theme=light"
                alt={alt}
                width={250}
                height={54}
                className="dark:hidden"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=1313169&theme=dark"
                alt={alt}
                width={250}
                height={54}
                className="hidden dark:inline"
              />
            </a>
          </div>
        </div>
        <OmadesignCounts />
      </div>
    </section>
  );
}
