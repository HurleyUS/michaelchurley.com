---
id: T093
title: Palette conflict handling
slug: omadesign-0-5-8-palette-conflict-handling
excerpt: Palette files refresh about every three seconds. Unsaved edits stay put and Save blocks if the file changed underneath. Export a copy or Reload saved colors. Quit asks before it leaves.
tags: [omadesign, 0.5.8, palettes]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-palette-conflict-handling/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-palette-conflict-handling/og.png
---

## The habit

Two windows, one swatch file. You have done this with a CSS file, with an `.ase`, with a shared drive full of "Brand-Final-v7". Illustrator will reload a library or it will not, and you find out when the color you just added is gone. Photoshop's preset sync has eaten a book. A text editor and a design app open on the same JSON is the modern version: you fix a hex in the file because typing is faster, and the panel still shows the old hex, and then you hit Save in the panel and your fix is gone. Or the panel reloads on its own and the six new chips you had not saved vanish.

The hand wants a dull rule. If I have not saved, my edits stay on screen. If the file changed under me, do not let Save pretend it can merge by clobber. Give me a way out that keeps my version, and a way out that takes the disk's version. Ask me again at quit. Do not order those questions after the artwork question, or I will answer the poster prompt and think I answered the palette.

## The constraint

`.omacolors` is an ordinary file. Anything can write it. Another copy of the app, a sync tool, your editor, a copy you dropped on top. The sidebar refreshes libraries in the background so a change you made on disk shows up without a restart. That refresh is on a short timer, about three seconds. Fast enough that the panel is not a stale screenshot. Slow enough that it is not a busy loop on the file.

A refresh that always reloads will destroy unsaved panel edits. A refresh that never reloads will hide a change your other hand just saved. The split is the dirty flag. Clean panel: take the file. Dirty panel: keep the edits, and block Save. Blocked Save is the important half. If Save stayed armed, the next click would write your stale memory over the newer file, or write a mix nobody asked for. Blocking is the refusal. The two exits are explicit. **Export a copy** writes your version somewhere else, so the newer file on disk can stay, and you still have your chips. **Reload saved colors** throws your panel edits away and loads the file. You choose. The app does not choose for you in the background.

Quit has to join this. Unsaved palettes get **Save all**, **Discard**, or **Cancel**. The app waits for the library save to finish. If the save fails, or the file conflicts, you stay in the app. The artwork prompt comes after, only once the palette question is settled. Photo settings, when they are dirty, come before the palette question. The order is the constraint: camera sidecars, then palettes, then the `.oma`. None of those writes are allowed to be a side effect of a different write.

## What landed

Libraries refresh in the background about every three seconds. A `.omacolors` that changes while your palette panel is clean shows up in the panel. You see the hex that is on disk. You did not press a reload button. The timer did the check.

If the file changes while you have unsaved palette edits, those edits stay in the panel. The chips you added, the names you changed, the swatch you removed: still on screen. Save is blocked. You cannot push the panel over the file that moved. The block is the whole protection. There is no "save anyway" that silently wins.

Two ways forward. Export a copy to keep your version. That uses the same export you already use to share a palette or a collection. Your chips land in a JSON you named. The file that changed underneath is left as the other writer left it. Or choose **Reload saved colors**. The panel drops your unsaved palette edits and loads the file on disk. You are looking at the newer book. Your unsaved chips are gone, because you asked to take the disk.

Quit with a dirty palette and the prompt is **Save all**, **Discard**, or **Cancel**. Save all writes the libraries and waits. If that write hits a failure or a conflict, you remain in the app. The document stays open. You can export a copy, reload, or resolve the file outside and try again. Discard drops the unsaved palette edits. Cancel returns you to the chair with the edits intact. Artwork that is also unsaved gets its own prompt afterward. You answer the palette first. You do not lose the poster question. You also do not get to answer it while a palette write is still failing.

Personal and project books both sit behind this. A refresh is a library refresh. Whichever file the panel is bound to, the rule is the same. Dirty stays dirty. Save blocks when the file moved. The three-second check does not care which book it was.

The panel will not merge a disk change into your unsaved chips by matching names. Merge is what **Load palettes…** does, when you ask, with suffixes on collisions, and even that merge waits for Save before it is the file. A background conflict is not a load. It is a stop.

## In the hand

Open **Palettes**. Add a chip. Do not press Save yet. In another window, change the `.omacolors` on disk. Wait a few seconds.

```
Save
```

The button does not take the write. Your new chip is still in the panel. The file on disk still has the other version. You have both, and neither has been destroyed.

**··· → Export collection…** or export the selected palette. Put that JSON somewhere safe. That is your version, preserved. Then, if the disk version is the one you want to keep working from, choose **Reload saved colors**. The panel matches the file. Your unsaved chip is gone from the panel and alive in the export you just wrote. Load that export later if you still want it, and Save when the merge should stick.

If your panel is the one that should win, do not reload. Move the other file aside, or finish the outside edit so you are no longer in conflict, then Save. If Save is still blocked, export remains the way your bytes survive. You are never required to reload in order to keep a copy.

Quit while the palette is dirty and the conflict is unresolved. The prompt appears.

```
Save all · Discard · Cancel
```

Cancel. You are still in the document. The palette edits are still in the panel. The poster has not been asked to save yet. Resolve the palette, then quit again. The artwork prompt follows when the palette write is allowed to finish. Photo sidecars, if those are dirty too, were asked before this. Answer them in the order the app asks. Do not hunt the File menu to force a different order.

## The edge

A background refresh refuses to clobber unsaved palette edits, and Save refuses to clobber a file that changed under those edits. The panel stays. The button blocks. You export a copy to keep your side, or you **Reload saved colors** to take the disk.

Quit refuses to leave during a failed or conflicting library save. **Cancel** keeps you in the app. The artwork prompt waits its turn.

Wait for the block, export the copy, and reload only when the file on disk is the book you mean to keep.
