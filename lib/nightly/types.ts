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
  notes?: string;
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
  links?: ReportLink[];
};

export type OpenLoop = {
  title: string;
  detail: string;
};

export type DailyReport = {
  date: string;
  label?: string;
  timezone?: string;
  meta: {
    deploysInWindow?: number;
    example?: boolean;
    backfill?: boolean;
    generatedEt?: string;
    inboxSignalItems?: number;
    readOnly?: boolean;
    tldr?: string;
    windowEt?: string;
    windowUtc?: string;
    xPostsMeasured?: number;
  };
  shipped: ReportCard[];
  landed: ReportCard[];
  inbox: ReportCard[];
  loops: OpenLoop[];
};
