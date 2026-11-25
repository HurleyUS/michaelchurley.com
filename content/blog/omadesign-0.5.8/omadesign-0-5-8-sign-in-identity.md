---
id: T114
title: Sign in identity
slug: omadesign-0-5-8-sign-in-identity
excerpt: File → Sign in… opens a browser device code. Approve only the code the desktop is showing. The site account holds the name and email. A name in a file does not, by itself, grant cloud access.
tags: [omadesign, 0.5.8, cloud]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-sign-in-identity/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-sign-in-identity/og.png
---

## The habit

Adobe's sign-in is the application. You enter an email, a window polls, and the menus that were gray become the menus that upload. Affinity, for a long time, did not ask. When a tool does ask, you want to know three things. Where the session lives. How long it lasts. Whether typing your email into a local file is the same thing as being allowed in.

You also know the collaborator failure. You invite `sam@studio.test` and Sam signs in as `sam@gmail.com`. The invite sits there. The fix is to match the email, not to forward a link through a third inbox and hope the session sticks.

## The constraint

The native app is the place you draw. The browser is the place identity is proved. File → Sign in opens a secure browser approval. The cloud guide is specific: sign in with a verified email through Clerk. The desktop shows a device code. The browser asks you to approve a code. You approve only the code the desktop is displaying. A code from a mail you did not start, or a code from a different machine, is not this sign-in.

The short claim says File → Sign in… writes an identity file at `~/.config/omadesign/cloud-identity.json` on the desktop, and that Account on the site stores the name and email. Both belong in the picture. Preferences already live under `~/.config/omadesign`, or under `XDG_CONFIG_HOME` when that is set. The identity file is written with owner-only permissions. It is a local record of the desktop session. It is not a token you paste into chat, and it is not access by itself.

A name or an email alone never grants cloud access. Someone who can read a string on disk is not a member of your project. Membership is an invitation to a verified email, accepted after sign-in. Desktop credentials expire after 30 days. You revoke them from `/account`, or you disconnect in the app. Waiting out the month is the slow version. Revoke is the version you use when a laptop leaves.

Welcome stays useful signed out. Team appears on the welcome screen only while you are signed into cloud and shared team projects are available. The file browser does not grow a Team tab to shame you into an account.

## What landed

File → Sign in… starts the device flow. A browser opens. You sign in with the verified email you mean to use for this work. You compare the code in the browser with the code on the desktop. You approve that pair. The local identity file is written owner-only. The site account holds the name and the email. `/account` is where you see that identity and where you revoke a desktop credential before the 30 days are up.

Use the same email you will be invited with. Owners invite a verified address as an editor or a reviewer. The invitation arrives through Resend and expires after seven days. You sign in with the invited email and accept from the workspace. A second email, even one you also own, is a different identity. Match them on purpose. The short claim says this in one line because it is the mistake that wastes the invite.

Disconnect in the app when this machine should stop being a signed-in desktop. Revoke from `/account` when you cannot reach the machine, or when you want the credential dead now. An expired credential does not keep pulling. Previously downloaded files stay on the disk that already has them. Revocation blocks the next request. It does not reach into a folder you already saved and shred it. That is the same rule as removing a project member. Private downloads recheck membership on every request. Old copies are the recipient's files.

The identity is per person. It is not a project. Signing in does not upload the open `.oma`. Push project + review export is the upload, and it is a separate command. Signing in does not publish. Publish selected export is a separate owner action. The session is the permission to use those commands. It is not those commands.

Production uses the Clerk issuer at `https://clerk.omadesign.app`. Development uses a different Clerk instance. You should not mix keys, and you do not need to, because sign-in from the installed app is the production flow. The desktop transport for later calls is `/api/cloud`. Sign-in is the step that makes those calls yours.

If you never sign in, `cloud-identity.json` does not need to exist for the studio to run. Ctrl+S still saves. The Brand panel still reads the project folder. Photo still writes `.omaphoto` beside the camera file. Identity is for the cloud door.

## In the hand

Open the app. Confirm you can save a local file while signed out. Then File → Sign in….

The browser opens. Sign in with the email you want on the account. Read the device code on the desktop. Approve that code in the browser. Do not approve a different code because it arrived first. Come back to the app. The session is on. `/account` shows the name and email. On disk, the identity file is under the config directory, owner-only. You do not need to edit it. Editing it by hand does not make you someone else, and it does not grant access the server refused.

Invite check, when you are the person being invited: look at the email address in the invitation. Sign out if the desktop is a different address. Sign in with the invited one. Accept in the workspace before the seven days are up. A late invitation is expired. The owner sends another.

On a machine you are giving away, disconnect in the app, then revoke that desktop from `/account` on a machine you still trust. Thirty days is the cap if you forget. It is not the plan.

Team, on the welcome screen, shows when this signed-in identity actually has shared team projects. An empty Team is not a failure of the file browser. Your Work still lists local `.oma` files.

## The edge

A name or an email in `~/.config/omadesign/cloud-identity.json` does not grant cloud access. The file is the local session record, written owner-only after you approve the device code. Access still requires that approval, a verified email, and, for someone else's project, an invitation you accept.

Desktop credentials expire after 30 days. Revoke them from `/account`, or disconnect in the app, when the machine should stop now.

File → Sign in…, then approve only the code on the desktop.
