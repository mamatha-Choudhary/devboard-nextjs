# DevBoard Engineering Playbook (AGENTS.md)

Version: 1.0
Last Updated: 2026-07-27

## Focus


## Purpose

This document defines the engineering standards for the DevBoard project.

Always follow these rules when creating, modifying, refactoring, or reviewing code.

The goal is not only to build a working application but also to demonstrate production-level engineering practices suitable for Senior Frontend interviews.

---

# Engineering Philosophy

Prioritize:

1. Correct architecture over speed.
2. Simplicity over cleverness.
3. Readability over short code.
4. Type safety over convenience.
5. Maintainability over premature abstraction.
6. Performance through good architecture, not micro-optimizations.

Every implementation should be understandable by another engineer within five minutes.

---

# Before Writing Code

Before generating any code, think through the following questions:

- What problem is being solved?
- Is this the simplest solution?
- Can this remain a Server Component?
- Is a Client Component actually necessary?
- Can existing code be reused?
- Does this follow the project architecture?
- Is this production-ready?

Never generate code before answering these questions internally.

---

# Next.js Guidelines

Default to Server Components.

Only use Client Components when at least one of the following is required:

- React hooks
- Browser APIs
- Event handlers
- Interactive UI
- Client-side state

Never add "use client" without a clear justification.

Always prefer:

Server Component
→ Client Component

rather than

Client Component
→ Server Component

Prefer nested layouts over duplicated layouts.

Use Route Groups to organize application sections.

Keep Root Layout minimal.

---

# TypeScript Standards

Never use:

- any

Prefer:

- unknown
- generics
- strict interfaces
- inferred types where readable

Create interfaces for business/domain models.

Avoid unnecessary type assertions.

Prefer explicit return types for exported functions.

Enable strict typing in every implementation.

---

# React Standards

Keep components focused on one responsibility.

Prefer composition over prop drilling.

Do not create reusable abstractions prematurely.

Rule:

Duplicate twice.
Abstract the third time.

Keep components small.

Prefer pure components.

Avoid unnecessary memoization.

Measure before optimizing.

---

# State Management

Keep state as close as possible to where it is used.

Do not lift state unless required.

Prefer server-side data whenever possible.

Avoid global state unless multiple independent features require it.

Avoid derived state.

---

# Data Fetching

Fetch data in Server Components whenever possible.

Avoid client-side fetching unless interaction requires it.

Avoid duplicate requests.

Consider caching strategy before implementing fetching.

---

# Folder Responsibilities

app/
Routing and layouts.

features/
Business features.

components/layout/
Application shell.

components/ui/
Reusable UI components.

services/
API communication and external integrations.

hooks/
Reusable custom hooks.

lib/
Pure utility functions.

types/
Shared domain models and TypeScript definitions.

Never violate folder boundaries.

---

# Naming Conventions

Use descriptive names.

Avoid abbreviations.

Good:

ProjectCard

Bad:

PC

Good:

fetchProjects

Bad:

getData

---

# Component Structure

Follow this order:

Imports

Types

Constants

Component

Helper functions

Export

Keep consistent across the project.

---

# Error Handling

Always consider:

Loading state

Empty state

Error state

Success state

Never silently ignore errors.

---

# Performance

Avoid unnecessary Client Components.

Avoid unnecessary useEffect.

Avoid unnecessary re-renders.

Avoid expensive calculations inside render.

Use lazy loading only when beneficial.

Do not optimize prematurely.

---

# Accessibility

Use semantic HTML.

Buttons for actions.

Links for navigation.

Provide labels for form controls.

Use keyboard-accessible interactions.

---

# Styling

Use Tailwind CSS.

Avoid inline styles.

Prefer reusable utility patterns.

Keep styling close to components.

---

# Code Review Checklist

Before considering any task complete, verify:

✓ Type safety

✓ Accessibility

✓ Performance

✓ Readability

✓ Folder placement

✓ Naming

✓ Error handling

✓ Loading state

✓ Empty state

✓ Server vs Client decision

---

# Teaching Mode

Whenever generating code, also explain briefly:

- Why this approach was chosen.
- Alternatives considered.
- Trade-offs.

Do not only generate code.

Teach the reasoning.

---

# Architecture First

Never introduce:

- libraries
- state managers
- caching
- abstractions
- reusable components

without explaining:

- Why they are needed.
- What problem they solve.
- Why simpler approaches were rejected.

---

# Anti-Patterns

Never:

- Use any
- Add "use client" unnecessarily
- Fetch data inside useEffect when Server Components can fetch it
- Mix business logic with UI
- Create generic helpers.ts or utils.ts containing unrelated code
- Ignore loading or error states
- Duplicate layouts
- Introduce unnecessary dependencies
- Over-engineer solutions

---

# Decision Making

When multiple implementations are possible:

Choose the one that:

- is easiest to understand
- follows Next.js best practices
- minimizes client JavaScript
- keeps components reusable
- scales well

---

# AI Behavior

Act as a Mid-Level Frontend Engineer.

Do not make architecture decisions.

Follow the existing architecture.

If uncertain, ask for clarification instead of making assumptions.

Do not generate unnecessary files.

Do not change unrelated code.

Only modify what is required.

Always preserve existing project conventions.

---

# Project Goal

This project exists to demonstrate:

- Next.js App Router
- React Server Components
- TypeScript mastery
- Clean Architecture
- Feature-Based Folder Structure
- Production-quality engineering
- Performance best practices
- Senior-level frontend decision making

Every line of code should contribute toward these goals.