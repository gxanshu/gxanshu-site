---
title: 'How To Install Firefox From bz2 File in Linux With Desktop Icon'
image: "main.png"
description: "How to install Firefox web browser in linux (Gnome, KDE, XFCE) from bz2 file with a desktop icon in app menu and app finder"
date: 2024-10-18T13:04:16.30
lastmod: 2024-10-18T13:04:16.30
keywords:
  - tutorials
draft: false
---

I've been using Firefox for a long time, and I love it. However, sometimes it doesn’t update to the latest version quickly through package managers like APT or DNF, or through the software center. I wanted to install Firefox from a `.tar.bz2` file on Linux, but it doesn’t come with a desktop file for the icon, which can be time-consuming to set up. So, here’s a solution.

## Download Firefox

First, you’ll need the `.tar.bz2` file to install Firefox. Visit the [Mozilla Firefox website](https://www.mozilla.org/en-US/firefox/new/) and download the appropriate file for your operating system.

## Extract Firefox on Linux

To extract the contents of the downloaded Firefox file, use the following command:

```bash
sudo tar jxvf firefox-*.tar.bz2 -C /opt
```

This command extracts the contents to the `/opt` directory, and you'll need sudo permissions to do this.

## Install Firefox

Now that Firefox is extracted, you can start it by running `/opt/firefox/firefox` from your terminal. However, this isn’t the most convenient way to launch Firefox, so let’s create a desktop icon for easier access.

## Create Desktop Icon

To create a desktop icon for Firefox, run the following command:

```bash
nano ~/.local/share/applications/firefox.desktop
```

This opens the `firefox.desktop` file in the `nano` text editor. Add the following lines to the file:

```desktop
[Desktop Entry]
Version=1.0
Name=Firefox Web Browser
Comment=Browse the World Wide Web
GenericName=Web Browser
Keywords=Internet;WWW;Browser;Web;Explorer
Exec=/opt/firefox/firefox %u
Terminal=false
X-MultipleArgs=false
Type=Application
Icon=/opt/firefox/browser/chrome/icons/default/default128.png
Categories=GNOME;GTK;Network;WebBrowser;
MimeType=text/html;text/xml;application/xhtml+xml;application/xml;application/rss+xml;application/rdf+xml;image/gif;image/jpeg;image/png;x-scheme-handler/http;x-scheme-handler/https;x-scheme-handler/ftp;x-scheme-handler/chrome;video/webm;application/x-xpinstall;
StartupNotify=true
StartupWMClass=firefox
NoDisplay=false
```

Save the file and exit the editor. Now, you can easily start Firefox from your application menu or app finder.
