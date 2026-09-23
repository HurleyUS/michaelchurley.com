---
id: T007
title: Filter icon states
slug: omadesign-0-5-8-filter-icon-states
excerpt: "The 0.5.8 welcome filter icon has no button background. Hover turns it blue. An active filter turns it red, so you can see the funnel is on."
tags: [omadesign, 0.5.8, welcome]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-filter-icon-states/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-filter-icon-states/og.png
---

## The habit

Every file browser you trust has a filter, and every filter you have ever missed has looked like a normal button. Photoshop's bridge-style folders, Illustrator's open dialog, Affinity's document views, the file manager on the desktop: a funnel or a magnifying glass sits in a rounded rectangle. At rest it looks pressed. On hover it looks pressed. When the filter is active it still looks pressed, maybe with a dot you notice after you have scrolled past the file you wanted.

The cost shows up when the folder is your whole home directory. Omadesign's welcome browser discovers `.oma` files at any depth under home, newest modification first. Projects discovers directories that contain `.omabrand`. Three columns of masonry, natural aspect ratio, names only on hover. If a filter is on and the icon does not say so, you think the project is missing. You click Refresh. You dig through Trash in your head. The file was excluded because the funnel was set to Photo and the file is a poster.

You need three readings from one icon, at a glance, while your eyes are on the thumbnails. Rest. Hover. Active. Color has to do that work. A filled button background makes all three look like a chip.

## The constraint

The welcome screen is local. Discovery skips hidden directories, Trash, and symlinks. It does not skip a file because the cloud has not synced it. There is no cloud index. **Refresh** is how you pick up a file you moved in from outside the app. The filter is a view on that local list, not a search service.

The funnel's categories are the personas' files: Vector, Raster, Layout, Photo, or Motion. **All modes** clears the filter. Those five are the same five rooms as the studio, so the filter language matches the work. A sixth made-up bucket would send you hunting a label the app does not use when you draw.

The icon has to sit on the 0.5.8 welcome chrome: dark ground, panels fading from the lighter theme color, Phosphor icons, no extra button chrome fighting the gradient. A background plate behind the funnel would read as another segmented control. The funnel is a state indicator beside a browser, so the plate goes. Hover and active have to be readable against that dark ground and against a theme that can be almost any Omarchy palette. Blue for hover. Red for active. Two colors, two meanings, no sentence of UI copy required while you scan.

The filter must not rewrite a file to "tag" it. Mode is a property of the document you already saved. The icon only tells you whether the list is narrowed.

## What landed

0.5.8 draws the welcome filter icon with no button background. The release notes say that directly: render the filter without a background, blue on hover, red when active. Native welcome screenshots covered this screen.

At rest you see the funnel itself. No chip, no filled rectangle, no border pretending to be a toolbar button. Point at it and it turns blue. That is hover. It means the control is under the pointer. It does not mean a filter is applied. Turn a filter on and the icon turns red. Red means the list is narrowed. You can look at the thumbnails and still know the funnel is doing something, which is the whole point of a small piece of chrome.

What the funnel narrows:

- **Vector**
- **Raster**
- **Layout**
- **Photo**
- **Motion**

**All modes** clears it. When the filter is clear, the icon is not red. Recent work shows again: every `.oma` under home that discovery is allowed to see, newest first, for **Your Work → recent**. **Recovered** stays its own tab. Crash leftovers do not mix into the mode filter as if they were a sixth kind of finished document. **Projects** is the other browser. A project folder is a directory with `.omabrand`, not a mode of `.oma`.

**Shift-click** the first thumbnail to start a multi-select. Later clicks add or remove. **Open selected** opens the documents. **Recover selected** does that job on the Recovered tab. **Clear** or Escape leaves the selection. The filter sits beside that selection model. A red funnel tells you the masonry is a subset before you shift-click the wrong short list and think the rest of the work is gone.

**Refresh** reruns discovery after you add or move files outside the app. The filter state is still the filter state after a refresh. Red stays red until you clear it. Blue still means hover.

Startup Config can remember the welcome tab. It does not replace the funnel. You can land on Recent and still narrow Recent.

## In the hand

```sh
omadesign
```

Open **Your Work → recent**. Look at the funnel before you read thumbnails. It should sit without a button plate. Pass the pointer over it. Blue. Move the pointer away. The blue leaves. The icon is idle again.

Choose **Vector**. The icon turns red. The masonry drops anything that is not a vector document. Hover the names if you need them. If the poster you wanted is a Layout file, it is absent on purpose. Switch the funnel to **Layout**, or choose **All modes**. Red clears when the filter clears. The full recent list comes back, still skipping hidden directories, Trash, and symlinks.

Try **Photo** when you are hunting graded work, **Raster** for pixel documents, **Motion** for documents that carry a clip. Each choice is the same red icon plus a different subset. The color is the "something is filtered" bit. The menu is the "which mode" bit. You need both. Color without the menu would only tell you that the list is short. The menu without the color is how filters get left on.

Select several thumbnails with Shift-click while the icon is red. **Open selected** opens that subset. Come back to welcome. If the icon is still red, you are still looking through the funnel. Choose **All modes** before you decide a file is missing.

Move a new `.oma` into a folder under home from the file manager. Click **Refresh**. If the funnel is red and the new file is another mode, refresh will not show it. Clear the filter. Refresh again if the new file is outside what discovery already had. Then it shows up, newest modification first.

## The edge

The filter does not delete, move, or rewrite `.oma` files. It does not write a sidecar to remember the mode. Clear it with **All modes** and the browser lists what discovery lists.

Discovery itself has a harder boundary than the funnel. Hidden directories, Trash, and symlinks stay out even when the filter is clear. A red icon is not the reason a trashed file is missing. **Refresh** will not pull Trash back in.

Recovered is not a filter mode. Crash snapshots live on the Recovered tab. A red funnel on Recent does not list `.oma.swp` files as if they were posters. Save deletes the swap for a document you saved. That is a different control, on a different tab.

The icon has no button background in 0.5.8. Hover is blue. Active is red. If the funnel is sitting in a filled chip, you are on an older build.

Launch `omadesign`, set the funnel, and trust red. Choose **All modes** when you want the full recent list back.
