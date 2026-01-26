# Boedefuelling.com

This website uses:

- React
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- React Router
- Lucide React

## Project Structure

- `src/components`: Reusable UI components
- `src/sections`: Page sections and layout blocks
- `src/lib`: Utility functions and shared logic

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [Git](https://git-scm.com/)

### Installation

```bash
git clone https://github.com/bf-2026/boedefuelling.com.git
cd boedefuelling.com
npm install
```

### Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to check for code quality issues

## Deployment

The website is hosted on Cloudflare Pages. It automatically builds and deploys (via `npm run build`) whenever a commit is pushed to the repository.

## Development Workflow

1. **Create a branch**: `git checkout -b <branch-name>`
2. **Make changes** and save.
3. **Stage changes**: `git add .`
4. **Commit**: `git commit -m "description of changes"`
5. **Push**: `git push -u origin <branch-name>`
