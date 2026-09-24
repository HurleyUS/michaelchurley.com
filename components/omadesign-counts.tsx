type Chip = {
  key: string;
  label: string;
  value: number | null;
  display: string | null;
  href: string;
  title: string;
  color?: string;
};

const COLORS: Record<string, string> = {
  downloads: "007ec6",
  users: "2ea44f",
  upvotes: "e05d44",
  stars: "dfb317",
};

/**
 * The omadesign count shields under the Product Hunt badges.
 * Same two-tone chips as a GitHub README: name on the left, number on the right.
 * @returns The shield row, or nothing when the counts cannot be read.
 */
export default async function OmadesignCounts() {
  let chips: Chip[] = [];
  try {
    const response = await fetch("https://omadesign.app/api/stats", { next: { revalidate: 3600 } });
    if (response.ok) {
      const body = (await response.json()) as { chips?: Chip[] };
      chips = body.chips?.filter(chip => chip.display && chip.value !== null) ?? [];
    }
  } catch {
    chips = [];
  }
  if (!chips.length) return null;
  return (
    <nav aria-label="omadesign counts" className="flex flex-wrap items-center justify-center gap-2 w-full">
      {chips.map(chip => (
        <a
          key={chip.key}
          href={chip.href}
          title={chip.title}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-5 overflow-hidden rounded-[3px] font-[Verdana,Geneva,DejaVu_Sans,sans-serif] text-[11px] leading-5 text-white"
        >
          <span className="bg-[#555] px-1.5">{chip.label}</span>
          <span className="px-1.5" style={{ background: `#${chip.color || COLORS[chip.key] || "007ec6"}` }}>
            {chip.display}
          </span>
        </a>
      ))}
    </nav>
  );
}
