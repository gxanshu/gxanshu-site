---
title: 'How to Set Up Private Repositories for Electron Auto-Update'
image: "electorn-auto-update-with-private-repo.jpeg"
description: "Learn how to easily enable private repository updates for Electron applications using electron-updater. Step-by-step guide for hassle-free setup."
date: 2023-08-15T10:03:24+05:30
lastmod: 2023-08-15T10:03:24+05:30
keywords:
  - tutorials
draft: false
postURL: "anshuvolg/38"
---

Are you facing challenges updating your Electron application from private repositories? Discover a straightforward solution using electron-updater. In this guide, we'll walk you through the process of setting up private repository updates for your Electron applications, ensuring smooth and secure auto-updates.

if you are you using electron [auto-updater](https://www.npmjs.com/package/electron-updater) module from the API documentation, I figure out that they don't support.

On the other hand, if you are using [electron-updater](https://www.npmjs.com/package/electron-updater) module, then we are able to use private repositories to update our application.

## Step 1: Install electron-updater Package

Start by installing the `electron-updater` package in your Electron project:

```sh
npm install electron-updater --save
```

## Step 2: Modify electron-builder.json

Open your `electron-builder.json` file and add the following code to the `publish` section:

```json
"publish": [
  {
    "provider": "github",
    "private": true,
    "owner": "<github_owner>",
    "repo": "<repo_name>",
    "token": "<your_github_token>"
  }
],
```

Replace `<github_owner>`, `<repo_name>`, and `<your_github_token>` with your GitHub information and access token. you can get the access token from the settings of your GitHub account.

## Step 3: Verify app-update.yml

After configuring the `electron-builder.json` file, you'll find that the `app-update.yml` file has been updated automatically with your GitHub details. This ensures that your private repository is accessible for updates.

if it not then there must be an update in the `electron-updater` you can check out the latest guide from [quick setup](https://www.electron.build/auto-update#quick-setup-guide) documentation.

## Step 4: Test Your Configuration

Run your Electron application and check if the auto-update functionality works as expected. The electron-updater package will use the provided GitHub token to authenticate and retrieve updates from your private repository.

By following these simple steps, you've successfully set up private repository updates for your Electron application. Now your app can receive automatic updates even from private GitHub repositories, enhancing security and user experience.

In conclusion, ensuring seamless auto-updates for Electron applications with private repositories is no longer a challenge. With the power of electron-updater, your apps can enjoy the benefits of auto-updates regardless of your repository's privacy settings. Stay ahead with efficient and secure updates for your Electron projects.
