# 🚀 DevBoard

> A modern, scalable Project Management SaaS built with **Next.js 15**, **React 19**, **TypeScript**, **Prisma**, and **PostgreSQL**, following Clean Architecture, Feature-First Design, and modern frontend best practices.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 Overview

DevBoard is a full-stack SaaS application designed to help teams manage projects, tasks, and collaboration efficiently.

The project is built with a strong focus on:

- Scalability
- Performance
- Security
- Accessibility
- Clean Architecture
- Feature-first folder structure
- Modern React & Next.js practices

The goal is to build a production-ready application while following engineering standards used in modern software teams.

---

## ✨ Features

### ✅ Completed

- JWT Authentication
- Secure HttpOnly Cookie Authentication
- Login / Registration
- Logout
- Route Protection
- Authentication Middleware
- User Session Management
- Role-based Authorization Foundation
- Theme Support (Light / Dark)
- Responsive Dashboard Layout
- Reusable Design System
- Project Search
- Project Filtering
- Favorites Filter
- Reusable Dropdown Components
- SEO Metadata
- Accessibility Improvements

---

### 🚧 In Progress

- Performance Optimization
- Project CRUD
- Dashboard Analytics
- User Profile
- Settings

---

### 📌 Planned

- Team Management
- Task Management
- Kanban Board
- Activity Timeline
- Notifications
- Email Verification
- Password Reset
- Google Authentication
- GitHub Authentication
- Two-Factor Authentication
- PWA Support

---

# 🛠 Tech Stack

## Frontend

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod

---

## Backend

- Next.js Route Handlers
- Prisma ORM
- PostgreSQL
- JWT Authentication (jose)
- bcryptjs

---

## Development

- ESLint
- Prettier
- Husky (Planned)
- Lighthouse
- React Developer Tools

---

# 📁 Project Structure

```text
src/

app/
features/
components/
lib/
hooks/
types/
styles/

docs/
```

The project follows a **Feature-First Architecture**, where each feature owns its components, services, hooks, validation, and types.

---

# 🔐 Authentication

Authentication is implemented using a production-style architecture.

- JWT Authentication
- HttpOnly Cookies
- Secure Cookie Configuration
- Access Token
- Refresh Token
- Middleware-based Route Protection
- Session Management
- Role-based Authorization Foundation

---

# 🏗 Architecture

DevBoard follows:

- Feature-First Architecture
- Clean Architecture
- SOLID Principles
- Single Responsibility Principle
- Reusable Design System
- Server Components First
- Client Components Only When Required

Architecture decisions are documented under:

```text
docs/
├── architecture.md
├── architecture-decisions.md
```

---

# 🎨 UI Design System

Reusable UI components include:

- Buttons
- Inputs
- Cards
- Dropdowns
- Badges
- Sidebar
- Header
- Navigation
- Authentication Components

Built using **shadcn/ui** with project-specific customization.

---

# 📊 Performance Goals

Target Lighthouse Scores

| Category | Target |
|----------|--------|
| Performance | 90+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Current work includes:

- Bundle optimization
- Client Component reduction
- Dynamic imports
- React performance analysis
- Core Web Vitals optimization

---

# 🚀 Getting Started

## Clone

```bash
git clone https://github.com/<your-username>/devboard.git
```

## Install

```bash
npm install
```

## Environment Variables

Create a `.env` file.

```env
DATABASE_URL=

JWT_SECRET=

NEXT_PUBLIC_APP_URL=
```

## Prisma

```bash
npx prisma generate

npx prisma migrate dev
```

## Run

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🗺 Roadmap

- [x] Project Setup
- [x] Design System
- [x] Dashboard Layout
- [x] Authentication
- [ ] Performance Optimization
- [ ] Project CRUD
- [ ] Team Management
- [ ] Task Management
- [ ] Kanban Board
- [ ] Analytics
- [ ] Notifications
- [ ] PWA
- [ ] Deployment

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

Feel free to open an issue or submit a pull request.

---

# 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Mamta Choudhary**

Senior Frontend Engineer

Building modern, scalable web applications with React, Next.js, TypeScript, and clean architecture.