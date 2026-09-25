---
id: R056-01
title: The welcome screen finds your work and projects
slug: omadesign-0-5-6-welcome-finds-your-work
excerpt: "0.5.6 replaced the welcome page with a local browser. It finds every .oma under your home directory, finds .omabrand projects at any depth, and shows shared Team projects only when you are signed in."
publishedAt: 2026-09-22T00:58:50Z
tags: [omadesign, 0.5.6, welcome, projects]
coverImage: /blog/omadesign-0-5-6/omadesign-0-5-6-welcome-finds-your-work/og.png
---

## The habit

A recent-files list only knows what you opened in this app, on this machine, lately. The poster you made two weeks ago in a different folder is missing from it, so you open the file chooser and dig.

Projects have the same problem. In Omadesign a project is a folder with a `.omabrand` directory in it, which holds the logos, the palette and the type kit. Before 0.5.6, no view showed those folders as projects.

## The constraint

There is no account and no central database. A project is an ordinary directory, so the welcome screen had to discover what is already on disk.

Scanning a home directory can be slow, and some of it should be skipped entirely. Hidden directories, Trash and symlinks stay out. The scan and the previews have to keep the UI responsive. They also have to show incomplete or error states instead of pretending the list is done.

## What landed

The welcome screen has three columns: your documents on the left, creation actions in the center, and brand projects on the right. It follows your Omarchy colors and font.

**Your Work.** Your Work finds every `.oma` under your home directory and sorts by modification time, newest first. Thumbnails keep each document's natural proportions in a masonry browser with up to three columns. Names show on hover. Click to open. Shift-click starts selecting several. Filter by Vector, Raster, Layout, Photo or Motion. Recovered autosaves have their own tab.

**Projects.** Any directory under home, at any depth, that contains `.omabrand` shows up as a project. Open a project and you see its subprojects first, then every descendant `.oma`, newest first. You can enter a subproject and navigate back out. Folder cards gather asset previews inside their outline.

**Team.** Shared team projects appear in their own tab, and only while the desktop is signed in to cloud and shared projects exist.

**Start with the right canvas.** Vector and Layout open the template chooser, and their file icons open blank size setup. Raster opens size setup. Photo can enter the workspace, open a folder or open one image. Project opens the brand editor. Motion is not a creation action because it needs existing elements to animate. It is still a mode and a filter.

## In the hand

Update and relaunch. The welcome screen starts scanning, and your documents fill the left column, newest first. Click the funnel and pick Photo to see only Photo documents. Shift-click two posters to open both.

On the right, the projects you already have show up without you registering them. Open one, step into a subproject, and back out.

## The edge

Discovery is local. It sees what is under your home directory and skips hidden directories, Trash and anything on the other end of a symlink.

Team visibility is backed by tests and a deployed metadata check. A live session with two real accounts was not re-tested for this release, and the release notes say so.

The release ran 586 native tests, and native WGPU checks covered the welcome screen at 1920×1080 and 960×640. Existing documents, projects and preferences stay in place on update. Notes are in the [v0.5.6 release](https://github.com/michaelmonetized/omadesign/releases/tag/v0.5.6) and [PR #84](https://github.com/michaelmonetized/omadesign/pull/84).

```sh
curl -fsSL https://omadesign.app/install | sh
```
