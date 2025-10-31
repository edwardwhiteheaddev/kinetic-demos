# CEO Dashboard SaaS – Technical Specification

## Overview
This monorepo implements the CEO Dashboard MVP spanning marketing, product, API, analytics, and CMS layers.
It is organized as a Turborepo with shared TypeScript configuration and reusable packages.

## Architecture
- **apps/web** – Public Next.js 15 marketing site using Mantine UI, consuming Payload CMS content.
- **apps/dashboard** – Authenticated Next.js 15 dashboard using NextAuth (Credentials) backed by the Fastify API.
- **apps/api** – Fastify + Prisma service powering multi-tenant data, analytics queue stubs, and AI proxy endpoints.
- **apps/cms** – Payload CMS v3 configured for Postgres and exposes marketing content collections.
- **packages/shared** – Cross-cutting TypeScript types, Zod schemas, RBAC policies, utilities, and feature flags.
- **packages/ui** – Mantine-based component library including layout primitives, charts, and empty states.
- **docs** – Internal documentation, including this technical specification.

## Cross-Cutting Concerns
- **TypeScript** – Strict mode across apps and packages with project references.
- **Authentication** – NextAuth credentials provider calling Fastify `/auth/login`; JWTs are scoped per tenant.
- **Multi-tenancy** – All entities include `tenantId`; API enforces scoping and RBAC policies from `packages/shared`.
- **Analytics** – BullMQ worker stub plus scenario calculation example; easily extended for additional jobs.
- **AI Assistant** – `/ai/query` endpoint returns deterministic recommendations while preserving schema contract.
- **Observability** – Pino logs with request IDs and optional OpenTelemetry export stubs.

## Development Flow
1. Install dependencies with `pnpm install`.
2. Copy `.env.example` files to `.env` within each app and configure secrets (never commit).
3. Run `pnpm dev` to start all workspaces concurrently (web, dashboard, api, cms).
4. Execute `pnpm turbo run build` and `pnpm turbo run test` before opening PRs.
5. Generate a distributable archive via `pnpm zip`.

## Testing Strategy
- **Unit tests** with Vitest for shared utilities and API controllers.
- **Component tests** with Testing Library inside Next.js apps.
- **Playwright smoke test** covering the login → dashboard KPI happy path.
- **Static analysis** using ESLint and TypeScript project references.

## Deployment Considerations
- Deploy services independently leveraging Turborepo pipelines.
- Use a managed Postgres and Redis solution; ensure Prisma migrations run before deployment.
- Configure NextAuth secrets, JWT secrets, and Payload keys per environment.
- Optional: configure Turbo remote caching using `TURBO_TOKEN` in CI.

## Future Enhancements
- Wire real analytics computation jobs.
- Integrate actual AI provider for `/ai/query`.
- Expand RBAC policies and UI-level enforcement.
- Add billing/subscription management and audit logging UI.
