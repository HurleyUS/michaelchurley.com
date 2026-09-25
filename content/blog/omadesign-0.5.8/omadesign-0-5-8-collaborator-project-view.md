---
id: T117
title: Collaborator project view
slug: omadesign-0-5-8-collaborator-project-view
excerpt: /project/:id opens the signed-in workspace for that project. Pin, reply, and resolve on a flat export. Layout pins on the canvas stay with the frame. Without OMADESIGN_CLOUD_URL the desktop keeps ~/.local/share/omadesign/cloud-store.json.
publishedAt: 2026-09-15T23:43:15Z
tags: [omadesign, 0.5.0, cloud]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-collaborator-project-view/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-collaborator-project-view/og.png
---

## The habit

Review in Figma, in a PDF comment, in Frame.io, in the Photoshop comment you leave for a teammate. You click a spot. You type. Someone replies. Someone resolves. The pin stays on the version you were looking at. A later version does not drag your pin onto pixels that have moved, unless the tool is lying to you.

Inside the design app you also pin notes on the canvas while you work. Illustrator's notes, Figma's comments on a frame, a sticky you will delete before the client sees the file. Those pins match the thing on the canvas, because you are the person drawing. The client-facing pins match an export, because the client is not in your undo stack.

You want both, and you want them named so you do not resolve a local note and think the client saw it.

## The constraint

The browser does not author the canvas. Live multi-user editing, presence, and drawing in the browser are outside cloud's scope. Collaborators get a project view. The desktop gets a window onto the same threads. The file you edit remains the local `.oma`, pushed as versions.

The short claim says `/project/:id` is the collaborator view: pin, reply, resolve. It also says Layout inspector pins match canvas comments. Both behaviors exist. They are not the same layer of pins.

On the canvas, Layout comments are notes you write, pin, and resolve. The inspector shows open counts on the frame. Those pins belong to the document. You see them in the Layout persona, next to the frame, while you edit. They travel in the `.oma` with the rest of the file, including when version 5 stores the layout and the opt-in cloud metadata.

In the project view, a pin is a comment on a flat export of a chosen version. You select the export version. You click to pin, or you drag a rectangular annotation, then you post the thread. Coordinates scale with the image, including on a phone. The desktop command is Review annotations…. It loads the same versioned exports and the same threads, with replies and with resolve or reopen. A comment stays on the snapshot it was written on. The next push does not move that thread onto the new pixels. You open the version the note belongs to.

`/project/:id` redirects to the authenticated workspace. You are signed in, or you are not looking at the project. The short claim also says that without `OMADESIGN_CLOUD_URL` the desktop keeps a local store at `~/.local/share/omadesign/cloud-store.json`. That path is the desktop fallback when the cloud URL is unset. The public site does not use a file in the browser as a substitute. Production identity is Clerk. Production data and the threads are Convex. There is no browser-local stand-in for those services. The installed app, pointed at nothing, can still keep the local store. The site at `omadesign.app` is the real workspace.

## What landed

Open `/project/:id` while signed in. You land in the workspace for that project. Pick an export version. Click a point to pin a comment, or drag a rectangle to annotate a region. Post the thread. Reply on the thread. Resolve it when the note is done. Reopen it if the resolve was early.

Who can do what depends on the role accepted from the invite:

| Role | Review |
| --- | --- |
| Owner | Uploads, review, team, archive, publishing |
| Editor | Source and assets, uploads, comments, replies, resolve |
| Reviewer | Flat exports, pins, rectangular annotations, comments, replies. Resolve their own threads. |

A reviewer works on the flat export. They do not pick up the `.oma` as their authoring file through this view. An editor can download source and assets and can upload. Private downloads recheck membership on every request. Remove a member, or revoke a desktop, and the next request fails. Files already downloaded stay downloaded. You cannot un-send a TIFF that hit their disk yesterday.

Layout's own pins stay in the inspector. Write a note. Pin it on the canvas. The frame's open count moves. Resolve it when the note was for you. That resolution is the document's. It is not a thread on `/project/:id` unless you also posted it on an export. The short claim lines the inspector up with the canvas, and that match holds: the pins you see in the Layout inspector are the canvas comments. Cloud threads line up with the export version in Review annotations… and in the browser. Use the window that matches the audience.

Coordinates on the web pin scale with the image. A pin you drop on a desktop monitor is the same relative point on a phone. You do not get a second coordinate system per device. Rectangular annotations use the same scaling. The region you dragged is the region they see.

The local store path matters when you are developing or running the desktop with no `OMADESIGN_CLOUD_URL`. The app keeps `~/.local/share/omadesign/cloud-store.json`. That is a desktop file under the local share directory. It is not the production gallery, and it is not a sync of every `.oma` on the machine. Production review for a published team goes through the workspace. Set the cloud URL when this desktop should talk to that workspace. Leave it unset when you mean the local store.

## In the hand

Push a version that includes the flat export you want reviewed. Send the project to the people who accepted their invites.

As the reviewer, sign in with the invited email. Open `/project/:id`. Select the export version in the web project. Click the headline that is wrong. Write the note. Or drag a rectangle around the nav that is wrong. Post. The owner or an editor replies. You resolve your own thread if the role is reviewer and the note was yours. An editor can resolve threads. The owner can too.

On the desktop, open Review annotations…. The same versioned exports and the same threads load. Reply there if you are in the app. Resolve or reopen there. Then go back to the canvas. Your Layout pins are still the pins on the frame. The client's pin is on the snapshot. Push a new version after you fix the headline. The old thread remains on the old snapshot. The new export is a new place to pin. Tell the reviewer which version you mean.

If you are testing on a machine with no `OMADESIGN_CLOUD_URL`, look at `~/.local/share/omadesign/cloud-store.json` only as the desktop's local store. Do not expect `omadesign.app` to read that file. Sign in and use `/project/:id` when the thread has to be the one the collaborator sees.

Check the inspector in Layout if the note was never meant to leave the building. Open counts on the frame tell you what is still open in the document. They do not tell you what the reviewer resolved on last Tuesday's PNG.

## The edge

A cloud comment stays on the snapshot it was written on. Editing the canvas, or pushing a newer export, does not move that pin onto the new pixels. Reply and resolve on the version that has the thread. Pin again on the new export if the note still matters.

Reviewers see flat exports and threads. They do not receive the source through that role. Revoking them blocks the next download. It does not delete files they already have.

Without `OMADESIGN_CLOUD_URL`, the desktop store is `~/.local/share/omadesign/cloud-store.json`. The public project view is still `/project/:id`, signed in, on the workspace.

Open `/project/:id`, select the export version, and pin the note on that image.
