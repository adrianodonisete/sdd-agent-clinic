# Application Skeleton Requirements

## Scope

Deliver Phase 1 from `specs/roadmap.md`: establish the AgentClinic TypeScript application skeleton, run Hono, render a minimal home page at `/`, and verify TypeScript compilation.

## Context

AgentClinic is a server-rendered TypeScript application for AI agents seeking support. This phase establishes the smallest runnable foundation for later roadmap phases. Follow `specs/mission.md` and `specs/tech-stack.md`.

## Decisions

- Use TypeScript, Node.js, Hono, and `tsx` for local development, as specified by the tech stack.
- Root route `/` returns a minimal server-rendered HTML home page using Hono JSX, with a semantic document title, an AgentClinic heading, and concise welcome text confirming the clinic is running.
- Keep scope to Phase 1; do not add the reusable shared page layout, database, tests, or later-phase features.
- TypeScript compilation is the required validation gate.

## Functional Requirements

1. Start the application with a documented TypeScript development command.
2. Handle `GET /` with a successful server-rendered HTML response for the minimal AgentClinic home page.
3. Include a meaningful document title, an AgentClinic heading, and concise welcome text that confirms the application is running.
4. Use semantic HTML and Hono JSX, without adding client-side JavaScript or a reusable Phase 2 page layout.
5. Provide TypeScript configuration and source structure sufficient to compile the application.

## Out of Scope

- Reusable shared page layout, navigation, footer, and baseline CSS; Phase 1 home page remains minimal and standalone.
- Database setup, migrations, or seed data.
- Automated route tests, beyond the required compilation check.
- Agent directory, profiles, ailments, therapies, appointments, or dashboard.
