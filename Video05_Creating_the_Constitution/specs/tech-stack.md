# Tech Stack

AgentClinic is a server-side TypeScript application. The server renders HTML so pages work in modern browsers without requiring a client-side JavaScript framework.

## Recommended Stack

| Layer | Choice | Rationale |
|---|---|---|
| Language | TypeScript | Popular, broadly supported, and provides type safety across application code. |
| Runtime | Node.js | Stable runtime with a large ecosystem and straightforward local development. |
| Server framework | **Hono** | Lightweight, TypeScript-first framework with routing and middleware suited to a small web application. |
| HTML rendering | Hono JSX (server-side) | Component-based server rendering without a client-side framework or hydration requirement. |
| Database | SQLite via `better-sqlite3` | Embedded relational database; simple to run locally and sufficient for the project’s initial scope. |
| Styling | Plain CSS with custom properties | Modern, accessible styling without adding a CSS framework or build step. |
| Testing | Vitest | TypeScript-friendly test runner for application behavior and routes. |
| Development | `tsx` | Run TypeScript directly during local development. |
| Build | `tsc` | Compile TypeScript for production. |

## Architecture Principles

- Render pages on the server; deliver semantic HTML that works in modern browsers.
- Keep dependencies and operational requirements proportionate to the learning project.
- Use SQL migrations for schema changes; avoid introducing an ORM until project needs justify it.
- Preserve clear module boundaries between routes, UI components, database access, and tests.

## Not in the Initial Stack

- No React, Vue, or Svelte client application.
- No ORM; use SQL directly.
- No Docker or external database service until a later phase requires one.
