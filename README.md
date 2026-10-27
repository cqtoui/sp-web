# Computer Artificial Intelligence — Graduation Project Showcase

A multi-page website for the Computer Artificial Intelligence cluster. It introduces the cluster and presents eight graduation projects.

The visual theme is white and light blue. Each project page keeps that base and adds a small accent related to its topic.

## Run the website

From this folder:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal, usually `http://localhost:5173`.

To check the production build:

```bash
npm run build
npm run preview
```

## Update project content

Project names, summaries, page text, colors, routes, and image paths live in `src/data/projects.js`.

Homepage introduction and the AI field cards live in `src/data/site.js`.

Images used on the site are in `public/media/`. Replace a file and keep the same name, or change the path in `src/data/projects.js`.

## Pages

- `/` — homepage and project gallery
- `/projects/ai-simulation-chamber`
- `/projects/sanad-ai`
- `/projects/safespace-ai`
- `/projects/ai-aero-biome`
- `/projects/shop-wise-ai-cart`
- `/projects/ai-safeguard`
- `/projects/cai` — Cognitive Astronaut Interface
- `/projects/acr` — Ancient Civilization Reconstructor

Original project documents, logos, and posters remain in their folders. The site uses optimized copies in `public/media/`.
