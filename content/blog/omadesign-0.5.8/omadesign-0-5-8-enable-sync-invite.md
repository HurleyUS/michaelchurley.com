---
id: T115
title: Enable sync invite
slug: omadesign-0-5-8-enable-sync-invite
excerpt: Push project + review export uploads a versioned .oma and a flat PNG, then you save so the cloud link stays in the file. Owners invite a verified email as editor or reviewer. Other drafts on disk stay local.
publishedAt: 2026-09-15T23:41:15Z
tags: [omadesign, 0.5.0, cloud]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-enable-sync-invite/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-enable-sync-invite/og.png
---

## The habit

In a shared Creative Cloud folder, "sync" means the whole directory. You drop a file in and it uploads. You invite an email to the folder, and that person sees everything in it, including the exports you meant to delete. The careful version is a share link on one document with a role, such as can edit or can comment. Even then, you check afterward that the other twenty files in the folder didn't go with it.

Illustrator and Photoshop cloud documents attach an identity to the file the moment it becomes a cloud document. Affinity's sharing, where people use it, is usually an export plus an email. What I wanted is closer to the careful version: this document, this email, this role, and the rest of the disk stays where it is.

Signing in has its own habits. With Adobe, signing in is part of using the application. You enter an email, a window polls, and the grayed-out menus become upload menus. Affinity didn't ask for a long time. When a tool does ask, you want to know three things: where the session lives, how long it lasts, and whether typing your email into a local file is the same as being allowed in.

You also know the common collaborator failure. You invite `sam@studio.test`, Sam signs in as `sam@gmail.com`, and the invite just sits there. The fix is to match the email. Forwarding a link through a third inbox and hoping the session sticks doesn't fix it.

## The constraint

The native app is where you draw, and the browser is where you prove your identity. File > Sign in opens a secure browser approval. The cloud guide is specific: you sign in with a verified email through Clerk. The desktop shows a device code, and the browser asks you to approve a code. Approve only the code the desktop is showing. A code from an email you didn't trigger, or from a different machine, belongs to some other sign-in.

The short description says File > Sign in… writes an identity file at `~/.config/omadesign/cloud-identity.json` on the desktop, and that Account on the site stores the name and email. Both are true. Preferences already live under `~/.config/omadesign`, or under `XDG_CONFIG_HOME` when that is set. The identity file is written with owner-only permissions. It is a local record of the desktop session. You should never paste it into a chat, and it grants no access by itself.

A name or an email alone never grants cloud access. Someone who can read a string on disk doesn't become a member of your project. Membership comes from an invitation to a verified email, accepted after sign-in. Desktop credentials expire after 30 days. You can revoke them from `/account` or disconnect in the app. Waiting out the month works, but revoking is what you do when a laptop leaves your hands.

The short description also says File > Enable cloud sync attaches a project id to the `.oma` and File > Invite collaborator… adds an email to that document. The manual and the cloud guide use the commands that exist now, and those are stricter than just adding an email.

The upload is File > Push project + review export. It uploads a versioned `.oma` and a PNG of the current document. Project fonts go with the project, and raster pixels stay embedded in the design file. After the first push, you save the local `.oma`. That save stores the cloud link in the document, which is how the file remembers which remote project its uploads belong to. Every later push adds files, and comments stay attached to the snapshot they were written on. A local edit never uploads silently or overwrites another designer's version.

The invite is an owner action on a verified email. The owner chooses editor or reviewer, and Resend delivers the invitation, which expires after seven days. The invited person signs in with that same email and accepts from the workspace. Until they accept, they aren't a member, and an email address written into a file grants nothing. Owners can change a role, remove access, or cancel an invitation that hasn't been accepted.

Nothing in this flow looks through the rest of your directories. The only thing shared is the project you pushed, and private drafts in other tabs stay private.

The welcome screen stays useful when you are signed out. Team appears there only while you are signed in to cloud and shared team projects are available. The file browser doesn't add a Team tab to push you toward an account.

## What landed

### Signing in

File > Sign in… starts the device flow. A browser opens, and you sign in with the verified email you want to use for this work. You compare the code in the browser with the code on the desktop and approve that pair. The local identity file is written owner-only, and the site account holds the name and email. `/account` is where you see that identity and where you revoke a desktop credential before the 30 days are up.

Sign in with the same email you will be invited with. A second email, even one you also own, is a different identity, so match them deliberately. The short description gives this its own line because it is the mistake that wastes an invite.

Disconnect in the app when this machine should stop being a signed-in desktop. Revoke from `/account` when you can't reach the machine, or when you want the credential to stop working immediately. An expired credential stops pulling. Files already downloaded stay on the disk that has them. Revocation blocks the next request and never deletes a folder someone already saved. That matches the rule for removing a project member: private downloads recheck membership on every request, and old copies belong to the recipient.

The identity belongs to a person and is separate from any project. Signing in doesn't upload the open `.oma`, because Push project + review export is a separate upload command. Signing in doesn't publish either, because Publish selected export is a separate owner action. The session gives you permission to run those commands and runs none of them.

Production uses the Clerk issuer at `https://clerk.omadesign.app`, and development uses a different Clerk instance. You shouldn't mix keys, and you don't need to, because signing in from the installed app uses the production flow. Later calls from the desktop go through `/api/cloud`, and sign-in is what authorizes them for you.

If you never sign in, `cloud-identity.json` doesn't need to exist for the studio to run. Ctrl+S still saves, the Brand panel still reads the project folder, and Photo still writes `.omaphoto` beside the camera file. Identity only matters for the cloud.

### Pushing a project

Push project + review export works on one document, uploading a versioned source file and a flat PNG for review. Upload project asset… adds any other file the review needs, such as a reference or a font already in the project bundle. Source and asset files are limited to 100 MB each. Flat PNG, JPEG, and WebP exports are limited to 20 MB. Each project holds 200 files. The initial service limit is 100 projects per account and 100 members per project.

Cloud projects > Pull & open opens the latest source in a separate document, and shared assets download into a new folder under the app's cloud-downloads directory. Pull never saves over the `.oma` you have open. You get a new document and decide what to keep.

The web project accepts source, asset, and snapshot uploads in the same way. The desktop app is for authoring and the browser is for sharing. You can't edit the live canvas in the browser, and two people can't paint one artboard at the same time. The next push creates a new version, and the previous snapshot keeps the threads written on it.

Saving after the first push matters. If you skip it, the local file can lose the link to the project. The poster's content is still in the `.oma`, but the link to the uploaded version is what that save stores. Later pushes should come from the file that has the link. The guide asks you to keep that link deliberately, and pushing from a copy without it starts a new connection.

### Inviting collaborators

Once the invite is accepted, the roles are:

| Role | What they can do |
| --- | --- |
| Owner | Project files, uploads, review, team management, archive, publishing |
| Editor | Download source and assets, upload, comment, reply, resolve threads |
| Reviewer | Flat exports, pins, rectangular annotations, comments, replies. They can resolve their own threads. |

A reviewer doesn't get the source to work from, and an editor does. The owner invites, changes roles, removes access, cancels pending invites, archives, and publishes. Archive, on the web workspace, hides the project from collaborators and unpublishes its public work, and the owner can restore it. An archive never deletes the local `.oma` on your disk.

Invitations are capped at 20 per account per hour, which stops a mistaken paste of a whole company directory into the invite field. After seven days an invite expires. Send another if the person still needs access.

## In the hand

Open the app and confirm you can save a local file while signed out. Then choose File > Sign in….

The browser opens. Sign in with the email you want on the account. Read the device code on the desktop and approve that code in the browser. Don't approve a different code just because it arrived first. Back in the app, the session is active, and `/account` shows your name and email. On disk, the identity file sits under the config directory with owner-only permissions. You never need to edit it. Editing it by hand doesn't change who you are or grant access the server refused.

Open the one `.oma` you want to share and press Ctrl+S so the disk matches the canvas.

Choose Push project + review export and wait for the versioned source and the PNG to finish uploading. Press Ctrl+S again. The cloud link is now part of the local document, so if you quit and reopen, the file still knows its project.

Send the invite from the owner side, using the verified email the other person will sign in with. Pick editor if they need the source and the right to upload, or reviewer if they should see flat exports and comment. They accept in the workspace within seven days, signed in as that address.

If you are the person being invited, check the email address in the invitation. If the desktop is signed in with a different address, sign out and sign in with the invited one. Accept in the workspace before the seven days are up. A late invitation has expired, and the owner has to send another.

Keep working locally, and the next hour of edits stays yours. Push again when you have a version worth reviewing. The new push adds files, and old comments stay on the old snapshot. The reviewer opens the export version they were asked about, never a live view of your unsaved changes.

On the receiving machine, choose Cloud projects > Pull & open. A separate document opens and the assets land in a new cloud-downloads folder. Save that document wherever you want. It doesn't replace any other client file you already had open.

Check the files you didn't push. They aren't in the project. A private draft in the next tab is still only on disk, and unpublished work stays unpublished. The gallery doesn't list this project just because you invited one editor.

Team, on the welcome screen, appears when your signed-in identity actually has shared team projects. An empty Team doesn't mean the file browser failed, and Your Work still lists local `.oma` files.

Before you give a machine away, disconnect in the app, then revoke that desktop from `/account` on a machine you still trust. The 30-day expiry is a backstop in case you forget.

## The edge

A push uploads only the project you chose. Other `.oma` files stay local until you push each of them deliberately.

An invite adds a verified email as a pending editor or reviewer. Writing an email address into the `.oma` never counts as access. The person has to accept with the same email before the seven days run out. If you cancel the invitation or remove the member, their next download is refused, and files they already saved stay on their disk.

A name or an email in `~/.config/omadesign/cloud-identity.json` doesn't grant cloud access. The file is the local session record, written owner-only after you approve the device code. Access still requires that approval, a verified email, and, for someone else's project, an invitation you accepted. Desktop credentials expire after 30 days. Revoke them from `/account`, or disconnect in the app, when the machine should lose access now.
