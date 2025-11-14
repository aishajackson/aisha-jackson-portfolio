# Aisha Jackson — Creative Engineering Portfolio

This is my personal site built with React + Vite. It curates recent experiments, mentorship work, and a condensed journey timeline in one playful, responsive layout. The project highlights:

- **Featured experiments** with edge-hover scrolling to browse case studies.
- **Community flip-cards** that reveal highlights and outbound links.
- **Timeline badges** that pair branded logos with rich descriptions (supports inline emphasis via JSX).
- Light/dark theming persisted to `localStorage`.

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) dev server + build
- CSS (single `App.css`) with custom animations and cards

## Getting Started

```bash
pnpm install      # or npm / yarn
pnpm run dev      # starts Vite on http://localhost:5173
```

### Useful Commands

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `pnpm run dev`     | Start local dev server with HMR    |
| `pnpm run build`   | Type-check + bundle to `dist/`     |
| `pnpm run preview` | Serve the production build locally |
| `pnpm run lint`    | Run ESLint with the shared config  |

## Project Structure

```
src/
├── assets/                 # Images + logos
├── components/             # Section-level React components
├── data/content.tsx        # Centralized content + type exports
├── App.tsx                 # Page shell + theme handling
└── App.css                 # Shared styles, animations, layout
```

All data (projects, community work, socials, timeline) lives in `src/data/content.tsx`. Components import from that file, so you can update content or add new sections without touching the UI logic.

## Deployment

Any static host works (Netlify, Vercel, GitHub Pages). Run `pnpm run build` and deploy the `dist/` folder. Vite already inlines assets and handles hash-based filenames.

---

Questions or ideas? Open an issue or reach out on [LinkedIn](https://www.linkedin.com/in/aishajackson). Thanks for visiting! 🙌
