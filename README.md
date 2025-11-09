# 🧊 WOSdom Guides

> **WOSdom (noun):** A collection of knowledge and questionable decisions from the WOS Alliance MiS.  
> If you've ever lost a guide in Discord chaos — this site is your new safe haven.

---

## 🧭 Overview

**WOSdom Guides** is a static, mobile-friendly knowledge base built for the **Whiteout Survival Alliance MiS** community.  
It's designed to make browsing and reading guides easy (and maybe even fun) — without digging through endless Discord messages.

---

## ✨ Features

- 🧱 **Static Site** — Fast, lightweight, deployable anywhere (GitHub Pages, Netlify, etc.)
- 💻 **Modern Stack** — React 19, Vite, TypeScript, TanStack Router, Tailwind, shadcn/ui
- 📱 **Responsive Layout** — Works beautifully on phones, tablets, and desktop
- 🌓 **Dark Mode First** — Because snow glare is no joke
- 🪄 **Smooth Theming** — Theme toggle with subtle animations
- 📚 **Markdown-Based Guides** — Simple to write and update
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

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🏗️ Build & Preview

### Build the static site

```bash
npm run build
```

> Builds and type-checks (`vite build && tsc`) to ensure everything compiles cleanly.

### Preview your production build

```bash
npm run preview
```

> Launches a local server so you can preview the `dist/` output as it will appear on GitHub Pages.

---

### 🧪 Development & Maintenance Commands

| Command                | Description                                                                  |
| ---------------------- | ---------------------------------------------------------------------------- |
| `npm run dev`          | Start the local development server with **Vite**.                            |
| `npm run build`        | Build the production site and run **TypeScript** type checks.                |
| `npm run preview`      | Preview the production build locally using Vite's preview server.            |
| `npm run test`         | Run all tests using **Vitest**.                                              |
| `npm run format`       | Check code formatting with **Biome** (no changes written).                   |
| `npm run format:write` | Automatically format all files with **Biome** (whitespace, layout, etc.).    |
| `npm run lint`         | Check code for linting issues using **Biome** (dry run).                     |
| `npm run lint:write`   | Automatically fix linting issues with **Biome** (safe autofixes only).       |
| `npm run check`        | Run Biome's full project check — lint + format + type awareness (dry run).   |
| `npm run check:write`  | Run Biome's full check and **apply all fixes** (includes import sorting). ✅ |

---

✅ **Tip:**
Use `npm run check:write` instead of `format:write` if you also want Biome to **organize imports** and apply all safe automatic fixes in one go.

---

## 📘 Contributing Guides

Guides live in the **`guides/`** folder.

Each guide has its own subfolder:

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

When you add a new guide, register it in **`guides/guides.json`**:

```json
[
  {
    "slug": "canyon-clash",
    "label": "Canyon Clash",
    "emoji": "🏜️"
  },
  {
    "slug": "sunfire-castle",
    "label": "Sunfire Castle (SvS)",
    "emoji": "🏰"
  }
]
```

> 🧭 **Tip:**
> The `"slug"` must match the guide folder name.
> Images in the same folder are automatically linked when you use Markdown syntax like:
>
> ```markdown
> ![Stage 1](./stage-1.png)
> ```

---

## 🧑‍💻 Contributing Code

1. Fork the repository
2. Create a new branch for your feature or fix
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) style if possible
4. Push and **open a Pull Request** 🎉

> No bureaucracy, no CI hoops — just make a PR and Spaikius will handle the rest 😄

---

## 📦 Deployment

The site is automatically built using **Vite** and hosted on **GitHub Pages**.

- The `base` path is set to `/wosdom-guides/` in `vite.config.ts`.
- During build, the `guides/` folder (with images) is copied into the `dist/` directory using `vite-plugin-static-copy`.

You can also deploy the `dist/` folder to any static hosting service.

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).
You can copy, remix, and deploy it — just don't blame Spaikius if it snows in production. ☃️

---

## 🧊 Credits

Created by **[Spaikius](https://github.com/spaikius)**
For the **Whiteout Survival - MiS Alliance** ❄️
Made with 💙 and mild chaos.

---

> _"Code freezes are temporary. Blizzard events are forever."_
