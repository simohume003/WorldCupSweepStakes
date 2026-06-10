World Cup Sweepstake v5

Run locally:
1. Open Terminal
2. cd into this folder
3. Run: python3 -m http.server 8000
4. Open: http://localhost:8000

Notes:
- Uses ESPN public World Cup scoreboard JSON.
- Shows a top-right ESPN status badge so failed data is obvious.
- Players are Simon, Dad, Mum, Andy, Jay and Karl.
- There are 48 placeholder teams, 8 per player.
- The placeholder teams try to use ESPN teams/logos from the returned feed, then fill with fallback names.
- After the real draw, edit manualDraw in app.js.

Prize rules:
- Winner: €40
- Runner-up / losing finalist: €20
- Third place: €15
- Worst team: €15
- Worst team is judged by lowest points, then worst goal difference.
