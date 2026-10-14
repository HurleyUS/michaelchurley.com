export type AudienceMetrics = {
  xFollowers?: number;
  xImpressions?: number;
  linkedInFollowers?: number;
  totalReach?: number;
};

export type DailyMetric = {
  date: string;
  productivity: number | null;
  audience: AudienceMetrics;
  source?: string;
  links?: ReportLink[];
};

export type ReportLink = { label: string; href: string };

export type ReportCard = {
  title: string;
  kind: string;
  summary: string;
  bullets?: string[];
  quote?: string;
  metrics?: Record<string, number>;
  when?: string;
  links: ReportLink[];
};

export type DailyReport = {
  date: string;
  label?: string;
  timezone?: string;
  meta: {
    tldr?: string;
    windowEt?: string;
    windowUtc?: string;
  };
  shipped: ReportCard[];
  landed: ReportCard[];
};
