# AGENTS.md

**Source of truth for all AI agents working on this repository.**

This file contains comprehensive guidance for Claude and other AI agents. For Claude Code specifically, see CLAUDE.md which references this file.

---

## Project Identity

- **Name**: AI Demo (`ai-demo`)
- **Type**: Next.js 16 web application
- **Language**: TypeScript with React 19
- **Status**: Early stage (v0.1.0) - freshly initialized from `create-next-app`
- **GitHub User**: Benas (benaszab@gmail.com)

---

## Technology Stack

### Core Framework
- **Next.js**: 16.4.3 with App Router
- **React**: 19.3.0
- **React DOM**: 19.3.0
- **TypeScript**: ^5 (strict mode enabled)

### Styling & UI
- **Tailwind CSS**: v4 with Turbopack plugin
- **Class Variance Authority**: ^0.7.1 (for component variants)
- **clsx**: ^2.1.1 (for className utility)
- **lucide-react**: ^1.65.0 (icon library)
- **shadcn/ui**: ^0.0.4 (component library - available but not yet used)

### Development & Tooling
- **ESLint**: ^9 with Next.js and TypeScript configs
- **Prettier**: ^3.9.10 with Tailwind CSS plugin
- **TypeScript**: ^5 with strict checking
- **Babel Plugin React Compiler**: 1.0.0 (auto-optimization enabled)
- **Tailwindcss/turbopack**: ^4 (for fast builds)

### Validation
- **Zod**: ^4.6.7 (schema validation)

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata, fonts, global styles
│   ├── page.tsx            # Home page (index route)
│   └── globals.css         # Global Tailwind styles
```

**Configuration Files**:
- `next.config.ts` — Next.js configuration (React Compiler, Turbopack, CSS loader)
- `tsconfig.json` — TypeScript config with `@/*` path alias mapping to `src/*`
- `eslint.config.mjs` — ESLint configuration (Next.js core web vitals + TypeScript)
- `.eslintignore` — Built via `eslint.config.mjs` globalIgnores (ignores `.next/`, `out/`, `build/`, `next-env.d.ts`)

**Public Assets**:
- `public/` — Static files (next.svg, vercel.svg, favicon, etc.)

**Documentation**:
- `docs/` — Additional documentation including architecture and design patterns

---

## Files & Directories Agents Should NOT Read

The following are build artifacts, dependencies, or auto-generated files that agents should avoid reading:

- **`node_modules/`** — Dependency packages (too large, not source code)
- **`package-lock.json`** — Dependency lock file (reference only via automation tools)
- **`.next/`** — Next.js build cache and artifacts (auto-generated)
- **`dist/`, `build/`, `out/`** — Build output directories (auto-generated)
- **`.env.local`, `.env.*.local`** — Local environment files (may contain sensitive data)
- **`next-env.d.ts`** — Auto-generated Next.js type definitions
- **`*.log`** — Log files (temporary, not source code)

When working with dependencies or build information, use standard tooling commands:
- `npm list` — Check installed packages
- `npm run build` — Generate production build
- `npm run lint` — Check code quality
- `npm run dev` — Start development server

---

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Next.js dev server (http://localhost:3000 with hot reload) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint on the codebase |

---

## Architecture & Design Patterns

**See [ARCHITECTURE.md](./docs/ARCHITECTURE.md)** for comprehensive documentation on:
- Next.js App Router conventions
- Styling approach (Tailwind CSS v4)
- Compiler & performance optimizations (React Compiler, Turbopack)
- Font loading and metadata
- Component structure and organization
- Next.js v16 breaking changes and migration guide

---

## Code Standards & Guidelines

### TypeScript
- Strict mode enabled (`strict: true` in tsconfig.json)
- ES2017 target with ESNext module resolution
- Type all props and return types explicitly

### ESLint
- Uses Next.js core web vitals rules + TypeScript rules
- Config file: `eslint.config.mjs`
- Run with `npm run lint`

### Prettier
- Configured with Tailwind CSS plugin for class sorting
- Integrated via ESLint
- Automatically formats on save (if configured in IDE)

### Tailwind CSS v4
- No `@tailwind` directive needed in new files (auto-scanned)
- Use `@apply` for custom component styles
- Dark mode via `dark:` prefix

### Component Library (shadcn/ui)
- Add components with: `npx shadcn-ui@latest add [component-name]`
- Components scaffold to `src/components/ui/`
- Based on Radix UI primitives with Tailwind styling

---


## Testing & Quality

### Currently Configured
- **ESLint**: Code quality checks (syntax, best practices, Next.js rules)
- **TypeScript**: Type checking at build time

### Not Yet Configured
- Unit/integration tests (Jest, Vitest can be added)
- E2E tests (Playwright, Cypress can be added)
- Performance profiling
- Accessibility audits (but follow WCAG 2.1 standards in UI)

---

## Dependency Management

- **Package Manager**: npm (see `package-lock.json`)
- **Node Version**: Check `.nvmrc` if present; otherwise use Node 18+ recommended for Next.js 16
- **Installation**: `npm install`
- **Adding packages**: `npm install [package-name]` or `npm install --save-dev [package-name]`

---

## Common Tasks for AI Agents

### Adding a New Page
1. Create `src/app/[route-name]/page.tsx`
2. Export default React component (Server Component by default)
3. Add metadata in layout if needed

### Adding a New Component
1. Create `src/components/[ComponentName].tsx`
2. Add `"use client"` if interactive (state, event handlers, hooks)
3. Import Tailwind classes, shadcn/ui components as needed
4. Export default or named export

### Styling a Component
1. Use Tailwind classes directly in JSX
2. For variants/conditional styles, consider using `clsx` or Class Variance Authority
3. Use `dark:` prefix for dark mode support
4. Avoid inline styles; use Tailwind

### Adding UI Components from shadcn/ui
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add form
```

### Running the Dev Server
```bash
npm run dev
# Open http://localhost:3000 in browser
# Hot reload works - changes appear instantly
```

### Checking for Errors
```bash
npm run lint      # ESLint errors/warnings
npm run build     # Full build errors (TypeScript, ESLint, Next.js)
```

---

## Git & Commits

- **Current Branch**: main (primary branch)
- **Git User**: Benas
- **Workflow**: Direct commits or pull requests as needed
- **Commit Style**: Atomic, descriptive messages
- **Attribution**: Include co-author line in commit messages for AI contributions

---

## File Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`, `CardHeader.tsx`)
- **Pages**: lowercase with hyphens for routes (e.g., `about-us/page.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `validators.ts`)
- **Types**: PascalCase or descriptive (e.g., `User.ts`, `types.ts`)
- **Styles**: match component name or inline Tailwind classes

---

## Troubleshooting

### Dev Server Won't Start
- Clear `.next/` cache: `rm -rf .next` then `npm run dev`
- Check port 3000 isn't in use: `lsof -i :3000`
- Ensure `npm install` completed successfully

### TypeScript Errors
- Run `npm run build` to see full error list
- Check `tsconfig.json` for compiler options
- Verify imports use correct paths (use `@/` alias)

### Tailwind Styles Not Applying
- Ensure component is in `src/` (scanned by Tailwind)
- Check class names are correct
- Restart dev server to regenerate Tailwind CSS

### Next.js Build Fails
- Check `next.config.ts` for syntax errors
- Review error message for file/line number
- Ensure all imports are valid

---

## Resources

- **Next.js Docs**: https://nextjs.org/docs (always consult for v16 specifics)
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **shadcn/ui**: https://ui.shadcn.com
- **TypeScript**: https://www.typescriptlang.org

---

**Last Updated**: 2026-10-30  
**Repository**: AI Demo (Next.js 16)  
**For Claude Code**: See CLAUDE.md for tool-specific guidance and quick reference.
