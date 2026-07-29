
# Architecture Decision Log



# Architecture Decision Records

---

## ADR-001: Feature-Based Folder Structure

### Status
Accepted

### Decision

The project follows a feature-oriented architecture while separating reusable application concerns into dedicated top-level folders.

Top-level folders include:

- app/
- components/
- features/
- hooks/
- lib/
- services/
- types/

### Rationale

- Improves scalability
- Reduces ambiguity
- Encourages feature isolation
- Makes onboarding easier
- Keeps reusable code separate from business features

### Consequences

Positive:
- Easier navigation
- Better maintainability
- Clear ownership of code

Trade-offs:
- Slightly more folders initially
- Requires discipline to keep boundaries clean




---

## ADR-002

Decision:
Organize source code inside src/.

Reason:
Separate application code from project configuration.

---

## ADR-003

Decision:
Use Next.js App Router.

Reason:
Support React Server Components, nested layouts, and improved routing capabilities.

---

## ADR-004

Decision:
Introduce AppShell for authenticated application layout.

Reason:
Centralize layout composition while keeping business logic separate.

---

## ADR-005

Decision:
Keep Sidebar as a Server Component and isolate active navigation into a Client Component.

Reason:
Minimize client-side JavaScript while preserving active navigation functionality.

---

## ADR-006

Decision:
Move navigation definitions into src/config/navigation.ts.

Reason:
Separate configuration from rendering and support future extensibility.

## ADR-007

Decision

Projects follow feature-based organization.

Reason

Business logic should remain isolated inside the feature.

---

## ADR-008

Decision

ProjectsPage owns data fetching.

Reason

Pages own business data.

Presentation components receive data through props.

---

## ADR-009: Slug-Based Routing

Status: Accepted

Decision:
Project detail routes use a slug instead of the internal project ID.

Rationale:
- Improves readability.
- Produces cleaner URLs.
- Better SEO.
- Public URLs remain independent from internal database identifiers.

Consequences:
- The Project model includes both `id` and `slug`.
- Services expose `getProjectBySlug()`.
- Dynamic routes are implemented using `[slug]`.
