"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  PiGithubLogoLight,
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
  PiListLight,
  PiXLight,
  PiXLogoLight,
  PiBriefcaseLight,
  PiArticleLight,
  PiCalendarPlusLight,
} from "react-icons/pi";
import Link from "next/link";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";
import BookingModal from "@/components/booking/booking-modal";

export default function MenuTop() {
  return (
    <>
      <div className="flex flex-col md:hidden">
        <Sheet>
          <SheetTrigger aria-label="Open menu">
            <PiListLight />
          </SheetTrigger>
          <SheetContent className="p-0 bg-Base z-50 w-full h-dvh overflow-x-clip overflow-y-auto">
            <div className="flex flex-col items-stretch justify-start divide-y divide-y-foreground">
              <div className="flex items-center justify-between gap-md p-md w-full text-md">
                <Link href="https://github.com/michaelmonetized" aria-label="GitHub profile">
                  <PiGithubLogoLight />
                </Link>

                <Link href="https://www.linkedin.com/in/michaelchurley/" aria-label="LinkedIn profile">
                  <PiLinkedinLogoLight />
                </Link>

                <Link href="https://instagram.com/michaelh_rley" aria-label="Instagram profile">
                  <PiInstagramLogoLight />
                </Link>

                <Link href="https://x.com/MichaelH_rley2" aria-label="X profile">
                  <PiXLogoLight />
                </Link>

                <ThemeToggle />

                <SheetTrigger aria-label="Close menu">
                  <PiXLight />
                </SheetTrigger>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 p-md">
                <Link href="/portfolio" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
                  <PiBriefcaseLight />
                  <span>Portfolio</span>
                </Link>
                <Link href="/blog" className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg">
                  <PiArticleLight />
                  <span>Blog</span>
                </Link>
                <BookingModal trigger={
                  <button className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg text-left">
                    <PiCalendarPlusLight />
                    <span>Book a Meeting</span>
                  </button>
                } />
              </div>

              <div className="flex items-center justify-end gap-md p-md">
                <Link href="mailto:michaelhurley.pj@gmail.com">
                  <Button variant="outline">
                    Email Me
                  </Button>
                </Link>
                <Link href="tel:+18285931935">
                  <Button variant="secondary" className="font-black">
                    Call or Text Me
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex flex-row grow items-center justify-end gap-md text-xs">
        <NavigationMenu>
          <NavigationMenuList>
            {/* Navigation Links */}
            <div className="flex items-center gap-4 mr-4">
              <Link href="/portfolio" className="text-sm hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link href="/blog" className="text-sm hover:text-primary transition-colors">
                Blog
              </Link>
            </div>

            <div className="flex items-center justify-between gap-md px-md w-full">
              <Link href="https://github.com/michaelmonetized" aria-label="GitHub profile">
                <PiGithubLogoLight />
              </Link>

              <Link href="https://www.linkedin.com/in/michaelchurley/" aria-label="LinkedIn profile">
                <PiLinkedinLogoLight />
              </Link>

              <Link href="https://instagram.com/michaelh_rley" aria-label="Instagram profile">
                <PiInstagramLogoLight />
              </Link>

              <Link href="https://x.com/MichaelH_rley2" aria-label="X profile">
                <PiXLogoLight />
              </Link>
            </div>
            <div className="flex items-center justify-between gap-md w-full text-xs">
              <Link
                href="mailto:michaelhurley.pj@gmail.com"
                className="text-xs"
              >
                <Button size="sm" variant="outline" className="text-xs">
                  <span className="text-[14px]">Email Me</span>
                </Button>
              </Link>
              <Link href="tel:+18285931935" className="text-xs">
                <Button size="sm" variant="secondary" className="text-xs">
                  <span className="text-[14px]">Call or Text</span>
                </Button>
              </Link>
              <ThemeToggle />
              <BookingModal iconOnly />
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
