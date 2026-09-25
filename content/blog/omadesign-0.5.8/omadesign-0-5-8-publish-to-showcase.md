---
id: T116
title: Publish to showcase
slug: omadesign-0-5-8-publish-to-showcase
excerpt: Publish selected export is a separate owner step. /showcase lists public flat images. /showcase/:id shows one. Source files, assets, and private review threads stay out. Unpublished and private ids stay off the gallery.
publishedAt: 2026-09-15T23:42:15Z
tags: [omadesign, 0.5.0, showcase]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-publish-to-showcase/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-publish-to-showcase/og.png
---

## The habit

You know Behance, Instagram, a portfolio page, and the "share" button in a cloud document. You know the difference between a file your client can comment on and a file the public can scroll past. The dangerous tools blur that difference. The first save creates a link, the link is unlisted until it isn't, and a draft with a client's name in a text layer ends up in a gallery because a checkbox carried over from the last export.

The careful habit treats publishing as a separate step. Finish the piece, export a flat image, give it a title and a description, and publish that image. The working file, the fonts, the rejected frames and the review thread where someone said the logo was wrong stay in the project. The public sees the picture you chose.

## The constraint

Omadesign already separates the local `.oma`, the push and the public gallery. A push uploads a versioned source and a review PNG for project members. That PNG is for the people on the project and doesn't go to `/showcase`. Publishing is a separate owner action. The short description calls it File > Publish to showcase… and describes it as a second, explicit opt-in. The cloud guide names the control Publish selected export, available in the desktop app or the web workspace. You select a finished flat export, add a title and a description, and publish it. The opt-in is real, and the control's label is Publish selected export.

The public page has to show only the flat image. Source files, assets and private review threads are excluded. A gallery that served the `.oma` would also serve the edit history, the notes and any layer you only hid. Flat means the pixels you already rendered. `/showcase` is the list and `/showcase/:id` is one published project. A private id stays private, so guessing a project id doesn't reveal an unpublished file.

The first public works in the gallery were the 0.5.0 Layout starters, which shipped with the site so the gallery wasn't empty. When you publish now, you still publish one finished export with a title and a description. You never upload the starter source or your `.oma`.

Unpublishing has to remove the work from the gallery, from competition displays and from the image endpoint. Copies a viewer already saved can't be recalled. That is true of unpublishing anywhere, and it is worth knowing before you publish.

## What landed

You publish as the owner. Select the finished flat export, add the title and description, and choose Publish selected export in the desktop app or the web workspace. The showcase entry is that image plus the words you attached. Project members keep whatever access their role already gave them. Publishing the image doesn't give the public the source, the asset files or the private threads.

`/showcase` lists public works, and opening one at `/showcase/:id` shows the complete flat image. Unpublished files aren't on the list. A project you have only pushed stays private, and its id doesn't render a public page. Archive, in the web workspace, hides the project from collaborators and unpublishes its public work in the same owner action, and the owner can restore it. Unpublish on its own takes the image down from the gallery, the competition displays and the image endpoint, and leaves the project in place for its members.

A competition entry has to be a public showcase work you own. If the image isn't public, it can't be entered. Publishing makes an entry possible but doesn't enter the competition for you. That decision happens on `/compete`, and a competition needs a real brief and dates before it opens.

The flat export you select has to exist already as a rendered image. Flat PNG, JPEG and WebP uploads are limited to 20 MB. A larger export can't get into the gallery through the 100 MB source-file limit, because source uploads and showcase uploads are separate, and the showcase only takes flat images.

Viewers of `/showcase/:id` see the image. There is no button to download your `.oma`, your `.omabrand/` fonts or the review thread. If someone saves the image from the browser, that copy is theirs. Unpublishing removes the endpoint, but it can't reach their disk.

The homepage can show a cloud film at `/#cloud`. It introduces the workspace. It doesn't play automatically on every visit, and it doesn't publish your file. Publishing stays an owner control.

## In the hand

Finish the piece in the `.oma` and export the flat image you want the public to see, PNG when you need clean edges and JPEG when you don't. If the export has to live with the project as a snapshot, push the project first. Then select that finished export.

Write the title and the description the way you want them read in a list, and choose Publish selected export. Open `/showcase` and the work is on the list. Open `/showcase/:id` for that entry. You should see the complete flat image, with no unexpected crop and no layer stack.

Check that the private material stayed private. The page doesn't show the `.oma`, a review comment mentioning the client's legal name, or a link to an unused asset in the project.

To take the work down, unpublish and reload `/showcase`. The entry is gone, any competition display that used it drops it, and the image endpoint stops serving it. If you archived the whole project, collaborators lose access too until you restore it. Use unpublish when members should keep the project and the public page should go. Use archive when both should stop.

If you never publish, the pushed project is still there for your editor and your reviewer. Check `/showcase` in a private window, and the draft isn't there.

## The edge

Publish selected export sends one finished flat image with the title and description you wrote. It doesn't publish the `.oma`, the project assets or the private review threads. Those stay with the members who already had access.

Unpublish removes the work from the gallery, from competition displays and from the image endpoint, but it can't pull back a copy a viewer already saved. Private ids stay off `/showcase`, and knowing an id doesn't make a project public.
