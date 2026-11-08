# Roadmap

Each phase is a small, reviewable slice with a concrete outcome. Build in order; keep each phase independently testable where practical.

---

## Phase 1 — Application Skeleton
- Set up Hono and a TypeScript development command.
- Add a `/` route that confirms AgentClinic is running.
- Verify TypeScript compilation.

## Phase 2 — Shared Page Layout
- Add a server-rendered page layout with header, navigation, main content, and footer.
- Add baseline CSS for typography, layout, and focus states.
- Render the home page inside the shared layout.

## Phase 3 — Agent Directory
- Add SQLite setup and first SQL migration for agents.
- Seed a small set of fictional agents.
- Add `/agents` page listing agents.

## Phase 4 — Agent Profiles
- Add `/agents/:id` profile page.
- Show each agent’s name, model, status, and presenting concerns.
- Handle unknown agent IDs with a not-found response.

## Phase 5 — Ailment Catalog
- Add ailments schema and seed a few fictional ailments.
- Associate agents with ailments.
- Add `/ailments` listing page and link ailments from agent profiles.

## Phase 6 — Therapy Catalog
- Add therapies schema and seed recommended therapies.
- Associate therapies with ailments.
- Add `/therapies` page showing which ailments each therapy supports.

## Phase 7 — Appointment Booking
- Add appointments schema and persist bookings.
- Add booking form from an agent profile.
- Validate submissions and show confirmation or actionable validation errors.

## Phase 8 — Staff Dashboard
- Add `/dashboard` with counts for agents, open appointments, and active care.
- Show useful appointment and clinic records for staff.

## Phase 9 — Responsive and Accessible UI
- Verify layout at narrow and wide viewport sizes.
- Check semantic HTML, keyboard navigation, and visible focus indicators.
- Resolve usability issues found in those checks.

## Phase 10 — Reliability and Hardening
- Add consistent 404 and 500 pages.
- Validate and safely handle all form input.
- Add basic request logging and tests for key failure paths.

---

Later possibilities, not part of initial roadmap: authentication, notifications, therapist profiles, and reporting.
