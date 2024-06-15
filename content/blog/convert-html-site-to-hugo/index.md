---
title: 'Convert Html Site to Hugo'
image: "html_to_hugo.png"
description: "Convert your static HTML site to a dynamic Hugo website effortlessly. Learn the step-by-step process, optimize load times, and unleash the power of static site generation."
date: 2023-07-03T10:14:15+05:30
lastmod: 2023-07-03T10:14:15+05:30
keywords:
  - tutorials
draft: false
---
## Introduction

In this blog post, we will explore the process of converting a static HTML theme, template, or site into a fully functional Hugo website. Hugo is a powerful static site generator that allows you to build fast and efficient websites. By following the steps outlined below, you'll be able to seamlessly migrate your HTML site to Hugo and take advantage of its numerous benefits.

## Folder Structure

Let's start with the initial folder structure of the HTML site template. Assume we have the following files and directories:

- assets
- index.html
- contact.html
- about.html

## Creating the Hugo Site

To begin the conversion process, you need to generate a new Hugo site. Open your command line interface and run the following command:

```
hugo new site siteName

```

This command will create the necessary folder structure for your Hugo site.

## Copying Assets

Before we proceed with creating the index page and templates, it's important to copy all the static files, such as CSS, JavaScript, and images, from the HTML template's `assets` folder. Simply copy the entire contents of the `assets` folder in the HTML template and paste them into the `static` folder of your Hugo site. This ensures that all the necessary assets are available for your Hugo site to function correctly.

## Creating the Index Page

The `index.html` file in the HTML template serves as the main page. To replicate this in Hugo, you need to create an `_index.md` file inside the `content` folder. Follow the folder structure given below:

```
- content
  - _index.md
  - about
    - _index.md
  - contact
    - _index.md

```

## Template Creation

Next, you'll need to create templates for the `_index.md` files. Navigate to the `layouts` folder in your Hugo site. Inside the `layouts` folder, you'll find the `index.html` file, which will automatically render the content of the `_index.md` file located in the main content folder.

To render the HTML pages for the about and contact sections, you need to create corresponding folders. Inside the `layouts` folder, create `about` and `contact` folders. Within each of these folders, paste the respective HTML files from the HTML template. For example, place `about.html` in the `layouts/about` folder and `contact.html` in the `layouts/contact` folder. Rename these HTML files to `list.html`.

## Final Folder Structure

After completing the template creation step, your folder structure should look like this:

```
- layouts
  - index.html (automatically renders _index.md from the main content folder)
  - about
    - list.html
  - contact
    - list.html
```