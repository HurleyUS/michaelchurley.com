import Link from "next/link";
import LogoSVG from "./logo-svg";

export default function Logo({ multiplier = 1 }: { multiplier?: number }) {
  return (
    <Link
      href="/"
      title="Navigate to the homepage"
      rel="home"
      className="block"
    >
      <LogoSVG
        width={(2802 / 25) * multiplier}
        height={(1674 / 25) * multiplier}
      />
    </Link>
  );
}
