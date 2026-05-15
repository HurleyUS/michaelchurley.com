# FALLOW REVIEW

## HEALTH

## Vital Signs

| Metric | Value |
|:-------|------:|
| Total LOC | 12252 |
| Avg Cyclomatic | 2.1 |
| P90 Cyclomatic | 5 |
| Dead Files | 8.8% |
| Dead Exports | 17.9% |
| Maintainability (avg) | 92.8 |
| Circular Deps | 0 |
| Unused Deps | 2 |

## Fallow: 48 high complexity functions

| File | Function | Severity | Cyclomatic | Cognitive | CRAP | Lines |
|:-----|:---------|:---------|:-----------|:----------|:-----|:------|
| `app/manage/blog/%5Bid%5D/page.tsx:22` | `EditBlogPost` | critical | 16 | 18 **!** | 272.0 **!** | 450 |
| `app/api/booking/route.ts:29` | `POST` | critical | 15 | 11 | 240.0 **!** | 113 |
| `app/manage/page.tsx:7` | `ManageDashboard` | critical | 14 | 12 | 210.0 **!** | 104 |
| `lib/analytics.ts:225` | `<arrow>` | critical | 14 | 11 | 210.0 **!** | 20 |
| `components/comments/comment-section.tsx:81` | `handleSubmit` | critical | 12 | 17 **!** | 156.0 **!** | 70 |
| `lib/analytics.ts:289` | `validateAnalyticsSetup` | critical | 12 | 19 **!** | 156.0 **!** | 47 |
| `app/manage/portfolio/new/page.tsx:142` | `handleSubmit` | critical | 12 | 12 | 156.0 **!** | 41 |
| `app/manage/comments/page.tsx:52` | `<arrow>` | critical | 11 | 9 | 132.0 **!** | 63 |
| `app/manage/portfolio/%5Bid%5D/page.tsx:161` | `handleSubmit` | critical | 11 | 11 | 132.0 **!** | 42 |
| `app/manage/portfolio/%5Bid%5D/page.tsx:22` | `EditPortfolioItem` | critical | 11 | 12 | 132.0 **!** | 432 |
| `convex/blog.ts:184` | `handler` | critical | 10 | 10 | 110.0 **!** | 39 |
| `app/manage/portfolio/%5Bid%5D/page.tsx:52` | `<arrow>` | critical | 10 | 10 | 110.0 **!** | 20 |
| `lib/launch-validation.ts:262` | `validateAnalytics` | high | 9 | 16 **!** | 90.0 **!** | 58 |
| `scripts/validate-launch.js:32` | `generateReport` | high | 9 | 10 | 90.0 **!** | 95 |
| `app/manage/portfolio/new/page.tsx:22` | `NewPortfolioItem` | high | 9 | 10 | 90.0 **!** | 398 |
| `app/api/contact/route.ts:10` | `POST` | high | 9 | 7 | 90.0 **!** | 74 |
| `components/comments/comment-section.tsx:26` | `CommentSection` | high | 9 | 12 | 90.0 **!** | 254 |
| `lib/launch-validation.ts:77` | `validateUX` | high | 9 | 14 | 90.0 **!** | 71 |
| `app/manage/blog/new/page.tsx:22` | `NewBlogPost` | high | 9 | 10 | 90.0 **!** | 400 |
| `app/blog/page.tsx:21` | `BlogPage` | high | 8 | 7 | 72.0 **!** | 124 |
| `app/blog/%5Bslug%5D/page.tsx:10` | `generateMetadata` | high | 7 | 6 | 56.0 **!** | 24 |
| `app/manage/blog/%5Bid%5D/page.tsx:81` | `handleTagKeyDown` | high | 7 | 4 | 56.0 **!** | 9 |
| `convex/portfolio.ts:177` | `handler` | high | 7 | 7 | 56.0 **!** | 33 |
| `app/manage/portfolio/new/page.tsx:55` | `handleTechKeyDown` | high | 7 | 4 | 56.0 **!** | 8 |
| `app/manage/blog/page.tsx:69` | `<arrow>` | high | 7 | 6 | 56.0 **!** | 90 |
| `app/portfolio/%5Bslug%5D/page.tsx:12` | `PortfolioItemPage` | high | 7 | 6 | 56.0 **!** | 114 |
| `scripts/ship.mts:23` | `run` | high | 7 | 6 | 56.0 **!** | 17 |
| `app/manage/portfolio/%5Bid%5D/page.tsx:74` | `handleTechKeyDown` | high | 7 | 4 | 56.0 **!** | 8 |
| `app/manage/blog/new/page.tsx:56` | `handleTagKeyDown` | high | 7 | 4 | 56.0 **!** | 9 |
| `convex/comments.ts:70` | `handler` | moderate | 6 | 5 | 42.0 **!** | 53 |
| `convex/portfolio.ts:7` | `resolveItemWithImages` | moderate | 6 | 7 | 42.0 **!** | 47 |
| `convex/portfolio.ts:215` | `handler` | moderate | 6 | 8 | 42.0 **!** | 22 |
| `convex/blog.ts:228` | `handler` | moderate | 6 | 8 | 42.0 **!** | 20 |
| `convex/migrations/clearOldImages.ts:7` | `handler` | moderate | 6 | 7 | 42.0 **!** | 26 |
| `components/comments/comment-section.tsx:244` | `<arrow>` | moderate | 6 | 4 | 42.0 **!** | 31 |
| `lib/launch-validation.ts:21` | `validatePerformance` | moderate | 6 | 8 | 42.0 **!** | 54 |
| `app/manage/blog/new/page.tsx:154` | `handleSubmit` | moderate | 6 | 6 | 42.0 **!** | 42 |
| `app/blog/%5Bslug%5D/page.tsx:44` | `BlogPostPage` | moderate | 5 | 4 | 30.0 **!** | 72 |
| `app/manage/blog/%5Bid%5D/page.tsx:58` | `<arrow>` | moderate | 5 | 5 | 30.0 **!** | 21 |
| `app/manage/blog/%5Bid%5D/page.tsx:179` | `handleSubmit` | moderate | 5 | 5 | 30.0 **!** | 44 |
| `app/manage/portfolio/page.tsx:66` | `<arrow>` | moderate | 5 | 4 | 30.0 **!** | 57 |
| `components/contact/contact-form.tsx:26` | `handleSubmit` | moderate | 5 | 5 | 30.0 **!** | 27 |
| `convex/portfolio.ts:241` | `handler` | moderate | 5 | 2 | 30.0 **!** | 15 |
| `convex/blog.ts:7` | `resolvePostWithImage` | moderate | 5 | 6 | 30.0 **!** | 33 |
| `app/vizible/page.tsx:395` | `<arrow>` | moderate | 5 | 4 | 30.0 **!** | 39 |
| `components/comments/comment-section.tsx:50` | `<arrow>` | moderate | 5 | 2 | 30.0 **!** | 30 |
| `lib/launch-validation.ts:202` | `validateSecurity` | moderate | 5 | 6 | 30.0 **!** | 58 |
| `app/manage/layout.tsx:10` | `ManageContent` | moderate | 5 | 3 | 30.0 **!** | 93 |

**91** files, **528** functions analyzed (thresholds: cyclomatic > 20, cognitive > 15, CRAP >= 30.0)



## AUDIT

Comparing against baseline: /Users/michael/Projects/michaelchurley.com/.fallow/baselines/dead-code.json
Comparing against duplication baseline: /Users/michael/Projects/michaelchurley.com/.fallow/baselines/dupes.json
Comparing against health baseline: /Users/michael/Projects/michaelchurley.com/.fallow/baselines/health.json

Audit scope: 72 changed files vs main (470746b..HEAD)
✓ No issues in 72 changed files (0.42s)


## DEAD

## Fallow: 51 issues found

### Unused files (8)

- `components/contact/contact-form.tsx`
- `components/ui/pro-button.tsx`
- `components/ui/textarea.tsx`
- `lib/analytics.ts`
- `lib/hooks/use-form-error.ts`
- `lib/launch-validation.ts`
- `styles/colors.css`
- `styles/max.css`

### Unused exports (27)

- `components/ui/button.tsx`
  - :50 `buttonVariants`
- `components/ui/card.tsx`
  - :56 `CardDescription`
- `components/ui/dialog.tsx`
  - :95 `DialogPortal`
  - :96 `DialogOverlay`
  - :97 `DialogClose`
  - :100 `DialogHeader`
  - :101 `DialogFooter`
- `components/ui/navigation-menu.tsx`
  - :111 `navigationMenuTriggerStyle`
  - :114 `NavigationMenuItem`
  - :115 `NavigationMenuContent`
  - :116 `NavigationMenuTrigger`
  - :117 `NavigationMenuLink`
  - :118 `NavigationMenuIndicator`
  - :119 `NavigationMenuViewport`
- `components/ui/sheet.tsx`
  - :112 `SheetPortal`
  - :113 `SheetOverlay`
  - :115 `SheetClose`
  - :117 `SheetHeader`
  - :118 `SheetFooter`
  - :119 `SheetTitle`
  - :120 `SheetDescription`
- `components/ui/textarea.tsx`
  - :22 `Textarea`
- `lib/ics.ts`
  - :34 `generateICS`
- `lib/validation.ts`
  - :5 `emailSchema`
  - :10 `nameSchema`
  - :16 `messageSchema`
  - :21 `phoneSchema`

### Unused type exports (6)

- `components/ui/button.tsx`
  - :34 `ButtonProps`
- `components/ui/input.tsx`
  - :4 `InputProps`
- `components/ui/textarea.tsx`
  - :4 `TextareaProps`
- `lib/validation.ts`
  - :41 `ContactFormData`
  - :55 `BlogPostData`
  - :74 `PortfolioItemData`

### Unused devDependencies (2)

- `autoprefixer`
- `eslint-config-next`

### Unlisted dependencies (3)

- `@jest/globals`
- `@radix-ui/react-visually-hidden`
- `@toast-ui/editor`

### Test-only production dependencies (consider moving to devDependencies) (5)

- `@tailwindcss/aspect-ratio`
- `@tailwindcss/container-queries`
- `@tailwindcss/forms`
- `@tailwindcss/typography`
- `tailwindcss-animate`




## DUPLICATION

## Fallow: 37 clone groups found (21.7% duplication)

### Duplicates

**Clone group 1** (15 lines, 2 instances)

- `app/error.tsx:11-25`
- `app/global-error.tsx:14-28`

**Clone group 2** (33 lines, 2 instances)

- `app/error.tsx:37-69`
- `app/global-error.tsx:50-82`

**Clone group 3** (15 lines, 2 instances)

- `app/manage/blog/%5Bid%5D/page.tsx:1-15`
- `app/manage/portfolio/%5Bid%5D/page.tsx:1-15`

**Clone group 4** (465 lines, 2 instances)

- `app/manage/blog/%5Bid%5D/page.tsx:7-471`
- `app/manage/blog/new/page.tsx:7-421`

**Clone group 5** (10 lines, 2 instances)

- `app/manage/blog/%5Bid%5D/page.tsx:35-44`
- `app/manage/blog/new/page.tsx:24-33`

**Clone group 6** (50 lines, 2 instances)

- `app/manage/blog/%5Bid%5D/page.tsx:78-126`
- `app/manage/blog/new/page.tsx:52-101`

**Clone group 7** (49 lines, 2 instances)

- `app/manage/blog/%5Bid%5D/page.tsx:129-177`
- `app/manage/blog/new/page.tsx:104-152`

**Clone group 8** (40 lines, 2 instances)

- `app/manage/blog/%5Bid%5D/page.tsx:334-373`
- `app/manage/blog/new/page.tsx:267-306`

**Clone group 9** (10 lines, 2 instances)

- `app/manage/blog/new/page.tsx:1-10`
- `app/manage/portfolio/new/page.tsx:1-10`

**Clone group 10** (23 lines, 2 instances)

- `app/manage/blog/new/page.tsx:202-224`
- `app/manage/portfolio/new/page.tsx:189-211`

**Clone group 11** (30 lines, 2 instances)

- `app/manage/blog/new/page.tsx:225-254`
- `app/manage/portfolio/new/page.tsx:212-241`

**Clone group 12** (19 lines, 2 instances)

- `app/manage/blog/new/page.tsx:323-341`
- `app/manage/portfolio/new/page.tsx:307-325`

**Clone group 13** (33 lines, 2 instances)

- `app/manage/blog/new/page.tsx:367-399`
- `app/manage/portfolio/new/page.tsx:375-407`

**Clone group 14** (19 lines, 2 instances)

- `app/manage/comments/page.tsx:59-77`
- `components/comments/comment-section.tsx:245-263`

**Clone group 15** (444 lines, 2 instances)

- `app/manage/portfolio/%5Bid%5D/page.tsx:10-453`
- `app/manage/portfolio/new/page.tsx:10-419`

**Clone group 16** (11 lines, 2 instances)

- `app/manage/portfolio/%5Bid%5D/page.tsx:28-38`
- `app/manage/portfolio/new/page.tsx:24-34`

**Clone group 17** (125 lines, 2 instances)

- `app/manage/portfolio/%5Bid%5D/page.tsx:71-195`
- `app/manage/portfolio/new/page.tsx:51-175`

**Clone group 18** (12 lines, 2 instances)

- `app/manage/portfolio/%5Bid%5D/page.tsx:187-198`
- `app/manage/portfolio/new/page.tsx:167-178`

**Clone group 19** (27 lines, 2 instances)

- `app/manage/portfolio/%5Bid%5D/page.tsx:223-249`
- `app/manage/portfolio/new/page.tsx:184-210`

**Clone group 20** (73 lines, 2 instances)

- `app/manage/portfolio/%5Bid%5D/page.tsx:257-329`
- `app/manage/portfolio/new/page.tsx:226-293`

**Clone group 21** (52 lines, 2 instances)

- `app/manage/portfolio/%5Bid%5D/page.tsx:346-397`
- `app/manage/portfolio/new/page.tsx:310-361`

**Clone group 22** (35 lines, 2 instances)

- `app/manage/portfolio/%5Bid%5D/page.tsx:407-441`
- `app/manage/portfolio/new/page.tsx:373-407`

**Clone group 23** (11 lines, 4 instances)

- `app/page.tsx:84-93`
- `app/page.tsx:95-105`
- `app/page.tsx:107-117`
- `app/page.tsx:118-128`

**Clone group 24** (18 lines, 2 instances)

- `app/page.tsx:88-105`
- `app/page.tsx:111-128`

**Clone group 25** (18 lines, 2 instances)

- `app/page.tsx:267-279`
- `app/page.tsx:301-318`

**Clone group 26** (13 lines, 2 instances)

- `app/page.tsx:300-312`
- `app/page.tsx:321-333`

**Clone group 27** (29 lines, 2 instances)

- `app/page.tsx:325-374`
- `app/page.tsx:428-451`

**Clone group 28** (27 lines, 4 instances)

- `app/page.tsx:325-351`
- `app/page.tsx:353-372`
- `app/page.tsx:428-449`
- `app/page.tsx:451-469`

**Clone group 29** (24 lines, 2 instances)

- `app/page.tsx:353-374`
- `app/page.tsx:428-451`

**Clone group 30** (22 lines, 3 instances)

- `app/page.tsx:380-401`
- `app/page.tsx:407-428`
- `app/page.tsx:431-451`

**Clone group 31** (24 lines, 2 instances)

- `app/page.tsx:405-428`
- `app/page.tsx:429-451`

**Clone group 32** (21 lines, 2 instances)

- `components/ui/menu-top.tsx:33-53`
- `components/ui/menu-top.tsx:114-133`

**Clone group 33** (15 lines, 2 instances)

- `convex/blog.ts:121-135`
- `convex/portfolio.ts:115-129`

**Clone group 34** (12 lines, 2 instances)

- `convex/blog.ts:216-227`
- `convex/portfolio.ts:203-214`

**Clone group 35** (11 lines, 2 instances)

- `convex/blog.ts:226-231`
- `convex/blog.ts:250-260`

**Clone group 36** (16 lines, 2 instances)

- `convex/blog.ts:238-251`
- `convex/portfolio.ts:225-240`

**Clone group 37** (11 lines, 2 instances)

- `convex/portfolio.ts:213-218`
- `convex/portfolio.ts:239-249`

### Clone Families

**Family 1** (2 groups, 48 lines across `app/error.tsx`, `app/global-error.tsx`)

- Extract shared function (33 lines) from error.tsx, global-error.tsx (~33 lines saved)
- Extract shared function (15 lines) from error.tsx, global-error.tsx (~15 lines saved)

**Family 2** (5 groups, 614 lines across `app/manage/blog/%5Bid%5D/page.tsx`, `app/manage/blog/new/page.tsx`)

- Extract 5 shared clone groups (614 lines) from page.tsx, page.tsx into a shared directory (~614 lines saved)

**Family 3** (1 group, 15 lines across `app/manage/blog/%5Bid%5D/page.tsx`, `app/manage/portfolio/%5Bid%5D/page.tsx`)

- Extract shared function (15 lines) from page.tsx, page.tsx (~15 lines saved)

**Family 4** (5 groups, 115 lines across `app/manage/blog/new/page.tsx`, `app/manage/portfolio/new/page.tsx`)

- Extract 5 shared clone groups (115 lines) from page.tsx, page.tsx into a shared directory (~115 lines saved)

**Family 5** (1 group, 19 lines across `app/manage/comments/page.tsx`, `components/comments/comment-section.tsx`)

- Extract shared function (19 lines) from page.tsx, comment-section.tsx (~19 lines saved)

**Family 6** (8 groups, 779 lines across `app/manage/portfolio/%5Bid%5D/page.tsx`, `app/manage/portfolio/new/page.tsx`)

- Extract 8 shared clone groups (779 lines) from page.tsx, page.tsx into a shared directory (~779 lines saved)

**Family 7** (9 groups, 186 lines across `app/page.tsx`)

- Extract 9 shared clone groups (186 lines) from page.tsx into app (~284 lines saved)

**Family 8** (1 group, 21 lines across `components/ui/menu-top.tsx`)

- Extract shared function (21 lines) from menu-top.tsx, menu-top.tsx (~21 lines saved)

**Family 9** (1 group, 11 lines across `convex/blog.ts`)

- Extract shared function (11 lines) from blog.ts, blog.ts (~11 lines saved)

**Family 10** (3 groups, 43 lines across `convex/blog.ts`, `convex/portfolio.ts`)

- Extract shared function (15 lines) from blog.ts, portfolio.ts (~15 lines saved)
- Extract shared function (16 lines) from blog.ts, portfolio.ts (~16 lines saved)
- Extract shared function (12 lines) from blog.ts, portfolio.ts (~12 lines saved)

**Family 11** (1 group, 11 lines across `convex/portfolio.ts`)

- Extract shared function (11 lines) from portfolio.ts, portfolio.ts (~11 lines saved)

**Summary:** 2266 duplicated lines (21.7%) across 12 files



## DOCSTRINGS

### Docstring Coverage

- Status: fail
- Coverage: 3.45%
- Documented symbols: 4/116
- Missing docstrings: 112

