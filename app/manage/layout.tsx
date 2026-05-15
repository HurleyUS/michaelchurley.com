"use client";

import { useUser, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const ALLOWED_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "michaelmonetized@gmail.com";

function ManageContent({ children }: { children: ReactNode }) {
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
        <p className="text-muted-foreground">You do not have permission to access this area.</p>
        <p className="text-sm text-muted-foreground">Signed in as: {userEmail}</p>
        <div className="flex gap-3">
          <Link
            href="/"
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
          >
            Go Home
          </Link>
          <SignOutButton>
            <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90">
              Sign Out
            </button>
          </SignOutButton>
        </div>
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
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href);
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
      <main className="flex-1 max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {children}
      </main>
    </div>
  );
}

export default function ManageLayout({ children }: { children: ReactNode }) {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h1 className="text-2xl font-bold">Admin auth unavailable</h1>
        <p className="text-muted-foreground">
          Configure NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY to access this area.
        </p>
      </div>
    );
  }

  return <ManageContent>{children}</ManageContent>;
}
