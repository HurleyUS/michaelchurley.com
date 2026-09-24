type Chip = {
  key: string;
  label: string;
  value: number | null;
  display: string | null;
  href: string;
  title: string;
};

/**
 * The omadesign count row under the Product Hunt badges.
 * Reads the public counts from omadesign.app. Missing counts stay off the row.
 * @returns The chip row, or nothing when the counts cannot be read.
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
          className="font-mono text-[11px] leading-none text-Subtext0 hover:text-Blue"
        >
          [ {chip.display} | {chip.label} ]
        </a>
      ))}
    </nav>
  );
}
