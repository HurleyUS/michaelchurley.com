---
id: T091
title: Personal vs project palettes
slug: omadesign-0-5-8-personal-vs-project-palettes
excerpt: Palettes are Personal across your work or Project in the current folder. Name a palette, filter it, add the current color, the selection, or a hex including #RRGGBBAA, then click a swatch onto Fill or Stroke.
publishedAt: 2026-09-06T10:46:01Z
tags: [omadesign, 0.0.1-alpha, palettes]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-personal-vs-project-palettes/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-personal-vs-project-palettes/og.png
---

## The habit

In Illustrator, swatches belong to the document until you save them as a library, and then they become an `.ase` file whose path you forget. Photoshop swatches stay with the app, and a job's brand colors stay with you only if you remembered to save the book. Affinity's palette menu has the same split between a palette that follows you and a palette that belongs to this document. People mix them up. They add the client's green to the personal book, and then every unrelated poster offers that green. Or they add their own ink to the job, and the client's file gains a color the client never had.

I wanted that split out in the open, with two words: Personal and Project. I also wanted the add gestures designers already use. Take the color that is already current. Take fill and stroke from the selection, because you built the color on the object and now it should be a swatch. Type a hex, because the brand guide arrived by email. Include alpha in that hex when the chip is a varnish, a shadow or a 50% bar.

Applying a swatch needs a target, Fill or Stroke. You click the swatch, or right-click when you meant stroke and don't want to switch the target first. That right-click comes from years of applying colors to the wrong channel.

Saving is its own habit. You save the poster. In Illustrator that save may or may not include the swatches you added, and exporting an `.ase` is a separate command you run when you remember. Photoshop's "save swatches" is a dialog aimed at a preset folder. People press Ctrl+S, close the laptop, and the new brand red only ever existed in memory. Affinity's palette save is easy to miss because the document save feels like it should have covered it. It feels that way in every app, and it is wrong in every app that deliberately stores reusable color outside the document.

Then there is sharing. You want to send one palette by email, or the whole book. You want to load someone else's book without deleting yours. Name collisions are normal, and two files can both contain "Ink." A load that replaces your palette is a bug. A load that keeps both and adds a suffix to the incoming one is a load you can trust late at night. Duplicating and removing palettes is housekeeping and shouldn't need a file manager.

Last, two programs can have the same swatch file open. You have done this with a CSS file, an `.ase`, or a shared drive full of "Brand-Final-v7". Illustrator may or may not reload a library, and you find out when the color you just added is gone. Photoshop's preset sync has lost a book. A text editor and a design app open on the same JSON is the current version of the problem. You fix a hex in the file because typing is faster, the panel still shows the old hex, and then you press Save in the panel and your fix is gone. Or the panel reloads on its own and six new chips you hadn't saved disappear.

The rule I wanted is simple. If I haven't saved, my edits stay on screen. If the file changed under me, Save shouldn't overwrite it and call that a merge. Give me one way out that keeps my version and one that takes the version on disk. Ask again at quit, and don't put those questions after the artwork question, or I will answer the poster prompt and think I answered the palette.

## The constraint

Project colors live in a `.omacolors` file, a JSON file in the project folder the document already resolved. Personal colors are available across all your work, the book that is yours when no client folder is involved. Both live outside the `.oma`. The tab has to show which book you are editing, because a single list with no switch will put the client's red into the wrong book the first time you work fast.

The file stores colors as hex, so a typed value and a saved value are the same kind of thing. `#RRGGBB` is an opaque chip and `#RRGGBBAA` includes transparency. You shouldn't need a separate opacity field to store a translucent swatch, and the alpha shouldn't be lost when the palette saves. Older palettes that stored RGBA objects still load, and saving them writes portable hex.

Filter has to match both palette names and hex values. With twenty palettes, one of them contains `#173F35`, and you may remember the hex better than the name. Or you remember "Ink" and not the hex. Both searches use the same box.

Applying a swatch is a document edit, so it goes on the artwork undo stack. Building a palette is a palette edit, saved by the palette's Save button. Ctrl+S on the artwork can't also save the palette. If it did, saving the poster would rewrite the shared kit, including for other documents that use that folder, and saving the kit would look like the poster was saved. So there are two dirty flags and two buttons. Quit can ask about both, in order, but it can't combine them. The personal and project books share the same gestures, so you only learn one panel, but they don't share a file.

Load has to merge. Whether the open collection has unsaved changes or not, incoming palettes are added, existing colors stay, and a conflicting name gets a numbered suffix, so you can see both Inks. The import stays out of the file on disk until you Save. That second step is deliberate. You can still abandon a load by not saving, and closing without saving the palette leaves the file on disk as it was.

Export is how you share. The format is the same readable JSON you can diff: a version, a list of palettes, their names and hex colors. A hand-edited file can be smaller. The loader also accepts a single `{ "name", "colors" }` object or a bare array of hex strings, so a script can add a chip without going through the panel.

Duplicate and remove are palette edits on the collection in the panel. They reach the file when you Save, like any other palette edit. Remove doesn't strip the color off objects that already use it. The object keeps the value you applied.

`.omacolors` is an ordinary file, and anything can write it: another copy of the app, a sync tool, your editor, or a copy you dropped on top. The sidebar refreshes libraries in the background so a change on disk shows up without a restart. That refresh runs on a short timer of about three seconds. That is fast enough that the panel doesn't go stale and slow enough that it doesn't poll the file constantly.

A refresh that always reloads would destroy unsaved panel edits. A refresh that never reloads would hide a change you just saved in another program. The dirty flag decides. If the panel has no unsaved changes, it takes the file. If it has unsaved changes, it keeps them and blocks Save. Blocking Save matters most. If Save stayed available, the next click would write your stale copy over the newer file, or write a mix nobody asked for. The two ways out are explicit, and you choose between them. The app doesn't decide in the background.

Quit takes part in this. Unsaved palettes get **Save all**, **Discard** or **Cancel**, and the app waits for the library save to finish. If the save fails or the file conflicts, you stay in the app. The artwork prompt comes afterward, once the palette question is settled. If photo settings have unsaved changes, their prompt comes before the palette question. The order is camera sidecars, then palettes, then the `.oma`, and none of those writes happens as a side effect of another.

## What landed

### Two books and three ways to add

Open **Palettes** and choose **Personal** or **Project**. Personal covers all your work. Project is the current project folder, the `.omacolors` beside that job. That switch is the whole distinction, so check it before you add a chip.

Click **+ Palette**, type a name and click **Rename**. The new palette goes into whichever book you had selected. Name it for the job or for the use. "Fieldwork" belongs in a project and "My ink" belongs in Personal. You can keep several named palettes in the collection, and filter by palette name or by hex when the list gets longer than the panel.

There are three ways to add color. **+ Current color** adds whatever color is current. **From selection** collects the fill and stroke colors from the selected artwork. Or type a hex and click **+**, including alpha when you need it:

```
#RRGGBBAA
```

`#D97C5B80` is a real example of that form, a color plus transparency in one string. Opaque colors stay six digits, so you don't need a second control.

Choose **Fill** or **Stroke**, then click a swatch, and the selected artwork takes that color on the channel you chose. Right-click a swatch to apply it as the stroke directly, so a stroke click doesn't land on the fill. Each swatch has a **···** menu to replace it with the current color, copy its hex, or remove it. Copy the hex when you need the value in a conversation, remove a chip that was an experiment, and replace a swatch when you refined the current color and the swatch should match.

Clicking a swatch only changes the artwork. The palette changes when you add, replace or remove a swatch, and it only reaches disk when you press the palette's Save.

### Saving, loading and exporting

The palette **Save** button writes the collection. It is a separate control from saving the artwork. For a project book it updates `.omacolors` in that folder, and for Personal it updates the book you carry across your work. If only the palette changed, press Save in the Palettes tab. If only the document changed, press Ctrl+S. If both changed, do both. Quitting with unsaved palettes asks **Save all**, **Discard** or **Cancel** before the artwork prompt. The app waits for the library write, and a failed save or a conflict keeps you in the app, so you can't quit past a palette that didn't save.

**··· > Load palettes…** adds palettes from a file. Your current colors stay, and incoming names that collide get numbered suffixes, so an incoming "Ink" appears with a suffix beside the Ink you already had. Nothing is overwritten because two names matched. The merge sits in the panel until you press **Save**. If you skip Save, the file you loaded from is unchanged, and the next reload from disk shows your previous saved collection.

**Export selected palette…** shares the palette you are on and **Export collection…** shares the whole book. Both write JSON that another copy of Omadesign can load and a person can read. A full file looks like this:

```json
{
  "version": 1,
  "palettes": [
    { "name": "Fieldwork", "colors": ["#173F35", "#F5EBDC", "#D97C5B80"] },
    { "name": "Ink", "colors": ["#202420", "#FFFFFF"] }
  ]
}
```

`#D97C5B80` is the translucent chip, and the six-digit colors are opaque. Send the file, and the other machine uses Load palettes. Their existing book stays, suffixes appear on clashes, and they press Save to keep the merge.

Duplicate makes another palette in the collection and Remove deletes one. Both reach the file only when you Save. Export doesn't overwrite the project `.omacolors`. You can export a copy under any name, anywhere, and leave the working file alone.

Older RGBA palettes still open, and the next Save writes them as hex. A handwritten one-palette file or a bare array opens too. You can start a project book in a text editor, then either Load it or place `.omacolors` in the folder and let the sidebar find it.

### When the file changes on disk

Libraries refresh in the background about every three seconds. If a `.omacolors` changes while your palette panel has no unsaved edits, the panel shows the hex that is on disk without you pressing reload.

If the file changes while you have unsaved palette edits, those edits stay in the panel, including chips you added, names you changed and swatches you removed. Save is blocked, so you can't write the panel over the file that changed. There is no "save anyway" option that quietly overwrites it.

You have two ways forward. You can export a copy to keep your version, using the same export you use to share a palette or collection. Your chips go into a JSON file you name, and the changed file stays as the other program left it. Or you can choose **Reload saved colors**, which drops your unsaved palette edits and loads the file on disk.

If you quit with unsaved palette edits, the prompt is **Save all**, **Discard** or **Cancel**. Save all writes the libraries and waits. If that write fails or hits a conflict, you stay in the app with the document open, and you can export a copy, reload, or resolve the file outside the app and try again. Discard drops the unsaved palette edits. Cancel takes you back with the edits intact. Unsaved artwork gets its own prompt afterward. You answer the palette first, and the poster question still comes, but not while a palette write is failing.

The same rule applies to personal and project books. Unsaved edits stay, Save blocks when the file changed, and the three-second check works the same for both.

The panel won't merge a disk change into your unsaved chips by matching names. Merging is what **Load palettes…** does when you ask, with suffixes on collisions, and even that waits for Save. A background conflict stops the save and leaves the choice to you.

## In the hand

Select the object whose color is almost right and open **Palettes**. If this green is for every personal sketch, click **Personal**. If it is the client's, click **Project**. If Project has no folder yet, choose the project folder first. An unsaved document needs **Choose a project** before a project book has somewhere to live.

```
+ Palette
```

Name it and click Rename. Then click **From selection** if the fill and stroke on the object are the chips you want. Or set up a color and click **+ Current color**. Or paste a hex from the brand email and click **+**.

Choose **Fill** and click a swatch, and the selection fills. Choose **Stroke** and click another swatch, or right-click that swatch without switching. Either way, the stroke updates.

Filter by typing the palette name, or `173F35`, until the list shows the one chip you want.

Switch to Personal, add a chip, and switch back to Project. The project list doesn't show the personal chip. A color only goes into the book you are looking at when you add it.

Now press the palette Save. The button is on the palette itself. The File menu next to the poster doesn't have it. Then save the poster with Ctrl+S if it changed. Those are two separate writes from the same tab. If you quit first, the quit prompt will ask.

```
Save
```

For a project book, that writes `.omacolors`. You can confirm it in the folder with hidden files visible, and open the JSON to see the hex. If the panel has unsaved changes, close the file without editing it, because outside edits have their own rules while the panel is unsaved. Save first if you want the disk to match the panel.

To bring a book in, choose **··· > Load palettes…** and pick the JSON. Scroll the list. Your old palettes and the new ones are both there, and collisions have suffixes. If the merge is what you wanted:

```
Save
```

If it was the wrong file, don't Save. Reload the saved colors when you want the panel to match disk again, or choose Discard when quit asks. Until you Save, the import only exists in the session.

To send a book out, choose **··· > Export selected palette…** for one palette or **Export collection…** for all of them, and pick a path. You can put that file in another project folder and load it there. The destination's existing palettes stay, with suffixes on names that clash.

Duplicate a palette before a risky experiment, remove one you won't use, and Save. Colors already applied to artwork don't disappear with the swatch.

To see conflict handling, add a chip and don't press Save. In another window, change the `.omacolors` on disk and wait a few seconds. Then press Save.

```
Save
```

Save doesn't write. Your new chip is still in the panel and the file on disk still has the other version, so neither has been lost.

Choose **··· > Export collection…**, or export the selected palette, and put that JSON somewhere safe. That preserves your version. If the disk version is the one you want to keep working from, choose **Reload saved colors**. The panel now matches the file. Your unsaved chip is gone from the panel but still in the export you just wrote. Load that export later if you want it back, and Save when the merge should stay.

If your panel should win, don't reload. Move the other file aside, or finish the outside edit so there is no longer a conflict, then Save. If Save is still blocked, exporting still keeps your data. You never have to reload to keep a copy.

Now quit while the palette has unsaved edits and the conflict is unresolved. The prompt appears.

```
Save all · Discard · Cancel
```

Click Cancel. You are still in the document with the palette edits in the panel, and the poster hasn't been asked to save yet. Resolve the palette and quit again. The artwork prompt follows once the palette write can finish. If photo sidecars also had unsaved changes, the app asked about them before this. Answer the prompts in the order the app asks. You can't force a different order from the File menu.

## The edge

The panel won't guess which book you meant. Personal and Project are separate lists, and a chip added on one side stays there. Nothing gets silently copied into the other book.

Clicking a swatch doesn't save the palette, and the palette's Save doesn't save the artwork. Fill and Stroke set the target, and right-click applies to the stroke without changing it. Alpha is stored in the hex, so a swatch never drops `#RRGGBBAA` to six digits and calls it the same color.

Load won't replace your book. It merges and adds numbered suffixes to conflicting names, and the file on disk doesn't change until you press the palette's Save. Export writes a copy and only overwrites `.omacolors` if you point it there yourself.

A background refresh won't overwrite unsaved palette edits, and Save won't overwrite a file that changed under them. Export a copy to keep your version, or choose **Reload saved colors** to take the disk version. Quit won't exit while a library save is failing or in conflict. **Cancel** keeps you in the app, and the artwork prompt waits its turn.
