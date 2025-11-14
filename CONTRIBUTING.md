# 🤝 Contributing Guide

Thank you for your interest in contributing to **WOSdom Guides**!
Whether you'e fixing typos, improving UI, adding features, or writing new guides—your help is welcome and appreciated.

This document explains how to contribute effectively and respectfully.

---

## 🧭 Ways to Contribute

You can contribute in many ways:

### ✏️ Improve or Add Guides

- Fix typos, grammar, or unclear wording
- Add new game guides or update outdated ones
- Add images or improve formatting
- Update `guides/guides.json` when adding new content

### 💻 Improve the Codebase

- Fix bugs
- Add new UI features
- Improve styling, accessibility, or performance
- Clean up code and structure
- Add tests (if applicable)

### 🐛 Report Issues

If you find something broken or confusing:

- Open an Issue
- Describe what happened
- Include steps to reproduce if possible

---

## 🔧 Project Setup

Clone the repository:

```bash
git clone https://github.com/spaikius/wosdom-guides.git
cd wosdom-guides
```

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Build the project:

```bash
pnpm build
```

Run formatting and lint checks:

```bash
pnpm check
```

---

## 🌿 Branching

Please create a new branch for your work:

```
git checkout -b feature/my-feature
git checkout -b fix/my-bugfix
git checkout -b docs/my-doc-update
```

This keeps the main branch clean and makes merging easier.

---

## 🧪 Commit Messages

Use clear commit messages.
Conventional Commit style is **optional**, but appreciated:

Examples:

- `feat: add new Sunfire Castle guide`
- `fix: gradient text rendered incorrectly on mobile`
- `docs: update contributing guide`
- `style: run biome format`
- `refactor: simplify theme hook`

---

## 🔍 Pull Requests

When you'e ready:

1. Push your branch
2. Open a Pull Request
3. Explain what you changed and why
4. If possible, attach screenshots for UI changes

The maintainer (Spaikius) will review and merge it.

---

## 📘 Guide Contribution Rules

All guides should follow this structure:

```
guides/
  guide-name/
    guide.md
    image-1.png
    image-2.png
```

And be registered in `guides/guides.json`:

```json
[
  {
    "slug": "guide-name",
    "title": "Guide Title",
    "icon": "🏜️"
  }
]
```

---

## 🧊 Code Style

This project uses **Biome** for formatting and linting.

Please run:

```bash
pnpm check:write
```

before submitting a PR.

This ensures consistent formatting across the whole codebase.

---

## 🛟 Need Help?

If you're unsure about anything:

- Open an Issue
- Ask in the PR
- Ping Spaikius

We'e all here to help—and we appreciate every contribution, big or small.

---

## ❄️ Final Note

Thank you for helping improve **WOSdom Guides**!
Your contributions make the project better for the entire MiS community.
