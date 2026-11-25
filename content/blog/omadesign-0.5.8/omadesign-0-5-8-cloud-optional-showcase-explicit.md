---
id: T143
title: Cloud optional showcase explicit
slug: omadesign-0-5-8-cloud-optional-showcase-explicit
excerpt: File → Sign in is optional. Push uploads a version when you ask. Publish to the showcase is a second step by the owner. Unpublished work stays off the public gallery. The .oma remains local.
tags: [omadesign, 0.5.8, cloud]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-cloud-optional-showcase-explicit/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-cloud-optional-showcase-explicit/og.png
---

## The habit

Creative Cloud wants the document in the service. Libraries, sync folders, "saved to cloud" as the default checkbox. You can work offline, and you can also discover that a file you thought was a file is a stub. Affinity's model has stayed closer to documents on disk, with its own account story for the suite. The habit you want when the machine is yours is the folder. Sign in when a client has to see a snapshot. Do not sign in to open yesterday's poster.

Publishing is a different decision from sharing with a reviewer. A client link and a public gallery get confused in tools that treat "anyone with the link" as the same knob as "on the homepage." You want an invite for the people with a role, and a separate act, by the owner, before a flat image is public. Taking it down should take it off the gallery. It will not reach into someone else's downloads folder. You already understand that part.

## The constraint

The editable file is the local `.oma`. Brand kits are dotfiles in the project folder. Welcome browses home without an account. **Sign up for cloud** on the welcome screen opens registration. It does not gate the recent files. **Team** appears only while you are signed in and a shared project exists.

Cloud collaboration, in the product since 0.5.4, shares project files, assets, and immutable flat exports. The browser reviews snapshots. You keep authoring in the native app. Live multi-user canvas editing, presence, and browser authoring are outside that scope. If a save in the studio silently uploaded, the local file would stop being the file. Transfers are explicit. A push adds files. It does not overwrite someone else's version quietly. Comments stick to the snapshot they were written on.

Showcase publication is an owner action on a chosen flat export. Source files, assets, and private review threads stay out of that public object. Unpublishing removes it from the gallery, the competition displays, and the image endpoint. Copies a viewer already saved are theirs.

## What landed

The workspace is `https://omadesign.app/cloud`. **File → Sign in…** opens the browser with a device code. You approve the code the desktop is showing. A name or an email alone does not grant access. Desktop credentials expire after 30 days. Revoke them from `/account` or disconnect in the app. The local identity file is owner-only on disk.

**File → Push project + review export** uploads a versioned `.oma` and a PNG of the current document. Project fonts go along. Raster pixels stay embedded in the design file. **Upload project asset…** adds another file. **Cloud projects… → Pull & open** opens the latest source as a separate document and downloads shared assets into a new folder under the app's cloud-downloads directory. Save the local `.oma` after the first push so the cloud link stays with the document.

Owners invite a verified email as an editor or a reviewer. Invitations go out through the mail sender, and they expire after seven days. The invited person signs in with that email and accepts in the workspace. Owners change roles, remove access, or cancel an invite.

An owner can manage files, uploads, review, the team, archive, and publishing. An editor can download source and assets, upload, comment, reply, and resolve threads. A reviewer sees flat exports, pins, rectangular annotations, comments, and replies, and can resolve their own threads. Pins scale with the image, including on a phone. The desktop **Review annotations…** window loads the same versioned exports and threads.

Limits on the service: source and asset files 100 MB each, flat PNG, JPEG, or WebP exports 20 MB, 200 files in a project, 100 projects on an account, 100 members on a project. Archive hides a project from collaborators and unpublishes its public work. The owner can restore it.

**Publish selected export** is the showcase step, in the desktop or the web workspace. You pick a finished flat export and give it a title and a description. `/showcase` lists public work. `/showcase/:id` shows the flat image. Unpublish removes it from those surfaces. Entering a competition uses an owned public showcase work, against an open brief. Duplicate entries are rejected. Closing dates are enforced. `/compete` lists them. Competitions stay unpublished until a real brief and dates exist.

Local edits do not upload themselves. Anonymous usage statistics are a separate toggle and start off. None of that is the document store.

## In the hand

Draw the poster. `Ctrl+S` to a folder on disk. Do not sign in. Quit and reopen. The file is the file. The welcome recent list finds `.oma` under your home directory without a session.

When a reviewer needs a snapshot, **File → Sign in…** and approve the device code. **Push project + review export**. Send the invite to their email. They comment on the flat PNG in the browser. You open **Review annotations…** in the app, reply, and keep drawing in the `.oma`. Push again when you want a new snapshot. The old comments stay on the old snapshot.

When the piece is public, select the export, title it, and **Publish selected export**. Look at `/showcase`. Unpublish when it should leave. The `.oma` on disk is still private. The reviewer threads did not become the gallery page.

Pull on a second machine with **Cloud projects… → Pull & open**. You get a document and a folder of assets. You do not get a live cursor from the other machine. Edit, save locally, push if you are an editor and you mean to add a version.

Disconnect in the app when the laptop should stop holding a credential. The local files remain.

## The edge

The service is not the default place a document lives. Sign-in, push, invite, and publish are separate acts. Publish is the owner's, on a flat export, and it leaves source and review threads behind. Unpublish does not recall a copy someone already saved. The browser does not author the canvas. There is no presence layer and no simultaneous editing session inside the `.oma`.

Save the file locally. Choose **File → Sign in…** only when someone else must see a snapshot.
