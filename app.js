const ESPN_URL = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';
const TOTAL_WORLD_CUP_TEAMS = 48;

const fallbackFlags = {
  "Argentina": "https://flagcdn.com/w80/ar.png",
  "Australia": "https://flagcdn.com/w80/au.png",
  "Belgium": "https://flagcdn.com/w80/be.png",
  "Brazil": "https://flagcdn.com/w80/br.png",
  "Canada": "https://flagcdn.com/w80/ca.png",
  "Croatia": "https://flagcdn.com/w80/hr.png",
  "Denmark": "https://flagcdn.com/w80/dk.png",
  "Ecuador": "https://flagcdn.com/w80/ec.png",
  "England": "https://flagcdn.com/w80/gb-eng.png",
  "France": "https://flagcdn.com/w80/fr.png",
  "Germany": "https://flagcdn.com/w80/de.png",
  "Ghana": "https://flagcdn.com/w80/gh.png",
  "Iran": "https://flagcdn.com/w80/ir.png",
  "Japan": "https://flagcdn.com/w80/jp.png",
  "Mexico": "https://flagcdn.com/w80/mx.png",
  "Morocco": "https://flagcdn.com/w80/ma.png",
  "Netherlands": "https://flagcdn.com/w80/nl.png",
  "Poland": "https://flagcdn.com/w80/pl.png",
  "Portugal": "https://flagcdn.com/w80/pt.png",
  "Saudi Arabia": "https://flagcdn.com/w80/sa.png",
  "Senegal": "https://flagcdn.com/w80/sn.png",
  "Serbia": "https://flagcdn.com/w80/rs.png",
  "South Africa": "https://flagcdn.com/w80/za.png",
  "South Korea": "https://flagcdn.com/w80/kr.png",
  "Korea Republic": "https://flagcdn.com/w80/kr.png",
  "Spain": "https://flagcdn.com/w80/es.png",
  "Switzerland": "https://flagcdn.com/w80/ch.png",
  "Tunisia": "https://flagcdn.com/w80/tn.png",
  "Uruguay": "https://flagcdn.com/w80/uy.png",
  "USA": "https://flagcdn.com/w80/us.png",
  "United States": "https://flagcdn.com/w80/us.png",
  "Wales": "https://flagcdn.com/w80/gb-wls.png",
  "Italy": "https://flagcdn.com/w80/it.png",
"Chile": "https://flagcdn.com/w80/cl.png",
"Colombia": "https://flagcdn.com/w80/co.png",
"Paraguay": "https://flagcdn.com/w80/py.png",
"Scotland": "https://flagcdn.com/w80/gb-sct.png",
"Costa Rica": "https://flagcdn.com/w80/cr.png",
"Panama": "https://flagcdn.com/w80/pa.png",
"Cameroon": "https://flagcdn.com/w80/cm.png",
"Nigeria": "https://flagcdn.com/w80/ng.png",
"Algeria": "https://flagcdn.com/w80/dz.png",
"Egypt": "https://flagcdn.com/w80/eg.png",
"New Zealand": "https://flagcdn.com/w80/nz.png",
"Qatar": "https://flagcdn.com/w80/qa.png",
"UAE": "https://flagcdn.com/w80/ae.png",
"United Arab Emirates": "https://flagcdn.com/w80/ae.png",
"Iraq": "https://flagcdn.com/w80/iq.png",
};

// Players are correct. Teams are placeholders for now and can be replaced after the real family draw.
const playerShells = [
  { name: 'Simon', color: '#0f8a3a', avatar: '🧑🏻' },
  { name: 'Dad', color: '#1258d6', avatar: '👨🏻' },
  { name: 'Mum', color: '#7a2fd4', avatar: '👩🏻' },
  { name: 'Andy', color: '#e86f00', avatar: '👨🏼' },
  { name: 'Jay', color: '#d92d20', avatar: '🧑🏼' },
  { name: 'Karl', color: '#008c95', avatar: '👨🏻' }
];

// When you have the real draw, replace this whole object.
// Use ESPN team display names where possible, e.g. "United States" not "USA".
const manualDraw = null;
/* Example later:
const manualDraw = {
  Simon: ['Brazil', 'England', 'Japan', 'Morocco', 'Switzerland', 'Croatia', 'Australia', 'Spain'],
  Dad: ['France', 'Germany', 'United States', 'Portugal', 'Netherlands', 'Belgium', 'Korea Republic', 'Canada'],
  Mum: ['Mexico', 'Norway', 'Sweden', 'Ghana', 'Denmark', 'Senegal', 'Uruguay', 'Ecuador'],
  Andy: ['Argentina', 'South Africa', 'Serbia', 'Turkey', 'Poland', 'Saudi Arabia', 'Tunisia', 'Iran'],
  Jay: ['Italy', 'Chile', 'Colombia', 'Paraguay', 'Scotland', 'Wales', 'Costa Rica', 'Panama'],
  Karl: ['Cameroon', 'Nigeria', 'Algeria', 'Egypt', 'New Zealand', 'Qatar', 'UAE', 'Iraq']
};
*/

const prizeRules = {
  winner: 40,
  runnerUp: 20,
  thirdPlace: 15,
  worstTeam: 15,
  worstTeamTieBreakers: ['lowest points', 'worst goal difference']
};

const fallbackTeams = [
  'Brazil', 'England', 'France', 'Germany', 'Argentina', 'Spain', 'Portugal', 'Netherlands',
  'Mexico', 'United States', 'Canada', 'Japan', 'Korea Republic', 'Australia', 'Morocco', 'Croatia',
  'Switzerland', 'Belgium', 'Denmark', 'Sweden', 'Norway', 'Ghana', 'Senegal', 'Uruguay',
  'Ecuador', 'South Africa', 'Serbia', 'Poland', 'Saudi Arabia', 'Tunisia', 'Iran', 'Italy',
  'Chile', 'Colombia', 'Paraguay', 'Scotland', 'Wales', 'Costa Rica', 'Panama', 'Cameroon',
  'Nigeria', 'Algeria', 'Egypt', 'New Zealand', 'Qatar', 'UAE', 'Iraq', 'Turkey'
];

const fallbackEvents = [
  makeFallbackEvent('Brazil', 'France', 0),
  makeFallbackEvent('Mexico', 'South Africa', 1),
  makeFallbackEvent('Germany', 'England', 2),
  makeFallbackEvent('Argentina', 'Netherlands', 3)
];

const teamAliases = {
  'USA': 'United States',
  'USMNT': 'United States',
  'South Korea': 'Korea Republic',
  'Korea': 'Korea Republic'
};

let players = playerShells.map(player => ({ ...player, teams: [] }));
let espnTeamLogoMap = new Map();

function makeFallbackEvent(awayName, homeName, daysFromNow) {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  date.setHours(20, 0, 0, 0);

  return {
    id: `demo-${awayName}-${homeName}`,
    date: date.toISOString(),
    name: `${awayName} vs ${homeName}`,
    status: { type: { description: 'Scheduled', state: 'pre' } },
    competitions: [{
      venue: { fullName: 'Demo Stadium' },
      competitors: [
        { homeAway: 'away', score: '0', team: { displayName: awayName, logo: '' } },
        { homeAway: 'home', score: '0', team: { displayName: homeName, logo: '' } }
      ]
    }]
  };
}

function normaliseTeamName(name = '') {
  const trimmed = name.trim();
  return teamAliases[trimmed] || trimmed;
}

function getTeamKey(name = '') {
  return normaliseTeamName(name).toLowerCase();
}

function setApiStatus(mode, message) {
  const status = document.getElementById('apiStatus');
  const dot = status.querySelector('.status-dot');
  const text = document.getElementById('apiStatusText');

  dot.className = 'status-dot';

  if (mode === 'live') dot.classList.add('status-live');
  else if (mode === 'error') dot.classList.add('status-error');
  else dot.classList.add('status-checking');

  text.textContent = message;
}

function getCompetitors(event) {
  const competition = event.competitions?.[0] || {};
  const competitors = competition.competitors || [];
  const home = competitors.find(c => c.homeAway === 'home') || competitors[1];
  const away = competitors.find(c => c.homeAway === 'away') || competitors[0];
  return { home, away, competition };
}

function collectEspnTeams(events) {
  const teams = [];
  espnTeamLogoMap = new Map();

  events.forEach(event => {
    const competitors = event.competitions?.[0]?.competitors || [];
    competitors.forEach(c => {
      const displayName = normaliseTeamName(c.team?.displayName || c.team?.shortDisplayName || '');
      if (!displayName) return;

      const key = getTeamKey(displayName);
      if (!espnTeamLogoMap.has(key)) {
        espnTeamLogoMap.set(key, c.team?.logo || c.team?.logos?.[0]?.href || '');
        teams.push(displayName);
      }
    });
  });

  fallbackTeams.forEach(team => {
    const key = getTeamKey(team);
    if (!teams.some(existing => getTeamKey(existing) === key)) teams.push(team);
  });

  return teams.slice(0, TOTAL_WORLD_CUP_TEAMS);
}

function buildPlayers(allTeams) {
  if (manualDraw) {
    players = playerShells.map(player => ({
      ...player,
      teams: manualDraw[player.name] || []
    }));
    return;
  }

  players = playerShells.map((player, playerIndex) => ({
    ...player,
    teams: allTeams.slice(playerIndex * 8, playerIndex * 8 + 8)
  }));
}

function findOwner(teamName) {
  const key = getTeamKey(teamName);
  return players.find(player => player.teams.some(team => getTeamKey(team) === key));
}

function logoForName(teamName) {
  const cleanName = normaliseTeamName(teamName || '');
  const key = getTeamKey(cleanName);

  const espnLogo = espnTeamLogoMap.get(key);
  if (espnLogo) return espnLogo;

  return fallbackFlags[cleanName] ||
    fallbackFlags[teamName] ||
    'https://flagcdn.com/w80/un.png';
}

function logoForTeam(team) {
  const displayName = normaliseTeamName(
    team.displayName || team.shortDisplayName || 'Team'
  );

  if (team.logo) return team.logo;
  if (team.logos?.[0]?.href) return team.logos[0].href;

  return logoForName(displayName);
}

function formatTime(dateString) {
  const date = new Date(dateString);
  return {
    time: date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
    date: date.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'short' })
  };
}

function isSameLocalDay(dateA, dateB) {
  return dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate();
}

function getDisplayEvents(events) {
  const now = new Date();
  const sorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
  const today = sorted.filter(event => isSameLocalDay(new Date(event.date), now));

  if (today.length > 0) {
    return { title: "Today's Fixtures", tileTitle: "Today's Matches", subtext: 'fixtures from ESPN', events: today.slice(0, 4), isToday: true };
  }

  const upcoming = sorted.filter(event => new Date(event.date) >= now).slice(0, 4);
  return { title: 'Next Fixtures', tileTitle: 'Next Matches', subtext: 'upcoming fixtures from ESPN', events: upcoming, isToday: false };
}

function getFixtureScoreText(event, away, home) {
  const state = event.status?.type?.state || 'pre';
  if (state === 'pre') return 'vs';
  return `${away?.score ?? 0} - ${home?.score ?? 0}`;
}

function renderFixtures(events) {
  const list = document.getElementById('fixturesList');
  const todayCount = document.getElementById('todayCount');
  const fixtureDate = document.getElementById('fixtureDate');
  const fixturePanelTitle = document.getElementById('fixturePanelTitle');
  const matchesTileTitle = document.getElementById('matchesTileTitle');
  const matchesTileSubtext = document.getElementById('matchesTileSubtext');

  const display = getDisplayEvents(events);
  todayCount.textContent = display.events.length;
  fixturePanelTitle.textContent = display.title;
  matchesTileTitle.textContent = display.tileTitle;
  matchesTileSubtext.textContent = display.subtext;

  if (!display.events.length) {
    list.innerHTML = '<div class="empty-state">No fixtures returned yet. ESPN is connected, but this scoreboard window may not have games.</div>';
    fixtureDate.textContent = 'No games';
    return;
  }

  fixtureDate.textContent = formatTime(display.events[0].date).date;

  list.innerHTML = display.events.map(event => {
    const { home, away, competition } = getCompetitors(event);
    const homeTeam = home?.team || { displayName: 'Home', logo: '' };
    const awayTeam = away?.team || { displayName: 'Away', logo: '' };
    const homeOwner = findOwner(homeTeam.displayName);
    const awayOwner = findOwner(awayTeam.displayName);
    const status = event.status?.type?.description || 'Scheduled';
    const score = getFixtureScoreText(event, away, home);
    const time = formatTime(event.date);
    const venue = competition.venue?.fullName || 'Venue TBC';

    return `
      <div class="fixture-row">
        <div class="time-box">${time.time}<span>${status}</span></div>

        <div class="team">
          <img class="fixture-flag" src="${logoForTeam(awayTeam)}" alt="${awayTeam.displayName} logo" loading="lazy" onerror="this.src='https://flagcdn.com/w80/un.png'" />
          <div>
            <span class="team-name">${awayTeam.displayName}</span>
            <span class="owner-name" style="color:${awayOwner?.color || '#667085'}">${awayOwner ? awayOwner.name : 'Unassigned'}</span>
          </div>
        </div>

        <div class="fixture-score">${score}</div>

        <div class="team">
          <img class="fixture-flag" src="${logoForTeam(homeTeam)}" alt="${homeTeam.displayName} logo" loading="lazy" onerror="this.src='https://flagcdn.com/w80/un.png'" />
          <div>
            <span class="team-name">${homeTeam.displayName}</span>
            <span class="owner-name" style="color:${homeOwner?.color || '#667085'}">${homeOwner ? homeOwner.name : 'Unassigned'}</span>
          </div>
        </div>

        <div class="venue">
          <span>📍 ${venue}</span>
          <span class="status-text">${awayOwner?.name || 'Unassigned'} vs ${homeOwner?.name || 'Unassigned'}</span>
        </div>
      </div>
    `;
  }).join('');
}

function calculateTeamStats(events) {
  const teamStats = new Map();

  players.flatMap(player => player.teams).forEach(team => {
    teamStats.set(getTeamKey(team), {
      name: team,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      stillIn: true
    });
  });

  events.forEach(event => {
    const state = event.status?.type?.state;
    if (state !== 'post') return;

    const { home, away } = getCompetitors(event);
    if (!home || !away) return;

    const homeKey = getTeamKey(home.team.displayName);
    const awayKey = getTeamKey(away.team.displayName);
    const homeStat = teamStats.get(homeKey);
    const awayStat = teamStats.get(awayKey);

    const homeScore = Number(home.score || 0);
    const awayScore = Number(away.score || 0);

    updateOneTeam(homeStat, homeScore, awayScore);
    updateOneTeam(awayStat, awayScore, homeScore);
  });

  return teamStats;
}

function updateOneTeam(stat, goalsFor, goalsAgainst) {
  if (!stat) return;

  stat.played += 1;
  stat.goalsFor += goalsFor;
  stat.goalsAgainst += goalsAgainst;
  stat.goalDifference = stat.goalsFor - stat.goalsAgainst;

  if (goalsFor > goalsAgainst) {
    stat.wins += 1;
    stat.points += 3;
  } else if (goalsFor === goalsAgainst) {
    stat.draws += 1;
    stat.points += 1;
  } else {
    stat.losses += 1;
  }
}

function renderDraw(events) {
  const grid = document.getElementById('playerDraw');
  const teamStats = calculateTeamStats(events);
  const totalTeams = players.reduce((sum, player) => sum + player.teams.length, 0);
  const stillIn = players.flatMap(p => p.teams).filter(team => teamStats.get(getTeamKey(team))?.stillIn !== false).length;

  document.getElementById('teamsStillIn').textContent = `${stillIn || totalTeams} / ${TOTAL_WORLD_CUP_TEAMS}`;

  grid.innerHTML = players.map(player => {
    const chips = player.teams.map(team => `
      <span class="draw-team-chip" title="${team}">
        <img src="${logoForName(team)}" alt="${team} logo" loading="lazy" onerror="this.src='https://flagcdn.com/w80/un.png'" />
        <span>${team}</span>
      </span>
    `).join('');

    return `
      <div class="draw-card">
        <div class="draw-card-head">
          <div class="player-name" style="color:${player.color}"><span class="avatar">${player.avatar}</span>${player.name}</div>
          <span class="team-count-pill">${player.teams.length} teams</span>
        </div>
        <div class="draw-team-list">${chips}</div>
      </div>
    `;
  }).join('');

  renderLeaderboard(teamStats);
}

function renderLeaderboard(teamStats) {
  const list = document.getElementById('leaderboard');

  const rows = players.map(player => {
    const stillIn = player.teams.filter(team => teamStats.get(getTeamKey(team))?.stillIn !== false).length;
    const points = player.teams.reduce((sum, team) => sum + (teamStats.get(getTeamKey(team))?.points || 0), 0);
    return { ...player, stillIn, points };
  }).sort((a, b) => b.stillIn - a.stillIn || b.points - a.points);

  list.innerHTML = rows.map((player, index) => `
    <div class="leaderboard-row">
      <div class="rank">${index + 1}</div>
      <div class="player-name" style="color:${player.color}"><span class="avatar">${player.avatar}</span><div>${player.name}<div class="leader-meta">${player.stillIn} / 8 teams still in</div></div></div>
      <div class="points" style="color:${player.color}">${player.points}</div>
    </div>
  `).join('');
}

async function fetchEspnEvents() {
  const response = await fetch(ESPN_URL, { cache: 'no-store' });
  if (!response.ok) throw new Error(`ESPN returned ${response.status}`);
  const data = await response.json();
  return data.events || [];
}

async function init() {
  try {
    setApiStatus('checking', 'Checking ESPN...');
    const events = await fetchEspnEvents();
    const allTeams = collectEspnTeams(events);
    buildPlayers(allTeams);
    const now = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    setApiStatus('live', `ESPN live ✓ checked ${now}`);
    renderFixtures(events);
    renderDraw(events);
  } catch (error) {
    console.warn('ESPN fetch failed. Using fallback data.', error);
    setApiStatus('error', 'ESPN failed ✕ using backup data');
    const allTeams = collectEspnTeams(fallbackEvents);
    buildPlayers(allTeams);
    renderFixtures(fallbackEvents);
    renderDraw(fallbackEvents);
  }
}

init();
