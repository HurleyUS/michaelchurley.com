---
id: T033
title: OpenType character studio
slug: omadesign-0-5-8-opentype-character-studio
excerpt: Character studio sets kerning, ligatures, tabular figures, and small caps on the text you already have. Project fonts from Brand → Typography show up in the font picker without a system install.
publishedAt: 2026-08-29T16:32:47Z
tags: [omadesign, 0.0.0.0alpha-rc, type]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-opentype-character-studio/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-opentype-character-studio/og.png
---

## The habit

OpenType is the row you open after the words are right. In Illustrator it lives in the Character panel and the OpenType panel: kerning for a pair, standard ligatures for fi and fl, tabular figures so a column of prices lines up, small caps so a label stops looking like it was set in a shout. Affinity puts the same switches on its typography studio. Photoshop has a shorter list and you still go looking for it the moment a headline feels cheap.

The font menu is the other habit, and it is where jobs go to die. The brand face is installed on your machine. It is not installed on the laptop that opens the file tomorrow. Illustrator substitutes. Affinity substitutes. You spend the morning reinstalling a license you already had, or outlining the text so the picture holds and the words die. A serious file carries the faces it uses. The system font menu is the wrong cupboard for a client kit.

You also name roles. Heading, body, caption. You apply the role, you do not scroll a five-hundred-font menu looking for "Söhne Halbfett" spelled three different ways. The role is the decision. The file is the storage.

## The constraint

The `.oma` has to move. Copy the project folder to another Linux machine and the headline has to open as text, with the same face, and you have to be able to type new characters. That only works if the font file travels inside the project. Omadesign copies TTF and OTF files into the project and lists them as Project fonts. It does not install them on the computer. A system install would spread client faces into every other app and would ask for a privilege the drawing tool should not have. One binary. Fonts stay in the folder you already share.

The kit has a shape. `.omatype` names the roles. `.omabrand/fonts/` holds the files. Paths inside `.omatype` are relative to `.omabrand/`. No absolute path, so the folder still works when you move it. Saving artwork into another folder copies the faces that artwork uses into that folder's `.omabrand/fonts/`. The text stays editable after the move.

SVG export has a different job. The person who opens an SVG may not have the kit. Project-font text exports as vector outlines so the picture holds. The `.oma` keeps the editable text. You share the SVG as a picture and the project as the source. You also share fonts only under their license. The tool will copy a file you added. The license is still yours to respect.

Character studio is where the face meets the letters. Font, size, tracking, and leading are the measurements. Kerning, ligatures, tabular figures, and small caps are the OpenType decisions the face is able to honor. They have to sit on the text object in the same inspector, because a separate typography app would be the Creative Cloud hop this document exists to avoid.

## What landed

Select type. Character studio offers the OpenType row: kerning, ligatures, tabular figures, small caps. Kerning adjusts a pair. Ligatures substitute the combined drawing where the font has one. Tabular figures use the figure spacing that lines up in columns, when the font shipped those figures. Small caps use the small-cap glyphs, when the font shipped them. You turn on what the face contains. The row is those four.

The font picker in that same Character panel lists Project fonts beside the faces the machine already has. A kit font shows up there without a system install.

Build the kit from Brand → Typography. Add fonts… copies TTF or OTF files into the project. The originals stay where they were. Name the kit and click Save name. Select a font row, name the role Heading or Body or Caption or whatever you will actually say out loud, and click Save role. Either save button keeps pending name and role edits together. Filter the list by role, family, or filename when the kit gets long.

Click Apply beside a role. It hits the selected text, or it becomes the face for the next text you create with T. Applying a font to artwork supports undo. The kit's names and files have their own save controls, separate from Ctrl+S on the poster. You can change a role name without that change being the same undo as a moved rectangle.

Removing a role keeps the font file for artwork that already uses it. The headline does not go blank because you cleaned a label. Click Apply again if a face changed on disk and existing text should adopt the new file. Existing text otherwise keeps the face it had.

External font changes refresh in the background. If the kit changes while you are editing a name, the panel keeps your draft and reports the conflict. Typography → ··· → Reload typography discards the draft and loads the saved kit.

Load kit… merges another `.omatype` and copies its font files. Keep that kit's `.omabrand/` beside the source file when you do. Save copy… writes the saved kit and its fonts into another project folder. Save pending name edits first.

The font picker is the part you touch while setting type. The Brand tab is the part you touch while building the cupboard. Both see the same project fonts.

## In the hand

Put the client files on disk. Open Brand → Typography. Add fonts… and choose the TTF or OTF files. Name the kit after the client. Save name. Click the display face, call the role Heading, Save role. Click the text face, call it Body, Save role.

Press T, click, type the headline. In Character studio, open the font picker and choose the Heading face under Project fonts. Or select the headline and click Apply on the Heading row. The letters take the face. Ctrl+Z returns the previous face if you hit the wrong row. Apply is undoable on the artwork.

Set the size. Then the OpenType row. Turn ligatures on for a wordmark that has a pairing the font drew on purpose. Turn tabular figures on for a price. Turn small caps on for an eyebrow label. Set kerning where a pair crashes. Tracking and leading are next to those, for the block as a whole.

Move the project folder. Open the `.oma` on the other side. Double-click the headline and type another word. The face is still the project face. New characters use it.

Export an SVG when someone needs a picture. The project-font text goes out as outlines. Keep the `.oma` if they need to change the words later.

```
Brand → Typography → Add fonts…    TTF or OTF into the project
Save role                          Heading, Body, Caption
Apply                              Selected text, or the next text
Character studio                   Font, size, tracking, leading
OpenType                           Kerning, ligatures, tabular figures, small caps
```

`.omatype` and `.omabrand/fonts/` travel with the project. `.omacolors` is the palette file beside them if you are sharing the whole kit. Show hidden files when you copy by hand. The names start with a dot.

## The edge

Project fonts refuse the system font directory. They are available inside Omadesign. They are not installed on the computer. Another application on the machine will not see the kit unless you install those faces yourself, on purpose, under the license you have.

Removing a role refuses to strip the file out from under artwork that already uses it. The bytes stay. The label goes.

Open Character studio, pick the Project font, and set the OpenType row on the headline you just typed.
