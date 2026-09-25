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

Creative Cloud, and every cousin of it, wants the file in the service before the application feels finished. You save. A sync icon spins. A teammate sees the file because it lives in a folder the account owns. Publish is a second switch, sometimes, and sometimes the share link is the same act as the save. You learn to keep a local copy because the service has been down, and you learn to distrust a gallery that filled itself with drafts.

Photoshop and Illustrator still open a local PSD or AI. The pressure is the default. Libraries, fonts, and cloud documents sit one click from the canvas. Affinity has been the opposite pitch for years: the file is a file. The habit you bring to a Linux studio is the second one. The app has to run with no account. The file has to save with Ctrl+S to a path you picked. Cloud, if it exists, is a door you open.

## The constraint

Omadesign is one binary and one `.oma`. Welcome browses local files. Projects are folders that contain `.omabrand`. A project needs no account. Sign up for cloud, on the welcome screen, opens registration at the cloud workspace. Local editing and project browsing stay available when you never click it. That split is the opt-in. An account is not a license check on the brush.

The short claim says the document stays on disk until File → Enable cloud sync. The manual names the commands that actually exist now. File → Sign in opens a secure browser approval. Push project + review export uploads a versioned design and a flat snapshot. Cloud projects pulls a shared design into a new document. Review annotations loads the feedback. Publishing, and entering a competition, are separate owner actions. "Enable cloud sync" was the earlier way to describe pointing a document at the service. The gesture now is the push. The file you edit is still the file on disk.

Transfers are explicit. A local edit does not upload itself and does not overwrite another designer's version. Every push adds files. You save the local `.oma` after the first push so the cloud link stays in the document. There is no background folder that drains `~/Projects` into a bucket. The workspace is `https://omadesign.app/cloud`. The browser is for sharing and review. Live multi-user canvas editing, presence, and authoring in the browser are outside this scope. You draw in the native app. You review a snapshot.

This shape shipped as collaboration in 0.5.4: project files, assets, and immutable flat exports, with private membership and a separate public showcase. It is not a live shared canvas. 0.5.8 did not turn cloud into a requirement. The release you are reading still saves a local `.oma` first.

## What landed

Cloud is opt-in. Until you sign in and push, the document is a file. Ctrl+S writes it. Ctrl+Shift+S names it. Nobody else can see it, because nothing was uploaded. Unpublished files do not appear in the gallery. The gallery is `/showcase`, and it lists work an owner published on purpose. A push is not that publish.

What a push sends is a versioned `.oma` and a PNG of the current document. Project font assets are included. Raster pixels stay embedded in the design file. Upload project asset… adds another file when the project needs one. The service limits are concrete. Source and asset files stop at 100 MB each. Flat PNG, JPEG, and WebP exports stop at 20 MB. A project holds 200 files. An account starts at 100 projects. A project holds 100 members. Those are the bounds of the opt-in, not a reason to opt in.

Cloud projects → Pull & open takes the latest source into a separate document and downloads shared assets into a new folder under the app's cloud-downloads directory. Your current tab is not replaced by someone else's latest push. Review annotations… loads the versioned exports and the threads. You reply and resolve there. The canvas you are drawing on stays local until you decide the next push.

Archive, on the web workspace, hides a project from collaborators and unpublishes its public work. The owner can restore it. Archive is still an explicit act. It is not what happens when you close the laptop.

If the desktop has no cloud URL configured, it can keep working with a local store. The public site does not. Production identity and data live with the services behind `omadesign.app`. The absence of an account on your machine does not block the pencil. The absence of a push does not block the save.

## In the hand

Draw the poster. Press Ctrl+S. Look at the folder. The `.oma` is there. Open `https://omadesign.app/showcase` in a browser if you want to see the public gallery. Your new file is not in it. You have not published, and you may not even be signed in.

When you want the service, use File → Sign in and approve the browser step. Come back to the document. Choose Push project + review export. The upload is the version you just saved, plus a flat PNG. Save the local `.oma` again after that first push so the link is in the file. Edit some more. Those edits are local. They do not appear for anyone else until you push again. Each push adds files. It does not roll the previous snapshot into the new one and throw the old comments away. Comments stay on the snapshot they were written on.

Leave every other open document alone. They are not in the project you pushed. A folder of client work on the same disk is not a sync root. There is no setting in this flow that means "upload all my drafts."

To put one finished image in the public gallery, publish that export as its own step. Until you do, `/showcase` does not list it. A private project id does not become a public page because you pushed.

Pull, when you are the person receiving, is Cloud projects, then Pull & open. You get a separate document. You do not get your unsaved local tab overwritten.

## The edge

Unpublished work stays off the gallery. A push shares a project with the people on that project. It does not publish. Publish is a later owner action, aimed at one flat export, with the source and the private threads left out.

A local edit stays local. Closing the file does not sync it. The document on disk is the document, including on a machine where you never create an account.

Press Ctrl+S. The `.oma` is on disk. Push project + review export only when this document is one you mean to share.
