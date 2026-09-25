---
id: R052-01
title: Cloud gets real: projects, roles, review snapshots
slug: omadesign-0-5-2-cloud-projects-and-review
excerpt: "The 0.5.2 nightly replaced the 0.5.0 cloud hooks with verified sign-in, explicit project push and pull, owner/editor/reviewer roles, and comments pinned to versioned flat snapshots."
publishedAt: 2026-09-19T15:39:11Z
tags: [omadesign, 0.5.2, cloud]
coverImage: /blog/omadesign-0-5-2/omadesign-0-5-2-cloud-projects-and-review/og.png
---

## The habit

A client review usually goes like this. You export a PNG, drop it in a chat or an email, and get back a screenshot with red circles on it. Two rounds later nobody knows which export the circles belong to.

The 0.5.0 cloud was my first answer: sign in, sync a document, invite one email, pin a comment. It was wired up, but identity and storage were partly local stand-ins until Clerk and Convex keys were present. That was fine for a demo. I would not point a client at it.

## The constraint

Sharing needed a verified identity, server-side authorization on every request, and storage somewhere other than a JSON file on my disk.

It also had to stay explicit. A designer's local edits cannot silently upload, and they cannot silently overwrite another designer's version. Every push is a deliberate action, and every comment belongs to the exact snapshot it was written on.

The browser handles sharing and review. The native Linux app stays the authoring tool.

## What landed

0.5.2 was a nightly, and there is no v0.5.2 tag. The work merged on 2026-09-19 as a stack of four PRs. It reached the public release line in 0.5.3, which was built on the 0.5.2 nightly.

- [#68](https://github.com/michaelmonetized/omadesign/pull/68) cloud foundation: identity, authorization and services
- [#69](https://github.com/michaelmonetized/omadesign/pull/69) cloud workspace: projects, flat review and public work
- [#70](https://github.com/michaelmonetized/omadesign/pull/70) native cloud: secure connection, project transfer and review
- [#71](https://github.com/michaelmonetized/omadesign/pull/71) service verification, access boundaries and release checks

Clerk owns identity. Convex owns project authorization, data and storage. Resend delivers project invitations. Vercel hosts the web app at [omadesign.app/cloud](https://omadesign.app/cloud).

**Sign-in.** File > Sign in… opens your browser with a device code. Approve only the code the desktop is showing. A name or email typed into a file never grants cloud access by itself.

**Transfer.** File > Push project + review export uploads a versioned `.oma` and a flat PNG of the current document. Upload project asset… adds another file. Cloud projects… > Pull & open opens the latest source in a separate document. Save the local `.oma` after the first push so the cloud link stays with the file.

**Roles.** Owners invite verified email addresses as editors or reviewers.

| Role | Access |
| --- | --- |
| Owner | Files, uploads, review, team management, archive, publishing |
| Editor | Source and asset downloads, uploads, comments, replies, resolving threads |
| Reviewer | Flat exports, pins, rectangular annotations, comments and replies |

**Review.** Pick an export version in the web project, click to pin or drag a rectangular annotation, and post the thread. The desktop's Review annotations… window loads the same versioned exports and threads, with reply and resolve/reopen.

**Access.** Private downloads recheck membership on every request. Revoking a member or a desktop blocks future requests. PR #71 also removed the old local-only review demo and added immediate removal of a publication image.

Publishing to the public showcase stays a separate owner action, and only the flat export goes public. Source files, assets and private review threads stay private.

## In the hand

Sign in from File, approve the code in the browser, and push. Invite a reviewer by email. They open the project on the web and pin a note on the snapshot. You read the thread in the desktop's review window without leaving the app. When you push again, the old comments stay on the old snapshot.

PR #71 records the checks: 10 Convex authorization, storage and review tests, the native library suite at 391 passed with 5 ignored (the same count 0.5.1 reported), and a live Clerk to Convex round trip covering upload, private download, native push and pull, and review capture.

## The edge

Cloud has no live shared canvas. There is no multi-user editing, no presence and no browser authoring. Transfers are explicit, and a push adds files without merging anything.

Revocation stops future requests. It cannot recall a file someone already downloaded.

The nightly did not get public release notes. The role table and menu names above follow the [cloud guide as tagged in v0.5.3](https://github.com/michaelmonetized/omadesign/blob/v0.5.3/docs/cloud.md), the first release that shipped this work.
