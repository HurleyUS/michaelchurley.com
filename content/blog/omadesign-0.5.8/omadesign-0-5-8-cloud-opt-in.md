---
id: T113
title: Cloud opt-in
slug: omadesign-0-5-8-cloud-opt-in
excerpt: Cloud stays off until you opt in. The .oma remains on disk. File → Sign in is the browser approval. Push project + review export is the upload. Unpublished work stays out of the gallery.
publishedAt: 2026-09-15T23:40:15Z
tags: [omadesign, 0.5.0, cloud]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-cloud-opt-in/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-cloud-opt-in/og.png
---

## The habit

Creative Cloud, and every service like it, wants the file in the service before the application feels finished. You save, a sync icon spins, and a teammate sees the file because it lives in a folder the account owns. Publishing is sometimes a second switch, and sometimes the share link is created by the save itself. You learn to keep a local copy because the service has been down, and you learn to distrust a gallery that filled up with drafts.

Photoshop and Illustrator still open a local PSD or AI file, but the defaults push you toward the cloud. Libraries, fonts, and cloud documents sit one click from the canvas. Affinity has pitched the opposite for years: a file is just a file. That second approach is the one a Linux studio expects. The app has to run with no account, the file has to save with Ctrl+S to a path you picked, and cloud, if it exists at all, is something you choose to turn on.

## The constraint

Omadesign is one binary and one `.oma`. Welcome browses local files. Projects are folders that contain `.omabrand`, and a project needs no account. On the welcome screen, Sign up for cloud opens registration at the cloud workspace. If you never click it, local editing and project browsing still work. That split is what opt-in means here. An account is never a license check on the brush.

The short description says the document stays on disk until File > Enable cloud sync. The manual names the commands that actually exist now. File > Sign in opens a secure browser approval. Push project + review export uploads a versioned design and a flat snapshot. Cloud projects pulls a shared design into a new document. Review annotations loads the feedback. Publishing and entering a competition are separate owner actions. "Enable cloud sync" was the earlier name for pointing a document at the service, and today the push does that job. The file you edit is still the file on disk.

Transfers are explicit. A local edit never uploads itself or overwrites another designer's version, and every push adds files. After the first push you save the local `.oma` so the cloud link stays in the document. No background folder copies `~/Projects` into a bucket. The workspace is `https://omadesign.app/cloud`, and the browser is for sharing and review. Live multi-user canvas editing, presence, and authoring in the browser are outside this scope. You draw in the native app and review a snapshot.

The collaboration features shipped in 0.5.4: project files, assets, and immutable flat exports, with private membership and a separate public showcase. There is no live shared canvas. As of 0.5.8, cloud is still not a requirement, and the app still saves a local `.oma` first.

## What landed

Cloud is opt-in. Until you sign in and push, the document is just a file. Ctrl+S writes it and Ctrl+Shift+S names it. Nobody else can see it, because nothing was uploaded. Unpublished files never appear in the gallery. The gallery is `/showcase`, and it lists only work an owner published on purpose. A push does not publish.

A push sends a versioned `.oma` and a PNG of the current document. Project font assets are included, and raster pixels stay embedded in the design file. Upload project asset… adds another file when the project needs one. The service has fixed limits. Source and asset files are capped at 100 MB each. Flat PNG, JPEG, and WebP exports are capped at 20 MB. A project holds 200 files and 100 members, and an account starts with 100 projects.

Cloud projects > Pull & open takes the latest source into a separate document and downloads shared assets into a new folder under the app's cloud-downloads directory. Someone else's latest push never replaces your current tab. Review annotations… loads the versioned exports and the threads, where you reply and resolve. The canvas you are drawing on stays local until you decide to push again.

On the web workspace, Archive hides a project from collaborators and unpublishes its public work, and the owner can restore it. Archiving is also a deliberate action. Closing the laptop doesn't archive anything.

If the desktop app has no cloud URL configured, it can keep working with a local store. The public site can't. Production identity and data live with the services behind `omadesign.app`. Having no account on your machine doesn't block drawing, and not pushing doesn't block saving.

## In the hand

Draw the poster and press Ctrl+S. Look in the folder and the `.oma` is there. If you open `https://omadesign.app/showcase` in a browser to see the public gallery, your new file isn't in it. You haven't published, and you may not even be signed in.

When you want the service, use File > Sign in and approve the browser step. Back in the document, choose Push project + review export. The upload is the version you just saved plus a flat PNG. Save the local `.oma` again after that first push so the link is stored in the file. Keep editing. Those edits stay local and nobody else sees them until you push again. Each push adds files. It never merges the previous snapshot into the new one or throws away the old comments. Comments stay on the snapshot they were written on.

Your other open documents are not part of the project you pushed. A folder of client work on the same disk is not synced, and nothing in this flow uploads all your drafts.

To put one finished image in the public gallery, publish that export as a separate step. Until you do, `/showcase` doesn't list it. Pushing never turns a private project id into a public page.

When you are receiving, pull with Cloud projects > Pull & open. You get a separate document, and your unsaved local tab is never overwritten.

## The edge

Unpublished work stays out of the gallery. A push shares a project with the people on that project and does not publish it. Publishing is a later owner action on one flat export, and it leaves out the source and the private threads.

A local edit stays local, and closing the file doesn't sync it. The document on disk is the real document, including on a machine where you never create an account.
