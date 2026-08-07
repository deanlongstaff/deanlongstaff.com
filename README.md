# deanlongstaff.com

This is my personal corner of the internet. Part portfolio, part digital
scrapbook — my work, my hobbies, Rex the dog, some skiing, some DIY, and
whatever else I've been tinkering with lately. It's built with the belief
that anything is possible if you're curious enough to figure it out.

It leans into a nostalgic, tactile 2000s-web look on top of a modern React
stack — raised paper cards, chunky borders, and a general refusal to look
like a corporate SaaS landing page.

## Running it locally

You'll need [Node.js](https://nodejs.org/) (npm comes bundled with it).

```bash
git clone https://github.com/deanlongstaff/deanlongstaff.com
cd deanlongstaff.com
npm install
npm start
```

Then open [http://localhost:5173](http://localhost:5173) and poke around.
Edits hot-reload, so go wild.

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Fires up the dev server with Vite |
| `npm test` | Runs the test suite (Vitest) |
| `npm run build` | Type-checks and builds for production into `dist` |
| `npm run preview` | Serves the `dist` build locally, for a final sanity check |

## Built with

React 19 + TypeScript, Vite, Tailwind CSS 4, and daisyUI. If you're curious
about the design system and the "why" behind the look and feel, the full
rundown lives in [AGENTS.md](AGENTS.md).

## Poking around the code

Feel free to look around, fork it, or steal ideas — it's a personal site,
not a product, so there's no license gatekeeping here beyond the usual
"don't pretend to be me."
