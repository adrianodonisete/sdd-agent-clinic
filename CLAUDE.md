# CLAUDE.md

Guidance for Claude Code working in this repository.

## Repository purpose

This repository contains companion materials for the DeepLearning.AI Spec-Driven Development course and one evolving AgentClinic application. Application source, package configuration, and specs live at the repository root. `prompts/` contains course prompts, `skills/` contains reusable agent workflows, and `example_specs/` contains reference specifications. Videos 2–4 are conceptual.

Treat `specs/mission.md`, `specs/tech-stack.md`, `specs/roadmap.md`, and feature-specific specs under `specs/YYYY-MM-DD-feature-name/` as project intent. Implement roadmap phases incrementally. Preserve specified stack: strict TypeScript, Hono, Hono JSX, SQLite via `better-sqlite3` when database work enters scope, and vanilla CSS. No linter or formatter is configured.

## Commands

Use Node.js 18+ and run commands from repository root:

```bash
npm install
npm run dev       # Hono server at http://localhost:3000
npm run build     # Compile TypeScript with tsc
npm run typecheck # Type-check without emitting files
```

Check `package.json` before using scripts. Add tests when roadmap scope calls for them; test scripts are not yet configured in the initial application skeleton.

## Application architecture

The application is server-rendered TypeScript:

- `src/app.tsx` defines the Hono application and routes; `src/index.tsx` starts the Node.js server.
- Hono JSX renders semantic HTML on the server. Do not add client-side hydration or a client framework.
- Keep routes, UI components, database access, and tests in clear module boundaries as the application grows.
- Later database work belongs under `src/db/`, using SQLite, hand-written SQL migrations, and helpers/types. Add schema changes as new migration files rather than editing applied migrations.
- Use vanilla CSS; no styling framework or build step.

Follow root `skills/` workflows when applicable, including `feature-spec` and `changelog`.
