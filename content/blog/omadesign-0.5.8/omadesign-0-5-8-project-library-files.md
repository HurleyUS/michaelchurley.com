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

Creative Cloud Libraries taught a bad address. The swatches live "in the cloud," the logo lives "in the library," and the document on disk is a guest. Move the job to another machine and you sign in, wait for the sync, and hope the library name matches the one from memory. Illustrator and Photoshop both route that habit through the same account. Affinity is closer to files, and people still email a pack of PNGs plus a screenshot of the colors because nobody agreed where the kit lives.

The hand wants a folder. Copy the folder, you copied the job. The colors are a file you can open in a text editor when a hex is wrong. The font roles are a file that points at font files inside the project, not at a font menu on one laptop. The logos are files in a directory, nested if the brand has sections. Hidden files are fine. Designers can turn on hidden files. A dot in the name is a better lock than an account.

You also want the document to find that folder without a prompt every time. Save the poster inside the client directory. Open it next month. The sidebar should already be looking at the client kit, not at your personal swatches and not at the previous client's bank.

## The constraint

One `.oma` is the artwork. It should not have to embed every logo, every weight, and every palette in order for the next file in the same job to match. Embed the one you placed. Share the kit as siblings. That split keeps the document small and the kit reusable. It also means the kit must be discoverable from the document's path. A project setting buried in a preference file will not travel when you copy the folder to another machine. The discovery has to be "look at the directories I am inside."

The nearest enclosing folder wins. You might keep `client/brand/` and also `client/posters/april/poster.oma`. If any of the kit files exist at `client/` and none exist closer, the poster uses `client/`. If a tighter folder also has a kit, the tighter one wins. That is how a subproject can diverge without a settings dialog. If nothing encloses the document, the kit starts beside the document. You are not sent hunting for a default library in a hidden application support folder you have never seen.

Unsaved documents have no path yet. They cannot do the walk. **Choose a project** is the explicit answer. The folder button is the same idea later: switch libraries on purpose when the nearest folder is not the one you want today.

The names start with a dot so a casual directory listing stays about the art. `.omacolors`, `.omatype`, `.omabrand/`. Copying by hand means showing hidden files. The manual says so because people will forget, and a kit that "did not copy" is usually a kit the file manager hid.

## What landed

Three files, beside the work.

**`.omacolors`** holds the palettes. It is readable JSON. One file can hold several named palettes, each with hex colors. An eight-digit hex keeps transparency. You can export and import this file from the Palettes tab. You can also read it. A handwritten file may be the full collection, a single palette object, or a bare array of hex strings. Older saves that used RGBA objects still load, and they become this portable shape when you save them again.

**`.omatype`** names the font roles. Paths inside it are relative to `.omabrand/`. The font files live in `.omabrand/fonts/`. A role has a name you chose, Heading or Body or whatever the job calls it, and a pointer at a TTF or OTF in that fonts folder. No absolute path. Copy the project and the pointer still resolves.

**`.omabrand/`** holds the assets and the font files. Logos, images, SVG, other `.oma` artwork, nested folders if you grouped them. An optional `.omabrand/brand.json` sets the bank's display name. Without that file, the project folder's name is the display name. Artwork stays inside `.omabrand/`. The name file does not store absolute paths.

A saved document uses the nearest enclosing folder that contains any of these. One of them is enough to mark the folder as the project. If none exist on the walk up, the library starts beside the document. For a document that has never been saved, use **Choose a project** and pick the folder. The folder button switches libraries explicitly when you need a different kit than the one the path found.

Welcome uses the same mark. **Projects → recent** finds directories containing `.omabrand` anywhere under your home directory. A project needs no account. Click the folder card and you are browsing that kit's world, subprojects first, then the documents.

The Fieldwork example in the app is a portable reference of this shape: palettes, SVG marks, the hidden sidecars. Copy those beside a job, or point the sidebar at the example folder, and the tab shows a real kit.

## In the hand

Save the document inside the client folder, or create the kit beside it. In a terminal, hidden names are visible. In a file manager, turn hidden files on before you trust a copy.

```
client/.omacolors
client/.omatype
client/.omabrand/
client/.omabrand/fonts/
client/.omabrand/brand.json
client/poster.oma
```

Open `poster.oma`. The sidebar's project palettes and brand bank are `client/`, because that folder encloses the document and holds the kit. Make a subfolder `client/posters/` and move only the `.oma`. The nearest enclosing kit is still `client/`, as long as `posters/` does not contain its own `.omacolors`, `.omatype`, or `.omabrand/`. Put a kit inside `posters/` and the poster switches to that nearer folder. The walk is the setting.

New unsaved tab: **Choose a project**, pick `client`. The tabs bind to that folder even though the artwork has no path yet. Save the artwork into `client` afterward so the next open finds the same place without being told.

The folder button is the override. Point it at another directory when this session should edit a different kit. You are switching libraries explicitly. You are not changing the hex inside a file you did not mean to open.

Copy the job to a laptop. Copy `.omacolors`, `.omatype`, and the whole `.omabrand/` directory, hidden files included. Open the `.oma` over there. The colors, the roles, and the assets resolve. No sign-in.

## The edge

Discovery refuses a farther folder when a nearer one already has any of the three. The nearest enclosing kit wins. It also refuses to invent a kit from an unsaved document. No path, no walk. **Choose a project** is the step.

The files refuse absolute paths. Font roles are relative to `.omabrand/`. The brand name file does not point at artwork somewhere else on the disk. Move the folder and the references still point inside it.

Show hidden files, copy `.omacolors`, `.omatype`, and `.omabrand/` with the document, and the kit opens where the poster opens.

## Three right tabs

### The habit

You already know where your hand goes. Illustrator's Properties panel is the thing you selected. Swatches is the colors you refuse to re-mix. The Libraries panel, or a CC library, is the logo and the approved images. Those are three places, and the libraries one wants a login. Photoshop splits the same jobs across Properties, Swatches, and whatever library or asset panel the current version is pushing. Affinity Publisher puts the resource on a studio tab and the selection on another, and people who live there like that the page and the brand sit in one application. The people who do not live there keep Designer, Photo, and Publisher open because the habit was three apps.

The job in the chair is smaller than a suite. You have an object selected. You need its fill, its type, its position. You need the brand red, not a red you sample by eye. You need the logo, the pattern, the font role, dropped on this artboard. You want those three without a panel safari and without a second install.

The sidebar has to stay a sidebar. A floating pile of palettes from 2004 covers the poster. A tab in the right column does not. When the window is short, the panel has to scroll. The actions at the bottom still have to be reachable. Compact height is a real desk, a laptop, a tiled window. The chrome does not get to assume a 4K monitor.

### The constraint

One binary. Design, Layout, Pixel, Photo, and Motion are personas, not applications. The right column has to serve the document you have open in that one process. Inspect reads the selection. Palettes apply color onto it. Brand places artwork into it. If those lived in three windows, you would be back to three apps and a clipboard between them.

The document is one `.oma`. The brand is not required to live inside that JSON. Colors, font roles, and asset files sit beside the work as project files, so a second document in the same folder sees the same bank. The sidebar is the door to both: the selection in this file, and the kit next to it. A cloud library would put an account between those. There is no account in this column. Personal palettes are the colors you want across your work. Project palettes and the brand bank are the folder. The tabs have to make that split obvious, or you will edit a swatch and not know whether you changed this job or every job.

Undo for the artwork stays the document undo. Palette saves and brand-kit saves are their own save state. The tabs have to show that separation in how they behave, not in a lecture. You can place a logo and Ctrl+Z the place. You do not Ctrl+Z the existence of the file in the bank. Different gestures, different tabs, one column.

Photo can double-click a brand asset and land it in Design. The Brand tab is not trapped inside one persona. The selection you inspect might be a vector in Design or type on a layout frame. The column stays put when you switch personas, because the kit did not change when the tool did.

### What landed

The right sidebar has three tabs.

**Inspect** is the selected artwork. Fill, stroke, type, the properties of the thing you clicked. This is the panel you live in while you draw. Select a rectangle and Inspect is that rectangle. Select type and Inspect is that type. The Shortcut HUD at the bottom of the window still tells you the tool. Inspect tells you the object.

**Palettes** is reusable color. Personal for colors you want across your work. Project for colors stored with the current folder. You build a named palette, filter it, add the current color or the selection's fill and stroke, type a hex, and apply to Fill or Stroke by clicking a swatch. The palette has its own Save. That save is not the artwork save.

**Brand** is logos, images, fonts, and other assets. Load a bank, create one, add files, filter the tiles, drag one onto the canvas. Typography lives here too: font files copied into the project, roles like Heading and Body, Apply on the selected text or the next text you create. The bank is a folder of real files. The tab is the browser for that folder.

Three tabs, one column. You do not dock and undock a swarm. You do not open a separate brand application to grab a leaf logo and a green. Affinity Publisher is the muscle memory this matches: the resource and the selection in one piece of chrome, and you are not keeping three apps alive to get it. The difference in this studio is that Design, the page, the photo, and the motion are already the same binary. The column does not have to call another process.

The Brand panel scrolls when the window is short, so the actions stay reachable. Long names do not shove Save off the bottom of a laptop screen. You scroll the panel. The canvas stays where it was.

Welcome already knows what a project is. **Projects → recent** finds directories that contain a brand bank. **Edit brand…** opens the current project's brand editor. **+ Project** opens that editor from the welcome screen. The right tabs are the same kit once a document is open. You do not learn two banks.

### In the hand

Open a document. Look at the right edge. Click **Inspect**. Select an object. The column shows that object. Change a value you would have changed in any properties panel. Ctrl+Z returns the object. That was a document edit.

Click **Palettes**. Choose Personal or Project. If the project side is empty, you are about to make the job's colors, or you point the folder button at a directory that already has them. The palette editor that used to be tucked away is this tab. Add a color, click a swatch with Fill armed, and the selection takes it.

Click **Brand**. If the document knows a project folder, the tiles for that bank are the ones you see. Filter to a logo. Drag it onto the artboard. Ctrl+Z removes the placement. The file in the bank is still in the bank. You placed a copy.

```
Inspect · Palettes · Brand
```

Switch to Motion, or to Design again. The tabs are still the tabs. Select a keyframed shape, click Inspect, and you are looking at the selected artwork. The timeline did not steal the column.

On a short window, scroll the Brand tab until Add and the rest of the actions are in reach. You do not undock the panel to find them.

When you are on the welcome screen and the job is the kit itself, **Edit brand…** or **+ Project** opens the brand editor directly. Then open a document from that project and the Brand tab is the same cupboard.

### The edge

The column refuses to be three applications. Inspect, Palettes, and Brand are tabs in the sidebar of the one studio. A palette save refuses to pretend it is an artwork save. A placed logo refuses to move the original file in the bank. You placed a copy. Ctrl+Z undoes the copy on the canvas.

The tabs refuse a login. Personal colors, project colors, and the brand folder open because they are on disk, not because a library account answered.

Click Inspect for the selection, Palettes for the color, Brand for the file. The column is the whole trip.

## Share project kit

### The habit

A brand kit in Illustrator or Photoshop usually means a library tied to an account. Swatches, character styles, logos, a CC Library you pull from a panel that is not the job folder. You share it by inviting an email. The other person signs in. The assets arrive if the service is up and the invite was the right one. Affinity can store assets in the application and package a document for handoff. The package is a special export. The everyday folder, the one you already keep in git or on a drive, is not the kit.

The hand still wants the dumb version. Copy the folder. Send the folder. Open the folder on the other machine. Colors, type roles, logos, and the working files are all there. No account. No "library not available" because a hostname failed. The failure mode you actually hit is the file manager. It hides names that start with a dot, you copy what you can see, and the other machine gets the `.oma` with none of the brand.

### The constraint

Project libraries live beside the work. `.omacolors` is the palettes. `.omatype` is the font roles. `.omabrand/` is the assets and the font files. A saved document uses the nearest enclosing folder that contains any of those. A project needs no account. Welcome will find directories containing `.omabrand` under your home directory and list them as projects. That discovery is local. Sign-in is a different door, for cloud, and cloud stays opt-in. The kit has to be copyable by any tool that can copy a directory, including ones that have never heard of Omadesign.

Those three names begin with a dot. They are hidden on purpose so a folder of artwork does not look like a config dump, and so a casual listing shows the work. Hidden also means a default file manager copy will skip them. The kit is ordinary files with ordinary JSON inside, so a human can read the palette in a text editor when the panel is the wrong tool. No absolute paths in the name files. The artwork stays inside `.omabrand/`. Move the directory and the relative layout still resolves.

Save bank copy… is the in-app copy for the bank. It copies the assets, the typography kit, and the fonts. The palette collection is a separate export, because `.omacolors` is its own file and palette saves are already separate from the document and from the bank. Two controls, because they are two files. Hand copy remains the way you take all of it in one gesture, once hidden files are visible.

### What landed

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

### In the hand

Open the project folder in the file manager. Turn on hidden files. You should see `.omacolors`, `.omatype`, and `.omabrand/` next to the documents. Copy all three with the project. On the other machine, put them in one directory. Open Omadesign. The welcome screen's Projects list looks for `.omabrand` under your home directory. Click the folder card. Edit brand… opens that project's brand editor if you want to check the bank before you draw.

Or do it from the panel, in two steps, because the bank copy and the palette file are separate.

1. Brand, then ···, then Save bank copy…. Choose the destination project folder. Assets, nested folders, the bank name, the typography kit, and the fonts go across.
2. Palettes, then ···, then Export collection…. Save the `.omacolors` into that same destination folder.
3. Open a document in the destination. The nearest enclosing kit is the one you just wrote. Project swatches and Project fonts should list what you exported.

To learn the shape before you commit a client kit, point the sidebar at the Fieldwork example, or copy its hidden sidecars into a scratch project. Change a hex value in `.omacolors` in a text editor if you want to see that the file is really JSON. Come back to the panel. Libraries refresh in the background about every three seconds. If you had unsaved palette edits, those edits stay in the panel and Save is blocked until you export a copy of your version or choose Reload saved colors.

### The edge

A hand copy that leaves hidden files behind leaves the kit behind. The `.oma` will open. The palettes, the roles, and the bank will not be in that folder. Show dotfiles, then copy `.omacolors`, `.omatype`, and the complete `.omabrand/`.

Save bank copy… does not bring the palette collection along. Export `.omacolors` into the destination yourself. The bank and the colors are neighbors. They are not one file.

Show hidden files, then copy `.omacolors`, `.omatype`, and `.omabrand/` with the project.
