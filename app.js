const ESPN_URL = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';

// Placeholder draw. After the family draw, replace these teams with the real assignments.
const players = [
  { name: 'Simon', color: '#0f8a3a', avatar: '🧑🏻', teams: ['Brazil', 'England', 'Japan', 'Morocco', 'Switzerland', 'Croatia', 'Australia', 'Spain'] },
  { name: 'Dad', color: '#1258d6', avatar: '👨🏻', teams: ['France', 'Germany', 'United States', 'Portugal', 'Netherlands', 'Belgium', 'Korea Republic', 'Canada'] },
  { name: 'Mum', color: '#7a2fd4', avatar: '👩🏻', teams: ['Mexico', 'Norway', 'Sweden', 'Ghana', 'Denmark', 'Senegal', 'Uruguay', 'Ecuador'] },
  { name: 'Andy', color: '#e86f00', avatar: '👩🏼', teams: ['Argentina', 'South Africa', 'Serbia', 'Turkey', 'Poland', 'Saudi Arabia', 'Tunisia', 'Iran'] },
  { name: 'Jay', color: '#d92d20', avatar: '🧑🏼', teams: ['Italy', 'Chile', 'Colombia', 'Paraguay', 'Scotland', 'Wales', 'Costa Rica', 'Panama'] },
  { name: 'Karl', color: '#008c95', avatar: '👨🏼', teams: ['Cameroon', 'Nigeria', 'Algeria', 'Egypt', 'New Zealand', 'Qatar', 'UAE', 'Iraq'] }
];

const fallbackEvents = [
  {
    id: 'demo-1',
    date: new Date().toISOString(),
    name: 'Brazil vs France',
    status: { type: { description: 'Scheduled', state: 'pre' } },
    competitions: [{
      venue: { fullName: 'Demo Stadium' },
      competitors: [
        { homeAway: 'home', score: '0', team: { displayName: 'Brazil', logo: '' } },
        { homeAway: 'away', score: '0', team: { displayName: 'France', logo: '' } }
      ]
    }]
  },
  {
    id: 'demo-2',
    date: new Date().toISOString(),
    name: 'Mexico vs South Africa',
    status: { type: { description: 'Scheduled', state: 'pre' } },
    competitions: [{
      venue: { fullName: 'Demo Arena' },
      competitors: [
        { homeAway: 'home', score: '0', team: { displayName: 'Mexico', logo: '' } },
        { homeAway: 'away', score: '0', team: { displayName: 'South Africa', logo: '' } }
      ]
    }]
  }
];

const teamAliases = {
  'USA': 'United States',
  'USMNT': 'United States',
  'South Korea': 'Korea Republic',
  'Korea': 'Korea Republic'
};

function normaliseTeamName(name = '') {
  const trimmed = name.trim();
  return teamAliases[trimmed] || trimmed;
}

function findOwner(teamName) {
  const normalized = normaliseTeamName(teamName).toLowerCase();
  return players.find(player =>
    player.teams.some(team => normaliseTeamName(team).toLowerCase() === normalized)
  );
}

function setApiStatus(mode, message) {
  const status = document.getElementById('apiStatus');
  const dot = status.querySelector('.status-dot');
  const text = document.getElementById('apiStatusText');

  dot.className = 'status-dot';

  if (mode === 'live') {
    dot.classList.add('status-live');
  } else if (mode === 'error') {
    dot.classList.add('status-error');
  } else {
    dot.classList.add('status-checking');
  }

  text.textContent = message;
}

function logoForTeam(team) {
  if (team.logo) return team.logo;
  const name = encodeURIComponent(team.displayName || team.shortDisplayName || 'Team');
  return `https://placehold.co/80x80/eef2f6/172033?text=${name.charAt(0).toUpperCase()}`;
}

function formatTime(dateString) {
  const date = new Date(dateString);
  return {
    time: date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
    date: date.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'short' })
  };
}

function getCompetitors(event) {
  const competition = event.competitions?.[0] || {};
  const competitors = competition.competitors || [];
  const home = competitors.find(c => c.homeAway === 'home') || competitors[0];
  const away = competitors.find(c => c.homeAway === 'away') || competitors[1];
  return { home, away, competition };
}

function renderFixtures(events) {
  const list = document.getElementById('fixturesList');
  const todayCount = document.getElementById('todayCount');
  const fixtureDate = document.getElementById('fixtureDate');

  todayCount.textContent = events.length;

  if (!events.length) {
    list.innerHTML = '<div class="empty-state">No fixtures returned for this feed yet. ESPN is connected, but there may not be a match in this scoreboard window.</div>';
    fixtureDate.textContent = 'No games';
    return;
  }

  fixtureDate.textContent = formatTime(events[0].date).date;

  list.innerHTML = events.map(event => {
    const { home, away, competition } = getCompetitors(event);
    const homeTeam = home?.team || { displayName: 'Home', logo: '' };
    const awayTeam = away?.team || { displayName: 'Away', logo: '' };
    const homeOwner = findOwner(homeTeam.displayName);
    const awayOwner = findOwner(awayTeam.displayName);
    const status = event.status?.type?.description || 'Scheduled';
    const state = event.status?.type?.state || 'pre';
    const score = state === 'pre' ? 'vs' : `${away?.score ?? 0} - ${home?.score ?? 0}`;
    const time = formatTime(event.date);
    const venue = competition.venue?.fullName || 'Venue TBC';

    return `
      <div class="fixture-row">
        <div class="time-box">${time.time}<span>${status}</span></div>

        <div class="team">
          <img class="fixture-flag" src="${logoForTeam(awayTeam)}" alt="${awayTeam.displayName} logo" loading="lazy" />
          <div>
            <span class="team-name">${awayTeam.displayName}</span>
            <span class="owner-name" style="color:${awayOwner?.color || '#667085'}">${awayOwner ? awayOwner.name : 'Unassigned'}</span>
          </div>
        </div>

        <div class="fixture-score">${score}</div>

        <div class="team">
          <img class="fixture-flag" src="${logoForTeam(homeTeam)}" alt="${homeTeam.displayName} logo" loading="lazy" />
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

  players.flatMap(p => p.teams).forEach(team => {
    teamStats.set(normaliseTeamName(team), {
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      points: 0,
      stillIn: true,
      logo: ''
    });
  });

  events.forEach(event => {
    const { home, away } = getCompetitors(event);
    if (!home || !away) return;

    const state = event.status?.type?.state;
    const completed = state === 'post';
    const homeName = normaliseTeamName(home.team.displayName);
    const awayName = normaliseTeamName(away.team.displayName);

    [home, away].forEach(c => {
      const name = normaliseTeamName(c.team.displayName);
      if (teamStats.has(name)) teamStats.get(name).logo = c.team.logo || '';
    });

    if (!completed) return;

    const homeScore = Number(home.score || 0);
    const awayScore = Number(away.score || 0);

    const homeStat = teamStats.get(homeName);
    const awayStat = teamStats.get(awayName);

    if (homeStat) homeStat.played += 1;
    if (awayStat) awayStat.played += 1;

    if (homeScore > awayScore) {
      if (homeStat) { homeStat.wins += 1; homeStat.points += 2; }
      if (awayStat) awayStat.losses += 1;
    } else if (awayScore > homeScore) {
      if (awayStat) { awayStat.wins += 1; awayStat.points += 2; }
      if (homeStat) homeStat.losses += 1;
    } else {
      if (homeStat) { homeStat.draws += 1; homeStat.points += 1; }
      if (awayStat) { awayStat.draws += 1; awayStat.points += 1; }
    }
  });

  return teamStats;
}

function getPerformanceLabel(percent) {
  if (percent >= 80) return ['Excellent', '#e6f7ec', '#0f8a3a'];
  if (percent >= 60) return ['Good', '#eaf1ff', '#1258d6'];
  if (percent >= 40) return ['On Track', '#f4ecff', '#7a2fd4'];
  if (percent >= 25) return ['Fighting On', '#fff3e8', '#e86f00'];
  return ['At Risk', '#fff0f0', '#d92d20'];
}

function renderPerformance(events) {
  const table = document.getElementById('playerPerformance');
  const teamStats = calculateTeamStats(events);
  let totalStillIn = 0;
  const totalTeams = players.reduce((sum, p) => sum + p.teams.length, 0);

  table.innerHTML = players.map(player => {
    const stillIn = player.teams.filter(team => teamStats.get(normaliseTeamName(team))?.stillIn !== false).length;
    totalStillIn += stillIn;
    const percent = Math.round((stillIn / player.teams.length) * 100);
    const [label, bg, fg] = getPerformanceLabel(percent);

    const chips = player.teams.map(team => {
      const stat = teamStats.get(normaliseTeamName(team));
      const src = stat?.logo || `https://placehold.co/80x80/eef2f6/172033?text=${encodeURIComponent(team[0])}`;
      return `<span class="team-chip" title="${team}: ${stat?.points || 0} pts"><img src="${src}" alt="${team}" loading="lazy"></span>`;
    }).join('');

    return `
      <div class="player-row">
        <div class="player-name" style="color:${player.color}"><span class="avatar">${player.avatar}</span>${player.name}</div>
        <div class="count" style="color:${player.color}">${stillIn} of ${player.teams.length}</div>
        <div class="progress-track"><div class="progress-fill" style="width:${percent}%; background:${player.color}"></div></div>
        <div class="status-pill" style="background:${bg}; color:${fg}">${label}</div>
        <div class="team-chip-list">${chips}</div>
      </div>
    `;
  }).join('');

  document.getElementById('teamsStillIn').textContent = `${totalStillIn} / ${totalTeams}`;
  renderLeaderboard(events, teamStats);
}

function renderLeaderboard(events, teamStats) {
  const list = document.getElementById('leaderboard');

  const rows = players.map(player => {
    const stillIn = player.teams.filter(team => teamStats.get(normaliseTeamName(team))?.stillIn !== false).length;
    const points = player.teams.reduce((sum, team) => sum + (teamStats.get(normaliseTeamName(team))?.points || 0), 0);
    return { ...player, stillIn, points };
  }).sort((a, b) => b.points - a.points || b.stillIn - a.stillIn);

  list.innerHTML = rows.map((player, index) => `
    <div class="leaderboard-row">
      <div class="rank">${index + 1}</div>
      <div class="player-name" style="color:${player.color}"><span class="avatar">${player.avatar}</span><div>${player.name}<div class="leader-meta">${player.stillIn} teams still in</div></div></div>
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
    const now = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    setApiStatus('live', `ESPN live ✓ checked ${now}`);
    renderFixtures(events);
    renderPerformance(events);
  } catch (error) {
    console.warn('ESPN fetch failed. Using fallback data.', error);
    setApiStatus('error', 'ESPN failed ✕ using backup data');
    renderFixtures(fallbackEvents);
    renderPerformance(fallbackEvents);
  }
}

init();
function isSameLocalDay(dateA, dateB) {
  return dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate();
}

function getTodayEvents(events) {
  const today = new Date();

  return events.filter(event => {
    const eventDate = new Date(event.date);
    return isSameLocalDay(eventDate, today);
  });
}

function getNextUpcomingEvents(events) {
  const now = new Date();

  return events
    .filter(event => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}
const todayEvents = getTodayEvents(events);

let displayedEvents = todayEvents;
let fixtureTitle = "Today's Fixtures";

if (todayEvents.length === 0) {
  displayedEvents = getNextUpcomingEvents(events).slice(0, 4);
  fixtureTitle = "Next Fixtures";
}