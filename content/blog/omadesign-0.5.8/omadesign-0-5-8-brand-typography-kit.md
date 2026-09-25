---
id: T097
title: Brand typography kit
slug: omadesign-0-5-8-brand-typography-kit
excerpt: Add fonts… copies TTF and OTF files into the project. Name the kit, save roles such as Heading and Body, and Apply them to text. The faces work inside Omadesign with no system install.
publishedAt: 2026-09-06T10:48:01Z
tags: [omadesign, 0.0.1-alpha, typography]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-typography-kit/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-typography-kit/og.png
---

## The habit

In Illustrator you choose a face in the Character panel. You click the family menu and pick a weight. If the face is missing from the menu, you leave the document, install the font, and come back. Paragraph styles then remember the names the layout actually uses, such as Heading, Body, and Caption. The style stores a family name, and the font file lives in the operating system or in a service that activates the face when you are signed in.

Affinity does the same job through its font manager. The document records the family, and the font file sits in a system folder or in a library outside the job folder. Hand the file to another machine and you only find out at open whether that machine has the face. Photoshop uses the type tool and a font menu that searches installed faces. A missing font shows a warning, and the fix is still an install, or a substitution you accept and then regret when the line wraps differently.

The sequence is familiar: type tool, select the line, pick the family, and name the style so the next headline doesn't land in the body face by accident. Nobody thinks about the font file until the job moves.

Once a studio has paragraph styles, the next job is moving them. In Illustrator you load styles from another document, or paste a text frame and let the style come along with a name collision to sort out later. Delete a style and the text usually keeps its formatting: the style name goes and the glyphs stay. Whether the font file travels, as a document font or a packaged font, is a separate question you answer in a package dialog. Affinity's font manager and style list split the same way. You can import a set and remove a style, but you still have to know whether the face is installed on the machine or stuck in the file you imported from. Photoshop does less here. Character styles travel inside the PSD, and the operating system still installs the fonts. None of these dialogs gives you a folder you can copy with the job when the job is a directory on Linux.

I wanted a kit that lives in the job folder, plus three operations for moving it: bring a kit in, send a kit out, and remove a role from the menu without stripping the face off headlines that already use it.

## The constraint

Omadesign is one binary on Linux, and the artwork is one `.oma`. The brand sits in the project folder beside that file. `.omatype` holds the role names, and `.omabrand/fonts/` holds the font files. Paths inside `.omatype` are relative to `.omabrand/`. A saved document uses the nearest enclosing folder that already contains `.omacolors`, `.omatype`, or `.omabrand/`. If none exists, the library starts beside the document. An unsaved document has no folder yet, so choose a project, or use the folder button to point the libraries at the folder you mean.

Signing in to an account does not activate a face, and nothing in this kit registers a font for every application on the machine. Linux fontconfig will serve a face you installed for your user, but that is a separate decision and this kit does not require it. If the headline has to set correctly on the next machine, the face has to be a file in the project.

Undo stays one step. Applying a face to live text is an edit to the artwork, so it undoes. The kit's names and files are a library, like palettes, and they have their own save. A half-named role should never end up in the artboard's undo stack. Palette edits already work this way, and typography follows the same split so a font file and a headline stay separate things.

Moving a kit adds more rules. A kit file on its own, with the font folder somewhere else on disk, is a list of names pointing at nothing. Load has to copy the faces, so it has to know where the source brand folder is. The manual says to keep the source `.omabrand/` beside the `.omatype` you are loading. If the project already has roles, loading another kit must not wipe out its Heading just because the incoming file has one too, so loading merges. Save copy has to write both the kit and the fonts into the destination project, because a `.omatype` without its `fonts/` folder is a broken relative path. Name edits that are still pending aren't on disk yet, so they have to be saved before Save copy, or it would write the previous kit and leave your new role behind.

Removing a role is the delicate case. A role is a name in JSON, while the font file holds data that existing text may still use. Deleting the name and the file in one gesture would change old artwork as a side effect of cleaning up a menu. Artboard undo is the wrong tool for a library delete, so the file stays.

## What landed

### Building a kit

Open Brand, then Typography. Add fonts… copies TTF or OTF files into the project. The originals stay where you picked them, and the project gets its own copy. Faces you add through the panel get stable filenames, so you never hand-edit a path to keep the kit valid or rename a file on disk to match a family name you typed.

Name the kit and click Save name. Select a font row, give the role a name you will still understand in six months (Heading, Body, and Caption are the useful ones), and click Save role. Either save button saves both pending edits, so an unsaved kit name and an unsaved role name are kept together and neither draft is lost.

Once the kit has more than the three faces you started with, filter the list by role, family, or filename.

Click Apply beside a role. Selected text takes that role, or, with nothing selected, the next text you create uses it. The Character panel's font picker also lists Project fonts, so the same face is available when you are already in the type controls and don't want to go back to the Brand tab. Applying a font to artwork supports Undo, and Ctrl+Z returns the text to its previous face. That undo does not touch the kit's names or the files on disk. You save the kit when the names are right, and you undo on the artwork when you applied to the wrong line.

The names live in `.omatype`, which is readable JSON:

```json
{
  "version": 1,
  "name": "Fieldwork typography",
  "roles": [
    { "name": "Heading", "font": "fonts/Display.ttf" },
    { "name": "Body", "font": "fonts/Reading.otf" }
  ]
}
```

Paths are relative to `.omabrand/`, and the font files stay inside its `fonts/` folder, so the name file needs no absolute paths. The filenames above are only examples. Yours will be the stable names Add fonts… actually wrote. Share the files only under their license terms. The kit copies the files you pointed at and does not grant any license the foundry didn't.

Fonts are available inside Omadesign without installing them on the computer. Text shaping uses the project copy.

External font changes refresh in the background. Text that already has a face keeps it until you click Apply again to pick up the changed file. If the kit file changes on disk while you are editing a name, the panel keeps your draft and reports the conflict. Typography > ··· > Reload typography discards the draft and loads the saved kit. Use it when the disk copy is the one you want, including after a load you want to abandon before saving.

### Loading, copying, and removing

On the Typography tab, the ··· menu has Load kit… and Save copy….

Load kit… merges another `.omatype` into the open project and copies that kit's font files. The source `.omabrand/` has to stay beside the source `.omatype`, because the loader reads the relative paths from that pair and copies the faces into the destination project's brand folder. Roles you already saved remain, and the incoming kit adds its roles and files. It works like loading palettes, where existing colors stay and the import adds what you asked for. Save the kit once you are happy with the merge. The kit's save is separate from Ctrl+S on the artwork.

Save copy… writes the saved kit and its fonts into another project folder, the same kind of folder Brand already uses for a bank. The result is a `.omatype` and a `fonts/` directory under that project's `.omabrand/`. Save pending name edits first. If Heading is still a draft in the panel, Save copy writes the kit that is already saved and leaves out the name you haven't committed. Click Save name or Save role before Save copy…. Either button saves both pending name and role edits, so Save copy… then has the current kit to write. When you open the destination later, Typography lists the roles and Project fonts in the Character panel lists the faces. Nothing gets installed on the system on either machine.

Removing a role keeps its font file for artwork that already uses it. The role leaves the list, but the TTF or OTF stays in `.omabrand/fonts/`, and text set with that face still has the file it needs. You can Apply a different role later, deliberately, with Undo on the artwork. Cleaning up the menu never restyles text silently.

## In the hand

Open the `.oma`, or choose a project for a document that has never been saved.

1. Open the right sidebar. Click Brand, then Typography.
2. Click Add fonts… and choose the TTF or OTF files. The panel copies them into `.omabrand/fonts/`.
3. Type the kit name and click Save name.
4. Select the display face row, type Heading, and click Save role.
5. Select the reading face, type Body, and click Save role.
6. Press T. Draw a text box, or select a headline already on the artboard.
7. Click Apply on the Heading row.

The selected line, or the next line you create, uses that face, and Project fonts in the Character picker lists it. Ctrl+Z undoes the apply on the artwork. The role stays in the kit, because Save role already wrote it with the kit's own control.

If someone drops another file into `.omabrand/fonts/` while the panel is open, the list updates in the background. Lines you already set keep their face until you Apply again. If you were in the middle of typing a name when that file changed, your draft stays and the panel tells you the kit on disk changed. Reload typography throws your draft away and reads the saved kit. Use it when the disk copy is the one you want.

A second project is a different folder, and the folder button switches libraries. Add fonts… copies into the selected project, and there is no global font store shared by every `.oma` on the machine. Personal palette colors follow you across jobs. Project fonts stay with the folder.

To move the kit, say you have two job folders. This one has a kit and the other one needs it.

1. In the source project, open Brand, then Typography.
2. If the kit name or a role name is still unsaved, click Save name or Save role. Confirm the rows show the names you want copied.
3. Keep `.omatype` and `.omabrand/` next to each other in the source folder. Don't copy the JSON to a USB stick and leave `fonts/` at home.
4. In the destination project, open Typography, open ···, click Load kit…, and choose the source `.omatype`.
5. The panel merges the roles and copies the font files. Existing roles in the destination stay. Save the kit once the merge looks right.
6. For the other direction, use ··· > Save copy… and pick the other project folder. The saved kit and its fonts are written there.

To drop a role you no longer want in the menu, remove it, then look in `.omabrand/fonts/`. The face is still there. Select a headline that used it and the glyphs are still set. Apply a different role only if you mean to change that line. Ctrl+Z undoes that apply. It does not bring back a removed role or delete the font file, because neither was an artwork edit.

If Load kit… can't find the faces, check the source pair. The `.omatype` paths look like `fonts/Display.ttf`, relative to `.omabrand/`, so the brand folder has to sit beside that file with the fonts inside it. A renamed folder, or a kit emailed without `.omabrand/`, leaves only missing paths. Put the pair back together and load again.

## The edge

Add fonts… does not install the face for the rest of the computer, and other applications keep the font menus they already had. Omadesign reads the copy under `.omabrand/fonts/` when it sets project text. A machine that opens the `.oma` without that folder can't rebuild the outlines from the family name stored in the document, so the font files have to be in the kit.

Remove role keeps the font file and never deletes a TTF or OTF that artwork still uses. The menu gets shorter, and the file stays in `.omabrand/fonts/` until you delete it yourself, knowing which lines still depend on it.

Load kit… can't create font files from a family name. If the source `.omabrand/` isn't beside the `.omatype`, there is nothing to copy. Save copy… doesn't include unsaved role names, so save the names first, then copy the kit.

Respecting the license is up to you. The panel will copy any file you can read, and it can't tell whether the foundry allows the copy. Share fonts only under their license terms.
