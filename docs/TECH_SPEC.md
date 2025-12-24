# GrowthOps - Technical Specification

## 1. Business Goals and Key Modules

The GrowthOps platform is a SaaS MVP designed to help leadership teams align on growth targets, track KPIs, manage cash flow, and plan strategically.

### Key Modules:
- **CEO Dashboard:** A central view of company-wide KPIs, trends, and alerts.
- **Template Library:** A collection of 21+ tools for strategic planning (e.g., Growth Engine Builder, Cashflow Waterfall).
- **Data & Analytics Engine:** Computes derived KPIs and supports scenario modeling.
- **Collaboration & Alignment:** Enables shared dashboards, meeting rhythms, and action items.
- **AI Assistant:** An embedded AI to onboard users, interpret data, and suggest actions.

## 2. System Architecture

The system is built as a TypeScript monorepo managed by Turborepo.

- **`apps/web` (Public Facing Website):**
  - **Framework:** Next.js 16+ with App Router
  - **UI:** Mantine
  - **Purpose:** Provides a public landing page and user onboarding.

- **`apps/dashboard` (Front-End Application):**
  - **Framework:** Next.js 16+ with App Router
  - **UI:** Mantine, Mantine Notifications
  - **Authentication:** NextAuth.js
  - **API Communication:** Axios
  - **Purpose:** The main, secure user dashboard for accessing all features.

- **`apps/api` (Back-End API):**
  - **Framework:** Fastify with TypeScript
  - **ORM:** Prisma with PostgreSQL (designed for Supabase)
  - **Authentication:** JWTs
  - **Logging:** Pino
  - **Purpose:** Handles business logic, data persistence, and authentication.

- **`packages/shared`:**
  - **Purpose:** A shared package for common TypeScript types and interfaces used across the monorepo, ensuring type safety.

- **`packages/ui`:**
  - **Purpose:** A shared library for common, reusable UI components built with Mantine.

- **Database:**
  - **Provider:** PostgreSQL
  - **Schema:** Defined in `apps/api/prisma/schema.prisma`. Key models include `Tenant`, `User`, `Template`, `KPIMetric`, and `ActionItem`. The schema is designed for multi-tenancy with a `tenantId` on all relevant models.

- **AI Integration:**
  - A stubbed `/ai/query` endpoint is implemented in the API. Future integration will connect this to a service like OpenAI. The AI's behavior is defined in `agents.md`.

## 3. Non-Functional Requirements

- **Security:**
  - Multi-tenant data isolation is enforced at the database level.
  - JWTs are used to secure API endpoints.
  - Passwords are be hashed with bcrypt.
- **Performance:**
  - Next.js provides server-side rendering for fast initial page loads.
  - The API is built on Fastify, a high-performance Node.js framework.
- **Scalability:**
  - The architecture is modular, allowing individual components to be scaled independently.
  - The database can be scaled vertically or horizontally as needed.
- **Extensibility:**
  - The monorepo structure makes it easy to add new applications or packages.
  - The API is designed with a controller-based architecture for adding new routes and features.

## 4. Development Phases and Milestones

1.  **MVP (Current Phase):**
    -   Set up the Turborepo monorepo.
    -   Implement the public website and dashboard front-ends with placeholder data.
    -   Implement the back-end API with stubbed endpoints and a basic database schema.
    -   Write initial documentation (`TECH_SPEC.md`, `agents.md`, `README.md`).
2.  **Phase 2: Database Integration & Authentication:**
    -   Connect the API to a live PostgreSQL database (Supabase).
    -   Fully implement user authentication and authorization.
    -   Connect the front-end to the live API endpoints.
3.  **Phase 3: Core Feature Implementation:**
    -   Implement the Template Library with dynamic rendering.
    -   Implement the Analytics Engine for computing KPIs.
    -   Implement the Collaboration Module.
4.  **Phase 4: AI Integration:**
    -   Integrate the AI Assistant with a live AI service.
    -   Implement the full agent workflow as defined in `agents.md`.

## 5. Risk Mitigation and Assumptions

- **Risks:**
  - **Dependency on External Services:** The platform will depend on third-party services like Supabase and an AI provider. Service outages or changes could impact the platform.
  - **Security Vulnerabilities:** As a multi-tenant platform, security is critical. Regular security audits will be necessary.
- **Assumptions:**
  - **User Needs:** The initial set of templates and KPIs are based on common business needs. User feedback will be required to validate these assumptions.
  - **Scalability Requirements:** The initial architecture is designed for moderate scale. The platform's scalability needs may evolve over time.
