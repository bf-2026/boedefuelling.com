# Boedefuelling.com

This website uses

- React
- TypeScript
- Vite
- TailwindCSS

## Getting started

clone the repo

```bash
git clone https://github.com/bf-2026/boedefuelling.com.git
```

install dependencies

```bash
npm install
```

and run

```bash
npm run dev
```

the website is now live under http://localhost:5173/

## Cloudflare pages

The website is hosted with cloudflare pages. Login to cloudflare. Under Compute & AI click workers & pages.

When a new commit is pushed to github, cloudflare automatically runs `npm run build` to serve the updated website.
