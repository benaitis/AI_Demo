# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 project using React 19 with TypeScript, Tailwind CSS v4, and shadcn/ui components. The app structure uses Next.js App Router with React Compiler and Turbopack enabled for fast builds.

## Development Commands

- **Start dev server**: `npm run dev` — runs on http://localhost:3000 with hot reload
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint` — uses ESLint with Next.js TypeScript rules

## Key Project Files & Configuration

- `src/app/` — Next.js App Router pages and layouts
  - `layout.tsx` — Root layout with fonts (Geist Sans/Mono) and global styles
  - `page.tsx` — Home page (main entry point)
- `tsconfig.json` — TypeScript config with path alias `@/*` mapping to `./src/*`
- `next.config.ts` — Next.js config with React Compiler, Turbopack, and TailwindCSS loader enabled
- `eslint.config.mjs` — ESLint config using Next.js core web vitals and TypeScript rules
- `src/app/globals.css` — Global styles (imported in layout)

## Important Notes

### Next.js Version Warning
**AGENTS.md contains important breaking changes for Next.js 16.** Before writing new code, read relevant guides in `node_modules/next/dist/docs/`. This version differs significantly from older Next.js versions.

### Architecture Highlights

- **React Compiler**: Enabled in `next.config.ts` (`reactCompiler: true`) — improves performance automatically
- **Turbopack**: Used for fast local dev builds with Tailwind CSS loader configured
- **Path Aliases**: Use `@/` to import from `src/` (e.g., `import Component from "@/components/Button"`)
- **Server/Client Components**: Next.js App Router defaults to Server Components; mark interactive components with `"use client"`
- **Component Library**: shadcn/ui available but not yet used; components are in `src/components/ui/` when added

### Styling & UI

- **Tailwind CSS v4**: Configured with Turbopack plugin for fast builds
- **Dark Mode**: Supported via Tailwind's built-in dark mode (uses `dark:` prefix)
- **shadcn/ui**: Available for component scaffolding but starting fresh; use `npx shadcn-ui@latest add [component]` to add components

## Testing & Linting

- ESLint runs with Next.js and TypeScript configurations
- No test runner configured yet (Jest/Vitest can be added as needed)
- Use `npm run lint` to check code; Prettier is configured for formatting via ESLint integration

## Git Workflow

The repository uses a main branch. Follow standard git practices with atomic commits. See AGENTS.md for auto-generated Next.js rules (ignore/don't commit the AGENTS.md markers).
