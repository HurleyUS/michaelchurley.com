---
id: T033
title: OpenType character studio
slug: omadesign-0-5-8-opentype-character-studio
excerpt: Character studio sets kerning, ligatures, tabular figures, and small caps on the text you already have. Project fonts from Brand → Typography show up in the font picker without a system install.
publishedAt: 2026-09-06T10:51:01Z
tags: [omadesign, 0.0.1-alpha, type]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-opentype-character-studio/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-opentype-character-studio/og.png
---

## The habit

OpenType is the panel you open once the words are right. In Illustrator it's the Character and OpenType panels: kerning for a pair, standard ligatures for fi and fl, tabular figures so a column of prices lines up, and small caps so a label stops looking shouted. Affinity puts the same switches in its typography studio. Photoshop has a shorter list, and you still go looking for it the moment a headline looks cheap.

The font menu is the other habit, and it's where jobs fall apart. The brand face is installed on your machine but not on the laptop that opens the file tomorrow. Illustrator and Affinity substitute. You spend the morning reinstalling a license you already had, or outlining the text so the picture holds and the words are no longer editable. A serious file carries the faces it uses. The system font menu is the wrong place to keep a client kit.

You also name roles, like heading, body and caption. You apply the role instead of scrolling a five-hundred-font menu for "Söhne Halbfett" spelled three different ways. The role is the decision and the file is the storage.

## The constraint

The `.oma` has to be portable. Copy the project folder to another Linux machine and the headline has to open as text, in the same face, and accept new characters. That only works if the font file travels inside the project. Omadesign copies TTF and OTF files into the project and lists them as Project fonts. It doesn't install them on the computer. A system install would spread client faces into every other app and require a privilege a drawing tool shouldn't have. The fonts stay in the folder you already share.

The kit has a defined structure. `.omatype` names the roles and `.omabrand/fonts/` holds the files. Paths inside `.omatype` are relative to `.omabrand/`, with no absolute paths, so the folder still works after you move it. Saving artwork into another folder copies the faces it uses into that folder's `.omabrand/fonts/`, and the text stays editable after the move.

SVG export has a different job, because the person opening an SVG may not have the kit. Project-font text exports as vector outlines so the picture holds, while the `.oma` keeps the editable text. You share the SVG as a picture and the project as the source. Share fonts only as their license allows. The tool will copy any file you added, but respecting the license is still up to you.

Character studio is where the face meets the letters. Font, size, tracking and leading are the measurements. Kerning, ligatures, tabular figures and small caps are the OpenType options the face may support. They have to be on the text object in the same inspector, because a separate typography app would be exactly the Creative Cloud detour this document exists to avoid.

## What landed

Select some type, and Character studio shows the OpenType row: kerning, ligatures, tabular figures and small caps. Kerning adjusts a pair. Ligatures substitute a combined glyph where the font has one. Tabular figures use column-aligned figure spacing, if the font includes those figures. Small caps use small-cap glyphs, if the font includes them. You turn on what the face contains.

The font picker in the same Character panel lists Project fonts alongside the faces already on the machine, so a kit font shows up without a system install.

Build the kit from Brand > Typography. Add fonts… copies TTF or OTF files into the project and leaves the originals where they were. Name the kit and click Save name. Select a font row, give it a role such as Heading, Body, Caption or whatever you'd actually say out loud, and click Save role. Either save button keeps pending name and role edits together. When the kit gets long, filter the list by role, family or filename.

Click Apply next to a role and it's applied to the selected text, or becomes the face for the next text you create with T. Applying a font to artwork can be undone. The kit's names and files have their own save controls, separate from Ctrl+S on the poster, so renaming a role isn't the same undo step as moving a rectangle.

Removing a role keeps the font file for artwork that already uses it, so the headline doesn't go blank when you tidy up a label. If a face changed on disk and existing text should use the new file, click Apply again. Otherwise existing text keeps the face it had.

External font changes refresh in the background. If the kit changes while you're editing a name, the panel keeps your draft and reports the conflict. Typography > ··· > Reload typography discards the draft and loads the saved kit.

Load kit… merges another `.omatype` and copies its font files, so keep that kit's `.omabrand/` next to its source file when you do this. Save copy… writes the saved kit and its fonts into another project folder. Save pending name edits first.

You use the font picker while setting type and the Brand tab while building the kit. Both see the same project fonts.

## In the hand

Put the client's font files on disk. Open Brand > Typography, choose Add fonts… and pick the TTF or OTF files. Name the kit after the client and click Save name. Click the display face, call the role Heading and click Save role. Click the text face, call it Body and click Save role.

Press T, click and type the headline. In Character studio, open the font picker and choose the Heading face under Project fonts, or select the headline and click Apply on the Heading row. The letters take the face. If you picked the wrong row, Ctrl+Z restores the previous face.

Set the size, then the OpenType row. Turn on ligatures for a wordmark with a pairing the font designer drew on purpose, tabular figures for a price, and small caps for an eyebrow label. Set kerning where a pair collides. Tracking and leading sit next to those and apply to the whole block.

Move the project folder, open the `.oma` on the other machine, double-click the headline and type another word. It's still in the project face, and new characters use it.

When someone needs a picture, export an SVG, and the project-font text goes out as outlines. Keep the `.oma` if they'll need to change the words later.

```
Brand → Typography → Add fonts…    TTF or OTF into the project
Save role                          Heading, Body, Caption
Apply                              Selected text, or the next text
Character studio                   Font, size, tracking, leading
OpenType                           Kerning, ligatures, tabular figures, small caps
```

`.omatype` and `.omabrand/fonts/` travel with the project, and `.omacolors` is the palette file next to them if you're sharing the whole kit. Their names start with a dot, so show hidden files when you copy by hand.

## The edge

Project fonts stay out of the system font directory. They're available inside Omadesign but aren't installed on the computer. Other applications won't see the kit unless you install those faces yourself, on purpose, under the license you have.

Removing a role never pulls the file out from under artwork that uses it. The label goes and the font file stays.
