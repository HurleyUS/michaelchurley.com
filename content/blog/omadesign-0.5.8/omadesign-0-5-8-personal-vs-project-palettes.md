---
id: T091
title: Personal vs project palettes
slug: omadesign-0-5-8-personal-vs-project-palettes
excerpt: Palettes are Personal across your work or Project in the current folder. Name a palette, filter it, add the current color, the selection, or a hex including #RRGGBBAA, then click a swatch onto Fill or Stroke.
publishedAt: 2026-09-06T10:46:01Z
tags: [omadesign, 0.5.8, palettes]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-personal-vs-project-palettes/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-personal-vs-project-palettes/og.png
---

## The habit

Swatches in Illustrator are a document thing until you save them as a library, and then they are an `.ase` file you forget the path to. Photoshop swatches stick to the app, and a job's brand colors stick to you only if you remembered to save the book. Affinity's palette menu has the same fork: a palette that follows you, and a palette that belongs to this document. People mix them up. They add the client's green to the personal book, then every unrelated poster offers that green. Or they add their own ink to the job, and the client's file grows a color the client never had.

The hand wants the fork in the open, with two words. Personal. Project. And it wants the add gestures you already use. Take the color that is already current. Take fill and stroke from the selection, because you built the color on the object and now it should be a swatch. Type a hex, because the brand guide was an email. Include alpha in that hex when the chip is a varnish, a shadow, a 50% bar.

Apply has a target. Fill or Stroke. Click the swatch. Right-click when you meant stroke and you do not want to flip the target first. That right-click is years of "I applied it to the wrong channel."

## The constraint

Project colors have a file, `.omacolors`, in the project folder the document already resolved. Personal colors are the ones available across your work, the book that is yours when no client folder is in play. The tab has to show which one you are editing. A single list with no switch will write the client red into the wrong book the first time you are moving fast.

The color model in the file is hex, so a typed value and a saved value are the same kind of thing. `#RRGGBB` is the opaque chip. `#RRGGBBAA` includes transparency. You should not have to open a separate opacity field to store a translucent swatch, and you should not lose that alpha when the palette saves. Older palettes that stored RGBA objects still load. Saving them writes the portable hex. **From selection** collects the fill and stroke colors on the selected artwork. You built the color on the object. The swatch is how you keep it.

Filter has to cover both a palette name and a hex. Twenty palettes, one of them has `#173F35`, and you remember the hex better than the name. Or you remember "Ink" and not the hex. Both searches hit the same box.

Applying a swatch is a document edit. It belongs on the artwork undo stack. Building the palette is a palette edit, saved by the palette Save button, not by Ctrl+S on the poster. The two books, personal and project, share the gestures so you do not learn two panels. They do not share the file.

## What landed

Open **Palettes**. Choose **Personal** or **Project**. Personal is across your work. Project is the current project folder, the `.omacolors` beside that job. The switch is the whole distinction. Look at it before you add a chip.

**+ Palette**. Type a name. Click **Rename**. The new palette exists in the book you had selected. Name it for the job or for the use. "Fieldwork" belongs in a project. "My ink" belongs in Personal. You can hold several named palettes in the collection. Filter the collection by palette name or by hex when the list is longer than the panel.

Add color in three ways. **+ Current color** takes whatever color is current and adds it. **From selection** collects the fill and stroke colors off the selected artwork. Or type a hex and click **+**. Include alpha when you need it:

```
#RRGGBBAA
```

`#D97C5B80` is a real example of that form, a color plus transparency in one string. Opaque colors stay six digits. You do not need a second control.

Choose **Fill** or **Stroke**, then click a swatch. The selected artwork takes that color on the channel you armed. Right-click a swatch to apply it as the stroke directly, so a Fill target does not catch a stroke click. Each swatch has a **···** menu: replace the swatch with the current color, copy its hex, or remove it. Copy hex when you need the value in a conversation. Remove when the chip was an experiment. Replace when you refined the current color and the swatch should catch up.

The palette **Save** writes the book. It does not save the poster. Ctrl+S on the artwork does not save the palette. Do both when both changed. Project save updates `.omacolors` for that folder. Personal save updates the book you carry across work.

Clicking a swatch applies that color to the artwork on the channel you armed. The palette itself changes only when you add, replace, or remove a swatch, and it reaches disk only when you press the palette Save. Ctrl+S on the poster does not write the book. The palette Save does not write the poster.

## In the hand

Select the object whose color is almost right. Open **Palettes**. If this green is for every personal sketch, click **Personal**. If it is the client's, click **Project**. If Project has no folder yet, choose the project folder first. An unsaved document needs **Choose a project** before a project book has an address.

```
+ Palette
```

Name it. Rename. Then **From selection** if the fill and stroke on the object are the chips you want stored. Or set up the color, hit **+ Current color**. Or paste a hex from the brand mail and hit **+**.

Arm **Fill**. Click the swatch. The selection fills. Arm **Stroke**. Click another swatch. Or right-click that swatch and skip the arm. The stroke updates either way on a right-click.

Filter by typing the palette name, or by typing `173F35`, until the list is the one chip you came for.

Save the palette with its own Save button before you quit, or the quit prompt will ask. Save the artwork with Ctrl+S if the objects changed. They are two writes. The tab is one tab. The files are not one file.

Switch to Personal, add a chip, switch back to Project. The project list does not show the personal chip. That is the fork working. A color crosses only when you add it to the book you are looking at.

## The edge

The panel refuses to guess which book you meant. Personal and Project stay separate lists. A chip added on one side stays on that side. There is no silent copy into the other book.

A swatch click refuses to save the palette for you, and a palette Save refuses to save the artwork. Fill and Stroke are the apply target. Right-click is the stroke when you did not change the target. Alpha lives in the hex. You do not get a swatch that drops `#RRGGBBAA` down to six digits and calls it the same color.

Choose Project or Personal, add the hex, and click the swatch onto the channel you armed.

## Palette save export

### The habit

You save the poster. In Illustrator, that save may or may not include the swatches you added, and an `.ase` export is a different command you run when you remember. Photoshop's "save swatches" is a dialog aimed at a preset folder. People hit Ctrl+S, close the laptop, and the new brand red existed only in RAM. Affinity's palette save is easy to miss because the document save feels like it should have covered it. It feels that way in every app. It is wrong in every app that stores reusable color outside the document on purpose.

The other habit is sharing. You want one palette in an email, or the whole book. You want to load someone else's book without deleting yours. Name collisions are normal. Two files both contain "Ink." A load that replaces yours is a bug with a progress bar. A load that keeps both, with a suffix on the newcomer, is a load you can trust late at night.

Duplicate and remove are the housekeeping. Duplicate when you want a variant book. Remove when a palette was a dead end. Neither should require a file manager.

### The constraint

Project palettes are `.omacolors`, a JSON file in the project folder. Personal palettes are the other book. Both are outside the `.oma`. So the artwork's Ctrl+S cannot be the palette's save. If it were, a save of the poster would rewrite the shared kit, including for other documents that use that folder, and a save of the kit would pretend the poster was saved. Two dirty flags. Two buttons. Quit can ask for both, in order. It cannot collapse them.

Load has to merge. The collection you have open may be dirty or clean. Incoming palettes add. Existing colors stay. A conflicting name gets a numbered suffix. You can see both Inks. The import is not kept to disk until you Save. That second step is deliberate. A load is a preview you can still abandon if you do not save. Closing without saving the palette leaves the file on disk as it was.

Export is the share. **Export selected palette…** writes one. **Export collection…** writes them all. The format is the same readable JSON you can diff. Version, a list of palettes, names, hex colors. A hand-edited file is allowed to be smaller: one `{ "name", "colors" }` object, or a bare array of hex strings. The loader accepts those. You are not forced through the panel to add a single chip from a script.

Duplicate and remove operate on the collection in the panel. They are palette edits. They hit disk when you Save, like any other palette edit. Remove does not reach into artwork and strip the color off objects that already used it. The swatch is a value you applied. The object keeps the value.

### What landed

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

### In the hand

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

### The edge

Load refuses to replace your book. It merges, and conflicting names get numbered suffixes. The file on disk refuses to change until you press the palette Save. Export writes a copy. It is not a shortcut that overwrites `.omacolors` in place unless you aim it there on purpose.

Palette Save refuses to save the `.oma`. Artwork save refuses to save the palette. Quit will ask for the palette first, and it will stay open if that write fails.

Press the palette Save when the chips are the chips you want on disk.

## Palette conflict handling

### The habit

Two windows, one swatch file. You have done this with a CSS file, with an `.ase`, with a shared drive full of "Brand-Final-v7". Illustrator will reload a library or it will not, and you find out when the color you just added is gone. Photoshop's preset sync has eaten a book. A text editor and a design app open on the same JSON is the modern version: you fix a hex in the file because typing is faster, and the panel still shows the old hex, and then you hit Save in the panel and your fix is gone. Or the panel reloads on its own and the six new chips you had not saved vanish.

The hand wants a dull rule. If I have not saved, my edits stay on screen. If the file changed under me, do not let Save pretend it can merge by clobber. Give me a way out that keeps my version, and a way out that takes the disk's version. Ask me again at quit. Do not order those questions after the artwork question, or I will answer the poster prompt and think I answered the palette.

### The constraint

`.omacolors` is an ordinary file. Anything can write it. Another copy of the app, a sync tool, your editor, a copy you dropped on top. The sidebar refreshes libraries in the background so a change you made on disk shows up without a restart. That refresh is on a short timer, about three seconds. Fast enough that the panel is not a stale screenshot. Slow enough that it is not a busy loop on the file.

A refresh that always reloads will destroy unsaved panel edits. A refresh that never reloads will hide a change your other hand just saved. The split is the dirty flag. Clean panel: take the file. Dirty panel: keep the edits, and block Save. Blocked Save is the important half. If Save stayed armed, the next click would write your stale memory over the newer file, or write a mix nobody asked for. Blocking is the refusal. The two exits are explicit. **Export a copy** writes your version somewhere else, so the newer file on disk can stay, and you still have your chips. **Reload saved colors** throws your panel edits away and loads the file. You choose. The app does not choose for you in the background.

Quit has to join this. Unsaved palettes get **Save all**, **Discard**, or **Cancel**. The app waits for the library save to finish. If the save fails, or the file conflicts, you stay in the app. The artwork prompt comes after, only once the palette question is settled. Photo settings, when they are dirty, come before the palette question. The order is the constraint: camera sidecars, then palettes, then the `.oma`. None of those writes are allowed to be a side effect of a different write.

### What landed

Libraries refresh in the background about every three seconds. A `.omacolors` that changes while your palette panel is clean shows up in the panel. You see the hex that is on disk. You did not press a reload button. The timer did the check.

If the file changes while you have unsaved palette edits, those edits stay in the panel. The chips you added, the names you changed, the swatch you removed: still on screen. Save is blocked. You cannot push the panel over the file that moved. The block is the whole protection. There is no "save anyway" that silently wins.

Two ways forward. Export a copy to keep your version. That uses the same export you already use to share a palette or a collection. Your chips land in a JSON you named. The file that changed underneath is left as the other writer left it. Or choose **Reload saved colors**. The panel drops your unsaved palette edits and loads the file on disk. You are looking at the newer book. Your unsaved chips are gone, because you asked to take the disk.

Quit with a dirty palette and the prompt is **Save all**, **Discard**, or **Cancel**. Save all writes the libraries and waits. If that write hits a failure or a conflict, you remain in the app. The document stays open. You can export a copy, reload, or resolve the file outside and try again. Discard drops the unsaved palette edits. Cancel returns you to the chair with the edits intact. Artwork that is also unsaved gets its own prompt afterward. You answer the palette first. You do not lose the poster question. You also do not get to answer it while a palette write is still failing.

Personal and project books both sit behind this. A refresh is a library refresh. Whichever file the panel is bound to, the rule is the same. Dirty stays dirty. Save blocks when the file moved. The three-second check does not care which book it was.

The panel will not merge a disk change into your unsaved chips by matching names. Merge is what **Load palettes…** does, when you ask, with suffixes on collisions, and even that merge waits for Save before it is the file. A background conflict is not a load. It is a stop.

### In the hand

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

### The edge

A background refresh refuses to clobber unsaved palette edits, and Save refuses to clobber a file that changed under those edits. The panel stays. The button blocks. You export a copy to keep your side, or you **Reload saved colors** to take the disk.

Quit refuses to leave during a failed or conflicting library save. **Cancel** keeps you in the app. The artwork prompt waits its turn.

Wait for the block, export the copy, and reload only when the file on disk is the book you mean to keep.
