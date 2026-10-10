import Image from "next/image";

/** Naarchy Product Hunt launch (post_id=1270450). */
const LAUNCH_URL = "https://www.producthunt.com/products/naarchy?launch=naarchy";

/**
 * Upvotes read once from the public launch page and kept fixed,
 * the same way omadesign.app keeps its captured Product Hunt count.
 */
const CAPTURED = { upvotes: 64, at: "2026-10-10 08:27 ET" };

const SHIELDS = [
  {
    key: "upvotes",
    label: "upvotes",
    display: String(CAPTURED.upvotes),
    color: "e05d44",
    title: `Product Hunt upvotes (captured ${CAPTURED.at})`,
  },
  {
    key: "launched",
    label: "launched",
    display: "Oct 10, 2026",
    color: "007ec6",
    title: "Live on Product Hunt since 7:01 AM ET, October 10, 2026",
  },
];

/**
 * Naarchy on Product Hunt announcement.
 * Same layout as the omadesign announcement: logo and name on the left,
 * the launch link beside it, and GitHub style count shields underneath.
 * @param props.className Extra classes for the outer section.
 * @returns The announcement section.
 */
export default function ProductHuntNaarchyBanner({ className = "" }: { className?: string }) {
  return (
    <section
      className={`flex flex-col bg-Latte-Base dark:bg-Mocha-Base border-y border-Latte-Surface0 dark:border-Mocha-Surface0 py-lg ${className}`}
      aria-label="Naarchy on Product Hunt"
    >
      <div className="flex flex-col items-center justify-center gap-md px-md w-full max-w-[1170px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-md w-full">
          <div className="flex flex-col items-center sm:items-start gap-xs text-center sm:text-left shrink-0">
            <Image
              src="/naarchy/logo.svg"
              alt="Naarchy"
              width={56}
              height={56}
              className="w-14 h-auto"
            />
            <p className="text-sm font-black text-Text">Naarchy is live on Product Hunt</p>
            <a
              href="/portfolio/naarchy"
              className="text-xs text-Subtext0 hover:text-Blue underline-offset-2 hover:underline"
            >
              michaelchurley.com/portfolio/naarchy
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-xs text-center sm:text-left">
            <p className="text-sm text-Text">
              A little island for everything on your Linux desktop.
            </p>
            <a
              href={LAUNCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-xs rounded-md bg-[#ff6154] px-md py-xs text-sm font-black text-white hover:bg-[#e5574b]"
            >
              Upvote Naarchy on Product Hunt <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <nav
          aria-label="Naarchy counts"
          className="flex flex-wrap items-center justify-center gap-2 w-full"
        >
          {SHIELDS.map((chip) => (
            <a
              key={chip.key}
              href={LAUNCH_URL}
              title={chip.title}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-5 overflow-hidden rounded-[3px] font-[Verdana,Geneva,DejaVu_Sans,sans-serif] text-[11px] leading-5 text-white"
            >
              <span className="bg-[#555] px-1.5">{chip.label}</span>
              <span className="px-1.5" style={{ background: `#${chip.color}` }}>
                {chip.display}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
