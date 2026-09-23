---
id: T098
title: Typography load save copy
slug: omadesign-0-5-8-typography-load-save-copy
excerpt: Load kit… merges another .omatype and copies its fonts. Save copy… writes the kit and the faces into another project. Remove a role and the font file stays for artwork that already uses it.
tags: [omadesign, 0.5.8, typography]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-typography-load-save-copy/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-typography-load-save-copy/og.png
---

## The habit

Once a studio has paragraph styles, the next job is moving them. In Illustrator you load styles from another document, or you paste a text frame and let the style come along with a name collision you sort out later. Delete a style and the text usually keeps its formatting. The style name goes. The glyphs stay. The font file, if it was a document font or a packaged font, is a separate question you answer in a package dialog.

Affinity's font manager and style list split the same way. You can import a set. You can remove a style. You still have to know whether the face is installed on the machine or trapped in the file you imported from. Photoshop is thinner here. Character styles travel inside the PSD. The font installer is still the operating system. None of these dialogs are a folder you can copy with the job when the job is a directory on Linux.

The hand wants three operations and no fourth mystery. Bring a kit in. Send a kit out. Remove a role you no longer want in the menu, without stripping the face off headlines that already use it.

## The constraint

The typography kit is `.omatype` plus the files under `.omabrand/fonts/`. Paths inside `.omatype` are relative to `.omabrand/`. A kit file sitting alone, with the font folder somewhere else on disk, is a list of names pointing at nothing. Load has to copy the faces, and it has to know where the source brand folder is. The manual is plain about that: keep the source `.omabrand/` beside the `.omatype` you are loading.

One project already has roles. Loading another kit must not wipe Heading because the incoming file also has a life. The operation is a merge. Save copy has to write both the kit and the fonts into the destination project, because a `.omatype` without its `fonts/` folder is a broken relative path. Pending name edits are not on disk yet. Save copy has to be told to save those names first, or it would write the previous kit and leave your new role behind.

Remove is the sharp case. A role is a name in JSON. The font file is bytes that existing text may still shape with. Deleting the name and deleting the file in one gesture would change old artwork as a side effect of cleaning a menu. Undo on the artboard is one step, and it is the wrong tool for a library delete. The file stays.

## What landed

On the Typography tab, the ··· menu has Load kit… and Save copy….

Load kit… merges another `.omatype` into the project you have open and copies that kit's font files. The source `.omabrand/` has to stay beside the source `.omatype`. The loader reads the relative paths from that pair. It copies the faces into the destination project's brand folder. Roles you already saved remain. The incoming kit adds its roles and its files. This is a merge, the same idea as loading palettes: existing colors stay, and the import adds what you asked for. Save the kit after you are happy with the merge. The kit has its own save, separate from Ctrl+S on the artwork.

Save copy… writes the saved kit and its fonts into another project folder. Save pending name edits first. If Heading is still a draft in the panel, Save copy writes the kit that is already saved, not the word you have not committed. Click Save name or Save role before Save copy…. Either of those buttons keeps both pending name and role edits, so one save clears both drafts onto disk. Then Save copy… has something real to write.

Removing a role keeps its font file for artwork that already uses it. The role leaves the list. The TTF or OTF remains in `.omabrand/fonts/`. Text that was set with that face still has the file it needs. You can Apply a different role later, on purpose, with Undo on the artwork. Cleanup of the menu is not a silent restyle.

External font changes still refresh in the background. Existing text keeps its applied face until you click Apply again. If the kit on disk changes while you are editing a name, the panel preserves the draft and reports the conflict. Reload typography, on the same ··· menu, discards the draft and loads the saved kit. Use that when the file from disk is the one you meant, including after a load you want to abandon before you have saved.

The destination of Save copy… is another project folder, the same kind of folder Brand already uses for a bank. The written result is a `.omatype` and a `fonts/` directory under that project's `.omabrand/`. Open the destination later, and Typography lists the roles. Project fonts in the Character panel lists the faces. Nothing was installed on the system on either machine.

## In the hand

You have two job folders. This one has a kit. The other one needs it.

1. In the source project, open Brand, then Typography.
2. If the kit name or a role name is still unsaved, click Save name or Save role. Confirm the rows show the names you want copied.
3. Leave `.omatype` and `.omabrand/` next to each other in the source folder. Do not ship the JSON to a USB stick and leave `fonts/` at home.
4. On the destination project, open Typography. Open ···. Click Load kit…. Choose the source `.omatype`.
5. The panel merges the roles and copies the font files. Existing roles in the destination stay. Click the kit save once the merge looks right.
6. The other direction is ···, then Save copy…. Pick the other project folder. The saved kit and its fonts are written there.

To drop a role you no longer want on the menu, remove the role. Then look in `.omabrand/fonts/`. The face is still there. Select a headline that used it. The glyphs are still set. Apply a different role only if you mean to change that line. Ctrl+Z undoes that apply. It does not resurrect a role you removed, and it does not delete the font file, because neither of those was an artwork edit.

If Load kit… cannot see the faces, check the source pair. The `.omatype` paths look like `fonts/Display.ttf`, relative to `.omabrand/`. The brand folder has to be beside that file, with the fonts inside it. A renamed folder or a kit emailed without `.omabrand/` is a list of missing paths. Put the pair back together and load again.

## The edge

Remove role keeps the font file. The command will not delete the TTF or OTF out from under artwork that already uses it. The menu gets shorter. The bytes stay in `.omabrand/fonts/` until you remove the file yourself, on purpose, knowing which lines still depend on it.

Load kit… will not invent font bytes from a family name. If the source `.omabrand/` is not beside the `.omatype`, there is nothing honest to copy. Save copy… will not scoop up unsaved role names. Save the names, then copy the kit.

Open Typography, open ···, and click Load kit… with the source `.omabrand/` still beside that `.omatype`.
