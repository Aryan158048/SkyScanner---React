# ✈️ Skyscanner React (Flight Search UI)

A front-end flight search UI inspired by Skyscanner, built in React.

🌐 **Live demo:** https://aryan158048.github.io/skyscanner-react

## What this does

A single-page React app with a flight search form (from, to, departure date) and a results list styled as flight cards (airline, route, duration, stops, price). This is a front-end UI demo — search results are hardcoded mock data (e.g. Emirates/Qatar Airways sample flights), not pulled from a real flight-search API.

## Tech stack

- React 18 (Create React App / `react-scripts`)
- `date-fns` for date formatting
- Plain CSS (no external design system)
- Deployed to GitHub Pages

## Key features

- Flight search form with from/to text inputs and a date picker
- Simulated search (loading state, then renders mock flight results)
- Flight result cards showing airline, route, date, duration, stops, and price
- Deployed live via GitHub Pages

## How to run it locally

```bash
git clone https://github.com/aryan158048/skyscanner-react.git
cd skyscanner-react
npm install
npm start
```

Opens at `http://localhost:3000`.

## Screenshots / demo

See the [live demo](https://aryan158048.github.io/skyscanner-react).

## Scope note

The original README described this as using "Backpack" (Skyscanner's real design system) and Vite. Neither is actually present in the code — there's no Backpack dependency anywhere in `package.json`/`src`, and the project is built with Create React App (`react-scripts`), not Vite. This version describes what's actually implemented: a mock/demo flight search UI, not a real flight-search integration.
