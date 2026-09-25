---
id: T117
title: Collaborator project view
slug: omadesign-0-5-8-collaborator-project-view
excerpt: /project/:id opens the signed-in workspace for that project. Pin, reply, and resolve on a flat export. Layout pins on the canvas stay with the frame. Without OMADESIGN_CLOUD_URL the desktop keeps ~/.local/share/omadesign/cloud-store.json.
publishedAt: 2026-09-20T14:40:28Z
tags: [omadesign, 0.5.3, cloud]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-collaborator-project-view/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-collaborator-project-view/og.png
---

## The habit

Review happens in Figma, in PDF comments, in Frame.io, and in the Photoshop comment you leave for a teammate. You click a spot and type, someone replies, and someone resolves. The pin stays on the version you were looking at. A trustworthy tool never drags your pin onto a later version where the pixels have moved.

Inside the design app you also pin notes on the canvas while you work: Illustrator's notes, Figma's comments on a frame, or a sticky you delete before the client sees the file. Those pins track the canvas, because you are the one drawing. Client-facing pins track an export, because the client isn't in your undo stack.

You want both kinds, clearly separated, so you never resolve a local note and think the client saw it.

## The constraint

The browser doesn't edit the canvas. Live multi-user editing, presence, and drawing in the browser are outside cloud's scope. Collaborators get a project view, and the desktop app gets a window onto the same threads. The file you edit is still the local `.oma`, pushed as versions.

The short description says `/project/:id` is the collaborator view, where you pin, reply, and resolve, and that Layout inspector pins match canvas comments. Both are true, but they describe two separate sets of pins.

On the canvas, Layout comments are notes you write, pin, and resolve, and the inspector shows the open count on the frame. Those pins belong to the document. You see them in the Layout persona next to the frame while you edit, and they travel in the `.oma` with the rest of the file, including when format version 5 stores the layout and the opt-in cloud metadata.

In the project view, a pin is a comment on a flat export of a chosen version. You select the export version, click to pin or drag a rectangular annotation, and post the thread. Coordinates scale with the image, including on a phone. On the desktop, Review cloud annotations… loads the same versioned exports and threads, with replies and resolve or reopen. A comment stays on the snapshot it was written on, and the next push doesn't move the thread onto the new pixels. You open the version the note belongs to.

`/project/:id` redirects to the authenticated workspace, so you have to be signed in to see the project. The short description also says that without `OMADESIGN_CLOUD_URL`, the desktop keeps a local store at `~/.local/share/omadesign/cloud-store.json`. That path is the desktop fallback when the cloud URL is unset. The public site never substitutes a file in the browser. Production identity is Clerk, and production data, threads included, is in Convex. There is no browser-local replacement for those services. The installed app, pointed at no server, can still keep the local store. The site at `omadesign.app` is the real workspace.

## What landed

Open `/project/:id` while signed in and you land in the workspace for that project. Pick an export version. Click a point to pin a comment, or drag a rectangle to annotate a region, then post the thread. Reply on the thread, resolve it when the note is done, and reopen it if you resolved too early.

What each person can do depends on the role they accepted from the invite:

| Role | Review |
| --- | --- |
| Owner | Uploads, review, team, archive, publishing |
| Editor | Source and assets, uploads, comments, replies, resolve |
| Reviewer | Flat exports, pins, rectangular annotations, comments, replies. Resolve their own threads. |

A reviewer works on the flat export and does not get the `.oma` as an editable file through this view. An editor can download source and assets and can upload. Private downloads recheck membership on every request, so if you remove a member or revoke a desktop, their next request fails. Files they already downloaded stay on their disk. A TIFF they downloaded yesterday can't be taken back.

Layout's own pins stay in the inspector. Write a note, pin it on the canvas, and the frame's open count goes up. Resolve it when the note was for you. That resolution belongs to the document, and it only appears as a thread on `/project/:id` if you also posted it on an export. The short description says the inspector matches the canvas, and it does: the pins in the Layout inspector are the canvas comments. Cloud threads match the export version, in Review cloud annotations… and in the browser. Use whichever window matches the audience.

Web pin coordinates scale with the image, so a pin dropped on a desktop monitor lands on the same relative point on a phone. There is one coordinate system for all devices. Rectangular annotations scale the same way, so the region you dragged is the region the other person sees.

The local store path matters when you are developing or running the desktop app without `OMADESIGN_CLOUD_URL`. The app then keeps `~/.local/share/omadesign/cloud-store.json`, a desktop file under the local share directory. It isn't the production gallery, and it doesn't sync every `.oma` on the machine. Production review for a team goes through the workspace. Set the cloud URL when this desktop should talk to that workspace, and leave it unset when you want the local store.

## In the hand

Push a version that includes the flat export you want reviewed, and send the project to the people who accepted their invites.

As the reviewer, sign in with the invited email and open `/project/:id`. Select the export version in the web project. Click the headline that is wrong and write the note, or drag a rectangle around the broken nav, and post. The owner or an editor replies. As a reviewer, you can resolve your own thread. Editors and the owner can resolve any thread.

On the desktop, open Review cloud annotations…, and the same versioned exports and threads load. Reply, resolve, or reopen there if you are already in the app. Then go back to the canvas. Your Layout pins are still on the frame, and the client's pin is on the snapshot. Push a new version after you fix the headline. The old thread stays on the old snapshot, and the new export is a fresh place to pin. Tell the reviewer which version you mean.

If you are testing on a machine without `OMADESIGN_CLOUD_URL`, treat `~/.local/share/omadesign/cloud-store.json` as the desktop's local store only, because `omadesign.app` never reads that file. Sign in and use `/project/:id` when the thread has to be the one the collaborator sees.

If a note was never meant to leave the studio, check the inspector in Layout. The frame's open count tells you what is still open in the document. It says nothing about what the reviewer resolved on last Tuesday's PNG.

## The edge

A cloud comment stays on the snapshot it was written on. Editing the canvas or pushing a newer export doesn't move the pin onto the new pixels. Reply and resolve on the version that has the thread, and pin again on the new export if the note still matters.

Reviewers see flat exports and threads and don't receive the source through that role. Revoking a reviewer blocks their next download but doesn't delete files they already have.

Without `OMADESIGN_CLOUD_URL`, the desktop store is `~/.local/share/omadesign/cloud-store.json`. The public project view is still `/project/:id`, signed in, on the workspace.
