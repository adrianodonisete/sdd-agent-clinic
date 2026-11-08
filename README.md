# Spec-Driven Development with Agentic Coding Assistants

This repository contains companion materials for the DeepLearning.AI Spec-Driven Development course and a single, evolving AgentClinic project. Course specs, prompts, skills, and examples live at the repository root.

## Other DeepLearning.AI Resources
> :mortar_board: **Keep learning** → [Explore all DeepLearning.AI courses](https://www.deeplearning.ai/courses/) — taught by the people building the future of AI. Find your next one.
>
> :computer: **Explore more course artifacts** → [Browse the DeepLearning.AI course artifacts repo](https://github.com/https-deeplearning-ai/deeplearning-ai) to find notebooks, projects, and notes from other courses across the DeepLearning.AI library.

## Run AgentClinic

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The server starts at `http://localhost:3000`. Verify the TypeScript build with `npm run build`.

## Course materials

The AgentClinic project evolves in place as you follow the course. `specs/` records its mission, stack, roadmap, and feature specifications. `prompts/` contains lesson prompts; `skills/` contains reusable workflows; `example_specs/` contains reference specifications.

Videos 2–4 (Why Spec-Driven Development, Workflow Overview, and Setup) are conceptual and have no dedicated project files.

## Other directories

- **`prompts/`** -- Numbered prompts for each course lesson.
- **`skills/`** -- Reusable agent skills developed during the course (changelog, feature-spec).
- **`example_specs/`** -- Example specification documents referenced in the course.

## Prerequisites

- Node.js (v18+)
- Git
- A coding agent (the course uses Claude Code, but the workflow is agent-agnostic)
- An IDE or editor (the course uses [WebStorm](https://www.jetbrains.com/webstorm/download/))
