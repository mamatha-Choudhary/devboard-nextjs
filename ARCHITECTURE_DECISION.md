
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



# ADR-006 - Authentication Strategy

## Status

Accepted

## Context

DevBoard requires a secure authentication system that is production-ready, educational, and extensible.

The goal is to understand authentication internals while maintaining modern security practices.

## Options Considered

### 1. Auth.js / NextAuth

Pros

- Mature ecosystem
- Built-in providers
- Session management

Cons

- Abstracts authentication internals
- Less educational for understanding JWT and token lifecycle

### 2. Clerk

Pros

- Fast setup
- Excellent developer experience

Cons

- Vendor dependency
- Limited control

### 3. Firebase Authentication

Pros

- Easy integration
- Social providers

Cons

- External dependency
- Less aligned with custom backend architecture

### 4. Custom JWT Authentication (Selected)

Pros

- Full understanding of authentication flow
- Fine-grained control
- Strong portfolio value
- Easy to explain in interviews
- Extensible for future features

Cons

- More implementation effort
- Greater responsibility for security

## Decision

DevBoard will use a custom JWT authentication implementation.

The system will use:

- jose for JWT operations
- bcryptjs for password hashing
- HttpOnly Cookies
- Access Token (15 minutes)
- Refresh Token (7 days)
- Middleware-based route protection

## Security Principles

- Never store tokens in localStorage
- Use HttpOnly cookies
- Hash all passwords
- Short-lived access tokens
- Long-lived refresh tokens
- Validate all protected routes using middleware

## Consequences

Advantages

- Strong understanding of authentication
- Production-style architecture
- Scalable design
- Easier transition to OAuth providers

Trade-offs

- Increased implementation complexity
- Requires careful testing
