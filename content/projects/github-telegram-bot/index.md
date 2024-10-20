---
heading: 'Github Telegram Bot'
title: "Github Telegram Bot"
description: "telegram webhook that allows to send github events on your telegram with a telegram bot."
logo: "Telegram_2019_Logo.png"
status: "active"
date: 2024-10-20T05:02:53+05:30
lastmod: 2024-10-20T05:02:53+05:30
draft: false
techStack: ["typescript", "bun", "cloudflare-workers", "crypto"]
sourceCode: "github.com/gxanshu/github-telegram-bot"
---

I love Telegram. It’s secure, fast, reliable, and I enjoy using it as my daily messaging app. In the past few days, I wanted to set up a Discord-like server, but I didn’t want to use Discord. So, I created a Telegram group and enabled the **topics** feature.

This setup works, but Telegram doesn’t offer as many integrations as Discord. However, Telegram has a really powerful feature — **Bots**.

Here’s a step-by-step guide on how you can utilize Telegram Bots to integrate **GitHub** with your personal Telegram account or any Telegram group.
## **GitHub to Telegram Webhook Bot**
This project integrates a **GitHub organization/repository** with a **Telegram group/channel** using **Hono** and **Bun**. With this setup, you’ll receive Telegram notifications when:
- A **Pull Request (PR)** is created, merged, or closed.
- A **repository** is created or deleted.
- A **build fails** on any repository.
- you can add more in the code as you like.

This guide will walk you through the **setup**, including creating a Telegram bot, configuring GitHub webhooks with a secret, and deploying the project using **Cloudflare Workers**.

---

## **Features**
- 🆕 **PR events**: Get notified when a pull request is opened or merged.
- ❌ **Build failure alerts**: Stay updated on any failed builds.
- 📦 **Repository management**: Get notifications when a repo is created or deleted.
- 🔒 **Webhook security**: Validates GitHub webhooks using a **secret** token.

---

## **Project Setup**

### Prerequisites
1. **Node.js** installed via **Bun** (Bun comes with a Node.js-compatible runtime).
2. A **Telegram bot** (explained below).
3. **GitHub repository** or organization to track events.
4. **Cloudflare account** to deploy using **Cloudflare Workers**.

---

### 1. **Create a Telegram Bot**
1. Open Telegram and search for **@BotFather**.
2. Use `/newbot` to create a new bot.
3. Provide a name and username for your bot.
4. You’ll receive a **bot token** like this:
   ```
   8179059028:AAFTFFNUOxwlDlU9mnQjhP08u5X5fAEYuX4
   ```
5. Add the bot to your **Telegram group/channel** and give it permission to send messages.
6. Get the **chat ID** of your group:
   - Add the bot to your group and send a test message.
   - Visit:
     `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Look for the `chat_id` in the JSON response.

---

### 2. **Clone the Project**
```bash
git clone https://github.com/gxanshu/github-telegram-bot.git
cd github-telegram-bot
```

---

### 3. **Add Telegram Credentials to the Code**
Open the `index.ts` file and replace the placeholders with your **Telegram bot token** and **chat ID**:

```ts
const TELEGRAM_TOKEN = "your-telegram-bot-token";
const CHAT_ID = "your-telegram-chat-id";
```

---

### 4. **Add Your GitHub Webhook Secret**
1. Go to your **GitHub repository** (or organization) → **Settings** → **Webhooks**.
2. Add a **new webhook** with the following details:
   - **Payload URL**:
     `https://<your-cloudflare-worker-url>/webhook`
   - **Content type**: `application/json`
   - **Secret**: Choose a **random string** and keep it safe. This is your webhook secret.

3. Update the `index.ts` file with your **GitHub secret**:

```ts
const GITHUB_SECRET = "your-github-secret";
```

---

### 5. **Install Dependencies**
This project uses **Hono** as a web framework. Run the following command to install the required dependencies:

```bash
bun install
```

---

### 6. **Test Locally**
You can run the project locally using Bun:

```bash
bun run index.ts
```

The server will start on `localhost`. You can test your webhook using a tool like **ngrok** to expose your local server to the internet.

---

### 7. **Deploy to Cloudflare Workers**
1. **Deploy** your project to Cloudflare Workers:

```bash
bun run deploy
```

2. You’ll get a **public URL** (e.g., `https://my-project.cloudflareworkers.dev`). Use this URL as the **Payload URL** when setting up your GitHub webhook.

---

### 8. **Add the GitHub Webhook**
1. Go to your **GitHub repository** → **Settings** → **Webhooks** → **Add webhook**.
2. Use the **Cloudflare Worker URL** (e.g., `https://my-project.cloudflareworkers.dev/webhook`) as the **Payload URL**.
3. Add the **Webhook secret** (the one you added to your code).
4. Select the following events to trigger the webhook:
   - `Pull Request`
   - `Repository`
   - `Status`
5. Save the webhook.

---

### 9. **Verify Everything Works**
- Create a **pull request** or **repository** in your GitHub account.
- Check if the **Telegram group** receives notifications!
- If something goes wrong, you can inspect the webhook delivery logs in **GitHub** under **Settings → Webhooks → Recent Deliveries**.

---

## **Project Overview**
This project leverages **Hono** for fast API handling and **Bun** for its Node.js-compatible runtime. With **Cloudflare Workers**, the bot runs at the edge, ensuring low latency and fast performance worldwide.

---

## **Troubleshooting**
1. **Telegram bot not sending messages**:
   - Double-check the **bot token** and **chat ID**.
   - Ensure the bot has the right permissions in the group.

2. **GitHub webhook validation failed**:
   - Ensure the **webhook secret** in GitHub matches the one in the code.
   - Verify that the **Cloudflare Worker URL** is correct.

3. **Webhook not triggering**:
   - Make sure the webhook events (PR, status, repo) are selected.
   - Check for errors in the GitHub webhook delivery logs.

---

## **Conclusion**
With this setup, you’ve created a powerful integration between **GitHub** and **Telegram**. You can now stay updated with pull requests, build failures, and repository changes — all from within your Telegram group. This guide also demonstrated how to deploy the project using **Bun** and **Cloudflare Workers**, ensuring high availability and fast response times.

Happy coding! 🚀
