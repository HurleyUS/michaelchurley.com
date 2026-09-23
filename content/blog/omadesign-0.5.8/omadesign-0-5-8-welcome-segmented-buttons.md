---
id: T005
title: Welcome segmented buttons
slug: omadesign-0-5-8-welcome-segmented-buttons
excerpt: "0.5.8 welcome controls use gradient segments, Phosphor utility icons, and squarer rounded project folders. The screen is the studio's front door."
tags: [omadesign, 0.5.8, welcome]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-welcome-segmented-buttons/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-welcome-segmented-buttons/og.png
---

## The habit

Segmented controls are how you switch a mode without opening a menu. Illustrator's start screen and Photoshop's home both use clusters of buttons that read as one control: New, Home, Learn, a row of document types. Affinity's new-document dialog groups type, size, and color in the same way. You expect the segments to look like they belong together. Hairline dividers are the usual glue. They work until the theme shifts and the hairline disappears, or until the divider is a hard rule that cuts the button in half.

Utility links are the other habit. "Open the docs." "Join the chat." "Read the notes." They sit in a column as underlined text, or as tiny system icons that do not match the toolbar you get after the document opens. The front door looks like a website. The studio looks like a different program.

Folder tiles are the third habit. A project is a directory. The icon is a yellow folder from the desktop, or a generic card with a drop shadow. You can tell a file from a folder only by reading the label. On a masonry of real work, that costs a second every time you scan.

## The constraint

The welcome screen is a local file browser inside one binary. It is not a stub page that hands you to a browser and hopes you come back. Creation actions live in the center. **Your Work** and **Projects** are the two browsers. Both show masonry thumbnails, three columns at most, natural aspect ratio, names on hover.

The icon language of the running studio is Phosphor Light. A welcome column that used a different icon family would be a second product sitting on top of the first. Utility links had to pick up Phosphor so the docs link, the conversation link, and the cloud link look like the same studio you enter when you press `R`.

Color comes from the Omarchy theme, with the 0.5.8 welcome ground dark and the panels fading from the lighter theme color. A one-pixel divider in a fixed gray fights that gradient. The segment boundaries had to be made of the same fade as the panels, or the controls would look pasted on. Project folders needed a silhouette you can read at card size: squarer, rounded, the project-folder SVG preserved, not a photocopy of the file manager.

A project is still a directory that contains `.omabrand`. No account. The button polish does not turn Projects into a service. **Team** appears only while you are signed into cloud and a shared team project is available. The card shape is local.

## What landed

0.5.8 welcome polish is three specific changes. The release notes list them next to the logo work.

Segmented buttons use gradients. The old segmented dividers are gone. The boundary between segments is a gradient, the same family as the fade from the lighter theme color into the dark chrome. The control still reads as one segmented button. It does not read as a row of unrelated chips.

Utility links use Phosphor icons. The column that holds **Join the conversation**, **Sign up for cloud**, release notes, docs, contribution guidance, and bug reports uses that icon set. Phosphor is already what the mode tabs and the tool chrome use. The welcome column stops being a text-only footer.

Project folders get a squarer rounded outline. The project-folder SVG shipped with the app is the art. Folder cards still contain stacked asset previews. You click a folder card to browse subprojects first, then every descendant `.oma` by modification time. **← Projects** returns to the list. **Edit brand…** opens the brand editor for the project you are in. The squarer outline is how you spot that card among document thumbnails.

The center actions stay labeled and specific:

| Center action | What opens |
| --- | --- |
| **+ Vector** | 52 editable vector templates |
| Vector file icon | Blank document size chooser |
| **+ Raster** | Blank raster size chooser |
| **+ Layout** | Layout starters with frames and prototypes |
| Layout file icon | Blank Layout size chooser |
| **+ Photo** | Photo workspace |
| Photo folder icon | Folder chooser |
| Photo image icon | Image chooser |
| **+ Project** | Project brand editor |

Vector and Raster on this screen lead into the Design and Pixel personas. Motion still has no empty-workspace button. The segmented control does not invent one.

Native welcome screenshots were part of the 0.5.8 review. This is a 0.5.8 change to chrome you see before any document exists.

## In the hand

```sh
omadesign
```

On the welcome screen, look at the segmented creation control before you read a single filename. The segments should meet in a gradient, not in a hairline rule. Move along **+ Vector**, **+ Layout**, **+ Photo**, **+ Project**. Each segment is a door. **+ Vector** opens the 52. The file icon next to Vector opens the blank size chooser. Those two are neighbors on purpose. Templates and a blank page are different clicks. The gradient groups them. It does not merge them into one action.

Scan the utility column. The icons are Phosphor, the same light weight you get inside the document. **Join the conversation** opens the Omadesign Discord. **Sign up for cloud** opens cloud registration. Local browsing keeps working if you never touch that link. An available update opens the existing update details before any install-and-restart action. The icon tells you the row is a utility, not a document.

Open **Projects → recent**. The cards are folders that contain `.omabrand` somewhere under your home directory. The outline is squarer and rounded, so a project card does not impersonate a loose `.oma` thumbnail. Click one. Subprojects come first. Documents inside follow, newest modification first. **Edit brand…** is the brand editor, palettes and assets, still on disk beside the work.

Return with **← Projects**. The outline should still be the thing that separates folders from files at a glance. Hover a document thumbnail when you want its name. Hover is the name. The folder silhouette is the type.

Change your Omarchy theme and launch again. The gradient segments pick up the theme color. The Phosphor icons stay Phosphor. The folder outline stays the squarer rounded SVG. You did not restyle three separate skins.

## The edge

This polish does not turn the welcome screen into an account gate. A project needs no login. **Team** stays hidden until you are signed in and a shared project exists. The squarer folder is a local directory card.

It also does not add Motion as an empty creation segment. Motion starts after the canvas has something to animate. The segmented control you see is Vector, Raster, Layout, Photo, and Project, with the file and folder icons beside the ones that need a size or a path.

The gradients replace the segmented dividers. They do not recolor your documents, your `.omabrand` assets, or the template artwork. Chrome got the fade. The files stayed files.

Launch `omadesign` and use the gradient segment for **+ Vector** when you want the 52, or the file icon beside it when you want a blank size.
