---
id: T097
title: Brand typography kit
slug: omadesign-0-5-8-brand-typography-kit
excerpt: Add fonts… copies TTF and OTF files into the project. Name the kit, save roles such as Heading and Body, and Apply them to text. The faces work inside Omadesign with no system install.
tags: [omadesign, 0.5.8, typography]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-typography-kit/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-brand-typography-kit/og.png
---

## The habit

In Illustrator the Character panel is where the face gets chosen. You click the family menu. You pick a weight. If the menu is missing the face, you leave the document, install the font, and come back. Paragraph styles then remember the names the layout actually uses: Heading, Body, Caption. The style stores a family name. The font file lives in the operating system, or in a service that turns the face on when an account is signed in.

Affinity runs the same job through its font manager. The document records the family. The bytes sit in a system folder, or in a library that is not the job folder. Hand the file to another machine and you find out at open whether that machine has the face. Photoshop does it with the type tool and a font menu that searches installed faces. A missing font throws a warning. The fix is still an install, or a substitution you accept and then regret when the line wraps differently.

The hand already knows the sequence. Type tool. Select the line. Pick the family. Name the style so the next headline does not land in the body face by accident. The bytes of the font are somebody else's problem until the file moves.

## The constraint

Omadesign is one binary on Linux. The artwork is one `.oma`. The brand sits in the project folder beside that file. `.omatype` holds the role names. `.omabrand/fonts/` holds the font files. A saved document uses the nearest enclosing folder that already contains `.omacolors`, `.omatype`, or `.omabrand/`. If none of those exists, the library starts beside the document. An unsaved document has no folder yet. Choose a project, or use the folder button to point the libraries at the folder you mean.

There is no account step that activates a face because you signed in. There is no dialog in this kit that registers a font for every application on the machine. Linux fontconfig will serve a face you installed for the user. That is a different decision, and this kit does not require it. If the headline has to set on the next machine, the face has to be a file in the project.

Undo stays one step. Applying a face to live text is an edit to the artwork, so it undoes. The kit's names and files are a library, the way palettes are a library. They keep their own save. Quitting must not pretend a half-named role was part of the artboard undo stack. Palette edits already work this way. Typography follows the same split so a font file and a headline are not one blob.

## What landed

Open Brand, then Typography. Add fonts… copies TTF or OTF files into the project. The originals stay where you picked them. The project gets its own copy. Faces you add through the panel receive stable filenames. You do not hand-edit a path to keep the kit valid, and you do not rename the file on disk to match a family string you typed.

Name the kit and click Save name. Select a font row. Give the role a name you will still understand in six months. Heading, Body, and Caption are the useful ones. Click Save role. Either save button keeps both pending edits. A kit name you have not saved, and a role name you have not saved, go together. One button does not drop the other draft on the floor.

Filter the list by role, family, or filename once the kit is longer than the three faces you started with.

Click Apply beside a role. Selected text takes that role. With nothing selected, the next text you create uses it. The Character panel's font picker also lists Project fonts, so the same face is there when you are already in the type controls and you do not want to walk back to the Brand tab. Applying a font to artwork supports Undo. Ctrl+Z returns the text to the face it had. The kit's names and the files on disk do not ride that undo. You save the kit when the names are right. You undo the art when the apply was the wrong line.

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

Paths are relative to `.omabrand/`. The font files stay inside its `fonts/` folder. The name file needs no absolute path. Those example filenames are examples. Yours will differ, and the panel's stable names are the ones Add fonts… actually wrote. Share the files only under their license terms. The kit copies bytes you pointed at. It does not grant a license the foundry did not.

Fonts are available inside Omadesign without installing them on the computer. Shaping uses the project copy.

External font changes refresh in the background. Text that already has a face keeps that face. Click Apply again when you want the line to pick up the file that changed on disk. If the kit file changes while you are editing a name, the panel preserves your draft and reports the conflict. Typography, then the ··· menu, then Reload typography discards the draft and loads the saved kit.

## In the hand

Open the `.oma`, or choose a project for a document that has never been saved.

1. Open the right sidebar. Click Brand. Click Typography.
2. Click Add fonts…. Choose the TTF or OTF files. The panel copies them into `.omabrand/fonts/`.
3. Type the kit name. Click Save name.
4. Select the display-face row. Type Heading. Click Save role.
5. Select the reading face. Type Body. Click Save role.
6. Press T. Draw a text box, or select a headline already on the artboard.
7. Click Apply on the Heading row.

The selected line, or the next line you create, uses that face. Project fonts in the Character picker lists it. Ctrl+Z undoes the apply on the artwork. The role remains in the kit, because Save role already wrote it with the kit's own control.

If someone drops another file into `.omabrand/fonts/` while the panel is open, the list catches up in the background. Lines you already set keep their face until you Apply again. If you were mid-name when that file changed, your draft stays put and the panel tells you the kit on disk moved. Reload typography is the control that throws your draft away and reads the saved kit. Use it when the disk copy is the one you want.

A second project is a different folder. The folder button switches libraries. Add fonts… copies into the project you have selected, not into a global font chest shared by every `.oma` on the machine. Personal palette colors are the ones that follow you across work. Project fonts follow the folder.

## The edge

Add fonts… does not install the face for the rest of the computer. Other applications keep the font menu they already had. Omadesign reads the copy under `.omabrand/fonts/` when it sets project text. A machine that opens the `.oma` without that folder will not invent the outlines from a family name stored in the document. The bytes have to be in the kit.

The license is yours to respect. The panel will copy a file you can read. It will not decide that the foundry allows the copy. You share fonts only under their license terms.

Open Brand, then Typography, and click Add fonts….
