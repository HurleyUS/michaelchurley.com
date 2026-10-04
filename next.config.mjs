/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/home/michael/Projects/prompt-budget-audit-20261004/REPORT.md",
        destination: "/blog/codex-29k-token-budget/REPORT.txt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
