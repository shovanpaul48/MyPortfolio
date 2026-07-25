# Shovan Paul — Personal Portfolio

Modern, production-grade personal portfolio built with Next.js 14, Framer Motion, and Obsidian Teal CSS glassmorphism design system. Deployed to GitHub Pages.

## Tech Stack
- **Framework:** [Next.js 14](https://nextjs.org/) (Static Export)
- **Styling:** Vanilla CSS Custom Properties (Obsidian Teal design system with dark/light themes)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Integrations:** `react-github-calendar` & LeetCode Community Stats API

## Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build static export
npm run build
```

## Deployment
Automated via GitHub Actions (`.github/workflows/deploy.yml`) on push to `newVersion` / `main`.