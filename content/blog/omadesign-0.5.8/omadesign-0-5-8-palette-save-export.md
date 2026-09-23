---
id: T092
title: Palette save export
slug: omadesign-0-5-8-palette-save-export
excerpt: Palette Save is its own write, separate from the artwork. Load palettes… merges and suffixes name clashes. Export one palette or the whole collection. Duplicate and remove are there.
tags: [omadesign, 0.5.8, palettes]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-palette-save-export/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-palette-save-export/og.png
---

## The habit

You save the poster. In Illustrator, that save may or may not include the swatches you added, and an `.ase` export is a different command you run when you remember. Photoshop's "save swatches" is a dialog aimed at a preset folder. People hit Ctrl+S, close the laptop, and the new brand red existed only in RAM. Affinity's palette save is easy to miss because the document save feels like it should have covered it. It feels that way in every app. It is wrong in every app that stores reusable color outside the document on purpose.

The other habit is sharing. You want one palette in an email, or the whole book. You want to load someone else's book without deleting yours. Name collisions are normal. Two files both contain "Ink." A load that replaces yours is a bug with a progress bar. A load that keeps both, with a suffix on the newcomer, is a load you can trust late at night.

Duplicate and remove are the housekeeping. Duplicate when you want a variant book. Remove when a palette was a dead end. Neither should require a file manager.

## The constraint

Project palettes are `.omacolors`, a JSON file in the project folder. Personal palettes are the other book. Both are outside the `.oma`. So the artwork's Ctrl+S cannot be the palette's save. If it were, a save of the poster would rewrite the shared kit, including for other documents that use that folder, and a save of the kit would pretend the poster was saved. Two dirty flags. Two buttons. Quit can ask for both, in order. It cannot collapse them.

Load has to merge. The collection you have open may be dirty or clean. Incoming palettes add. Existing colors stay. A conflicting name gets a numbered suffix. You can see both Inks. The import is not kept to disk until you Save. That second step is deliberate. A load is a preview you can still abandon if you do not save. Closing without saving the palette leaves the file on disk as it was.

Export is the share. **Export selected palette…** writes one. **Export collection…** writes them all. The format is the same readable JSON you can diff. Version, a list of palettes, names, hex colors. A hand-edited file is allowed to be smaller: one `{ "name", "colors" }` object, or a bare array of hex strings. The loader accepts those. You are not forced through the panel to add a single chip from a script.

Duplicate and remove operate on the collection in the panel. They are palette edits. They hit disk when you Save, like any other palette edit. Remove does not reach into artwork and strip the color off objects that already used it. The swatch is a value you applied. The object keeps the value.

## What landed

The palette **Save** button keeps the collection. It is a different control from saving the artwork. Dirty palette, clean document: Save in the Palettes tab. Clean palette, dirty document: Ctrl+S. Both dirty: do both. Quitting with unsaved palettes asks **Save all**, **Discard**, or **Cancel** before the artwork prompt. The app waits for the library write. A failed save or a conflict keeps you in the app. You do not quit past a palette that did not land.

**··· → Load palettes…** adds palettes from a file. Your current colors stay. Incoming names that collide receive numbered suffixes. "Ink" can become a suffixed Ink beside the Ink you already had. Nothing is overwritten because the strings matched. The merge sits in the panel. **Save** afterward if you want the import on disk. Skip Save and the file you loaded from is unchanged, and your previous saved collection is what you will see next time you reload from disk.

**Export selected palette…** shares the one you are on. **Export collection…** shares the book. Both write JSON another Omadesign can load, and that a person can read. The shape of a full file:

```json
{
  "version": 1,
  "palettes": [
    { "name": "Fieldwork", "colors": ["#173F35", "#F5EBDC", "#D97C5B80"] },
    { "name": "Ink", "colors": ["#202420", "#FFFFFF"] }
  ]
}
```

`#D97C5B80` is the translucent chip. Six-digit colors are opaque. Send the file. The other machine uses Load palettes. Their existing book stays, suffixes appear on clashes, and they Save to keep the merge.

Duplicate makes another palette in the collection. Remove deletes a palette from the collection. Both wait on Save to become the file. Export does not require you to overwrite the project `.omacolors`. You can export a copy under any name, anywhere, and leave the working file alone.

Older RGBA palettes still open. The next Save writes them as hex. A one-palette handwritten file and a bare array open too. You can bootstrap a project book with a text editor, then Load or just place `.omacolors` in the folder and let the sidebar see it.

## In the hand

Build the chips. Press the palette Save. The button is on the palette, not in the File menu next to the poster. Then save the poster if the poster changed.

```
Save
```

That write is `.omacolors` for a project book. Confirm in the folder, with hidden files visible. Open the JSON if you want to see the hex. Close it without a clever edit if you are mid-session and the panel is dirty. External edits have their own rules when the panel is unsaved. Save first if you want the disk to match the panel.

To bring a book in: **··· → Load palettes…**, choose the JSON. Scroll the list. Your old palettes are there. New ones are there. Collisions wear suffixes. If the merge is what you wanted:

```
Save
```

If it was the wrong file, do not Save. Reload the saved colors when you want the panel to match disk again, or Discard when quit asks, depending on where you are. Until Save, the import is in the session.

To send a book out: **··· → Export selected palette…** for one, **Export collection…** for all. Pick a path. You can put that file in another project folder and load it there. The destination's existing palettes remain, with suffixes on the names that clash.

Duplicate a palette before a risky experiment. Remove a palette you will not use. Save. The artwork's colors do not disappear with the swatch. They were already applied as values.

## The edge

Load refuses to replace your book. It merges, and conflicting names get numbered suffixes. The file on disk refuses to change until you press the palette Save. Export writes a copy. It is not a shortcut that overwrites `.omacolors` in place unless you aim it there on purpose.

Palette Save refuses to save the `.oma`. Artwork save refuses to save the palette. Quit will ask for the palette first, and it will stay open if that write fails.

Press the palette Save when the chips are the chips you want on disk.
