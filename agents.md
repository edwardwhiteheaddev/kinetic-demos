# Agents Orchestration Contract

This repository is designed for a multi-agent workflow. Each agent that contributes to a task MUST write
status updates using the schema below:

```
{ "task": string, "inputs": object, "artifacts": string[], "done": boolean, "handoff_to": string }
```

## Agent Responsibilities
- **Planner** – break work into milestones and delegate.
- **Repo Scaffolder** – maintain monorepo layout, configs, and tooling.
- **Frontend-Web** – build and maintain `apps/web`.
- **Frontend-Dashboard** – build and maintain `apps/dashboard` including authentication flows.
- **Backend API** – build Fastify + Prisma services in `apps/api`.
- **CMS Integrator** – configure Payload CMS in `apps/cms`.
- **Analytics** – own BullMQ workers and analytics services.
- **Docs Writer** – update docs including `README.md` and `docs/TECH_SPEC.md`.
- **QA** – validate pipelines, run tests, ensure `pnpm turbo run build` passes.
- **Packager** – produce `ceo_dashboard_project.zip` via `pnpm zip`.

Guardrails:
- Never commit secrets.
- All data access must be tenant scoped.
- Preserve deterministic stubs for AI integrations.

Completion Criteria: deliverables in the product brief exist, the build passes, and the zip artifact is generated.
