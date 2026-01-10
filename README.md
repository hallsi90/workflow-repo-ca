# Workflow Course Assignment

This repository is part of the Workflow course assignment.
The goal of the assignment is to configure development tools and testing to improve code quality and workflow.

---

## Requirements

- Node.js (LTS recommended)
- npm

---

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

## Development

```bash
npm run dev
```

---

## Formatting and Linting

Format all files with Prettier:

```bash
npm run format
```

Check formatting without modifying files:

```bash
npm run format:check
```

Run ESLint:

```bash
npm run lint
```

Fix ESLint issues automatically where possible:

```bash
npm run lint:fix
```

---

## Unit Tests (Vitest)

Run unit tests:

```bash
npm run test
```

Run unit tests once (CI-style):

```bash
npm run test:run
```

---

## End-to-End Tests (Playwright)

Run e2e tests:

```bash
npm run test:e2e
```

Run e2e tests with UI:

```bash
npm run test:e2e:ui
```

View the Playwright test report:

```bash
npm run test:e2e:report
```

---

## Environment Variables

End-to-end tests require the following environment variables:

- E2E_EMAIL
- E2E_PASSWORD

Create a .env file in the project root using .env.example as a reference.

> **Note:**
> The .env file is ignored by Git and should not be committed.
