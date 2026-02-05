"use client";

import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const ALLOWED_EMAIL = "michaelmonetized@gmail.com";

export default function ManageLayout({ children }: { children: ReactNode }) {
  const { user, isLoaded, isSignedIn } = useUser();
  const pathname = usePathname();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h1 className="text-2xl font-bold">Sign In Required</h1>
        <p className="text-muted-foreground">You must sign in to access this area.</p>
        <SignInButton mode="modal">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Sign In
          </button>
        </SignInButton>
      </div>
    );
  }

  // Check if user email matches allowed email
  const userEmail = user.primaryEmailAddress?.emailAddress;
  if (userEmail !== ALLOWED_EMAIL) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-muted-foreground">
          You do not have permission to access this area.
        </p>
        <p className="text-sm text-muted-foreground">
          Signed in as: {userEmail}
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
        >
          Go Home
        </Link>
      </div>
    );
  }

  const navItems = [
    { href: "/manage", label: "Dashboard", exact: true },
    { href: "/manage/portfolio", label: "Portfolio" },
    { href: "/manage/blog", label: "Blog" },
    { href: "/manage/comments", label: "Comments" },
  ];

  return (
    <div className="flex flex-col min-h-[50vh]">
      {/* Admin Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{userEmail}</span>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-6">{children}</main>
    </div>
  );
}
