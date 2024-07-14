---
heading: 'LSP vtsls'
title: "Introducing LSP vtsls: VSCode's typescript for sublime text"
description: "VScode's typescript language server for sublime text lsp. fast & performant from typescript-language-server"
logo: "app-icon.png"
status: "active"
date: 2024-07-13T10:49:46+05:30
lastmod: 2024-07-13T10:49:46+05:30
draft: false
techStack: [python"]
sourceCode: "github.com/gxanshu/LSP-vtsls"
---
VSCode's TypeScript and JavaScript support for Sublime's LSP plugin provided through [vtsls](https://github.com/yioneko/vtsls).

## What is vtsls ?
This is an LSP wrapper around TypeScript extension bundled with VSCode. All features and performance are nearly the same. you can enjoy VSCode's typescirpt features into Sublime Text.

## Installation

 * Install [`LSP`](https://packagecontrol.io/packages/LSP) and `LSP-typescript` from Package Control.
 * For ST4: The TypeScript and React (TSX) syntaxes are built-in so no need to install anything else.
 * For ST3: If you are working with TypeScript install [TypeScript Syntax](https://packagecontrol.io/packages/TypeScript%20Syntax). If you are working with React install [JSCustom](https://packagecontrol.io/packages/JSCustom).
 * Restart Sublime.

## Configuration

Open the configuration file using the Command Palette `Preferences: LSP-vtsls Settings` command or open it from the Sublime menu.

this plugin is a wrapper for vtsls so all its configrations are supported here. you can see [configration schema](https://github.com/yioneko/vtsls/blob/main/packages/service/configuration.schema.json) and customize as you want by providing those values in setting by `Preferences: LSP-vtsls Settings`.

## code actions

currently its supporting main commands from vtsls but you can create PR if you want something new or create an issue for it.

here is the list of all the available commands

1. LSP-vtsls: Organize Imports
2. LSP-vtsls: Open TS server Log
3. LSP-vtsls: Reload Projects
4. LSP-vtsls: Select TypeScript Version
5. LSP-vtsls: Sort Imports
6. LSP-vtsls: Remove Unused Imports