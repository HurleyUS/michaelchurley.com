---
id: T100
title: Share project kit
slug: omadesign-0-5-8-share-project-kit
excerpt: A project kit is .omacolors, .omatype, and the whole .omabrand folder beside the work. They are dotfiles. Show hidden files before you copy by hand. Fieldwork ships as a portable reference.
tags: [omadesign, 0.5.8, project-kit]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-share-project-kit/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-share-project-kit/og.png
---

## The habit

A brand kit in Illustrator or Photoshop usually means a library tied to an account. Swatches, character styles, logos, a CC Library you pull from a panel that is not the job folder. You share it by inviting an email. The other person signs in. The assets arrive if the service is up and the invite was the right one. Affinity can store assets in the application and package a document for handoff. The package is a special export. The everyday folder, the one you already keep in git or on a drive, is not the kit.

The hand still wants the dumb version. Copy the folder. Send the folder. Open the folder on the other machine. Colors, type roles, logos, and the working files are all there. No account. No "library not available" because a hostname failed. The failure mode you actually hit is the file manager. It hides names that start with a dot, you copy what you can see, and the other machine gets the `.oma` with none of the brand.

## The constraint

Project libraries live beside the work. `.omacolors` is the palettes. `.omatype` is the font roles. `.omabrand/` is the assets and the font files. A saved document uses the nearest enclosing folder that contains any of those. A project needs no account. Welcome will find directories containing `.omabrand` under your home directory and list them as projects. That discovery is local. Sign-in is a different door, for cloud, and cloud stays opt-in. The kit has to be copyable by any tool that can copy a directory, including ones that have never heard of Omadesign.

Those three names begin with a dot. They are hidden on purpose so a folder of artwork does not look like a config dump, and so a casual listing shows the work. Hidden also means a default file manager copy will skip them. The kit is ordinary files with ordinary JSON inside, so a human can read the palette in a text editor when the panel is the wrong tool. No absolute paths in the name files. The artwork stays inside `.omabrand/`. Move the directory and the relative layout still resolves.

Save bank copy… is the in-app copy for the bank. It copies the assets, the typography kit, and the fonts. The palette collection is a separate export, because `.omacolors` is its own file and palette saves are already separate from the document and from the bank. Two controls, because they are two files. Hand copy remains the way you take all of it in one gesture, once hidden files are visible.

## What landed

Share a kit by copying `.omacolors`, `.omatype`, and the complete `.omabrand/` folder with the project. Enable hidden files in the file manager before you do it by hand. A copy that includes only the `.oma` files and the visible previews is the artwork without the brand. The other machine will open the documents. The palettes, the roles, and the bank will be missing until the dotfiles arrive.

Save bank copy… copies the whole bank to another project folder: the name, the nested folders, the assets, the typography kit, and the fonts. Export the palette collection separately and put that `.omacolors` in the destination folder. Export selected palette… is the one-palette version. Export collection… is all of them. Load palettes… on the other side adds palettes from a file, keeps the colors already there, and gives conflicting names numbered suffixes. Save afterwards if you want the import kept.

The Fieldwork example ships as a portable reference. It has curated palettes and original SVG marks, illustrations, and patterns. Copy its hidden sidecars into a project, or point the sidebar at the example folder. It is the sample you can open when you want to see a kit that is already a folder, not a diagram.

`.omacolors` is readable JSON. One file can hold several named palettes:

```json
{
  "version": 1,
  "palettes": [
    { "name": "Fieldwork", "colors": ["#173F35", "#F5EBDC", "#D97C5B80"] },
    { "name": "Ink", "colors": ["#202420", "#FFFFFF"] }
  ]
}
```

A handwritten file may also be a single palette, `{ "name": "Ink", "colors": ["#202420", "#FFFFFF"] }`, or a bare array of hex strings. Older saved palettes that used RGBA objects still load. They become this portable form when you save them. `#RRGGBBAA` is how a swatch carries transparency. The eight-digit swatch in the Fieldwork example is that form.

The optional `.omabrand/brand.json` sets the bank's display name:

```json
{ "version": 1, "name": "Fieldwork" }
```

Without that file, the project folder supplies the display name. Keep the artwork inside `.omabrand/`. The name file does not store absolute paths, so the bank still resolves after the directory moves.

`.omatype` names the roles. Paths are relative to `.omabrand/`, and the font files stay in `fonts/`:

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

Fonts added in the panel get stable filenames. The JSON you share should match the files that are actually in `fonts/`. Share the fonts only under their license terms. The kit will not license them for you.

SVG assets in the bank use the supported import subset. Complex SVG features may not carry over. That limit is on the asset, and it is the same limit the bank already has when you place a tile. A shared kit does not grow a second, looser SVG parser.

## In the hand

Open the project folder in the file manager. Turn on hidden files. You should see `.omacolors`, `.omatype`, and `.omabrand/` next to the documents. Copy all three with the project. On the other machine, put them in one directory. Open Omadesign. The welcome screen's Projects list looks for `.omabrand` under your home directory. Click the folder card. Edit brand… opens that project's brand editor if you want to check the bank before you draw.

Or do it from the panel, in two steps, because the bank copy and the palette file are separate.

1. Brand, then ···, then Save bank copy…. Choose the destination project folder. Assets, nested folders, the bank name, the typography kit, and the fonts go across.
2. Palettes, then ···, then Export collection…. Save the `.omacolors` into that same destination folder.
3. Open a document in the destination. The nearest enclosing kit is the one you just wrote. Project swatches and Project fonts should list what you exported.

To learn the shape before you commit a client kit, point the sidebar at the Fieldwork example, or copy its hidden sidecars into a scratch project. Change a hex value in `.omacolors` in a text editor if you want to see that the file is really JSON. Come back to the panel. Libraries refresh in the background about every three seconds. If you had unsaved palette edits, those edits stay in the panel and Save is blocked until you export a copy of your version or choose Reload saved colors.

## The edge

A hand copy that leaves hidden files behind leaves the kit behind. The `.oma` will open. The palettes, the roles, and the bank will not be in that folder. Show dotfiles, then copy `.omacolors`, `.omatype`, and the complete `.omabrand/`.

Save bank copy… does not bring the palette collection along. Export `.omacolors` into the destination yourself. The bank and the colors are neighbors. They are not one file.

Show hidden files, then copy `.omacolors`, `.omatype`, and `.omabrand/` with the project.
