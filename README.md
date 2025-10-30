# CEO Dashboard Monorepo

This repository hosts the Growth Ops SaaS workspace implemented as a Turborepo-style monorepo managed with pnpm. The structure mirrors the historical apps and packages from the Growth Ops initiative, providing dashboard and operations portals that share configuration, UI, and type libraries.

## Getting Started

```bash
pnpm install
```

### Available scripts

* `pnpm build` – Run the aggregated build across every workspace using the custom Turborepo pipeline.
* `pnpm lint` – Validate TypeScript project references and required workspace structure.
* `pnpm test` – Execute smoke tests against the generated build artefacts.
* `pnpm dev` – Print local development guidance for each workspace.

### Workspace layout

```
apps/
  dashboard/     # Customer-facing dashboard experience
  ops-portal/    # Internal operations tooling
packages/
  config/        # Environment and feature toggle management
  types/         # Shared Growth Ops domain types
  ui/            # Textual rendering helpers for dashboards
  turbo/         # Offline-friendly shim for the Turborepo CLI
```

Each app and package is configured as a composite TypeScript project extending the shared `tsconfig.base.json`. The custom `turbo` shim delegates task execution to `pnpm recursive run` to mimic Turborepo pipelines in environments without registry access.
