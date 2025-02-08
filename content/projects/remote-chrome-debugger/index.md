---
heading: 'Remote Chrome Debugger'
title: "Running Puppeteer on Serverless Functions: A Custom Chrome Debugging API"
description: "chrome remote debugging websocket proxy in golang. handle auth and chrome browser instance"
logo: "chrome.webp"
status: "active"
date: 2024-08-08T20:00:53+05:30
lastmod: 2024-08-08T20:00:53+05:30
draft: false
techStack: [golang, websockets]
sourceCode: ""
---

## Introduction

Puppeteer is a powerful Node.js library that provides a high-level API for controlling Chrome or Chromium over the DevTools Protocol. It is commonly used for web scraping, automated testing, and rendering pages in a headless environment. However, when using Puppeteer in serverless environments like Vercel or AWS Lambda, we run into a major issue:

**Serverless functions do not support running Chrome directly.**

This limitation exists because serverless platforms provide ephemeral compute environments that lack a persistent file system and restrict long-running processes. Since Puppeteer requires a running Chrome instance, we need an alternative approach.

## The Problem: Running Puppeteer in a Serverless Environment

If we want to use Puppeteer in a serverless function, we have two possible solutions:

1. **Host our own Puppeteer server**: This involves deploying a server that runs Chrome and exposes an API for Puppeteer to interact with.
2. **Use an external API**: There are third-party services that provide a remote Chrome instance via WebSockets, allowing us to interact with a browser without hosting it ourselves.

While external API services are convenient, they can be quite expensive. To solve this, I decided to build my own **Chrome debugging API** using **Go and Fly.io**.

## The Solution: A Self-Hosted Chrome Debugging API

To overcome the limitations of serverless environments, I built a lightweight Chrome debugging API using Go, Docker, and Fly.io. Here's how it works:

### Step 1: Setting Up Chrome in a Dockerized Environment

First, I created a Fly.io project and wrote a **Dockerfile** to install Chrome in a lightweight containerized environment. This allows us to run Chrome headlessly on a cloud-based virtual machine.

### Step 2: Creating a Go Web Server with WebSocket Support

Next, I wrote a **Go program** that starts an HTTP web server with a **WebSocket endpoint**. This WebSocket acts as a middleman between Puppeteer and Chrome.

### Step 3: Handling WebSocket Requests

- When a Puppeteer client connects to the WebSocket, my Go server executes a terminal command to **start Chrome in headless mode**.
- Once Chrome starts, it exposes an endpoint at `http://0.0.0.0:9222/json/version`, which returns a JSON response containing a **Chrome debugging WebSocket URL**.
- Puppeteer normally converts user commands into Chrome DevTools Protocol JSON messages. Instead of Puppeteer communicating with Chrome directly, my Go WebSocket takes messages from Puppeteer and forwards them to the Chrome debugging WebSocket.
- Similarly, responses from Chrome are forwarded back to Puppeteer via my Go WebSocket.

### Step 4: Handling Browser Lifecycle

To ensure efficient resource usage:
- I intercept incoming messages and check if they contain a command to **close the browser**.
- If a request to close the browser is received, my Go program shuts down Chrome and sends a `200 OK` response to indicate successful termination.

### Step 5: Deploying to Fly.io

After testing, I deployed my Go WebSocket server to Fly.io. This provided a public API endpoint that I could use in my Puppeteer scripts. Now, whenever my Puppeteer function needs a browser, it simply:

1. **Sends a request to my Fly.io API** to establish a WebSocket connection.
2. **Interacts with the browser via WebSocket messages**, with my Go program acting as the middleman.
3. **Receives responses from Chrome** and processes them as needed.

## The Final Result: Puppeteer on Serverless Functions

With this setup, I can now use Puppeteer in serverless environments **without needing to install Chrome on the serverless function itself**. Instead, the Chrome instance runs remotely on Fly.io, and Puppeteer communicates with it via WebSocket.

This approach offers several advantages:
- **Lower cost**: Running my own Fly.io instance is more cost-effective than using commercial browser automation APIs.
- **Full control**: I can configure Chrome settings, security policies, and resource management as needed.
- **Scalability**: The setup can be expanded by running multiple Chrome instances for handling concurrent requests.

## Conclusion

If you're working with Puppeteer in a serverless environment and facing limitations due to Chrome dependencies, setting up your own **Chrome Debugging API** is a viable and cost-effective solution. While external browser automation services exist, they can be expensive, making a self-hosted approach a better alternative for long-term projects.

I hope this gives you a clear understanding of how to run Puppeteer on serverless functions efficiently. While I can't make my implementation open-source due to contractual obligations, I encourage developers to explore similar solutions.

If you have any questions or would like to discuss this further, feel free to reach out to me at **gxanshu@gmail.com**.

Thanks for reading!
