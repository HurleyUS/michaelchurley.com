---
id: T094
title: Brand bank load
slug: omadesign-0-5-8-brand-bank-load
excerpt: Brand → Load bank… opens a project folder or its .omabrand directory. Create bank, name it, and Save. Add assets… copies files in. The originals stay where they were.
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
