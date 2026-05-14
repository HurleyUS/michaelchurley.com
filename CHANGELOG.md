# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Security

- Added rate limiting to authentication endpoints to prevent brute-force attacks (#17)
- Restricted admin email configuration to prevent unauthorized access (#17)
- Added CSRF protection to auth flows (#17)

### Fixed

- Authentication bypass vulnerability in admin routes (#17)
- Rate limiting middleware for login/signup endpoints (#17)

### Changed

- Admin email now validated against allowlist (#17)
- Enhanced auth error messages for better security posture (#17)

### Added

- **Dark Mode Toggle** via next-themes (defaultTheme="dark", class-based)
  - ThemeProvider wrapping the app with dark-first default
  - ThemeToggle component in header (desktop + mobile)
  - Removed `@media (prefers-color-scheme: dark)` in favor of `.dark` class

### Changed

- **proxy.ts**: Switched from `isPublicRoute` (enumerating every public route) to `isPrivateRoute` pattern per BUILDING.md Commandment II
- **Booking form submit button**: Removed `w-full`, now content-width with bottom-right alignment
- **Mobile menu buttons**: Removed `w-full` from "Email Me" and "Call or Text Me" buttons
- **Contact form submit button**: Removed `w-full`, now self-end aligned

### Fixed

- **Accessibility**: Added `aria-label` attributes to all social icon links (header, footer, mobile menu), theme toggle, booking modal icon button, and navigation icon buttons
- **Accessibility**: Added `role="alert"` to form error messages
- **Tailwind dark mode**: Added `darkMode: "class"` to tailwind.config.ts for class-based toggling
- **HTML**: Added `suppressHydrationWarning` to `<html>` tag for next-themes SSR compatibility

### Previously Added

- **Convex Backend Integration**
  - Set up Convex with schema for portfolio items, blog posts, and comments
  - Created CRUD operations for all content types
  - Deployed to Convex cloud (blessed-panther-485)

- **Clerk Authentication**
  - Added Clerk for authentication
  - Protected /manage routes for admin-only access
  - Admin access configured for authorized users
  - Google-only sign-in support ready (configure in Clerk dashboard)

- **Admin Dashboard (/manage)**
  - Dashboard overview with stats
  - Portfolio management (CRUD)
  - Blog management (CRUD)
  - Comments moderation (show/hide/delete)

- **Portfolio System**
  - Public portfolio listing page (/portfolio)
  - Individual portfolio item pages (/portfolio/[slug])
  - Support for: title, description, content (markdown), cover image, technologies, project URL, GitHub URL
  - Featured items support
  - Draft/Published status

- **Blog System**
  - Public blog listing page (/blog)
  - Individual blog post pages (/blog/[slug])
  - Support for: title, excerpt, content (markdown), cover image, tags
  - Auto-calculated reading time
  - Featured posts support
  - Draft/Published status
  - Tag-based filtering

- **Comment System**
  - Capture-before-signin flow for visitor comments
  - Email capture before prompting sign-in
  - Comments only visible after email verification via Google sign-in
  - Admin moderation (show/hide/delete)
  - Session-based pending comments (24hr expiry)

### Technical Details

- Convex schema with proper indexes for performance
- ConvexClientProvider wrapping the app with ClerkProvider
- Clerk middleware protecting /manage routes
- Real-time updates via Convex subscriptions

### Configuration Required

1. Set up Clerk at https://dashboard.clerk.com
2. Enable Google OAuth only
3. Require email from Google sign-in
4. Add keys to .env.local:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

### Dependencies Added

- `convex` - Backend as a service
- `@clerk/nextjs` - Authentication

---

## [0.1.0] - Initial Release

- Basic Next.js site with homepage
- Resume/portfolio content
- Contact information
- Responsive design with Tailwind CSS
