---
title: 'How to Install Global App Menu in XFCE Arch Linux'
image: "7025c4edec391dc206e5a4210b3f2144fc6a862601229f9db603aeda9ae7ff7b8e71.png"
description: "This blog post provides a step-by-step guide on how to install global app menus in XFCE Arch Linux. Global app menus are a convenient way to access the menus of applications without having to switch to a separate window."
date: 2023-05-28T10:05:03+05:30
lastmod: 2023-05-28T10:05:03+05:30
keywords:
  - tutorials
draft: false
postURL: "anshuvolg/43"
---

Global app menus are a convenient way to access the menus of applications without having to switch to a separate window. They are especially useful on laptops, where screen space is limited.

In Arch Linux, global app menus can be installed using the following commands:

```shell
yay -S vala-panel-appmenu-common vala-panel-appmenu-registrar vala-panel-appmenu-xfce && sudo pacman -S appmenu-gtk-module

xfconf-query -c xsettings -p /Gtk/ShellShowsMenubar -n -t bool -s true
xfconf-query -c xsettings -p /Gtk/ShellShowsAppmenu -n -t bool -s true
```

These commands will install the necessary packages for global app menus. Once the packages have been installed, you will need to restart your X session for the changes to take effect.

After you have restarted your X session, global app menus should be enabled for all applications that support them. If you are still having problems with global app menus, you can try the following:

- Make sure that you have installed the latest versions of the packages.
- Check the configuration of your desktop environment. Some desktop environments may require additional configuration to enable global app menus.
- Report the problem to the upstream developers of the global app menu.

**Additional Steps**

In addition to the above steps, you may also need to make the following changes to your Xfce configuration:

1. Open the Xfce Settings Manager and go to the **Window Manager** section.
2. In the **Menu Bar** section, check the **Show menu bar** checkbox.
3. In the **Application Menu** section, check the **Show application menu** checkbox.

Once you have made these changes, you should have global app menus enabled in your Xfce desktop environment.

**Conclusion**

Global app menus are a convenient way to access the menus of applications without having to switch to a separate window. They are especially useful on laptops, where screen space is limited.

In Arch Linux, global app menus can be installed using the commands listed above. Once the packages have been installed and your X session has been restarted, global app menus should be enabled for all applications that support them.
