# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in this repository.

## Repository purpose

This repository contains companion materials and evolving AgentClinic project snapshots for the DeepLearning.AI Spec-Driven Development course. Each `VideoNN_*` directory is a standalone snapshot for that lesson, not a single application assembled from all folders. Work in the lesson directory relevant to the request; later snapshots include changes introduced in earlier lessons. Videos 2–4 are conceptual and have no starter project.

The root `README.md` explains which snapshot corresponds to each video and lists course resources. Root `prompts/` collects lesson prompts; copies also appear in lesson directories. Root `skills/` contains reusable course skills, and `example_specs/` contains reference specifications.

## Commands

There is no root `package.json`; run Node commands from the selected `VideoNN_*` directory. Install dependencies there with `npm install` when needed. Node.js 18+ is required.

The early snapshots have only a TypeScript build script, while later application snapshots add development, typecheck, seed, and test scripts. Check the selected directory's `package.json` before using a command. For the complete application snapshot (`Video14_Agents_replaceability`):

```bash
cd Video14_Agents_replaceability
npm install
npm run dev                 # Start app with tsx watch at http://localhost:3000
npm run build               # Compile TypeScript with tsc
npm run typecheck           # Type-check without emitting files
npm test                    # Run Vitest suite
npm test -- tests/app.test.tsx                 # Run one test file
npm test -- tests/app.test.tsx -t "GET /"     # Run matching tests in one file
npm run seed                # Re-seed the SQLite database
```

The repository does not configure a linter or formatter. `npm test` is not available in snapshots whose `package.json` does not define it. Vitest accepts a test file path and `-t` test-name filter as shown above.

## Application architecture

The later snapshots build AgentClinic as a server-rendered TypeScript application:

- Hono routes and middleware handle requests. `src/app.tsx` composes routers, static file serving, and not-found/error handlers; `src/index.tsx` initializes the database and starts the Node server.
- Route modules in `src/routes/` coordinate request parsing, validation, database operations, and page rendering. Pages and reusable Hono JSX components live in `src/pages/` and `src/components/`. Rendering is server-side; there is no client-side hydration or JavaScript bundle.
- `src/db/` owns SQLite setup, hand-written SQL migrations, seed data, and database helpers/types. Migrations run in filename order and record applied files in `_migrations`; add schema changes as new migration files rather than editing previously applied migrations.
- `static/style.css` supplies the UI styling. Vitest tests in `tests/` exercise rendered routes, components, and (in later snapshots) database behavior. Route tests can construct an in-memory database, run migrations and seeds, then pass it to `createApp`.

Each snapshot has its own `specs/` when specification work begins. Treat `mission.md`, `tech-stack.md`, `roadmap.md`, and feature-specific `requirements.md`, `plan.md`, and `validation.md` as the project intent for that snapshot. Roadmap phases represent incremental feature work; completed and upcoming phases can differ between snapshots. Preserve the specified stack: strict TypeScript, Hono, Hono JSX, SQLite via `better-sqlite3`, and vanilla CSS; no linter or formatter is configured.

Reusable agent workflows are documented in root `skills/` (including changelog and feature-spec). Video 10 onward also carries changelog material, and Video 14 includes a snapshot-specific `.claude/skills/feature-spec` skill. Follow the skill available in the selected lesson directory when using that workflow.
