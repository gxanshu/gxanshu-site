---
title: 'Fix Blurry Chrome/Chromium With Rounded Corners on GNOME Fractional Scaling'
image: ""
description: "Chrome and Chromium browsers look blurry on GNOME when you add rounded corners and use fractional scaling like 125%. Here is the one flag that fixes it on Wayland."
date: 2026-06-13T08:55:32+05:30
lastmod: 2026-06-13T08:55:32+05:30
keywords:
  - tutorials
  - gnome
  - linux
  - chrome
  - wayland
draft: false
---

If you use GNOME, you have probably noticed that Chrome and other Chromium based browsers don't get the nice rounded corners that the rest of your apps have. They stay square while everything else looks clean. It bugged me for a long time.

The usual fix is to install the **Rounded Window Corners Reborn** extension. It works, your browser finally gets rounded corners, and life is good... until you realise the whole browser window has turned blurry. Text looks soft, icons look fuzzy, and it only happens on the browser. Everything else on screen is sharp.

I hit this exact wall and spent a while figuring out why. Here is what is going on and the one line that fixes it.

## Why it gets blurry

The blur only shows up if you are using **fractional scaling**, like 125%, 150% and so on. A lot of people on laptops run 125% because 100% is too small and 200% is too big.

On Wayland, Chromium tries to be smart about fractional scaling using a protocol called `WaylandFractionalScaleV1`. On its own that is fine. But once the Rounded Window Corners extension starts repainting the browser window to clip those corners, the scaling math between Chromium and the extension stops lining up. The result is a window that gets rendered at the wrong scale and then stretched back, which is exactly what makes everything look soft.

So it is not the extension's fault and it is not really Chromium's fault either. It is the two of them disagreeing about who handles the fractional scale.

## The fix

Launch your browser with this flag:

```sh
--disable-features=WaylandFractionalScaleV1
```

That's it. This tells Chromium to stop using its own fractional scaling and let the compositor handle the scaling instead. The extension can now clip the corners cleanly, and the blur is gone. Your rounded corners stay, and the window is sharp again.

One thing to check first: **you need to be running on Wayland, not X11.** If you are on X11 this flag won't help you. You can confirm your session with:

```sh
echo $XDG_SESSION_TYPE
```

If it prints `wayland`, you are good to go.

## Making it permanent

Passing the flag once in the terminal is fine for testing, but you don't want to type it every time. The cleanest way is to edit the browser's `.desktop` file so the flag is always there.

First, copy the desktop file to your local applications folder so you don't touch the system one:

```sh
cp /usr/share/applications/google-chrome.desktop ~/.local/share/applications/
```

If you can't find the file there, look inside `~/.local/share/applications/` or your Flatpak exports folder, depending on how the browser was installed. Then open the copy and find every line that starts with `Exec=`. Add the flag right after the browser command, for example:

```sh
Exec=/usr/bin/google-chrome-stable --disable-features=WaylandFractionalScaleV1 %U
```

Save it, and now every time you open the browser from your app menu the flag is applied automatically. No more blur, no extra steps.

## My setup

For the record, I ran into this and tested the fix on:

- **Helium browser** (a Chromium based browser)
- **GNOME 50**
- **Fedora Silverblue 44**
- Wayland session with 125% fractional scaling

It should work the same on regular Chrome, Chromium, Brave, Edge, Vivaldi and other Chromium based browsers, since they all share the same Wayland code underneath.

## Wrapping up

Rounded corners on GNOME are a small thing, but a blurry browser is the kind of thing you can't unsee once you notice it. One flag fixes both problems at once, and you don't have to give up fractional scaling to get there.

If this saved you some time, I'd appreciate a follow. I share more Linux and dev stuff over on [GitHub](https://github.com/gxanshu) and [Twitter/X](https://twitter.com/gxanshu) as **gxanshu**. If the flag didn't work for your setup, drop a comment and I'll try to help.
