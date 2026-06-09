# Copilot Instructions for hot-buns-gym-bakery

This repository is a single-page **Vite + React + TypeScript** marketing site.

## Project context
- Entry point is `src/main.tsx`; page composition is in `src/App.tsx`.
- UI is built from section components in `src/components/*.tsx`.
- Shared primitives live in `src/components/ui/*.tsx`.
- Backend waitlist API lives in `api/` as an Azure Functions TypeScript app.
- Styling uses Tailwind utility classes plus theme tokens from `src/styles/theme.css` and global styles in `src/main.css` / `src/index.css`.
- Deployment target is GitHub Pages static hosting; features that need persistence must call external APIs via `VITE_*` build-time config.

## Coding expectations
- Prefer TypeScript-first, functional React components.
- Reuse existing components before creating new primitives.
- Use the `@/` alias for imports from `src` (configured in `tsconfig.json` and `vite.config.ts`).
- Follow existing naming/style patterns in nearby files instead of introducing new patterns.
- Keep changes focused and avoid broad refactors unless explicitly requested.

## Behavior and UX consistency
- Preserve the landing-page flow and section order unless asked to change it.
- Keep animations purposeful and lightweight (existing pattern uses `framer-motion` with scroll-triggered reveals).
- Use semantic Tailwind tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, etc.) to stay aligned with the theme.

## Validation commands
- Build: `npm run build`
- Lint: `npm run lint` (if ESLint flat config is present for this environment)
