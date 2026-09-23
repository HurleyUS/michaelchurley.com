export function formatUsd(n: number | null | undefined): string {
  if (n == null) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function formatDateLabel(iso: string): string {
  const parts = iso.split("-").map(Number);
  const y = parts[0] ?? 1970;
  const m = parts[1] ?? 1;
  const d = parts[2] ?? 1;
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function kindPillClass(kind: string): string {
  const k = kind.toLowerCase();
  if (["shipped", "ship", "new", "measured"].includes(k)) return "ny-pill ny-ship";
  if (["deploy", "deploys"].includes(k)) return "ny-pill ny-deploy";
  if (["internal"].includes(k)) return "ny-pill ny-internal";
  if (["action", "reply", "alert"].includes(k)) return "ny-pill ny-alert";
  if (["none", "out", "outside", "unreachable"].includes(k)) return "ny-pill ny-out";
  return "ny-pill";
}
