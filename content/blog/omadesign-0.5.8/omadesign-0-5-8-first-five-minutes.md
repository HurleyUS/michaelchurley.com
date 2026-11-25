---
id: T003
title: First five minutes
slug: omadesign-0-5-8-first-five-minutes
excerpt: "Launch omadesign, pick a size or one of the 52 templates, then draw. Design starts on R, P, and T. Pixel paints with B. Photo grades a folder."
tags: [omadesign, 0.5.8, welcome]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-first-five-minutes/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-first-five-minutes/og.png
---

## The habit

The first five minutes in Illustrator are a new-document dialog. Artboard size. Color mode. Raster effects. Then the toolbar, if you have not hidden it. Photoshop starts from a canvas size or from Open, and the tools you need for type and vectors are a mode change inside a pixel document. Affinity Designer and Photo split the same way by app, with StudioLink when you want the other tool well without a second file. You spend the first minute choosing a room. You spend the next four remembering which key makes a rectangle.

You also know the template browser. A grid of starters, a search box, a size you override because the starter was US Letter and the job is a poster. The good versions open as a real document you can edit. The bad versions open as a locked preview you have to "apply" before the type is type.

On Linux you add one more first minute: did the app follow the desktop font, or did it ship a theme that fights the rest of the screen. The first five minutes should end with a mark on a page, not with a settings hunt.

## The constraint

One binary. One `.oma`. Five personas over one layer stack. The first session cannot ask you to pick an app. Design has to be the default, because a mark, a poster, and a layout are the work you can start on an empty page. Pixel paint needs a pixel layer, and that layer lives in the same document. Photo needs a folder of pictures, not a new blank board. Motion needs artwork already on the canvas, so it has no empty-workspace button on the welcome screen.

Undo is one step once you are drawing. The welcome screen is not allowed to become a cloud browser you must sign into before `R` does anything. Templates ship in the binary. They use fonts you already have. They need no network. Chrome follows the desktop: Omarchy colors, the font from `omarchy font current` or fontconfig, Phosphor Light icons. The first five minutes inherit that. You do not set a private light/dark switch before you can see the page.

The feature note lists a demo in the same breath as a size and the templates. The manual's first five minutes do not name a separate demo control. The doors the manual gives you are the ones below. Use those.

## What landed

Launch `omadesign`. The welcome screen is a local file browser. Creation actions sit in the center.

1. Choose **Vector** or **Layout** when you want templates. **+ Vector** opens 52 editable vector templates. **+ Layout** opens the frame starters: Fieldwork responsive prototype, mobile screen, landing hero, dashboard, and card stack. The file icon beside Vector or Layout opens a blank size chooser. Raster's file-side path is a blank raster size. You can also click a thumbnail of a document already on disk.
2. **Design** is the default persona once you are in a vector document. `R` draws a rectangle. `P` is the pen. `T` is type.
3. **Pixel** paints when you press `B`. Paint goes on a pixel layer. If the document is still vector-only, add that layer from the Layers studio first.
4. **Photo** opens a folder of pictures and grades them. Crop is `C`. The develop controls sit in Light, Color, and Detail. The camera file stays where it was.

Startup preferences live under **omadesign → Config**. You can start on the welcome screen, lock a mode, or remember the last mode. A separate setting picks the welcome tab: New, Templates, Recent, or Recovered, including remember-last-tab. That preference is how the first five minutes look the second time, not a different app.

Templates open as unsaved documents. Paper, artwork, and copy layers are editable. Work you already had stays in its tab. Search the 52 by name or idea, filter the nine categories, pick a built-in size or type width, height, and DPI. Double-click a card, or select it and choose **Use this template**. Very small sizes drop secondary copy that would be unreadable. Portrait, square, and wide pages each have their own artwork. The weekly drop plan is an editorial list. It does not schedule posts and it does not gate the files. All 52 are local on day one.

**+ Project** opens a brand editor. A project is a folder with `.omabrand` in it. It does not need an account. **Learn with AI** and **Create with agent** hand a prompt to whatever agent Omarchy has set as the default. If you have not chosen one, the screen tells you to set it under **Omarchy → Setup → Default → Agent**. The studio does not pick an agent for you. You can ignore both boxes and draw.

## In the hand

```sh
omadesign
```

If the command is not on `PATH`, call `~/.local/bin/omadesign`.

On the welcome screen, click **+ Vector**. The chooser opens on the 52. Click a card. Click **Use this template**, or double-click the card. A new unsaved document opens. Design is the persona in front of you.

Press `R`. Drag on the page. You have a rectangle. Press `P`. Click a corner, click-drag a smooth point, click the first point to close, or press Enter to finish an open path. Press `T`. Click once on the page. The word Type is a placeholder. The first character you type replaces it. Enter is a new line. Esc or a click away finishes the text.

Press `V` if you need to move what you just made. That is Move. Eight handles scale. The handle above the box rotates. You are still in the same `.oma`.

Switch to Pixel when you want paint. Add a pixel layer if Layers does not already have one. Press `B`. The brush paints on that layer. `[` and `]` change size. The vectors you drew stay vectors on their own layers.

For a photograph, go back to welcome or use the Photo creation action. **+ Photo** opens the Photo workspace. The folder icon is the folder chooser. The image icon picks a file. Grade there. **Place in Design** when the developed picture belongs on the poster. That placement is an 8-bit pixel layer. The RAW and its `.omaphoto` stay beside the original for the next grade.

Save with `Ctrl+S`. The document becomes an `.oma`. Templates do not need a save to be editable, and they do need a save if you want them in Recents as a file you actually kept.

## The edge

Motion has no empty-workspace creation button. The artboard you animate is the artboard you already drew. Open Motion after there is something on the canvas. Space plays. `K` keys transforms there. That letter is Fill when you are in Pixel. The persona decides.

The first five minutes also do not include a cloud login. **Sign up for cloud** is a link on the welcome column. Local templates, local folders, and local `.oma` files work with no account. **Team** shows up only after you are signed in and a shared project is actually there.

Photo will not rewrite the camera file while you learn the sliders. Design will not absorb the RAW into the `.oma` when you save the poster. Those boundaries hold on minute five the same way they hold on hour five.

Press `R`, then `P`, then `T`. That is the first drawing, in the document you just opened.
