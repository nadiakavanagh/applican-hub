# Applican Hub — Investor Demo Deploy Kit

This folder is a complete, ready-to-run project containing your Applican Hub prototype.
Follow ONE of the paths below to turn it into a clickable `https://` link you can send to investors.

---

## ⚡ FASTEST (no terminal, ~5 minutes): StackBlitz

Best if you don't want to install anything.

1. Go to **https://stackblitz.com**
2. Click **"Create"** → choose a **Vite + React (JavaScript)** project.
3. In the file panel, replace the contents of these files with the files from this folder:
   - `package.json`  → paste from this folder's `package.json`
   - `index.html`    → paste from this folder's `index.html`
   - `src/main.jsx`  → paste from this folder's `src/main.jsx`
   - `src/App.jsx`   → paste from this folder's `src/App.jsx`  (this is the big one — your prototype)
   - Delete any leftover `src/App.css` / `src/index.css` imports if it complains.
4. StackBlitz auto-installs and runs it. Click **"Share"** (top right) → copy the live URL.

That URL is your clickable demo. ✅

(CodeSandbox at https://codesandbox.io works the same way if you prefer it.)

---

## 🏆 CLEANEST LINK (~15 minutes): Netlify Drop

Gives you the most professional result with no account juggling. You need Node.js installed once.

1. Install **Node.js** (LTS) from **https://nodejs.org** (one-time, free).
2. Open a terminal **in this folder** and run:
   ```
   npm install
   npm run build
   ```
   This creates a `dist/` folder.
3. Go to **https://app.netlify.com/drop**
4. **Drag the `dist` folder** onto that page.
5. Netlify instantly gives you a live link (e.g. `https://applican-hub-demo.netlify.app`).
   You can rename the site and add a custom domain later in Netlify's free dashboard.

That link is your clickable demo. ✅

---

## 🔷 ALTERNATIVE: Vercel (CLI)

Also free and excellent. Node.js required.

1. Install Node.js (see above).
2. In a terminal in this folder:
   ```
   npm install
   npm install -g vercel
   vercel
   ```
3. Answer the prompts (accept defaults). Vercel builds and gives you a live URL.
4. Run `vercel --prod` to publish the production link.

---

## 🖥️ Run it locally first (optional, to preview before deploying)

```
npm install
npm run dev
```
Then open the URL it prints (usually http://localhost:5173).

---

## 🌐 Custom domain (later)

On Netlify or Vercel (free dashboards), point a domain like `demo.applicanhub.com`
at your site. A domain costs ~$12/year from Namecheap/Cloudflare/Google Domains.

---

## ⚠️ Before you show investors — know this

- This is a **front-end prototype**, not live software. Data is **seeded/sample** and **resets on refresh**. That's normal and fine for a demo — just frame it as "a working prototype of the product vision."
- **Sign-in:** any email + any password works (it's a demo). To see the owner-only **Applican HQ** hub, sign in with an email containing your domain, e.g. `owner@applicanhub.com`.
- It's **desktop-first** — looks best on a laptop. On a phone some screens may be cramped.
- No real integrations, payments, payroll, or login security yet — those are the backend, which is a separate build.

---

## What's in this folder

```
applican-hub-deploy/
├─ index.html          ← page shell
├─ package.json        ← dependencies (React, recharts, Vite)
├─ vite.config.js      ← build config
├─ .gitignore
└─ src/
   ├─ main.jsx         ← React entry point
   └─ App.jsx          ← YOUR PROTOTYPE (the whole app)
```

To update the demo later: replace `src/App.jsx` with a newer version of the prototype
and re-run your chosen deploy path.
