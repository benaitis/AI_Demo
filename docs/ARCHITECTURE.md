# Architecture & Design Patterns

This document outlines the architecture decisions and design patterns used in the AI Demo project.

## Next.js App Router

- Default to **Server Components** (no `"use client"` = server-side)
- Mark interactive components with `"use client"` directive at the top
- Routes are file-based: `src/app/[path]/page.tsx` → `/(path)`

## Styling Approach

- **Tailwind CSS v4** with utility-first classes
- **Dark mode** supported via `dark:` prefix (Tailwind's automatic dark mode toggle)
- **Path alias**: Use `@/` to import from `src/` (e.g., `import { Button } from "@/components/ui/button"`)

## Compiler & Performance

- **React Compiler** enabled in `next.config.ts` (`reactCompiler: true`) — automatically optimizes components, memoizes renders
- **Turbopack** used for dev builds (faster than webpack)
- **Partial prefetching** enabled (`partialPrefetching: true`)
- **Component caching** enabled (`cacheComponents: true`)

## Font Loading

- Uses **Next.js `next/font/google`** to load Geist Sans and Geist Mono from Google Fonts
- Fonts injected as CSS variables (`--font-geist-sans`, `--font-geist-mono`)
- Applied in `src/app/layout.tsx` on the html element

## Metadata

- Uses `next/metadata` for SEO (title, description, etc.)
- Set in `src/app/layout.tsx` with `export const metadata: Metadata`

## Component Structure

### Directory Organization

```
src/
├── components/
│   ├── index.ts           # Barrel exports for all components
│   ├── [ComponentName].tsx # Individual component files
│   └── ui/                # shadcn/ui components (added via CLI)
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── [route]/page.tsx   # Route pages
└── lib/
    └── [utilities].ts     # Shared utilities, helpers, types
```

### Component Conventions

- **Server vs Client**: Default to Server Components; use `"use client"` for interactive features
- **Naming**: PascalCase (e.g., `UserProfile.tsx`, `Button.tsx`)
- **Props**: Use TypeScript interfaces for all props
- **Exports**: Use named exports, but provide a barrel export in `index.ts`

## Important: Next.js v16 Breaking Changes

**⚠️ This version of Next.js (16.4.3) has significant breaking changes from earlier versions.**

Before writing or modifying code:

1. **Check the Next.js documentation** in `node_modules/next/dist/docs/` for:
   - App Router API changes
   - Server vs. Client Component conventions
   - Data fetching patterns
   - Dynamic rendering vs. static generation
   - Middleware and edge runtime

2. **Read deprecation notices** — Next.js v16 may have removed or changed:
   - Pages Router API (use App Router instead)
   - getServerSideProps, getStaticProps (use Server Components or Route Handlers)
   - next/image API changes
   - next/font behavior changes

3. **Verify before implementing** — Do not rely solely on training data; consult the official Next.js v16 docs.

**Note**: The AGENTS.md markers in `node_modules/next/dist/server/lib/generate-agent-files.js` are auto-generated. If removed from a diff, `next dev` will recreate them. Keep them in commits to avoid noise.
