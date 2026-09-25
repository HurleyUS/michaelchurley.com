---
id: T094
title: Brand bank load
slug: omadesign-0-5-8-brand-bank-load
excerpt: Brand → Load bank… opens a project folder or its .omabrand directory. Create bank, name it, and Save. Add assets… copies files in. The originals stay where they were.
publishedAt: 2026-09-06T10:47:01Z
tags: [omadesign, 0.0.1-alpha, brand]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-bank-load/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-bank-load/og.png
---

## The habit

The brand folder on a studio server is usually a mess: logos at the top, an "old" directory nobody is allowed to touch, and a "final" directory with three finals. Illustrator's Libraries panel wants you to upload the good ones into an account, and Photoshop uses the same account. Once you drag a PNG in, the original on disk becomes a near copy of a cloud asset, and you are never sure which one the intern updated. Affinity's asset panel can point at folders, which is closer, but people still copy the logo into the document by hand because the panel is pointed at last year's directory.

What I wanted was Load. Point at the project, or at the `.omabrand` folder itself, and see the tiles. For a new job, Create a bank and give it the name the client uses, which may differ from whatever the folder was called on Monday. Save that name. Then add files by copying them in. The originals stay in the old folder, on the camera card, or in Downloads, and the bank holds a copy. Nested folders come along, because "logos / marks / lockups" is already how the folder is organized and you should not have to flatten it to use it.

Placing is the next habit. You drag a logo off a library panel onto the artboard. Illustrator's Libraries panel does this once the asset has finished syncing. Photoshop places it and you get a layer. Affinity's assets studio uses the same drag, and a double-click drops the asset in the middle when you don't want to aim. The failure modes are familiar. The thumbnail is a blank box for a second and you drop the wrong tile. A file you updated in the folder five minutes ago still shows the old preview. The drop lands on an artboard you weren't looking at because focus moved. Undo removes one object or fifty, and you can't predict which.

Filtering is part of it too. You can't scroll a bank of two hundred marks by memory. You type the name, or part of the folder path such as `lockups/horizontal`, or you click a type chip for images, SVG, or native documents. Then you drag the one tile that is left.

A brand pack also tends to arrive as a zip of everything the last studio exported. PNG for the web logo. JPEG for a photograph you were told not to recompress, which someone recompressed anyway. WebP because someone was modern. TIFF from print. A BMP from a tool that should have been retired. A single-frame GIF. SVG for the mark that has to stay sharp. And, if you are lucky, the actual working file, which in this studio is an `.oma`. Illustrator places most of the rasters and then has trouble with the SVG. Photoshop opens the rasters and rasterizes the SVG if you force it. Affinity takes a wide set and still fails on an SVG that uses a filter its importer never supported. I wanted the bank to accept the ordinary files and be clear about SVG: the subset you can import as vectors is the subset the bank holds as vectors, and a complex SVG should never look accepted and then place as something different.

The last habit is duplication. A spinoff for the same client needs the same bank. You want one command that clones the whole collection to the other project folder, with the name and the nested folders, so you don't rebuild a zip by hand or end up with `logos/print` flattened into one directory full of name collisions.

Through all of this, Escape has to cancel a load you started by mistake, a late thumbnail must never land in the wrong document because you switched tabs mid-read, and a placement has to be one undo. A logo that arrives as a group, a mask, and three paths is still one gesture, so one Ctrl+Z should remove the whole placement.

## The constraint

The bank is a `.omabrand/` directory beside the work, plus an optional `brand.json` for the display name. It is a plain directory of files, with no package format. Loading has to accept either the project folder or the `.omabrand` folder, because people will click the parent one week and the dot-folder the next, and both mean the same bank. If `brand.json` is missing, the bank shows the project folder's name. You can replace that with the real brand name without renaming the directory, which matters because exports, builds, and other tools already use that path.

Add copies files. It never moves them. A bank that moved the original out of Downloads would break the path for every other tool that used it. When a filename already exists inside the bank, the new copy gets a new name, so a second `logo.png` does not overwrite the first. The original outside the bank keeps its name.

Nested folders act as categories. The filter searches name and folder path, which would be useless if Add flattened everything into one directory, so the copy keeps the nesting.

The files inside the bank have to be files the placer already knows how to turn into artwork. The studio places PNG, JPEG, WebP, TIFF, BMP, and GIF as images, imports SVG through its existing SVG path, and opens `.oma` as native artwork with shapes, text, masks, and motion, assigning new IDs on place. Accepting a format the canvas can't place would give you tiles you can see and can't use, so the list matches what place already understands.

SVG is the uneven one. The app supports an import subset, and complex SVG features may not carry over. The tile preview and the place both use that importer. If a mark depends on something outside the subset, place the native `.oma` you built it in. The `.oma` is the editable file, and the SVG is the interchange file with that limit.

Thumbnails are only a view of the files. Decoding every image in a large bank on the UI thread would freeze the poster you are trying to place onto, so discovery and thumbnails load in the background. The grid lays out the visible rows and requests only the previews you can see, and the texture cache has a size limit. A load belongs to the document that asked for it, so a worker that finishes after you switch documents can't deliver its result into whatever tab has focus. Escape cancels a load still in flight. This is one binary on Linux with no uploader. The dialog is the native file dialog, and the bytes stay on disk.

Files also change outside the app. When you export a new PNG into the bank from another tool, the tile should update without a restart. The bank refreshes about every three seconds, the same interval as the palette library, and **··· > Refresh now** is there when three seconds is too long because a client is watching. Refresh updates tiles. It never places anything.

Where a placement lands matters. A drag puts the copy at the drop point, because you aimed. A double-click has no aim, so it uses the selected artboard's center, or the document center if no artboard is selected. An unaimed place will never land at a leftover coordinate from the previous document.

Photo does not use artboards the same way. Double-click in Photo places the asset into Design, and drag placement works when you are on artboards. A brand image never gets pasted into the RAW viewer as if it were a develop layer.

A native `.oma` asset has to place as editable artwork (shapes, text, masks, motion tracks) with fresh object IDs, so the placed copy doesn't point at the same objects as the file in the bank. One undo removes the placement.

An unsaved document has no folder yet. **Choose a project** before **Create bank**, or you have a name with nowhere to put `.omabrand/`.

## What landed

### Loading and creating a bank

Open **Brand > Load bank…** and choose a project folder or the `.omabrand` folder inside it. The tiles show that bank. The display name comes from `.omabrand/brand.json` when that file exists:

```json
{ "version": 1, "name": "Fieldwork" }
```

Without the file, the project folder supplies the name. Load is how an existing kit becomes the sidebar. The nearest-folder lookup may already have pointed you here, and Load is the explicit version for when you want a particular bank now.

For a new collection, click **Choose a project**, then **Create bank**. The app creates `.omabrand/` in that project. Edit the brand name and click **Save**, and the bank shows the name you typed. The folder on disk can keep the name the rest of the job uses. Save only writes the name and does not move assets anywhere.

### Adding assets

**··· > Add assets…** copies artwork into the bank and leaves the originals in place. Pick files from the old folder, the desktop, or another project, and the bank gets copies. Nested folders are supported, so a directory with structure arrives with that structure. A filename that would collide inside the bank gets a new name, so both logos survive and you can see both tiles.

While a load or scan is running, Escape cancels it, so you aren't stuck with a folder you clicked by mistake. If you switch documents before a background read finishes, the result does not drop into the tab you switched to. The bank stays associated with the document that started the load.

The originals are not linked live. You copied bytes into `.omabrand/`, so if you later edit the original in Downloads, the bank does not follow until you add it again or replace the file inside the bank. That is what "the originals stay" means: there are two separate files.

### Accepted formats

Banks accept **PNG, JPEG, WebP, TIFF, BMP, GIF, SVG, and `.oma`**. Add assets of those types and they become tiles. The filter chips match the way you actually browse: **Image**, **SVG**, and **omadesign**. The rasters, including GIF, sit under Image, SVG sits under SVG, and `.oma` sits under omadesign.

SVG uses the supported import subset. Simple vector marks come in as vectors, and complex features may not carry over. The tile preview is that import, drawn in the background like any other thumbnail, and placing the tile places that result. If the SVG comes in thinner than the source, the file in the bank is still the original SVG bytes you added. The bank does not rewrite it into a private format, so you can still open it in another editor.

`.oma` assets place as editable artwork. Shapes stay shapes and text stays text, and masks and motion tracks come with the copy. The file in the bank stays unchanged.

### Filtering and placing

Filter the tiles by name, folder path, or file type. Image narrows to the raster files the bank accepts, SVG narrows to SVG, and omadesign narrows to `.oma` artwork stored in the bank. A typed filter matches both the name and the path, so nested folders are part of the search. `marks/leaf` finds the leaf inside marks, and you don't have to scroll through everything.

Thumbnails load in the background, and empty tiles fill in as each decode finishes. You can keep scrolling, and only the visible rows cost any work. You can filter and place as soon as a tile appears. Files added or changed outside the app show up within about three seconds, and **··· > Refresh now** checks immediately, for example right after you copy a file in with the file manager. The canvas stays responsive the whole time.

Drag a tile onto the canvas and the copy lands at the drop point. Double-click a tile and the copy lands at the center of the selected artboard, or at the document center if no artboard is selected. Both place a copy, and the file in `.omabrand/` stays. Editing the placed vectors doesn't change the bank file, and editing the bank file doesn't update what you already placed. A placement is a copy of the bytes, with no live link.

**Ctrl+Z** undoes the place in one step. A native `.oma` that brought in a stack of shapes, text, masks, and motion tracks still goes away in that one step. The IDs inside the placement were fresh when it arrived, so undo can't confuse them with objects already in the document.

In Photo, double-click an asset to place it in Design, and you leave the develop view with a Design document that contains the asset. Drag placement stays available when you are working on artboards.

Escape cancels a pending load, and a double-click or drag that is still resolving can be cancelled before it lands. If you switch tabs while something is in flight, the finished read can't attach to a document that didn't request it.

### Copying a bank to another project

**··· > Save bank copy…** copies the whole bank to another project folder: the assets, the nested folders, the display name, the typography kit, and the font files. The fonts live under `.omabrand/`, in `.omabrand/fonts/` in the copy. The destination can load that bank and see the same folders, the same name, and the same roles. Share those fonts only under their license, since the command simply copies the files. The native dialog asks for the destination. The source bank stays where it is, and the destination gets a new copy.

Palettes are not part of the bank. They are `.omacolors` files beside it, and they need a separate export: **Export collection…** on the Palettes tab writes `.omacolors`. Put that file in the destination folder if the swatches should travel, because Save bank copy will not create it. A hand copy of a project splits the same way: `.omabrand/` for the assets and fonts, `.omacolors` for the colors, and `.omatype` for the role names. The role file points at `fonts/…` inside the brand directory, so if you copy the brand directory without `.omatype`, the fonts may be present while the role names are missing. Use **Save bank copy…** when you want the command that knows the kit. Copy by hand, with hidden files visible, when you want all three.

## In the hand

Put the job folder where the poster will live. In the Brand tab:

```
Load bank…
```

If `.omabrand` already exists, choose the project or the dot-folder, and the tiles appear as the scan finishes. For a new client:

```
Choose a project → Create bank
```

Edit the name and press **Save**. Then:

```
··· → Add assets…
```

Select the logos, patterns, and reference images, and include a folder if the nesting matters. The accepted extensions are:

```
.png  .jpg  .jpeg  .webp  .tif  .tiff  .bmp  .gif  .svg  .oma
```

The copies land inside `.omabrand/`. Go back to the original directory and confirm the files are still there. In the bank, a second file with the same name did not erase the first, because it got a distinct name. Watch the tiles: rasters show as images, SVG shows the subset the importer could read, and an `.oma` shows as a document tile.

If you opened the wrong directory and the load is still running, press Escape to stop it, then choose the right folder and load again.

Open a second document tab while a large bank is still drawing thumbnails. The first document keeps the load it asked for, so client A's logo never ends up in client B's file because a worker finished late.

To place something, click **SVG** or type the path fragment you remember:

```
lockup
```

The grid narrows. If a thumbnail is still loading, wait for it, or press **··· > Refresh now** after you drop a new file into `.omabrand/` from the file manager. Waiting three seconds also works.

Drag the tile and let go on the artboard where the mark belongs, and a copy lands at that point. If you want it centered instead, double-click the tile. It lands at the center of the selected artboard, or the center of the document if nothing is selected.

If it landed in the wrong place:

```
Ctrl+Z
```

The placement is gone, the tile is still in the bank, and you can drag again.

If you placed an `.oma`, select a shape inside it. You can edit the shape, the text is still text, a mask from the asset is still a mask, and motion tracks from the asset are still tracks, now on the new object IDs. Saving the poster writes the poster and does not touch the asset in the bank.

From Photo, double-click the tile when the logo needs to become a Design layer beside a picture you are grading. The place happens in Design, and the RAW and its `.omaphoto` stay a photograph.

If a load is pending and you picked the wrong tile or the wrong bank, press Escape, filter again, and place the one you meant.

Save the poster into the same project when you are ready. On the next open, the app finds the nearest enclosing `.omabrand`, so you only need Load if you deliberately want a different bank.

When a second project needs the same assets:

```
··· → Save bank copy…
```

Choose the other project folder in the native dialog. When it finishes, that folder has its own `.omabrand/` with the name, the nested folders, the assets, and the fonts. Open a document saved inside that folder, or use Load bank and point at it, and the tiles match. The roles match too, once you load the typography side of the copied kit there.

If the colors need to travel too, switch to **Palettes** and use **Export collection…** to write `.omacolors` into the destination. If the destination already has a palette book, load the palettes there. Conflicting names get suffixes, and you save the palette so the merge sticks. The bank copy doesn't do this step, so you do it yourself.

Leave the source project alone. Save bank copy wrote a second bank, and Add assets never moved the files you picked. You end up with two copies on purpose: one to work from and one that stays where it was.

## The edge

Add assets and Place never move or delete the originals or the bank files. A name clash inside the bank never overwrites the stored file. The new copy gets a new name.

A load never finishes into the wrong tab, and Escape cancels one in flight. Create bank won't invent a project for an unsaved document, so choose the folder first. Refresh only updates tiles and never places anything. In Photo, you can't drag onto the develop view. Double-click sends the asset to Design instead.

The bank only takes PNG, JPEG, WebP, TIFF, BMP, GIF, SVG, and `.oma`. SVG support stops at the import subset, and placement uses that same subset.

**Save bank copy…** keeps the folder structure and the name, and copies the bank, the typography kit, and the fonts. It does not copy `.omacolors`, so export the palette collection yourself when the swatches should follow.
