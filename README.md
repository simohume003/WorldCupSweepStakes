# World Cup Sweepstake Dashboard

A family sweepstake dashboard for the 2026 FIFA World Cup.

## What it does

- Pulls fixtures/scores from the unofficial ESPN public scoreboard endpoint.
- Falls back to demo data if the ESPN request is blocked or unavailable.
- Shows Today's Fixtures as family matchups, e.g. `Simon vs Dad`.
- Tracks Teams Still In and Teams per Player Performance.
- Keeps the main prize rule simple: **last team standing wins**.

## ESPN endpoint used

```txt
https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard
```

This is a public, undocumented ESPN endpoint. It is free/no-key, but unofficial, so cache data and expect possible changes.

## How to edit the family draw

Open `app.js` and replace the placeholder `players` array:

```js
const players = [
  { name: 'Simon', color: '#0f8a3a', avatar: '🧑🏻', teams: ['Brazil', 'England'] },
  { name: 'Dad', color: '#1258d6', avatar: '👨🏻', teams: ['France', 'Germany'] }
];
```

## How to run locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

```txt
http://localhost:8000
```

Opening `index.html` directly may work, but a local server is better for browser fetch requests.
