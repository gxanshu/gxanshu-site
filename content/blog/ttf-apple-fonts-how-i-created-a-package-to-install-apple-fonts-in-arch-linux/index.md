---
title: 'ttf-apple-fonts: How I Created a Package to Install Apple Fonts in Arch Linux'
image: "8itk9a2lue091.png"
description: "Use this guide to install Apple fonts on Arch Linux. Learn how to install Apple fonts manually or with the AUR package ttf-apple-fonts. best way to install apple fonts in arch linux systems with just one command"
date: 2023-05-25T09:53:58+05:30
lastmod: 2023-05-25T09:53:58+05:30
keywords:
  - projects
draft: false
postURL: "anshuvolg/44"
---

I recently created a package that can install Apple fonts in Arch Linux. The package is called **ttf-apple-fonts**, and it is available on the AUR.

I created this package because I wanted to be able to use Apple fonts on my Arch Linux system. Apple fonts are some of the most popular fonts in the world, and they are used on a variety of devices, including Macs, iPhones, and iPads. However, Apple does not make its fonts available for download, so if you want to use them on your Arch Linux system, you will need to install them manually.

There are a few different ways to install Apple fonts on Arch Linux. One way is to download them from Apple's website. Apple provides a variety of font packages for macOS. You can download the font packages from the [Apple's developer site](https://developer.apple.com/fonts/)

Once you have downloaded the font packages, you can extract them and install them manually. To extract the font packages, you can use the following command:

````shell
$ 7z x font-file-name.dmg
$ cd font-file-name/
$ 7z x font-file-name.pkg
$ 7z x Payload~```
````

a﻿fter getting fonts you can simply paste that in your `usr/share/fonts/`.

Another way to install Apple fonts on Arch Linux is to use the AUR package **ttf-apple-fonts**. This package can be installed with the following command:

```shell
yay -S ttf-apple-fonts
```

Once the package is installed, the fonts will be installed in the `/usr/share/fonts/` directory. You can then use them in any application that supports fonts.

## Creating the AUR Package

In order to create the AUR package, I first created a new directory for the package. I then created a `PKGBUILD` file in the new directory. The `PKGBUILD` file is a text file that contains instructions for building the package.

The first few lines of the file define the package's metadata. This includes the name, version, release number, description, license, and URL.

The next section of the file defines the package's source. This includes the URL of the source code and the SHA256 checksum of the file.

The final section of the file defines the package's installation instructions. These instructions tell `makepkg` how to build and install the package.

Here is a more detailed explanation of each section of the file:

**Metadata**

The metadata section of the file defines the package's name, version, release number, description, license, and URL.

```shell
pkgname=ttf-apple-fonts
pkgver=1.0
pkgrel=1
pkgdesc="Collection of official SF Pro, SF Display, SF Mono Apple Fonts"
pkgbase=ttf-apple-fonts
arch=('any')
url="https://github.com/gxanshu/ttf-apple-fonts"
license=('GPL')

```

The `pkgname` variable defines the name of the package. The `pkgver` variable defines the version of the package. The `pkgrel` variable defines the release number of the package. The `pkgdesc` variable provides a brief description of the package. The `pkgbase` variable is the base name of the package. The `arch` variable defines the architecture of the package. The `url` variable defines the URL of the package's homepage. The `license` variable defines the license that the package is released under.

**Source**

The source section of the file defines the package's source. This includes the URL of the source code and the SHA256 checksum of the file.

```shell
source=("https://github.com/gxanshu/ttf-apple-fonts/releases/download/Fonts/fonts.zip")
sha256sums=('8a6d9d53019aa52c1b7be6c0a07cadbc0ff9929d3b8945f7fcee9ee519d900fe')

```

The `source` variable is an array that contains the URL of the source code. The `sha256sums` variable is an array that contains the SHA256 checksum of the source code file.

**Installation Instructions**

The installation instructions section of the file defines the steps that `makepkg` needs to take to build and install the package.

```shell
package() {
    cd "$srcdir"
    mkdir -p "$pkgdir/usr/share/fonts/apple-fonts"
    cp fonts.zip "$pkgdir/usr/share/fonts/apple-fonts/"

    cd "$pkgdir/usr/share/fonts/apple-fonts"
    unzip fonts.zip
    rm fonts.zip

    find . -type f -name '*.otf' -exec install -Dm644 {} "$pkgdir/usr/share/fonts/TTF/{}" \;
}

```

The first few lines of the `package()` function change the working directory to the source directory. The `mkdir()` function creates a directory in the package directory to store the fonts. The `cp()` function copies the fonts from the source directory to the package directory.

The next few lines of the `package()` function change the working directory to the fonts directory. The `unzip()` function unzips the fonts file. The `rm()` function deletes the fonts file.

The final lines of the `package()` function find all of the OpenType (.otf) fonts in the fonts directory and install them in the `/usr/share/fonts/TTF` directory.

y﻿ou can get the complete [PKGBUILD](https://aur.archlinux.org/cgit/aur.git/tree/PKGBUILD?h=otf-apple-fonts) from archlinux.

## Conclusion

In this blog post, I have shown you how I created a package that can install Apple fonts in Arch Linux. I hope this information is helpful.
