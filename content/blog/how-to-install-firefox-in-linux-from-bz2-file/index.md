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

## How to update to latest version

When it comes to updating firefox from tar file its a bit tricky, but don't worry i have created an script file that will help you to easily update your Firefox. just copy paste the script and update as your needs.

```sh
#!/bin/bash

# Set temporary directory and the destination directory
TEMP_DIR="/tmp"
INSTALL_DIR="/opt/firefox"

# Download the latest version of Firefox
echo "Downloading the latest version of Mozilla Firefox..."
LATEST_FIREFOX_URL="https://download.mozilla.org/?product=firefox-latest&os=linux64&lang=en-US"
wget -O "$TEMP_DIR/firefox-latest.tar.bz2" "$LATEST_FIREFOX_URL"

# Check if the download was successful
if [ $? -ne 0 ]; then
    echo "Failed to download Firefox. Exiting..."
    exit 1
fi

# Remove the old Firefox installation if it exists
echo "Removing old Firefox installation from $INSTALL_DIR..."
sudo rm -rf "$INSTALL_DIR"

# Extract the downloaded tar.bz2 file to /opt/firefox
echo "Extracting Firefox to $INSTALL_DIR..."
sudo tar -xjf "$TEMP_DIR/firefox-latest.tar.bz2" -C /opt

# Check if the extraction was successful
if [ $? -eq 0 ]; then
    echo "Firefox has been successfully installed in $INSTALL_DIR."
else
    echo "Failed to extract Firefox. Exiting..."
    exit 1
fi

# Clean up the temporary downloaded file
echo "Cleaning up temporary files..."
rm -f "$TEMP_DIR/firefox-latest.tar.bz2"

echo "Installation complete."
```


