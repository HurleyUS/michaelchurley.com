---
id: T087
title: Fifty-two templates
slug: omadesign-0-5-8-fifty-two-templates
excerpt: Templates · 52 opens from the welcome screen or File → Template library. Search by name or idea, filter nine categories, and pick a built-in size or a custom width, height, and DPI.
publishedAt: 2026-09-06T10:44:01Z
tags: [omadesign, 0.0.1-alpha, templates]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-fifty-two-templates/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-fifty-two-templates/og.png
---

## The habit

The template gallery most people know is a store. Illustrator opens a grid of presets that want a network connection, a login, or a download before the third card will render. Photoshop's new-file dialog mixes blank sizes with Adobe Stock templates that aren't on the machine. Affinity's new document dialog is cleaner, with sizes and a few presets, and after that you are on your own. When you do want a starting point, you go looking for a file someone emailed you in 2019.

I wanted a bank of templates that is already on the machine. You search by what you are making, such as a café card, an essay cover, or a ticket, instead of by a product code. You filter when the search is too broad. You pick the page size you actually print, or type a width, height, and DPI the built-in list doesn't have. And you see the layout at those proportions before you commit, because a square preview of a tall poster shows you a different poster.

You have also opened a template and found out it was a picture. The headline was outlined, or the whole thing was a JPEG, or the text was linked to a font the template only downloaded while you were online. Illustrator's stock templates and Photoshop's cloud documents have taught people to expect that. You wanted to change the date and got a flattened image, a missing-font dialog, or a spinner because you were on a train. Affinity's templates are closer to real documents when they are local files you saved yourself. I wanted that from the first open: a page you can resize the content on, shapes you can recolor one at a time, and words you can rewrite with the Type tool, with no account and no request to a font server. The file should stay unsaved until you decide it is a job, so browsing doesn't fill your disk with fifty-two "Untitled" files.

The blank page also has to stay easy to find. A gallery that replaces "new document" just gets in the way. The welcome screen can offer both the bank and the blank page, and the File menu can open the bank while you are drawing without closing the file you have open. If you are halfway through a poster and want to borrow a structure from the gallery, the gallery must leave the poster alone. The template opens in a new tab, and the old tab stays there, unsaved changes and undo history intact.

Screens follow the same habit with different files. You start a screen from a frame you already trust. In Figma that means duplicating a phone frame. In Illustrator it means last quarter's file with the words deleted. The version that doesn't wreck yesterday's tab is a local starter with real frames, real type, and real stacking, opened as a new document. A phone screen isn't a poster with different type. It is nested frames, some already stacking and some already pinned.

## The constraint

Fifty-two designs ship in the binary and are available immediately. There is no weekly download. A weekly drop plan does exist, as an editorial sequence with a remix prompt for each design, but it doesn't schedule posts or publish anything. The gallery can't depend on the network to decide which cards exist.

Fonts come from the local system, on purpose, so opening a card never contacts a server for a typeface. The bank doesn't download or redistribute fonts. If a face isn't installed on this machine, the template can't pull it from a CDN. That rule keeps templates working offline, and it also keeps font licensing clean, because you work with the faces the computer already has. Project fonts in a brand kit are a separate feature, for jobs that have already decided to carry their own TTF and OTF files, and the gallery never fetches those over the network either. Opening a card involves no network step at all.

Each template becomes one `.oma`, unsaved until you save it. A template isn't linked back to the gallery. Edits stay in the new document, and the gallery's copy of Palm House stays as it was. Undo in the new tab only affects that tab and never rewinds another open file. The studio is a document app with tabs, so you can keep the job and a candidate starting point open at the same time, save the one you mean, and close the other.

The gallery has to stay light. Previews render in the background, thumbnails stay small, and the grid only lays out the visible rows. Choosing a size reflows the preview to those proportions, whether portrait, square, wide, or a custom size. Rendering all 52 designs at all 20 built-in sizes up front would make the welcome screen stutter, and you opened it to start a file.

The layouts can't be one design scaled blindly. Portrait, square, and landscape pages have their own artwork and arrangements, so a wide page is composed as a wide page, a tall page as a tall page, and a square as a square. Custom sizes reflow into that system. At very small sizes, secondary copy that would be unreadable is left out, because a line shrunk to specks doesn't make a usable page. Dropping it is the layout decision for that size.

**+ Vector** opens this bank. **+ Layout** opens something else: frame-based starters for screens. Raster opens a size chooser. The template library doesn't absorb any of those. The welcome screen has three kinds of start, and the 52 are the vector designs.

Search matches names and ideas. The nine categories are the broad filter: events, food, culture, community, editorial, branding, education, wellness, and products. Thirteen artwork families sit under the 52 compositions. You should be able to find Palm House by thinking "café" and Still Water by thinking "essay," without memorizing week numbers from the editorial plan.

The layout starters live in the same binary, under the same rules: no download when you pick a card and no account. The app builds the files from the starter definitions and the size you asked for. They open unsaved, so saving is a decision you make with `Ctrl+S` and a path, into a `.oma` that is yours, and the tab you were drawing in stays where it was.

The tweet that introduced these starters described them as part of "the same 52-template system." The manual draws the line differently, and I follow the manual. + Layout on the welcome screen opens frame-based starters, and + Vector opens the 52. While you are drawing, the frame set is under File > Template library > Layout starters. Raster is a size chooser with no template cards. The 52 are vector compositions, and the layout set is five documents made of frames:

Fieldwork · responsive prototype. A complete responsive site with components, hover variants, and linked screens.

Mobile screen. A phone frame with a stacked header, a hero image, and an action row.

Landing hero. A wide hero with a stretching copy column and a pinned call to action.

Dashboard. Sidebar navigation with a stretching content pane and metric cards.

Card stack. A vertical auto-layout of product cards inside a marketing frame.

They come with the template library the same way the 52 do: local, immediate, no network, a card you click. They aren't entries 48 through 52 of the vector bank, and searching the vector categories will never turn the dashboard into a poster. Opening a layout starter switches you to the Layout persona, selects the Move tool, marks the new document unsaved, and fits the canvas. The status line says "Layout template ready · frames stay nested and editable."

When the Layout inspector has nothing selected, it also shows a direct button, Open Fieldwork starter, which builds Fieldwork at 1280 × 900 and 96 DPI. The library route lets you choose a size, as with the other templates. If you only want a sized empty frame, the Phone, Tablet, and Desktop buttons in that same empty inspector insert one into the current document at 390 × 844, 768 × 1024, and 1440 × 900. Those are empty frames, while the five starters are whole documents.

## What landed

### The vector bank

On the welcome screen, **+ Vector** opens **Templates · 52**. While you are drawing, **File > Template library** opens the same bank. The chooser keeps a fixed width. You search by name or idea, filter by the nine categories, and pick any of the 20 built-in document sizes or type a custom width, height, and DPI.

Previews adapt to the proportions you choose. A tall size shows the tall layout, a square size the square layout, and a wide size the wide layout. The designs have distinct artwork for those three, so the preview isn't one master scaled uniformly. Very small custom sizes drop secondary copy that would be unreadable, and you see that in the preview before you create the file. The file you get matches the preview. The primary lines stay, and the lines that can't survive the size are deliberately removed.

Click a card and press **Use this template**, or double-click the card. The template opens as a new unsaved document. The file you were already working on stays in its tab, and you don't have to save it before looking at a starting point. Save the new document when it becomes yours. Until then it is an unsaved document like any other new file.

The 52 are specific designs. After Hours is an events poster. Palm House is a food card for hours, with no stock photograph. Still Water is a quiet editorial cover. Admit One is a ticket that also works as a poster. First Edition is a numbered newsletter cover. Local Network is there if the category is community and the idea is a group of businesses. The weekly plan pairs each design with a remix prompt, which is a suggestion for how to edit and never locks the file. All 52 are in the gallery from day one. You don't wait for week 29 to open Admit One, and week 40 isn't a release gate.

Dates, venue lines, and sample business copy are placeholders written for these designs, and you replace them before you publish. The artwork was made for Omadesign. It is vectors and live type, with no flattened poster behind a floating text box.

### Editing a template

A template opens with three kinds of layer to edit: paper, artwork, and copy. Paper is the page. Artwork is the vector construction, made of shapes you can select, recolor, duplicate, and delete. Copy is live type. Double-click it and type, and the first keystroke replaces the placeholder, the same as type anywhere else in Design.

The document you already had open stays in its tab. The template doesn't replace it, merge into it, or force a save dialog on it. You can look at a starting point, decide it is wrong, close the new tab, and go back to the job. If you never saved the template tab, nothing was written to disk.

The fonts are the local fonts. Open a card on a train, on a machine with no network, or in a room that blocks the usual ports, and it still opens with faces this computer can draw. The bank never fetches a family to complete the look. If you need a face that isn't installed, install it on the system, or bring it in later through a project typography kit as a file you copied yourself. Opening a template doesn't do that for you.

Everything in the new tab is ordinary document content. Recolor a single leaf, duplicate a petal and move it, or rewrite a two-word manifesto. Pathfinder, the type panel, the swatches, and the undo stack are the same tools as in any `.oma` drawn from scratch. When you save, you have a normal project file that has no link back to the gallery.

### Layout starters

On the welcome screen, + Layout shows the frame starters. The Layout file icon next to it is a blank size chooser for when you want an empty board and plan to draw the frames yourself with `F`. Inside the editor, File > Template library > Layout starters lists the same five. The library provides search and size controls, and the previews adapt to the proportions you pick. Click a card and choose Use this template, or double-click the card.

The new document gets the frames, stacks, and pins the starter defines. Mobile screen is already a vertical stack. Landing hero already stretches the copy column and pins the call to action. Dashboard already stretches the content pane. Card stack is already a vertical auto-layout. Fieldwork is the largest, with components, hover variants, and linked screens. You edit them as ordinary frames, using the same controls as on a frame you drew by hand: Shift+A, gap, padding, and the Min / Max / Stretch / Center / Scale pins. Nothing in a starter is locked.

Type in a starter is live type that you replace. Fonts come from the machine, the same rule as the 52, and you pick a replacement for a missing face in the Character studio. A starter doesn't need a `.omabrand` directory to open.

Your existing work stays in its tab, and the starter never wipes the poster you had open. If you opened a starter by accident, close its tab. You never saved it, so closing just discards a document that was never written to disk. The other tab keeps its saved or unsaved state exactly as it was.

All 52 vector designs are still available from + Vector and from the vector side of the template library. The weekly drop plan in the docs suggests an order and a remix prompt for those 52. It doesn't publish posts or schedule the layout starters. The five layout starters are in the app now, just like the 52.

Cloud isn't involved. You can push a project later if you sign in, but opening a starter uploads nothing, and unpublished work stays on the machine.

## In the hand

Launch the app and press **+ Vector** on the welcome screen. Or, with a document already open:

```
File → Template library
```

Type an idea, such as "café," "ticket," "essay," or "workshop," or a name you already know, such as Palm House, Admit One, Night School, or Open Alphabet. If the list is still broad, filter by category: events, food, culture, community, editorial, branding, education, wellness, or products.

Pick the size. Choose a built-in page size if you print on standard stock, or type the width, height, and DPI for the slot the file has to fill. Watch the card, because the preview follows those proportions.

Double-click the card, or click it once and press **Use this template**.

A new tab opens, and the previous tab is still there. The old document's name is in the tab bar, and the new tab has no filename yet. Click a word.

```
T
```

Type the real headline, then press Esc or click away to finish the text edit. Select a shape and change its fill from the swatch or the inspector. Select another shape and change only that one. The construction isn't a single flattened group you have to release before recoloring a part. Where a group does exist, it behaves like any group, and you double-click into it to edit a child.

Try this once with the network off. The document opens, no font fetch starts, and no "sign in to load this template" prompt appears. The faces are the local ones.

On a second try, make the size small. Open the gallery again, enter a tiny width and height, and watch the preview. Secondary copy that wouldn't be readable disappears. Create that document only if the remaining type is what you want. The full wording is still there at larger sizes, so pick the size that matches the slot.

When the tab is good, save it:

```
Ctrl+S
```

You get an `.oma`. The template was only a starting point with no link back, so editing it never writes into the gallery, and next time you open Templates · 52, Palm House is unchanged. If the tab isn't good, close it and discard. The gallery and the other document are unchanged, and the other document keeps its own undo stack.

Now say you are in a logo file and need a phone mockup in its own tab. Choose File > Template library > Layout starters, then Mobile screen. Set the size if the library offers one, or keep the card's default, and choose Use this template.

A new document appears in the tab bar, in the Layout persona with the Move tool (`V`) selected, and the status line confirms the frames are nested and editable. Click the header and change the words. If the phone size is wrong, select the outer frame and drag a handle, and watch the stack and pins respond. That is the same system as a frame you draw with `F`. The starter just saves you the first twenty minutes of nesting frames.

```
Welcome → + Layout
File → Template library → Layout starters
```

If you want Fieldwork without browsing, click Open Fieldwork starter in an empty Layout inspector. You get the responsive prototype at 1280 × 900. Open a component and the frames are ordinary frames. When the exploration becomes the job, use Save As (`Ctrl+Shift+S`).

If you want a blank phone frame in the current file instead of a new document, use the Phone button (390 × 844). It inserts a plain named frame without Mobile screen's header, hero, and action row. Use the starter when you want those children.

For a blank vector page with no artwork, use the vector file icon beside **+ Vector**, which is the blank size chooser. For a blank pixel canvas, choose Raster and a size. The 52 are the designed starting points, and they are still one click away on + Vector. If a campaign needs a poster and a screen, open one of each in separate tabs. You end up with two `.oma` files, or one if you later paste between them. The starters and the vector bank remain separate catalogs.

## The edge

Templates never touch the network. There is no font download, no account, and no remote card, only local faces. All 52 designs are on disk, and the weekly drop plan doesn't gate them. Search and the nine filters only narrow what is already there.

A template never overwrites the gallery when you edit it, and it never replaces or touches the tab you already had open. You always get a new unsaved tab.

At very small sizes, a template drops secondary copy you couldn't read, and the preview shows that before you create the document. Choose a larger size if you need those lines.

A layout starter is never one of the 52 vector designs. You get a new unsaved document in the Layout persona, built from frames. The 52 are the vector bank, and the five starters named above are the frame bank.

The starters are Omadesign frames, and there is no Figma file reader behind the card. If the structure is wrong for the job, edit the frames or draw your own with `F` and Shift+A. The card is a starting point, and the `.oma` you save is the file.
