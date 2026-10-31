# Piyush Yadav's Portfolio

Personal portfolio built with Next.js App Router, React, Tailwind CSS, and Framer Motion. The homepage contains the existing introduction, experience, projects, skills, blogs, contact links, visitor counter, and local portfolio guide.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` checks the production build; `npm start` serves that build.

JavaScript and TypeScript files are both supported. New pages can be added later under `src/app/` without changing the current homepage.

## Environment variables

Create `.env.local` only for services you use:

```env
# Required for the visitor counter API
DATABASE_URL=your_neon_connection_string

# Optional Umami analytics
NEXT_PUBLIC_UMAMI_SRC=your_umami_script_url
NEXT_PUBLIC_UMAMI_ID=your_umami_website_id
```

The old `VITE_UMAMI_SRC` and `VITE_UMAMI_ID` names are still accepted, so an existing deployment can continue using them. Analytics loads only when both values exist. Keep `DATABASE_URL` server-side; never add `NEXT_PUBLIC_` to it.

The visitor counter uses `src/app/api/visits/route.js`, exposed as `/api/visits`. It expects the existing Neon `visits` table:

```sql
CREATE TABLE visits (
  id INTEGER PRIMARY KEY DEFAULT 1,
  count INTEGER DEFAULT 0
);
INSERT INTO visits (id, count) VALUES (1, 0);
```

Without `DATABASE_URL`, the counter stays hidden and the API returns 503; the rest of the portfolio works normally.

## Portfolio guide

The bottom-right guide runs entirely in the browser. It requires no API key, backend, or paid AI service. It is a keyword-based FAQ assistant, not generative AI, and it does not send chat messages to a service.

Edit `src/data/chatbotProfile.js` for the introduction, availability, location, interests, resume link, and custom answers. It also reads the existing project, skill, experience, blog, and social link data files. Add only public information because these files are included in the browser bundle. Unknown questions receive a fallback response.

## Deploy

Import this repository into Vercel as a Next.js project. Set `DATABASE_URL` and optional analytics variables in the project settings, then deploy. The homepage and `/api/visits` are deployed together. No separate backend project is needed.
