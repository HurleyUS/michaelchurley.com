---
id: T116
title: Publish to showcase
slug: omadesign-0-5-8-publish-to-showcase
excerpt: Publish selected export is a separate owner step. /showcase lists public flat images. /showcase/:id shows one. Source files, assets, and private review threads stay out. Unpublished and private ids stay off the gallery.
publishedAt: 2026-09-15T23:42:15Z
tags: [omadesign, 0.5.8, showcase]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-publish-to-showcase/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-publish-to-showcase/og.png
---

## The habit

Behance, Instagram, a portfolio page, the "share" button in a cloud document. You know the difference between a file your client can comment on and a file the public can scroll past. The dangerous tools collapse the difference. The first save creates a link. The link is unlisted until it is not. A draft with a client's name in a text layer ends up in a gallery because a checkbox was inherited from the last export.

The careful habit is a second act. Finish the piece. Export a flat image. Title it. Describe it. Publish that image. The working file, the fonts, the rejected frames, and the review thread where someone said the logo was wrong stay in the project. The public sees the picture you chose.

## The constraint

Omadesign already separates the local `.oma`, the push, and the public gallery. A push uploads a versioned source and a review PNG for members. That PNG is for the people on the project. It is not `/showcase`. Publication is a separate owner action. The short claim calls it File → Publish to showcase… and calls it a second, explicit opt-in. The cloud guide names the control Publish selected export, in the desktop or the web workspace. You select a finished flat export, add a title and a description, and publish that. The second opt-in is real. The label on the control is Publish selected export.

The public page has to be the flat image. Source files, assets, and private review threads are excluded. A gallery that serves the `.oma` serves the edit history, the notes, and any layer you only hid. Flat means the pixels you already rendered. `/showcase` is the list. `/showcase/:id` is one published project. A private id stays dark. Guessing a project id does not reveal an unpublished file.

The gallery's early public works were the 0.5.0 Layout starters. They shipped with the site so the shelf was not empty. A publish you do now is still one finished export, with a title and a description. It is not "upload the starter source," and it is not "upload my `.oma`."

Unpublishing has to remove the work from the gallery, from competition displays, and from the image endpoint. Copies a viewer already saved cannot be recalled. That is the limit of unpublish everywhere. Say it before you publish, not after.

## What landed

You publish as the owner. Select the finished flat export. Add the title and the description. Choose Publish selected export on the desktop or in the web workspace. The showcase entry is that image plus the words you attached. Members of the project still have whatever access their role already gave them. The public does not gain the source, the asset files, or the private threads because the image went up.

`/showcase` lists public works. Open one and `/showcase/:id` shows the complete flat image. Unpublished files are not on the list. A project you have only pushed is a private project. Its id does not render a public page. Archive, from the web workspace, hides the project from collaborators and unpublishes its public work in the same owner action. The owner can restore the archive. Unpublish alone takes the image down from the gallery, the competition displays, and the image endpoint, and leaves the project itself for the members.

Competition entry consumes an owned public showcase work. If the image is not public, it is not an entry. Publishing is the step that makes the entry possible. It does not enter the competition for you. That decision stays on `/compete`, and a competition still needs a real brief and dates before it is open.

The flat export you select has to already exist as a rendered image. The limits on flat PNG, JPEG, and WebP uploads are 20 MB. If the export is larger than that, it does not sneak into the gallery through the source-file limit of 100 MB. Source and showcase are different pipes. The showcase pipe is the flat one.

Viewers of `/showcase/:id` see the image. They do not get a button that downloads your `.oma`, your `.omabrand/` fonts, or the review thread. If someone saves the image from the browser, that copy is theirs. Unpublish removes the endpoint. It does not crawl their disk.

The homepage can show a cloud film at `/#cloud`. That film introduces the workspace. It does not open itself on every visit, and it does not publish your file. Publishing remains the owner control.

## In the hand

Finish the piece in the `.oma`. Export the flat image you want the public to see. PNG when you need the edges clean. JPEG when you do not. Push the project first if the export has to live with the project as a snapshot. Then select that finished export.

Write the title the way you want it read in a list. Write the description the same way. Choose Publish selected export. Open `/showcase`. The work is on the list. Open `/showcase/:id` for that entry. You should see the flat image, complete, not a crop you did not choose and not the layer stack.

Confirm the private things stayed private. The `.oma` is not the page. A review comment about the client's legal name is not on the page. An unused asset in the project is not linked from the page.

To take it down, unpublish. Reload `/showcase`. The entry is gone. A competition display that was using it drops it. The image endpoint stops serving it. If you archived the whole project, collaborators lose it too, until you restore. Use unpublish when the membership should stay and the public page should not. Use archive when both should stop.

If you never publish, the push can still be there for your editor and your reviewer. Check `/showcase` in a private window. The draft is absent. That is the opt-in holding.

## The edge

Publish selected export sends one finished flat image, with the title and description you wrote. It does not publish the `.oma`, the project assets, or the private review threads. Those stay with the members who already had access.

Unpublish removes the work from the gallery, from competition displays, and from the image endpoint. A copy a viewer already saved is not pulled back. Private ids stay off `/showcase`. They do not become public because someone can spell the id.

Select the finished export, then Publish selected export. `/showcase/:id` should show that image and nothing else you meant to keep in the project.
