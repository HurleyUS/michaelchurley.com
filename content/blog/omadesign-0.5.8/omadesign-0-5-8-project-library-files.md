---
id: T090
title: Project library files
slug: omadesign-0-5-8-project-library-files
excerpt: Project kits sit beside the work as .omacolors, .omatype, and .omabrand/. A saved document uses the nearest enclosing folder that has any of them, or starts beside the document.
publishedAt: 2026-09-06T10:45:01Z
tags: [omadesign, 0.0.1-alpha, palettes, project-kit]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-project-library-files/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-project-library-files/og.png
---

## The habit

Creative Cloud Libraries taught people to keep the kit somewhere other than the job. The swatches live "in the cloud," the logo lives "in the library," and the document on disk depends on both. Move the job to another machine and you sign in, wait for the sync, and hope the library name matches the one you remember. Illustrator and Photoshop both route that habit through the same account. Affinity stays closer to files, and people still email a pack of PNGs plus a screenshot of the colors because nobody agreed where the kit lives. You share a CC library by inviting an email address, the other person signs in, and the assets arrive if the service is up and the invite was the right one. Affinity can store assets in the application and package a document for handoff, but the package is a special export. The everyday folder you already keep in git or on a drive isn't the kit.

I wanted the kit to be a folder. Copy the folder and you have copied the job. The colors are a file you can open in a text editor when a hex is wrong. The font roles are a file that points at font files inside the project, so they don't depend on the font menu of one laptop. The logos are files in a directory, nested if the brand has sections. Hidden files are fine, because designers can turn on hidden files, and a dot in the name is a better lock than an account. The failure people actually hit is the file manager. It hides names that start with a dot, you copy what you can see, and the other machine gets the `.oma` with none of the brand.

The document should also find that folder without asking every time. Save the poster inside the client directory, open it next month, and the sidebar should already show the client kit. It shouldn't show your personal swatches or the previous client's bank.

Then there is where your hand goes while you work. In Illustrator, the Properties panel shows what you selected, Swatches holds the colors you don't want to re-mix, and the Libraries panel, or a CC library, holds the logo and the approved images. That is three places, and the library one needs a login. Photoshop splits the same jobs across Properties, Swatches, and whatever library or asset panel the current version promotes. Affinity Publisher puts resources on one studio tab and the selection on another, and people who work there like having the page and the brand in one application. People who don't work there keep Designer, Photo and Publisher open, because the habit was three apps.

The actual job is smaller than a suite. You have an object selected. You need its fill, its type and its position. You need the exact brand red, and sampling one by eye won't do. You need the logo, the pattern or the font role on this artboard. You want all of that without searching through panels and without a second install.

The sidebar has to stay a sidebar. A floating pile of palettes covers the poster, and a tab in the right column doesn't. When the window is short, the panel has to scroll and the actions at the bottom still have to be reachable. A laptop or a tiled window is a real workspace, and the interface can't assume a 4K monitor.

## The constraint

One `.oma` is the artwork. It shouldn't have to embed every logo, weight and palette so that the next file in the same job matches. Embed the asset you placed and keep the shared kit as sibling files. That keeps the document small and the kit reusable. It also means the kit has to be discoverable from the document's path. A project setting buried in a preference file won't travel when you copy the folder to another machine, so discovery works by looking at the directories the document is inside.

The nearest enclosing folder wins. You might have `client/brand/` and also `client/posters/april/poster.oma`. If kit files exist at `client/` and none exist closer, the poster uses `client/`. If a closer folder also has a kit, the closer one wins, which lets a subproject diverge without a settings dialog. If nothing encloses the document, the kit starts beside the document, so you never go looking for a default library in a hidden application support folder.

Unsaved documents have no path, so they can't do that walk. **Choose a project** is the explicit way to set one. The folder button does the same thing later, when you want to switch libraries on purpose because the nearest folder isn't the one you want today.

The names start with a dot so a casual directory listing stays about the art: `.omacolors`, `.omatype`, `.omabrand/`. That also means copying by hand requires showing hidden files. The manual says so because people forget, and a kit that "didn't copy" is usually a kit the file manager hid. The kit is ordinary files with ordinary JSON inside, so any tool that can copy a directory can copy it, including tools that have never heard of Omadesign, and a person can read a palette in a text editor when the panel is the wrong tool.

A project needs no account. Welcome finds directories containing `.omabrand` under your home directory and lists them as projects, and that discovery is local. Sign-in is separate, for cloud, and cloud stays opt-in.

Omadesign is one binary. Design, Layout, Pixel, Photo and Motion are personas inside it, so the right column serves the document open in that one process. Inspect reads the selection, Palettes applies color to it, and Brand places artwork into it. If those lived in three windows, you would be back to three apps with a clipboard between them.

The brand doesn't have to live inside the document's JSON. Colors, font roles and asset files sit beside the work as project files, so a second document in the same folder sees the same bank. The sidebar gives you both the selection in this file and the kit next to it. A cloud library would put an account between those, and there is no account in this column. Personal palettes are the colors you want across all your work, and project palettes and the brand bank belong to the folder. The tabs have to make that split obvious, or you will edit a swatch without knowing whether you changed this job or every job.

Artwork undo stays the document undo. Palette saves and brand-kit saves have their own save state, and the tabs show that separation through how they behave. You can place a logo and press Ctrl+Z to remove the placement, but Ctrl+Z doesn't remove the file from the bank.

Photo can double-click a brand asset and send it to Design, so the Brand tab isn't tied to one persona. The selection you inspect might be a vector in Design or type on a layout frame. The column stays the same when you switch personas, because the kit didn't change when the tool did.

Save bank copy… is the in-app way to copy the bank. It copies the assets, the typography kit and the fonts. The palette collection is a separate export, because `.omacolors` is its own file and palette saves are already separate from the document and from the bank. So there are two controls for two files. Copying by hand, with hidden files visible, still takes everything in one step.

## What landed

### Three files beside the work

**`.omacolors`** holds the palettes. It is readable JSON, and one file can hold several named palettes:

```json
{
  "version": 1,
  "palettes": [
    { "name": "Fieldwork", "colors": ["#173F35", "#F5EBDC", "#D97C5B80"] },
    { "name": "Ink", "colors": ["#202420", "#FFFFFF"] }
  ]
}
```

An eight-digit hex (`#RRGGBBAA`) keeps transparency, and the eight-digit swatch in the Fieldwork example uses that form. You can export and import this file from the Palettes tab, and you can also just read it. A handwritten file may be the full collection, a single palette object such as `{ "name": "Ink", "colors": ["#202420", "#FFFFFF"] }`, or a bare array of hex strings. Older saves that used RGBA objects still load, and they are converted to this portable shape when you save them again.

**`.omatype`** names the font roles. Paths inside it are relative to `.omabrand/`, and the font files live in `.omabrand/fonts/`. Each role has a name you choose, like Heading or Body or whatever the job calls it, and points at a TTF or OTF in that fonts folder:

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

There are no absolute paths, so the pointers still resolve after you copy the project. Fonts added in the panel get stable filenames. The JSON you share should match the files actually in `fonts/`. Share fonts only under their license terms. The kit doesn't license them for you.

**`.omabrand/`** holds the assets and the font files: logos, images, SVG, other `.oma` artwork, and nested folders if you grouped them. An optional `.omabrand/brand.json` sets the bank's display name:

```json
{ "version": 1, "name": "Fieldwork" }
```

Without that file, the project folder's name is the display name. Keep the artwork inside `.omabrand/`. The name file doesn't store absolute paths, so the bank still resolves after the directory moves.

SVG assets in the bank use the supported import subset, so complex SVG features may not carry over. That limit belongs to the asset and is the same one that applies when you place a tile. A shared kit doesn't get a second, looser SVG parser.

### How a document finds its kit

A saved document uses the nearest enclosing folder that contains any of these three. One is enough to mark the folder as the project. If none exist on the way up, the library starts beside the document. For a document that has never been saved, use **Choose a project** and pick the folder. The folder button switches libraries explicitly when you need a different kit than the one the path found.

Welcome uses the same marker. **Projects > recent** finds directories containing `.omabrand` anywhere under your home directory. Click a folder card to browse that kit, with subprojects first and then documents. **Edit brand…** opens the current project's brand editor, and **+ Project** opens that editor from the welcome screen. Once a document is open, the right tabs show the same kit, so there is only one bank to learn.

### Three tabs on the right

The right sidebar has three tabs.

**Inspect** shows the selected artwork: fill, stroke, type and the other properties of what you clicked. It is the panel you use most while drawing. Select a rectangle and Inspect shows that rectangle. Select type and it shows that type. The Shortcut HUD at the bottom of the window still tells you the tool, and Inspect tells you about the object.

**Palettes** holds reusable color. Personal is for colors you want across your work, and Project is for colors stored with the current folder. You build a named palette, filter it, add the current color or the selection's fill and stroke, type a hex, and click a swatch to apply it to Fill or Stroke. The palette has its own Save, separate from the artwork save.

**Brand** holds logos, images, fonts and other assets. You can load a bank, create one, add files, filter the tiles and drag one onto the canvas. Typography lives here too: font files copied into the project, roles like Heading and Body, and Apply for the selected text or the next text you create. The bank is a folder of real files, and the tab browses that folder.

You don't dock and undock a crowd of panels, and you don't open a separate brand application to grab a leaf logo and a green. This matches the Affinity Publisher habit of having resources and the selection in one place, without keeping three apps running to get it. In Omadesign, Design, layout, photo and motion are already the same binary, so the column doesn't have to call another process.

The Brand panel scrolls when the window is short, so the actions stay reachable and long names don't push Save off the bottom of a laptop screen. You scroll the panel and the canvas stays where it was.

### Sharing a kit

To share a kit, copy `.omacolors`, `.omatype` and the complete `.omabrand/` folder with the project. Turn on hidden files in the file manager before you do it by hand. A copy with only the `.oma` files and the visible previews is the artwork without the brand. The other machine will open the documents, but the palettes, roles and bank will be missing until the dotfiles arrive.

Save bank copy… copies the whole bank to another project folder, including the name, nested folders, assets, typography kit and fonts. Export the palette collection separately and put that `.omacolors` in the destination folder. Export selected palette… exports one palette and Export collection… exports all of them. On the other side, Load palettes… adds palettes from a file, keeps the colors already there, and gives conflicting names numbered suffixes. Save afterward to keep the import.

The Fieldwork example ships with the app as a portable reference kit. It has curated palettes and original SVG marks, illustrations and patterns. Copy its hidden sidecars into a project, or point the sidebar at the example folder, and the tab shows a real kit you can inspect.

## In the hand

### Finding the kit

Save the document inside the client folder, or create the kit beside it. A terminal shows hidden names. In a file manager, turn hidden files on before you trust a copy.

```
client/.omacolors
client/.omatype
client/.omabrand/
client/.omabrand/fonts/
client/.omabrand/brand.json
client/poster.oma
```

Open `poster.oma`. The sidebar's project palettes and brand bank come from `client/`, because that folder encloses the document and holds the kit. Make a subfolder `client/posters/` and move only the `.oma` into it. The nearest enclosing kit is still `client/`, as long as `posters/` has no `.omacolors`, `.omatype` or `.omabrand/` of its own. Put a kit inside `posters/` and the poster switches to that closer folder. The folder structure is the setting.

In a new unsaved tab, click **Choose a project** and pick `client`. The tabs bind to that folder even though the artwork has no path yet. Save the artwork into `client` afterward so the next open finds the same place automatically.

The folder button overrides the walk. Point it at another directory when this session should edit a different kit. That switches libraries explicitly, so you don't end up changing a hex in a file you didn't mean to open.

### Using the tabs

Open a document and look at the right edge. Click **Inspect** and select an object, and the column shows that object. Change a value the way you would in any properties panel, and Ctrl+Z reverts it, because that was a document edit.

Click **Palettes** and choose Personal or Project. If the project side is empty, you are about to create the job's colors, or you can point the folder button at a directory that already has them. The palette editor that used to be tucked away is now this tab. Add a color, click a swatch with Fill selected, and the selection takes it.

Click **Brand**. If the document knows a project folder, you see that bank's tiles. Filter to a logo and drag it onto the artboard. Ctrl+Z removes the placement, and the file stays in the bank, because you placed a copy.

```
Inspect · Palettes · Brand
```

Switch to Motion, or back to Design, and the tabs are still there. Select a keyframed shape and click Inspect, and you see the selected artwork. The timeline doesn't take over the column.

On a short window, scroll the Brand tab until Add and the other actions are within reach. You don't need to undock the panel to find them.

When you are on the welcome screen and the job is the kit itself, **Edit brand…** or **+ Project** opens the brand editor directly. Open a document from that project afterward and the Brand tab shows the same kit.

### Sharing the kit

Open the project folder in the file manager and turn on hidden files. You should see `.omacolors`, `.omatype` and `.omabrand/` next to the documents. Copy all three with the project and put them in one directory on the other machine. Open Omadesign. The welcome screen's Projects list looks for `.omabrand` under your home directory, so click the folder card. If you want to check the bank before drawing, Edit brand… opens that project's brand editor. The colors, roles and assets resolve without a sign-in.

You can also do it from the panels, in two steps, because the bank copy and the palette file are separate.

1. In Brand, open ··· and choose Save bank copy…. Pick the destination project folder. The assets, nested folders, bank name, typography kit and fonts go across.
2. In Palettes, open ··· and choose Export collection…. Save the `.omacolors` into the same destination folder.
3. Open a document in the destination. The nearest enclosing kit is the one you just wrote, so Project swatches and Project fonts should list what you exported.

To learn the format before you commit a client kit, point the sidebar at the Fieldwork example, or copy its hidden sidecars into a scratch project. Change a hex value in `.omacolors` in a text editor to confirm the file really is JSON, then go back to the panel. Libraries refresh in the background about every three seconds. If you had unsaved palette edits, they stay in the panel, and Save is blocked until you export a copy of your version or choose Reload saved colors.

## The edge

Discovery ignores a farther folder when a nearer one has any of the three files, and it can't find a kit for an unsaved document, because there is no path to walk. **Choose a project** covers that case.

The files don't use absolute paths. Font roles are relative to `.omabrand/`, and the brand name file doesn't point at artwork elsewhere on the disk, so moving the folder keeps every reference inside it.

A hand copy that leaves the hidden files behind leaves the kit behind. The `.oma` will open, but the palettes, roles and bank won't be there. Save bank copy… doesn't include the palette collection either, so export `.omacolors` into the destination yourself. The bank and the colors sit next to each other in separate files.

The column stays one sidebar in one studio, with Inspect, Palettes and Brand as tabs. A palette save doesn't count as an artwork save, and placing a logo never moves the original file in the bank. The tabs don't need a login. Personal colors, project colors and the brand folder open because they are on disk.
