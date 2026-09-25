---
id: T115
title: Enable sync invite
slug: omadesign-0-5-8-enable-sync-invite
excerpt: Push project + review export uploads a versioned .oma and a flat PNG, then you save so the cloud link stays in the file. Owners invite a verified email as editor or reviewer. Other drafts on disk stay local.
publishedAt: 2026-09-15T23:41:15Z
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

## Sign in identity

### The habit

Adobe's sign-in is the application. You enter an email, a window polls, and the menus that were gray become the menus that upload. Affinity, for a long time, did not ask. When a tool does ask, you want to know three things. Where the session lives. How long it lasts. Whether typing your email into a local file is the same thing as being allowed in.

You also know the collaborator failure. You invite `sam@studio.test` and Sam signs in as `sam@gmail.com`. The invite sits there. The fix is to match the email, not to forward a link through a third inbox and hope the session sticks.

### The constraint

The native app is the place you draw. The browser is the place identity is proved. File → Sign in opens a secure browser approval. The cloud guide is specific: sign in with a verified email through Clerk. The desktop shows a device code. The browser asks you to approve a code. You approve only the code the desktop is displaying. A code from a mail you did not start, or a code from a different machine, is not this sign-in.

The short claim says File → Sign in… writes an identity file at `~/.config/omadesign/cloud-identity.json` on the desktop, and that Account on the site stores the name and email. Both belong in the picture. Preferences already live under `~/.config/omadesign`, or under `XDG_CONFIG_HOME` when that is set. The identity file is written with owner-only permissions. It is a local record of the desktop session. It is not a token you paste into chat, and it is not access by itself.

A name or an email alone never grants cloud access. Someone who can read a string on disk is not a member of your project. Membership is an invitation to a verified email, accepted after sign-in. Desktop credentials expire after 30 days. You revoke them from `/account`, or you disconnect in the app. Waiting out the month is the slow version. Revoke is the version you use when a laptop leaves.

Welcome stays useful signed out. Team appears on the welcome screen only while you are signed into cloud and shared team projects are available. The file browser does not grow a Team tab to shame you into an account.

### What landed

File → Sign in… starts the device flow. A browser opens. You sign in with the verified email you mean to use for this work. You compare the code in the browser with the code on the desktop. You approve that pair. The local identity file is written owner-only. The site account holds the name and the email. `/account` is where you see that identity and where you revoke a desktop credential before the 30 days are up.

Use the same email you will be invited with. Owners invite a verified address as an editor or a reviewer. The invitation arrives through Resend and expires after seven days. You sign in with the invited email and accept from the workspace. A second email, even one you also own, is a different identity. Match them on purpose. The short claim says this in one line because it is the mistake that wastes the invite.

Disconnect in the app when this machine should stop being a signed-in desktop. Revoke from `/account` when you cannot reach the machine, or when you want the credential dead now. An expired credential does not keep pulling. Previously downloaded files stay on the disk that already has them. Revocation blocks the next request. It does not reach into a folder you already saved and shred it. That is the same rule as removing a project member. Private downloads recheck membership on every request. Old copies are the recipient's files.

The identity is per person. It is not a project. Signing in does not upload the open `.oma`. Push project + review export is the upload, and it is a separate command. Signing in does not publish. Publish selected export is a separate owner action. The session is the permission to use those commands. It is not those commands.

Production uses the Clerk issuer at `https://clerk.omadesign.app`. Development uses a different Clerk instance. You should not mix keys, and you do not need to, because sign-in from the installed app is the production flow. The desktop transport for later calls is `/api/cloud`. Sign-in is the step that makes those calls yours.

If you never sign in, `cloud-identity.json` does not need to exist for the studio to run. Ctrl+S still saves. The Brand panel still reads the project folder. Photo still writes `.omaphoto` beside the camera file. Identity is for the cloud door.

### In the hand

Open the app. Confirm you can save a local file while signed out. Then File → Sign in….

The browser opens. Sign in with the email you want on the account. Read the device code on the desktop. Approve that code in the browser. Do not approve a different code because it arrived first. Come back to the app. The session is on. `/account` shows the name and email. On disk, the identity file is under the config directory, owner-only. You do not need to edit it. Editing it by hand does not make you someone else, and it does not grant access the server refused.

Invite check, when you are the person being invited: look at the email address in the invitation. Sign out if the desktop is a different address. Sign in with the invited one. Accept in the workspace before the seven days are up. A late invitation is expired. The owner sends another.

On a machine you are giving away, disconnect in the app, then revoke that desktop from `/account` on a machine you still trust. Thirty days is the cap if you forget. It is not the plan.

Team, on the welcome screen, shows when this signed-in identity actually has shared team projects. An empty Team is not a failure of the file browser. Your Work still lists local `.oma` files.

### The edge

A name or an email in `~/.config/omadesign/cloud-identity.json` does not grant cloud access. The file is the local session record, written owner-only after you approve the device code. Access still requires that approval, a verified email, and, for someone else's project, an invitation you accept.

Desktop credentials expire after 30 days. Revoke them from `/account`, or disconnect in the app, when the machine should stop now.

File → Sign in…, then approve only the code on the desktop.
