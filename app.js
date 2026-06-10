// World Cup Sweepstake dashboard
// ESPN endpoint tested: https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard
// It is unofficial/undocumented, so this app includes fallback data.

const ESPN_SCOREBOARD_URL = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';

const rules = {
  win: 2,
  draw: 1,
  qualify: 3,
  prize: 'Last team standing wins the prize'
};

// Placeholder draw data. Replace this after your real family draw.
const players = [
  { name: 'Simon', color: '#0f8a3a', avatar: '🧑🏻', teams: ['Brazil', 'England', 'Japan', 'Morocco', 'Switzerland', 'Croatia', 'Australia', 'Spain'] },
  { name: 'Dad', color: '#1258d6', avatar: '👨🏻', teams: ['France', 'Germany', 'USA', 'Portugal', 'Netherlands', 'Belgium', 'South Korea', 'Canada'] },
  { name: 'Mum', color: '#8236d9', avatar: '👩🏻', teams: ['Argentina', 'Denmark', 'Mexico', 'Sweden', 'Norway', 'Ghana', 'Poland', 'Uruguay'] },
  { name: 'Emma', color: '#e86919', avatar: '👩🏼', teams: ['Italy', 'Serbia', 'Turkey', 'Ecuador', 'Saudi Arabia', 'Chile', 'Wales', 'Scotland'] },
  { name: 'Jack', color: '#d7263d', avatar: '🧑🏼', teams: ['Senegal', 'Costa Rica', 'Tunisia', 'Cameroon', 'Iran', 'Qatar', 'Peru', 'South Africa'] },
  { name: 'Uncle John', color: '#087c8d', avatar: '👴🏻', teams: ['Ireland', 'Austria', 'Paraguay', 'Egypt', 'Algeria', 'Jamaica', 'Panama', 'New Zealand'] }
];

const manualStatus = {
  Brazil: 'Still In', England: 'Still In', Japan: 'Still In', Morocco: 'Still In', Switzerland: 'Still In', Croatia: 'Still In', Australia: 'Still In', Spain: 'Knocked Out',
  France: 'Still In', Germany: 'Still In', USA: 'Still In', Portugal: 'Still In', Netherlands: 'Still In', Belgium: 'Knocked Out', 'South Korea': 'Knocked Out', Canada: 'Knocked Out',
  Argentina: 'Still In', Denmark: 'Still In', Mexico: 'Still In', Sweden: 'Still In', Norway: 'Knocked Out', Ghana: 'Knocked Out', Poland: 'Knocked Out', Uruguay: 'Knocked Out',
  Italy: 'Still In', Serbia: 'Still In', Turkey: 'Still In', Ecuador: 'Knocked Out', 'Saudi Arabia': 'Knocked Out', Chile: 'Knocked Out', Wales: 'Knocked Out', Scotland: 'Knocked Out',
  Senegal: 'Still In', 'Costa Rica': 'Still In', Tunisia: 'Knocked Out', Cameroon: 'Knocked Out', Iran: 'Knocked Out', Qatar: 'Knocked Out', Peru: 'Knocked Out', 'South Africa': 'Knocked Out',
  Ireland: 'Still In', Austria: 'Knocked Out', Paraguay: 'Knocked Out', Egypt: 'Knocked Out', Algeria: 'Knocked Out', Jamaica: 'Knocked Out', Panama: 'Knocked Out', 'New Zealand': 'Knocked Out'
};

const flagFallbacks = {
  Brazil: '🇧🇷', England: '🏴', Japan: '🇯🇵', Morocco: '🇲🇦', Switzerland: '🇨🇭', Croatia: '🇭🇷', Australia: '🇦🇺', Spain: '🇪🇸',
  France: '🇫🇷', Germany: '🇩🇪', USA: '🇺🇸', Portugal: '🇵🇹', Netherlands: '🇳🇱', Belgium: '🇧🇪', 'South Korea': '🇰🇷', Canada: '🇨🇦',
  Argentina: '🇦🇷', Denmark: '🇩🇰', Mexico: '🇲🇽', Sweden: '🇸🇪', Norway: '🇳🇴', Ghana: '🇬🇭', Poland: '🇵🇱', Uruguay: '🇺🇾',
  Italy: '🇮🇹', Serbia: '🇷🇸', Turkey: '🇹🇷', Ecuador: '🇪🇨', 'Saudi Arabia': '🇸🇦', Chile: '🇨🇱', Wales: '🏴', Scotland: '🏴',
  Senegal: '🇸🇳', 'Costa Rica': '🇨🇷', Tunisia: '🇹🇳', Cameroon: '🇨🇲', Iran: '🇮🇷', Qatar: '🇶🇦', Peru: '🇵🇪', 'South Africa': '🇿🇦',
  Ireland: '🇮🇪', Austria: '🇦🇹', Paraguay: '🇵🇾', Egypt: '🇪🇬', Algeria: '🇩🇿', Jamaica: '🇯🇲', Panama: '🇵🇦', 'New Zealand': '🇳🇿',
  Mexico: '🇲🇽', Czechia: '🇨🇿'
};

const fallbackFixtures = [
  { id: 'demo-1', date: new Date().toISOString(), time: '11:00 AM', home: 'Brazil', away: 'France', venue: 'Riverpark Stadium', status: 'Scheduled', homeScore: 0, awayScore: 0, completed: false },
  { id: 'demo-2', date: new Date().toISOString(), time: '2:00 PM', home: 'Argentina', away: 'Portugal', venue: 'Coastal Arena', status: 'Scheduled', homeScore: 0, awayScore: 0, completed: false },
  { id: 'demo-3', date: new Date().toISOString(), time: '5:00 PM', home: 'Germany', away: 'England', venue: 'Lakeside Stadium', status: 'Scheduled', homeScore: 0, awayScore: 0, completed: false },
  { id: 'demo-4', date: new Date().toISOString(), time: '8:00 PM', home: 'USA', away: 'Japan', venue: 'Metro Stadium', status: 'Scheduled', homeScore: 0, awayScore: 0, completed: false }
];

let fixtures = fallbackFixtures;
let teamLogos = {};
let sourceLabel = 'Demo fallback data';

function normaliseTeamName(name) {
  if (name === 'United States') return 'USA';
  if (name === 'Korea Republic') return 'South Korea';
  return name;
}

function parseEspnScoreboard(data) {
  const events = Array.isArray(data?.events) ? data.events : [];
  const parsed = events.map(event => {
    const competition = event.competitions?.[0] || {};
    const competitors = competition.competitors || [];
    const homeRaw = competitors.find(team => team.homeAway === 'home') || competitors[0];
    const awayRaw = competitors.find(team => team.homeAway === 'away') || competitors[1];
    const home = normaliseTeamName(homeRaw?.team?.displayName || homeRaw?.team?.shortDisplayName || 'Home');
    const away = normaliseTeamName(awayRaw?.team?.displayName || awayRaw?.team?.shortDisplayName || 'Away');

    teamLogos[home] = homeRaw?.team?.logo || teamLogos[home];
    teamLogos[away] = awayRaw?.team?.logo || teamLogos[away];

    return {
      id: event.id,
      date: event.date,
      time: formatTime(event.date),
      home,
      away,
      venue: competition.venue?.fullName || event.venue?.displayName || 'Venue TBC',
      status: competition.status?.type?.shortDetail || event.status?.type?.shortDetail || 'Scheduled',
      completed: Boolean(competition.status?.type?.completed || event.status?.type?.completed),
      state: competition.status?.type?.state || event.status?.type?.state || 'pre',
      homeScore: Number(homeRaw?.score || 0),
      awayScore: Number(awayRaw?.score || 0)
    };
  });

  return parsed.length ? parsed : fallbackFixtures;
}

async function loadFixtures() {
  setApiStatus('Loading ESPN data…', 'loading');

  try {
    const response = await fetch(ESPN_SCOREBOARD_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`ESPN returned ${response.status}`);
    const data = await response.json();
    fixtures = parseEspnScoreboard(data);
    sourceLabel = 'Live ESPN data';
    setApiStatus('Live ESPN data', 'live');
  } catch (error) {
    console.warn('ESPN load failed, using fallback data:', error);
    fixtures = fallbackFixtures;
    sourceLabel = 'Demo data — ESPN unavailable';
    setApiStatus('Demo mode — ESPN blocked/unavailable', 'demo');
  }

  renderAll();
}

function setApiStatus(text, mode) {
  const el = document.getElementById('apiStatus');
  el.textContent = text;
  el.className = `api-pill api-pill--${mode}`;
}

function ownerOf(team) {
  return players.find(player => player.teams.includes(team)) || { name: 'Unclaimed', color: '#6c7484', avatar: '❔', teams: [] };
}

function getTeamStatus(team) {
  return manualStatus[team] || 'Still In';
}

function teamIcon(team) {
  if (teamLogos[team]) return `<img src="${teamLogos[team]}" alt="${team}" />`;
  return `<span>${flagFallbacks[team] || '⚽'}</span>`;
}

function pointsFromFixtures(team) {
  return fixtures.reduce((total, match) => {
    if (!match.completed) return total;
    const isHome = match.home === team;
    const isAway = match.away === team;
    if (!isHome && !isAway) return total;
    const ownScore = isHome ? match.homeScore : match.awayScore;
    const otherScore = isHome ? match.awayScore : match.homeScore;
    if (ownScore > otherScore) return total + rules.win;
    if (ownScore === otherScore) return total + rules.draw;
    return total;
  }, 0);
}

function goalDifferenceFromFixtures(team) {
  return fixtures.reduce((total, match) => {
    if (!match.completed) return total;
    if (match.home === team) return total + match.homeScore - match.awayScore;
    if (match.away === team) return total + match.awayScore - match.homeScore;
    return total;
  }, 0);
}

function playerSummary(player) {
  const teams = player.teams.map(team => ({
    team,
    status: getTeamStatus(team),
    points: pointsFromFixtures(team),
    gd: goalDifferenceFromFixtures(team)
  }));
  const stillIn = teams.filter(team => team.status !== 'Knocked Out').length;
  const points = teams.reduce((sum, team) => sum + team.points, 0);
  const gd = teams.reduce((sum, team) => sum + team.gd, 0);
  return { ...player, stillIn, total: teams.length, points, gd, teams };
}

function statusFor(percent) {
  if (percent >= 75) return ['Excellent', 'status-good'];
  if (percent >= 50) return ['Good', 'status-ok'];
  if (percent >= 30) return ['Fighting On', 'status-warn'];
  return ['At Risk', 'status-danger'];
}

function formatTime(dateString) {
  return new Intl.DateTimeFormat('en-IE', {
    hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'Europe/Dublin'
  }).format(new Date(dateString));
}

function formatDate(dateString = new Date()) {
  return new Intl.DateTimeFormat('en-IE', {
    weekday: 'long', day: 'numeric', month: 'short', timeZone: 'Europe/Dublin'
  }).format(new Date(dateString));
}

function renderStats() {
  const totalTeams = players.reduce((sum, player) => sum + player.teams.length, 0);
  const allDrawTeams = players.flatMap(player => player.teams);
  const stillIn = allDrawTeams.filter(team => getTeamStatus(team) !== 'Knocked Out').length;
  document.getElementById('todayMatchesCount').textContent = fixtures.length;
  document.getElementById('todayMatchesSub').textContent = sourceLabel.includes('Live') ? 'fixtures from ESPN' : 'demo fixtures shown';
  document.getElementById('teamsStillIn').textContent = `${stillIn} / ${totalTeams}`;
  document.getElementById('todayLabel').textContent = fixtures[0]?.date ? formatDate(fixtures[0].date) : formatDate();
}

function renderFixtures() {
  const container = document.getElementById('fixtureList');

  if (!fixtures.length) {
    container.innerHTML = `<div class="empty-state">No fixtures found for today.</div>`;
    return;
  }

  container.innerHTML = fixtures.slice(0, 6).map(match => {
    const homeOwner = ownerOf(match.home);
    const awayOwner = ownerOf(match.away);
    const familyMatch = `${homeOwner.name} vs ${awayOwner.name}`;
    const scoreText = match.completed || match.state === 'in' ? `${match.homeScore} - ${match.awayScore}` : 'VS';

    return `
      <article class="fixture">
        <div class="timebox">${match.time.replace(' ', '<span>')} ${match.time.includes(' ') ? '</span>' : ''}</div>
        <div class="team">
          <span class="flag">${teamIcon(match.home)}</span>
          <div><strong>${match.home}</strong><span class="owner" style="color:${homeOwner.color}">${homeOwner.name}</span></div>
        </div>
        <span class="vs">${scoreText}</span>
        <div class="team">
          <span class="flag">${teamIcon(match.away)}</span>
          <div><strong>${match.away}</strong><span class="owner" style="color:${awayOwner.color}">${awayOwner.name}</span></div>
        </div>
        <div class="venue">📍 ${match.venue}<br><strong>${familyMatch}</strong><small>${match.status}</small></div>
      </article>
    `;
  }).join('');
}

function renderPerformance() {
  const container = document.getElementById('performanceTable');
  container.innerHTML = players.map(playerSummary).map(summary => {
    const percent = Math.round((summary.stillIn / summary.total) * 100);
    const [label, className] = statusFor(percent);
    const liveCopy = `${summary.stillIn} of ${summary.total} teams still in`;

    return `
      <article class="player-row">
        <div class="player" style="color:${summary.color}"><span class="avatar">${summary.avatar}</span>${summary.name}</div>
        <div class="live-count" style="color:${summary.color}">${summary.stillIn} of ${summary.total}</div>
        <div class="progress"><span style="width:${percent}%; background:${summary.color}"></span></div>
        <div class="metric">${percent}%</div>
        <div class="status-pill ${className}">${label}</div>
        <div class="team-flags" aria-label="${liveCopy}">${summary.teams.map(team => `<span class="team-dot ${team.status === 'Knocked Out' ? 'is-out' : ''}" title="${team.team} - ${team.status}">${teamIcon(team.team)}</span>`).join('')}</div>
      </article>
    `;
  }).join('');
}

function renderLeaderboard() {
  const container = document.getElementById('leaderboard');
  const summaries = players.map(playerSummary).sort((a, b) => b.stillIn - a.stillIn || b.points - a.points || b.gd - a.gd);

  container.innerHTML = summaries.map((summary, index) => `
    <article class="leaderboard-row">
      <span class="rank">${index + 1}</span>
      <div class="player" style="color:${summary.color}"><span class="avatar">${summary.avatar}</span>${summary.name}</div>
      <div><span class="metric">${summary.stillIn}</span> <span class="muted">teams in</span></div>
      <div><span class="metric">${summary.points}</span> <span class="muted">pts</span></div>
      <div><span class="metric">${summary.gd > 0 ? '+' : ''}${summary.gd}</span> <span class="muted">GD</span></div>
    </article>
  `).join('');
}

function renderAll() {
  renderStats();
  renderFixtures();
  renderPerformance();
  renderLeaderboard();
}

loadFixtures();
