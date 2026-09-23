---
id: T091
title: Personal vs project palettes
slug: omadesign-0-5-8-personal-vs-project-palettes
excerpt: Palettes are Personal across your work or Project in the current folder. Name a palette, filter it, add the current color, the selection, or a hex including #RRGGBBAA, then click a swatch onto Fill or Stroke.
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
