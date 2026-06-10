World Cup Sweepstake v4

How to run:
1. Open Terminal.
2. cd into this folder.
3. Run: python3 -m http.server 8000
4. Open: http://localhost:8000

What this version includes:
- ESPN World Cup scoreboard fetch.
- Top-right ESPN success/fail badge.
- Today/Next Fixtures logic, so it does not pretend tomorrow's match is today.
- Scores show once ESPN marks a game as live or finished.
- Prize rules:
  Winner = €40
  Runner-up / losing finalist = €20
  Third place = €15
  Worst team = €15
  Worst team is decided by lowest points, then worst goal difference.
- Removed the messy Teams per Player Performance section.

How to change names and teams:
Open app.js and edit the players array near the top.
