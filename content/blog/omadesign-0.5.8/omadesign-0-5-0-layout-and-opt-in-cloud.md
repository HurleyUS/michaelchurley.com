---
id: R050-01
title: Layout mode and opt-in cloud
slug: omadesign-0-5-0-layout-and-opt-in-cloud
excerpt: "0.5.0 added Layout as a fifth mode (frames, auto-layout, constraints, frame export) and a cloud layer that stays off until you turn it on. The .oma format moved to version 5."
publishedAt: 2026-09-15T23:32:15Z
tags: [omadesign, 0.5.0, layout, cloud]
coverImage: /blog/omadesign-0-5-0/omadesign-0-5-0-layout-and-opt-in-cloud/og.png
---

## The habit

Before 0.5.0, a screen mock in Omadesign was a rectangle with other rectangles on top of it. That works until the client asks for the same card at a different width. Then you move every child by hand, fix the padding, and hope the title still sits where it did.

The other habit was sharing. The file lived on my disk. If someone needed to look at it, I exported a PNG and sent it somewhere else, and the comments came back in a different app.

0.5.0 addressed both, and I kept each change small on purpose.

## The constraint

Layout had to live in the same `.oma` as the drawing. A second file type for screens would have meant two documents to keep in sync. Omadesign is built around one document and one layer stack across the modes.

Cloud had to be opt-in. Nothing in the editor could require an account. If you never sign in, the only difference you see is a menu item you do not use.

The file format had to move forward without stranding old files. 0.5.0 writes project version 5 and still opens versions 1 through 4.

## What landed

**Layout** sits next to Design as a fifth mode.

- `F` draws a frame. Frames nest.
- Auto-layout packs children with gap, padding and stretch.
- Constraints hold a child to an edge, both edges, or the center, or scale it with the parent.
- Image placeholders are dashed rectangles with a name.
- Four starters ship: mobile screen, landing hero, dashboard and card stack.
- File exports the selected frame as PNG, SVG or a plain HTML snapshot.

Undo still works. The layout engine tests cover vertical stacks, stretch and scale constraints, nested parent links and every starter template.

**Cloud** is off until you turn it on. In 0.5.0 the flow was to sign in, enable sync on a document, invite one email, pin a comment on a frame, and resolve it. Publishing to the showcase is a second opt-in, and unpublished files stay private. Sync used last write wins, with no CRDT.

The website moved to [omadesign.app](https://omadesign.app), and the old GitHub Pages URL redirects there. Showcase and account pages shipped with it. When Clerk and Convex keys are present, they handle identity and storage. Without them, the desktop keeps a local identity and store.

**Format.** Project files move to version 5. The encode round-trip covers frames, comments and a private cloud link.

## In the hand

Install or update with the same line as always. It writes into `~/.local` and leaves `/usr` alone.

```sh
curl -fsSL https://omadesign.app/install | sh
```

If `omadesign` is not on your PATH, run `~/.local/bin/omadesign`.

Switch to Layout mode. Press `F` and drag a frame. Draw a second frame inside it and it nests. Turn on auto-layout for the parent and the children pack. Pin a child with a constraint, resize the parent, and the child holds its place. When the frame looks right, export it from File as PNG, SVG or HTML.

Linux downloads keep the glibc 2.35 ceiling on ARM64 and x86_64.

## The edge

I listed the limits in the release, and they still apply to 0.5.0 as shipped:

- Layout does not import Figma files.
- HTML export is a snapshot. It does not build a website.
- Cloud without Clerk/Convex keys is local-plus-HTTP.

The 0.5.0 cloud hooks were a first pass. The 0.5.2 nightly replaced them with authenticated, persisted project sharing and snapshot review, which reached the public release in 0.5.3. The 0.5.4 release grew Layout into responsive Stack/Wrap/Grid with components. Those changes have their own posts.

Full notes are on the [v0.5.0 release](https://github.com/michaelmonetized/omadesign/releases/tag/v0.5.0).
