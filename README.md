# CEO Dashboard Monorepo

An MVP SaaS platform that helps leadership teams align on growth targets, monitor KPIs, manage cash flow,
and plan strategically. The project is organized as a pnpm-powered Turborepo with Next.js apps, a Fastify API,
a Payload CMS, and shared packages.

## Prerequisites
- Node.js 20+
- pnpm 9+
- Docker (recommended for Postgres, Redis)

## Getting Started
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Copy environment templates:
   ```bash
   cp apps/web/.env.example apps/web/.env
   cp apps/dashboard/.env.example apps/dashboard/.env
   cp apps/api/.env.example apps/api/.env
   cp apps/cms/.env.example apps/cms/.env
   ```
3. Start required services (example using docker-compose):
   ```bash
   docker compose up -d
   ```
4. Seed the database:
   ```bash
   pnpm --filter api db:push
   pnpm --filter api db:seed
   pnpm --filter cms seed
   ```
5. Start the monorepo in development mode:
   ```bash
   pnpm dev
   ```
   This runs all apps concurrently via Turborepo.

## Workspaces
- `apps/web` – Public marketing site (Next.js 15, Mantine, Payload content)
- `apps/dashboard` – Authenticated dashboard (Next.js 15, NextAuth, Mantine UI)
- `apps/api` – Fastify + Prisma API with BullMQ analytics worker
- `apps/cms` – Payload CMS v3 on Postgres
- `packages/shared` – Types, schemas, RBAC policies, utilities
- `packages/ui` – Mantine-based component library shared across apps

## Scripts
- `pnpm dev` – Run all workspace dev servers
- `pnpm build` – Build all workspaces
- `pnpm test` – Run unit/component tests
- `pnpm typecheck` – Type check all projects
- `pnpm e2e` – Run Playwright smoke tests
- `pnpm zip` – Generate `ceo_dashboard_project.zip` archive of the repository

## Environment Variables
Refer to each app's `.env.example` file for the required variables. Common ones include:
- `DATABASE_URL` – Postgres connection string
- `REDIS_URL` – Redis connection for BullMQ
- `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `NEXT_PUBLIC_API_BASE_URL`
- `JWT_SECRET`, `AI_API_KEY`, `OTEL_EXPORTER_OTLP_ENDPOINT`

## Testing & Quality
- ESLint + Prettier enforced via lint-staged and Husky pre-commit hook
- Vitest for unit tests across packages and API controllers
- Playwright smoke tests for dashboard login and KPI rendering

## Packaging
Create a distributable archive of the repository for handoffs:
```bash
pnpm zip
```

## Additional Documentation
- [Technical Specification](./docs/TECH_SPEC.md)
- [Agents Contract](./agents.md)
