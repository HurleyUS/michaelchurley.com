---
id: T115
title: Enable sync invite
slug: omadesign-0-5-8-enable-sync-invite
excerpt: Push project + review export uploads a versioned .oma and a flat PNG, then you save so the cloud link stays in the file. Owners invite a verified email as editor or reviewer. Other drafts on disk stay local.
tags: [omadesign, 0.5.8, cloud]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-enable-sync-invite/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-enable-sync-invite/og.png
---

## The habit

In a shared Creative Cloud folder, "sync" means the directory. You drop a file in. It uploads. You invite an email to the folder. They see everything in it, including the exports you meant to delete. The careful version is a share link on one document, with a role: can edit, can comment. You still check, afterwards, that the other twenty files in the folder did not go with it.

Illustrator and Photoshop cloud documents attach an identity to the file the moment it becomes a cloud document. Affinity's shared approach, where you have used it, is usually an export plus a mail. The gesture you want is closer to the careful one. This document. This email. This role. The rest of the disk stays put.

## The constraint

The short claim says File → Enable cloud sync attaches a project id to the `.oma`, and File → Invite collaborator… adds an email to that document. The manual and the cloud guide use the commands you run now, and they are stricter than "add an email."

The upload is File → Push project + review export. It uploads a versioned `.oma` and a PNG of the current document. Project fonts go with the project. Raster pixels stay embedded in the design file. You save the local `.oma` after the first push. That save keeps the cloud link in the document. The link is how this file remembers which remote project those uploads belong to. Every later push adds files. Comments stay attached to the snapshot they were written on. A local edit does not silently upload, and it does not overwrite another designer's version.

The invite is an owner action on a verified email. The owner chooses editor or reviewer. Resend sends the invitation. It expires after seven days. The person signs in with that same email and accepts from the workspace. Until they accept, they are not a member. An email string written into a file is not a grant. Owners can change a role, remove access, or cancel an invitation that has not been accepted.

Nothing in that flow walks the rest of your directories. Sync, in the sense of "this project is shared," is the project you pushed. Private drafts in other tabs stay drafts.

## What landed

Push project + review export is the command. One document. A versioned source file and a flat PNG for review. Upload project asset… adds a file that is not that pair: a reference, a font already in the project bundle, something the review needs. Source and asset files are limited to 100 MB each. Flat PNG, JPEG, and WebP exports are limited to 20 MB. Each project holds 200 files. The initial service limit is 100 projects per account and 100 members per project.

Cloud projects → Pull & open opens the latest source in a separate document. Shared assets download into a new folder under the app's cloud-downloads directory. Pull does not save over the `.oma` you happened to have open. You get a new document. You decide what to keep.

Roles, once the invite is accepted:

| Role | What they can do |
| --- | --- |
| Owner | Project files, uploads, review, team management, archive, publishing |
| Editor | Download source and assets, upload, comment, reply, resolve threads |
| Reviewer | Flat exports, pins, rectangular annotations, comments, replies. They can resolve their own threads. |

A reviewer does not get the source as their working set. An editor does. The owner is the one who invites, changes the role, removes access, cancels a pending invite, archives, and publishes. Archive, from the web workspace, hides the project from collaborators and unpublishes public work. The owner can restore it. The local `.oma` on your disk is not deleted by an archive.

Invitations are capped at 20 per account per hour. A mistaken paste of a whole company directory into the invite field is not a feature. Seven days, then the invite is dead. Send it again if the person still needs in.

The web project accepts source, asset, and snapshot uploads under the same idea. The desktop is the authoring app. The browser is the share. You do not edit the live canvas in the browser. Two people do not paint one artboard at once. The next push is a new version. The previous snapshot still has the threads that were written on it.

Save after the first push is not optional bookkeeping. Skip it and the local file can lose the link that ties it to the project. The bytes of the poster are still in the `.oma`. The connection to the uploaded version is what that save stores. Push again later only from the file that has the link, or you are starting a relationship the guide told you to keep on purpose.

## In the hand

Sign in first. Open the one `.oma` you mean to share. Press Ctrl+S so the disk matches the canvas.

Choose Push project + review export. Wait for the versioned source and the PNG to finish. Press Ctrl+S again. The cloud link is now part of the local document. Quit, reopen, and the file still knows its project.

File the invite from the owner side. Use the verified email the other person will sign in with. Pick editor if they need the source and the right to upload. Pick reviewer if they should see flat exports and comment. They accept in the workspace within seven days, signed in as that address.

Keep working locally. The next hour of edits is yours. Push again when there is a version worth review. The new push adds files. Old comments stay on the old snapshot. The reviewer opens the export version they were asked about, not a live view of your unsaved nudges.

On the receiving machine, Cloud projects → Pull & open. A separate document opens. Assets land in a new cloud-downloads folder. Save that document where you want it. It does not replace some other client file that was already open.

Check the files you did not push. They are absent from the project. A private draft in the next tab is still only on disk. Unpublished status is still unpublished. The gallery does not list this project because you invited one editor.

## The edge

A push uploads the project you chose. It does not upload every private draft on the machine. Other `.oma` files stay local until you push those files, one by one, on purpose.

An invite adds a verified email as a pending editor or reviewer. It does not paste a string into the `.oma` and call that access. The person accepts before the seven days run out, with the same email. Cancel the invitation, or remove the member, and the next download is refused. Files they already saved remain on their disk.

Push project + review export on this document, save the `.oma`, then invite the one email who should see it.
