# React SPA Project

This is a React Single Page Application (SPA) using Vite for development and build process. The project also includes testing with Jest and the React Testing Library, as well as linting and formatting with ESLint and Prettier.

## Tech Stack

The project uses the following technologies and libraries:

### Frontend:

- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A modern, fast build tool for React and other frontend frameworks.
- **TypeScript**: A superset of JavaScript that adds static types to the language, improving developer experience and catching errors early.
- **Material-UI (MUI)**: A set of React components that implement Google’s Material Design system.
- **React Router**: A declarative routing library for React applications that allows for dynamic routing and navigation.
- **Formik**: A React library for building forms with minimal effort, including validation with Yup.
- **Yup**: A schema builder for runtime value parsing and validation, often used with Formik for form validation.
- **Redux Toolkit**: A library to simplify Redux state management, including reducers, actions, and store setup.

### Testing:

- **Jest**: A testing framework for running unit tests, integration tests, and snapshot tests.
- **React Testing Library**: A library for testing React components, focusing on testing the component's behavior and interactions rather than implementation details.
- **ts-jest**: A Jest transformer for TypeScript, enabling Jest to work with TypeScript files.

### Code Quality:

- **ESLint**: A static code analysis tool to identify problematic patterns in JavaScript/TypeScript code.
- **Prettier**: An opinionated code formatter to maintain a consistent code style across the project.
- **TypeScript ESLint**: ESLint plugin for TypeScript that helps enforce type safety in code.

### Styling:

- **Emotion**: A library for writing CSS styles with JavaScript. The project uses `@emotion/react` and `@emotion/styled` for styling React components.

## Requirements

- [Node.js](https://nodejs.org/) (v16 or later)
- [Yarn](https://yarnpkg.com/) (for package management)

## Setup

To get started with the project, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/Sergey-Ryabko-84/react-spa.git
cd react-spa
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run the development server

```bash
yarn dev
```

### 4. Build the project

```bash
yarn build
```

### 5. Preview the production build

```bash
yarn preview
```

### 6. Run tests

```bash
yarn test
```

### 7. Linting and Formatting

```bash
yarn lint
yarn format
```
