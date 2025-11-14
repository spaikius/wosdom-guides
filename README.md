# 🧊 WOSdom Guides

> **WOSdom (noun):** A collection of knowledge and questionable decisions from the WOS Alliance MiS.
> If you've ever lost a guide in Discord chaos — this site is your new safe haven.

---

## 🧭 Overview

**WOSdom Guides** is a static, mobile-friendly knowledge base built for the **Whiteout Survival - MiS Alliance**.
It makes browsing and reading guides fast, clean, and drama-free — no more scrolling through Discord history.

---

## ✨ Features

- 🧱 **Static Site** — Fast, lightweight, deployable anywhere
- 💻 **Modern Stack** — React 19, Vite, TypeScript, TanStack Router, Tailwind, shadcn/ui
- 📱 **Responsive Layout** — Beautiful on mobile, tablet, and desktop
- 🌓 **Dark Mode First** — Because snow glare is no joke
- 🪄 **Smooth Theming** — Theme toggle with animations
- 📚 **Markdown-Based Guides** — Easy to write, easy to maintain
- 💬 **Built with mild chaos and caffeine**

---

## 🧩 Tech Stack

| Purpose              | Technology                                                                                                            |
| -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Framework            | [React 19](https://react.dev/)                                                                                        |
| Build tool           | [Vite](https://vitejs.dev/)                                                                                           |
| Language             | [TypeScript](https://www.typescriptlang.org/)                                                                         |
| Router               | [TanStack Router](https://tanstack.com/router)                                                                        |
| Styling              | [Tailwind CSS](https://tailwindcss.com/)                                                                              |
| UI Components        | [shadcn/ui v2](https://ui.shadcn.com/)                                                                                |
| Formatting & Linting | [Biome](https://biomejs.dev/)                                                                                         |
| Testing              | [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) |

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/spaikius/wosdom-guides.git
cd wosdom-guides
```

### 2️⃣ Install dependencies

> This project uses **pnpm**.
> If you don't have it yet:

```bash
npm install -g pnpm
```

Then install packages:

```bash
pnpm install
```

### 3️⃣ Run the development server

```bash
pnpm dev
```

Open your browser at:

```
http://localhost:5173
```

---

## 🏗️ Build & Preview

### Build the static site

```bash
pnpm build
```

> Runs `vite build` and TypeScript type-checking to ensure everything compiles cleanly.

### Preview your production build

```bash
pnpm preview
```

> Serves the `dist/` folder exactly as it will appear on GitHub Pages.

---

## 🧪 Development & Maintenance Commands

| Command             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `pnpm dev`          | Start the Vite development server                         |
| `pnpm build`        | Build for production + run TypeScript checks              |
| `pnpm preview`      | Preview the built site locally                            |
| `pnpm test`         | Run all tests with **Vitest**                             |
| `pnpm format`       | Check formatting with **Biome** (no changes written)      |
| `pnpm format:write` | Format all files with **Biome**                           |
| `pnpm lint`         | Check linting issues (dry run)                            |
| `pnpm lint:write`   | Automatically fix linting issues with Biome               |
| `pnpm check`        | Biome full project check: lint + format + types (dry run) |
| `pnpm check:write`  | Apply all Biome fixes, including import sorting ✔         |

> 💡 **Tip:**
> Prefer `pnpm check:write` — it performs **all** autofixes (formatting, imports, lint fixes) in one shot.

---

## 📘 Contributing Guides

Guides live inside the `guides/` folder.

```
guides/
  canyon-clash/
    guide.md
    stage-1.png
    stage-2.png
  sunfire-castle/
    guide.md
    stage-1.png
```

When you add a guide, register it in **`guides/guides.json`**:

```json
[
  {
    "slug": "canyon-clash",
    "title": "Canyon Clash",
    "icon": "🏜️"
  },
  {
    "slug": "sunfire-castle",
    "title": "Sunfire Castle (SvS)",
    "icon": "🏰"
  }
]
```

> 🧭 **Rules:**
>
> - The `"slug"` **must match the folder name**
> - Images in the guide folder can be referenced with:
>
>   ```markdown
>   ![Stage 1](./stage-1.png)
>   ```

---

## 🧑‍💻 Contributing Code

1. Fork the repo
2. Create a branch for your feature/fix
3. Commit using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (optional but nice)
4. Push and open a PR 🎉

> No bureaucracy. No pipelines yelling at you.
> Just make a PR — Spaikius will handle the rest 😄

---

## 📦 Deployment

Deployment is automatic using GitHub Actions + GitHub Pages.

- The site is built with **Vite**
- The output is deployed from `dist/`
- The Vite `base` path is set to:

  ```ts
  base: "/wosdom-guides/";
  ```

- Images inside `guides/` are copied into the build using `vite-plugin-static-copy`

You can also deploy `dist/` to any static host: Netlify, Cloudflare Pages, Vercel (static), S3, etc.

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).
Copy it, remix it, deploy it — just don't blame Spaikius if it snows in production. ☃️

---

## 🧊 Credits

Created by **[Spaikius](https://github.com/spaikius)**
For the **Whiteout Survival - MiS Alliance** ❄️
Made with 💙 and mild chaos.
