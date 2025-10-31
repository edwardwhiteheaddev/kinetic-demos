# GrowthOps - AI-Powered CEO Dashboard

This is a monorepo for the GrowthOps platform, a SaaS solution for CEOs and leadership teams to align on growth targets, track KPIs, and plan strategically.

## Structure

This monorepo is managed by [Turborepo](https://turbo.build/). It contains the following:

- `apps/web`: The public-facing website, built with Next.js.
- `apps/dashboard`: The main application dashboard, built with Next.js.
- `apps/api`: The back-end API, built with Fastify.
- `packages/shared`: Shared TypeScript types and utilities.
- `packages/ui`: Shared UI components.
- `docs`: Documentation files.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository.
2. Install dependencies from the root directory:

```bash
pnpm install
```

### Environment Variables

Each application requires its own `.env` file. You can find examples in each application's directory (e.g., `apps/dashboard/.env.example`).

### Running the applications

To run all applications in development mode, run the following command from the root directory:

```bash
pnpm dev
```

### Building the applications

To build all applications for production, run the following command from the root directory:

```bash
pnpm build
```
