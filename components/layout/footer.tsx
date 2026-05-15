import Link from "next/link";
import {
  PiGithubLogoLight,
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
  PiXLogoLight,
} from "react-icons/pi";

export default async function Footer() {
  return (
    <footer className="flex flex-col items-stretch justify-start bg-background">
      <div className="flex flex-col items-stretch justify-center gap-md p-md w-full max-w-[1170px] mx-auto text-center">
        <p>
          © {new Date().getFullYear()} {"Michael C. Hurley"}, <em>All Rights Reserved</em>
          {" | "}
          <Link href="tel:+18283073591">(828) 307-3591</Link>
          {" | "}
          <Link href="mailto:michaelhurley.pj@gmail.com">michaelhurley.pj@gmail.com</Link>
          {" | "}
          <Link
            href="https://github.com/michaelmonetized"
            title="Michael Hurley on GitHub"
            aria-label="GitHub profile"
          >
            <PiGithubLogoLight className="w-6 h-6 inline-block" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/michaelchurley/"
            title="Michael Hurley on LinkedIn"
            aria-label="LinkedIn profile"
          >
            <PiLinkedinLogoLight className="w-6 h-6 inline-block" />
          </Link>
          <Link
            href="https://instagram.com/michaelh_rley"
            title="Michael Hurley on Instagram"
            aria-label="Instagram profile"
          >
            <PiInstagramLogoLight className="w-6 h-6 inline-block" />
          </Link>
          <Link
            href="https://x.com/MichaelH_rley2"
            title="Michael Hurley on X"
            aria-label="X profile"
          >
            <PiXLogoLight className="w-6 h-6 inline-block" />
          </Link>
        </p>
      </div>
    </footer>
  );
}
