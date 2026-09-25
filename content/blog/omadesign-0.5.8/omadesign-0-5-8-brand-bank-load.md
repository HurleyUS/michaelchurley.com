---
id: T094
title: Brand bank load
slug: omadesign-0-5-8-brand-bank-load
excerpt: Brand → Load bank… opens a project folder or its .omabrand directory. Create bank, name it, and Save. Add assets… copies files in. The originals stay where they were.
publishedAt: 2026-09-06T10:47:01Z
tags: [omadesign, 0.5.8, brand]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-bank-load/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-bank-load/og.png
---

## The habit

The brand folder on a studio server is a dump. Logos at the top, an "old" directory nobody may touch, a "final" directory with three finals. Illustrator's Libraries panel wants you to upload the good ones into an account. Photoshop's is the same account. You drag a PNG in, and the original on disk is now a cousin of a cloud asset, and you are never sure which one the intern updated. Affinity's asset panel can point at folders, which is closer. People still copy the logo into the document by hand because the panel was pointed at last year's directory.

The hand wants Load. Point at the project, or point at the `.omabrand` folder itself. See the tiles. For a new job, Create. Name the bank the way the client says the name, not the way the folder happened to be named on Monday. Save that name. Then add files by copying them in. The originals stay in the dump, the camera card, the downloads folder. The bank holds a copy. Nested folders come along, because "logos / marks / lockups" is already how the dump is organized and you should not have to flatten it to use it.

Escape has to cancel a load you started by mistake. A late thumbnail must not land in the wrong document because you switched tabs while the folder was still being read.

## The constraint

The bank is `.omabrand/` beside the work, plus optional `brand.json` for the display name. Loading has to accept either the project folder or the `.omabrand` folder itself. People will click the parent one week and the dot-folder the next. Both are the same bank. If `brand.json` is missing, the project folder's name is the name you see. You can replace that with a real brand name without renaming the directory, because directories are shared with exports, builds, and other tools that already use the path.

Add copies. It does not move. A bank that moves the original out of Downloads will lose files for every other tool that had the old path. Duplicate filenames inside the bank get new names, so a second `logo.png` does not destroy the first. The original outside the bank keeps its name. The copy inside gets a name that can coexist.

Nested folders are the categories. The filter later searches name and folder path, which is useless if add flattened everything into one directory. The copy preserves the nest.

Discovery runs in the background. A fat bank of images cannot block the canvas while thumbnails decode. Switching documents cannot accept a finished load into the tab that happens to be focused when the worker returns. The load belongs to the document that asked. Escape cancels a load still in flight. You are on Linux, one binary, no uploader. The dialog is the native file dialog. The bytes stay on disk.

An unsaved document has no folder yet. **Choose a project** before **Create bank**, or you have a name with nowhere to put `.omabrand/`.

## What landed

Open **Brand → Load bank…**. Choose a project folder or the `.omabrand` folder inside it. The tiles are that bank. The display name comes from `.omabrand/brand.json` when that file exists:

```json
{ "version": 1, "name": "Fieldwork" }
```

Without the file, the project folder supplies the name. Load is how an existing kit becomes the sidebar. The nearest-folder walk may have already pointed you here. Load is the explicit version, for when you want this bank now.

A new collection is **Choose a project**, then **Create bank**. The directory is created as `.omabrand/` in that project. Edit the brand name. Click **Save**. The name you typed is the name the bank shows. The folder on disk can stay the folder the rest of the job uses. Save writes that name. It does not scatter assets anywhere else.

**··· → Add assets…** copies artwork into the bank. The originals stay in place. Pick files from the dump, the desktop, another project. The bank gets copies. Nested folders are supported. Bring a directory with structure and the structure arrives. A filename that would collide inside the bank is given a new name. The first logo remains. The second logo remains. You can see both tiles.

While a load or a scan is running, Escape cancels it. You are not committed to a folder you mis-clicked. If you switch documents before a background read finishes, the arrival does not drop into the tab you switched to. The bank you were loading stays associated with the document that started the load.

Thumbnails catch up in the background after the files are in. You can filter and place once a tile is there. External changes refresh on their own timer. **··· → Refresh now** is the immediate check when you just copied a file in with the file manager and you do not want to wait.

The originals are not linked live. You copied bytes into `.omabrand/`. Edit the original in Downloads later and the bank does not follow, until you add again or replace the file inside the bank. That is what "originals stay" means. Two files. The dump is still the dump. The project is the project.

## In the hand

Put the job folder where the poster will live. In the Brand tab:

```
Load bank…
```

If `.omabrand` already exists, choose the project or choose the dot-folder. The tiles appear as the scan finishes. If this is a new client:

```
Choose a project → Create bank
```

Edit the name. Press **Save**. Then:

```
··· → Add assets…
```

Select the logos, the patterns, the reference images. Include a folder if the nest matters. The copies land inside `.omabrand/`. Go back to the original directory and confirm the files are still there. They are. In the bank, a second file with the same leaf name did not erase the first. It wears a distinct name.

Press Escape if you opened the wrong directory and the load is still going. The cancel stops that load. Choose the right folder and load again.

Open a second document tab while a heavy bank is still drawing thumbnails. The first document keeps the load it asked for. You do not find client A's logo sitting in client B's file because a worker finished late.

Save the poster into the same project when you are ready. Next open, the nearest enclosing `.omabrand` resolves, and Load is unnecessary unless you want a different bank on purpose.

## The edge

Add assets refuses to move or delete the originals. It copies. A name clash inside the bank refuses to overwrite the file already stored there. The new copy gets a new name.

A load refuses to finish in the wrong tab. Escape cancels the one in flight. Create bank refuses to invent a project for an unsaved document. Choose the folder first, then create.

Load bank…, or Create bank and Save the name, then Add assets… and leave the originals where they were.

## Brand asset place

### The habit

You drag a logo off a library panel onto the artboard. Illustrator's Libraries panel does this, after the asset has finished syncing. Photoshop places, and you get a layer. Affinity's assets studio is the same drag, and a double-click drops the asset in the middle when you cannot be bothered to aim. The failure modes are familiar. The thumbnail is a blank box for a second and you drop the wrong tile. A file you updated in the folder five minutes ago still shows the old preview. The drop lands on an artboard you were not looking at because focus moved. Undo puts back one object, or it puts back fifty, and you are not sure which you will get.

Filter is the other habit. A bank of two hundred marks is not a grid you scroll by memory. You type the name. You type a piece of the folder path, `lockups/horizontal`. You hit a type chip: images, SVG, the native documents. Then you drag the one tile that survived.

The place has to be one undo. A logo that arrives as a group, a mask, and three paths is still one gesture. Ctrl+Z should remove the placement, not the top path.

### The constraint

The bank is files in `.omabrand/`. Thumbnails are a view. Decoding every image in a large bank on the UI thread will freeze the poster you are trying to place onto. Thumbnails load in the background. The grid lays out the visible rows and asks for the previews you can see. A texture cache has a bound. The panel stays a panel.

Files change outside the app. You export a new PNG into the bank from another tool. The tile should catch up without a restart. The refresh is about every three seconds, the same cadence as the palette library. **··· → Refresh now** exists when three seconds is too long because a client is watching. Refresh updates the tile. It does not place anything.

Placement targets matter. A drag puts the copy at the drop point. You aimed. A double-click has no aim. It uses the selected artboard's center. With no artboard selected, it uses the document center. You always know where an unaimed place will land. It will not land at a leftover coordinate from the previous document.

Photo is not an artboard tool in the same way. Double-click in Photo places the asset into Design. Drag placement is there when you are on artboards. You do not get a brand image pasted into the RAW viewer as if it were a develop layer.

A native `.oma` asset has to place as editable artwork. Shapes, text, masks, motion tracks. Fresh object IDs, so the placed copy is not a second pointer at the same objects as the file in the bank. One undo removes that placement. Escape cancels a load that has not finished. Switching documents cannot deliver a late place into the wrong tab.

### What landed

Filter the tiles by name, by folder path, or by file type. The type chips are **Image**, **SVG**, and **omadesign**. Image narrows to the raster files the bank accepts. SVG narrows to SVG. omadesign narrows to `.oma` artwork stored in the bank. A typed filter hits the name and the path, so a nested folder is part of how you search. `marks/leaf` finds the leaf inside marks. You do not scroll the whole cupboard.

Thumbnails load in the background. Empty tiles fill in as the decode finishes. You can scroll. Visible rows are the ones that spend the work. Files added or changed outside the app refresh about every three seconds. **··· → Refresh now** checks immediately. The canvas does not lock while this happens.

Drag a tile onto the canvas. The copy lands at the drop point. Double-click a tile and the copy lands at the center of the selected artboard. No artboard selected: document center. Both are placements of a copy. The file in `.omabrand/` stays. Edit the placed vectors and the bank file is unchanged. Edit the bank file and the thing you already placed does not live-update under you. You placed bytes. You did not subscribe.

**Ctrl+Z** undoes the place. One step. A native `.oma` that brought a stack of shapes, text, masks, and motion tracks still leaves in that one step. The IDs inside the placement were fresh on the way in, so the undo is not confused with objects that were already in the document.

In Photo, double-click an asset to place it in Design. You leave the develop view with a Design document that has the asset. Drag placement stays available when you are on artboards. You aim on a page. You do not aim on a photograph.

Escape cancels a pending load. A double-click or a drag that is still resolving can be refused before it lands. Switch tabs while something is in flight and the finished read cannot attach to the document that did not request it.

### In the hand

Open **Brand**. Load the bank if it is not already the one beside this document. Click **SVG**, or type the path fragment you remember.

```
lockup
```

The grid narrows. If the thumbnail is still arriving, wait for the background load, or hit **··· → Refresh now** after you drop a new file into `.omabrand/` from the file manager. Three seconds will also do it.

Drag the tile. Let go on the artboard where the mark belongs. It is a copy, at that point. If you wanted the center and not a careful drop, double-click the tile. Selected artboard: center of that artboard. Nothing selected: center of the document.

Wrong place:

```
Ctrl+Z
```

The placement is gone. The tile is still in the bank. Drag again.

If what you placed was an `.oma`, select a shape inside it. You can edit the shape. The text is text. A mask that was in the asset is a mask. Motion tracks that were in the asset are tracks, on these new object IDs. Saving the poster writes the poster. It does not rewrite the asset in the bank.

From Photo, double-click the tile when the logo needs to become a Design layer beside a picture you are grading. The place happens in Design. The RAW and its `.omaphoto` stay the photograph.

Press Escape if a load is pending and you chose the wrong tile or the wrong bank. Then filter again and place the one you meant.

### The edge

Place refuses to move the bank file. You get a copy at the drop point, or at the selected artboard's center, or at the document center when no artboard is selected. **Ctrl+Z** removes that copy in one step, including a native document that arrived as many objects.

A late load refuses the wrong tab. Refresh refuses to place on its own. It only updates tiles. Photo refuses a drag onto the develop surface as the way in. Double-click there sends the asset to Design.

Filter the tile, drag it, and press Ctrl+Z if the copy landed in the wrong place.

## Brand accepted formats

### The habit

A brand pack arrives as a zip of everything the last studio exported. PNG for the web logo. JPEG for a photograph you were told not to recompress, and then they recompressed it. WebP because someone was modern. TIFF from print. A BMP from a tool that should not still be in the building. A GIF that is a single frame pretending to be simple. SVG for the mark that has to stay sharp. And, if you are lucky, the actual working file, which in this studio is an `.oma`.

Illustrator will place most of the rasters and then argue with the SVG. Photoshop will open the rasters and rasterize the SVG if you force it. Affinity will take a wide set and still choke on an SVG that used a filter the importer never promised. The hand wants the bank to say yes to the ordinary files and to be plain about SVG. The subset you can import as vectors is the subset the bank will hold as vectors. A complex SVG does not get to look accepted and then place as a surprise.

The other habit is duplication. A new client spinoff needs the same bank. You want a command that clones the whole cupboard to the other project folder. Name included. Nested folders included. Not a zip you rebuild by hand, and not a copy that flattens `logos/print` into a single directory of collisions.

### The constraint

`.omabrand/` is a directory of files, not a package format. The files inside have to be files the placer already knows how to turn into artwork. The studio places PNG, JPEG, WebP, TIFF, BMP, and GIF as images. It imports SVG through the SVG path it already has. It opens `.oma` as native artwork, with shapes, text, masks, and motion, new IDs on place. Adding a format the canvas cannot place would mean tiles you can see and cannot use. The list is the list of things place already understands.

SVG is the uneven one. The app has a supported import subset. Complex SVG features may not carry over. The tile and the place use that same importer. If the mark depends on a structure outside the subset, place the native `.oma` you built it in. The `.oma` is the editable file. The SVG is the interchange file, with that ceiling.

**Save bank copy…** clones to another project folder: assets, nest, display name, typography kit, and font files. Those fonts live under `.omabrand/`. Palettes do not. They are `.omacolors` beside the bank. Export the palette collection on its own when the other project needs the swatches. The native dialog asks for the destination. The source bank stays. The destination is a new copy.

### What landed

Banks accept **PNG, JPEG, WebP, TIFF, BMP, GIF, SVG, and `.oma`**. Add assets of those types and they become tiles. Filter chips line up with the split you actually browse: **Image**, **SVG**, and **omadesign**. The rasters, including GIF, sit under Image. SVG sits under SVG. `.oma` sits under omadesign.

SVG uses the supported import subset. Simple vector marks come in as vectors. Complex features may not carry over. The tile's preview is that import, drawn in the background like any other thumbnail. Place the tile and you place that result, as a copy, at the drop point or at the artboard center on a double-click. If the SVG arrived thinner than the source file, the source file in the bank is still the original SVG bytes you added. The place is the subset. You can still open the SVG in another editor. The bank did not rewrite it into a private form.

`.oma` assets place as editable artwork. Shapes stay shapes. Text stays text. Masks and motion tracks come with the copy. Object IDs are fresh. Ctrl+Z removes the placement in one step. The file in the bank remains the file in the bank.

**··· → Save bank copy…** copies the whole bank to another project folder. The display name comes along. Nested folders come along. Assets come along. The typography kit and its fonts come along, because **Save bank copy…** copies the assets, the typography kit, and the fonts. The destination can load that bank and see the same nest, the same name, and the same roles. Font files sit in the copied `.omabrand/fonts/`. Share those fonts only under their license. The command copies the files.

Palettes stay a separate export. **Export collection…** on the Palettes tab writes `.omacolors`. Put that file in the destination folder if the swatches should travel. Save bank copy will not invent it. A hand copy of a project is the same split: `.omabrand/` for the cupboard and the fonts, `.omacolors` for the colors, `.omatype` for the role names. The role file points at `fonts/…` inside the brand directory. Copy the brand directory without `.omatype` and the fonts may be present while the role names are not. Use **Save bank copy…** when you want the command that knows the kit. Copy by hand when you want all three, with hidden files visible.

### In the hand

**··· → Add assets…** and select the pack.

```
.png  .jpg  .jpeg  .webp  .tif  .tiff  .bmp  .gif  .svg  .oma
```

Watch the tiles. Rasters show as images. SVG shows as the subset the importer could read. An `.oma` shows as a document tile. Drag to place. Double-click to center on the selected artboard, or on the document if no artboard is selected. Ctrl+Z if the copy was a test.

When a second project needs the cupboard:

```
··· → Save bank copy…
```

Choose the other project folder. The dialog is the native one. When it finishes, that folder has its own `.omabrand/`, with the name, the nested folders, the assets, and the fonts. Open a document saved inside that folder, or Load bank and point at it. The tiles match. The roles match, once the typography side of the copied kit is what you load there.

If the colors need to travel too, switch to **Palettes** and **Export collection…** into the destination as `.omacolors`. Load palettes there if the destination already had a book. Conflicting names get suffixes. Save the palette so the merge sticks. The bank copy did not do this step. You do it with your eyes open.

Leave the source project alone. Save bank copy wrote a second cupboard. Add assets never moved the files you picked from the dump. Two copies is the point. One to work from, one that stayed.

### The edge

The bank refuses formats outside PNG, JPEG, WebP, TIFF, BMP, GIF, SVG, and `.oma`. SVG refuses to promise more than the supported import subset. Complex features may not carry over, and the place uses that same subset.

**Save bank copy…** refuses to flatten the nest and refuses to drop the name. It copies the bank, the typography kit, and the fonts to the other project. It does not take `.omacolors` with it. Export the palette collection yourself when the swatches should follow.

Add the SVG you can already import, and use Save bank copy… when the other folder needs the whole cupboard.
