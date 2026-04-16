# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

TypeScript type-checking (no separate tsc script, the build handles it):
```bash
npx tsc --noEmit
```

## Architecture

This is a **Next.js 16** dentist company website using the **App Router** with TypeScript and Tailwind CSS v4.

> **Important:** Next.js 16 has breaking changes from older versions. Before writing routing or API code, check `node_modules/next/dist/docs/` for current conventions. Heed deprecation notices — APIs and file structure may differ from older training data.

### Key conventions

- **Routing:** All pages live under `src/app/`. Each folder becomes a route segment. Files named `page.tsx` are rendered as pages, `layout.tsx` wrap child routes, `loading.tsx`/`error.tsx` are special.
- **Path alias:** `@/*` maps to `src/*` (configured in `tsconfig.json`). Use `@/components/Foo` instead of relative paths.
- **Styling:** Tailwind CSS v4 — configured via `postcss.config.mjs` using `@tailwindcss/postcss`. There is no `tailwind.config.js`; utility classes are auto-detected from source files.
- **Fonts:** Geist Sans and Geist Mono are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`).
- **React 19** is in use — hooks and server component patterns follow React 19 semantics.

### Directory layout

```
src/
  app/
    layout.tsx   # Root layout (fonts, html/body wrappers)
    page.tsx     # Home route (/)
    globals.css  # Global styles + Tailwind imports
public/          # Static assets served at /
next.config.ts   # Next.js config (TypeScript)
postcss.config.mjs
tsconfig.json
eslint.config.mjs
```
