const ESPN_SCOREBOARD_URL = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';

// Change names and teams here after the real draw.
// Keep the team names matching ESPN names as closely as possible.
const players = [
  { name: 'Simon', avatar: '🧑🏻', teams: ['Brazil', 'England', 'Japan', 'Morocco'] },
  { name: 'Dad', avatar: '👨🏻', teams: ['France', 'Germany', 'United States', 'Portugal'] },
  { name: 'Mum', avatar: '👩🏻', teams: ['Spain', 'Netherlands', 'Croatia', 'Canada'] },
  { name: 'Emma', avatar: '👩🏼', teams: ['Argentina', 'Mexico', 'Serbia', 'Poland'] },
  { name: 'Jack', avatar: '🧑🏼', teams: ['Uruguay', 'Senegal', 'Australia', 'South Africa'] },
  { name: 'Uncle John', avatar: '👨🏼', teams: ['Belgium', 'Denmark', 'Switzerland', 'Costa Rica'] }
];

const prizeRules = {
  winner: 40,
  runnerUp: 20,
  thirdPlace: 15,
  worstTeam: 15,
  worstTeamTieBreakers: ['Lowest points', 'Worst goal difference']
};

const fallbackEvents = [
  {
    name: 'Mexico vs South Africa',
    date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    status: { type: { state: 'pre', description: 'Scheduled' } },
    competitions: [{
      venue: { fullName: 'Estadio Banorte' },
      competitors: [
        { homeAway: 'home', score: '0', team: { displayName: 'Mexico', logo: '' } },
        { homeAway: 'away', score: '0', team: { displayName: 'South Africa', logo: '' } }
      ]
    }]
  },
  {
    name: 'Brazil vs France',
    date: new Date(Date.now() + 25 * 60 * 60 * 1000).toISOString(),
    status: { type: { state: 'pre', description: 'Scheduled' } },
    competitions: [{
      venue: { fullName: 'Demo Stadium' },
      competitors: [
        { homeAway: 'home', score: '0', team: { displayName: 'Brazil', logo: '' } },
        { homeAway: 'away', score: '0', team: { displayName: 'France', logo: '' } }
      ]
    }]
  }
];

function setApiStatus(type, message) {
  const el = document.getElementById('apiStatus');
  el.className = `api-status api-status--${type}`;
  el.textContent = message;
}

async function fetchEspnEvents() {
  const response = await fetch(ESPN_SCOREBOARD_URL, { cache: 'no-store' });
  if (!response.ok) throw new Error(`ESPN returned ${response.status}`);
  const data = await response.json();
  return data.events || [];
}

function getCompetition(event) {
  return event.competitions?.[0] || {};
}

function getHomeAway(event) {
  const competitors = getCompetition(event).competitors || [];
  return {
    home: competitors.find(c => c.homeAway === 'home') || competitors[0],
    away: competitors.find(c => c.homeAway === 'away') || competitors[1]
  };
}

function getTeamName(competitor) {
  return competitor?.team?.displayName || competitor?.team?.shortDisplayName || 'TBD';
}

function getTeamLogo(competitor) {
  return competitor?.team?.logo || competitor?.team?.logos?.[0]?.href || '';
}

function findTeamOwner(teamName) {
  const normalised = normaliseTeamName(teamName);
  return players.find(player => player.teams.some(team => normaliseTeamName(team) === normalised));
}

function normaliseTeamName(value) {
  return String(value || '')
    .toLowerCase()
    .replace('&', 'and')
    .replace('usa', 'united states')
    .replace(/[^a-z0-9 ]/g, '')
    .trim();
}

function formatTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

function formatDateBadge(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
}

function isSameLocalDay(dateA, dateB) {
  return dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate();
}

function getTodayEvents(events) {
  const today = new Date();
  return events.filter(event => isSameLocalDay(new Date(event.date), today));
}

function getNextUpcomingEvents(events) {
  const now = new Date();
  return events
    .filter(event => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

function getDisplayEvents(events) {
  const todayEvents = getTodayEvents(events);
  if (todayEvents.length > 0) {
    return {
      title: "Today's Fixtures",
      tileTitle: "TODAY'S MATCHES",
      subtext: 'fixtures from ESPN',
      events: todayEvents.slice(0, 5)
    };
  }

  return {
    title: 'Next Fixtures',
    tileTitle: 'NEXT MATCHES',
    subtext: 'upcoming fixtures',
    events: getNextUpcomingEvents(events).slice(0, 5)
  };
}

function getFixtureScoreText(event) {
  const { home, away } = getHomeAway(event);
  const statusState = event.status?.type?.state;
  const isLiveOrFinished = statusState === 'in' || statusState === 'post';

  if (isLiveOrFinished) {
    return `${away?.score ?? 0} - ${home?.score ?? 0}`;
  }

  return 'VS';
}

function renderFixtures(events) {
  const list = document.getElementById('fixturesList');
  const title = document.getElementById('fixturePanelTitle');
  const dateBadge = document.getElementById('fixturePanelDate');
  const tileTitle = document.getElementById('matchesTileTitle');
  const tileNumber = document.getElementById('matchesTileNumber');
  const tileSubtext = document.getElementById('matchesTileSubtext');

  const display = getDisplayEvents(events);
  title.textContent = display.title;
  tileTitle.textContent = display.tileTitle;
  tileNumber.textContent = display.events.length;
  tileSubtext.textContent = display.subtext;

  if (!display.events.length) {
    dateBadge.textContent = 'No fixtures found';
    list.innerHTML = '<div class="empty-state">No upcoming fixtures found in the ESPN feed yet.</div>';
    return;
  }

  dateBadge.textContent = formatDateBadge(display.events[0].date);

  list.innerHTML = display.events.map(event => {
    const { home, away } = getHomeAway(event);
    const homeName = getTeamName(home);
    const awayName = getTeamName(away);
    const homeOwner = findTeamOwner(homeName)?.name || 'Unassigned';
    const awayOwner = findTeamOwner(awayName)?.name || 'Unassigned';
    const venue = getCompetition(event).venue?.fullName || 'Venue TBC';
    const status = event.status?.type?.description || 'Scheduled';

    return `
      <div class="fixture-card">
        <div class="fixture-time">${formatTime(event.date)}<small>${status}</small></div>
        <div class="fixture-team">
          ${logoOrFallback(away, awayName)}
          <div><strong>${awayName}</strong><span>${awayOwner}</span></div>
        </div>
        <div class="fixture-score">${getFixtureScoreText(event)}</div>
        <div class="fixture-team fixture-team--right">
          <div><strong>${homeName}</strong><span>${homeOwner}</span></div>
          ${logoOrFallback(home, homeName)}
        </div>
        <div class="fixture-meta">${awayOwner} vs ${homeOwner} • ${venue}</div>
      </div>
    `;
  }).join('');
}

function logoOrFallback(competitor, name) {
  const logo = getTeamLogo(competitor);
  if (logo) {
    return `<img class="team-logo" src="${logo}" alt="${name} logo" loading="lazy" />`;
  }
  return `<span class="avatar">${name.slice(0, 2).toUpperCase()}</span>`;
}

function renderPlayers() {
  const table = document.getElementById('playerTable');
  table.innerHTML = players.map(player => `
    <div class="player-row">
      <div class="player-main">
        <span class="avatar">${player.avatar}</span>
        <div>
          <strong>${player.name}</strong>
          <span>${player.teams.join(', ')}</span>
        </div>
      </div>
      <div class="count-badge">${player.teams.length} teams</div>
    </div>
  `).join('');
}

function calculateTeamStats(events) {
  const allTeams = players.flatMap(player => player.teams);
  const stats = {};

  allTeams.forEach(team => {
    stats[normaliseTeamName(team)] = {
      team,
      played: 0,
      points: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0
    };
  });

  events.forEach(event => {
    if (event.status?.type?.state !== 'post') return;

    const { home, away } = getHomeAway(event);
    if (!home || !away) return;

    const homeKey = normaliseTeamName(getTeamName(home));
    const awayKey = normaliseTeamName(getTeamName(away));
    const homeStats = stats[homeKey];
    const awayStats = stats[awayKey];

    if (!homeStats || !awayStats) return;

    const homeScore = Number(home.score || 0);
    const awayScore = Number(away.score || 0);

    updateSingleTeamStats(homeStats, homeScore, awayScore);
    updateSingleTeamStats(awayStats, awayScore, homeScore);
  });

  return Object.values(stats);
}

function updateSingleTeamStats(teamStats, goalsFor, goalsAgainst) {
  teamStats.played += 1;
  teamStats.goalsFor += goalsFor;
  teamStats.goalsAgainst += goalsAgainst;
  teamStats.goalDifference = teamStats.goalsFor - teamStats.goalsAgainst;

  if (goalsFor > goalsAgainst) teamStats.points += 3;
  if (goalsFor === goalsAgainst) teamStats.points += 1;
}

function getWorstTeam(stats) {
  const teamsThatPlayed = stats.filter(team => team.played > 0);
  if (!teamsThatPlayed.length) return null;

  return teamsThatPlayed.sort((a, b) => {
    if (a.points !== b.points) return a.points - b.points;
    return a.goalDifference - b.goalDifference;
  })[0];
}

function renderPrizeTracker(events) {
  const tracker = document.getElementById('prizeTracker');
  const stats = calculateTeamStats(events);
  const worstTeam = getWorstTeam(stats);
  const worstOwner = worstTeam ? findTeamOwner(worstTeam.team)?.name || 'Unassigned' : 'TBC';

  tracker.innerHTML = `
    <div class="prize-row">
      <div><strong>🏆 Winner</strong><span>World Cup winning team owner</span></div>
      <div class="count-badge">€${prizeRules.winner}</div>
    </div>
    <div class="prize-row">
      <div><strong>🥈 Runner-up</strong><span>Losing finalist team owner</span></div>
      <div class="count-badge">€${prizeRules.runnerUp}</div>
    </div>
    <div class="prize-row">
      <div><strong>🥉 Third place</strong><span>Third-place team owner</span></div>
      <div class="count-badge">€${prizeRules.thirdPlace}</div>
    </div>
    <div class="prize-row">
      <div><strong>🪦 Worst team</strong><span>${worstTeam ? `${worstTeam.team} (${worstOwner}) • ${worstTeam.points} pts, ${worstTeam.goalDifference} GD` : 'Starts once results come in'}</span></div>
      <div class="count-badge">€${prizeRules.worstTeam}</div>
    </div>
  `;
}

function renderTeamsStillIn() {
  // Until the tournament has elimination data, this stays as assigned teams / total.
  const totalAssigned = players.reduce((sum, player) => sum + player.teams.length, 0);
  document.getElementById('teamsStillInNumber').textContent = `${totalAssigned} / ${totalAssigned}`;
}

async function init() {
  let events;
  try {
    events = await fetchEspnEvents();
    const now = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    setApiStatus('live', `ESPN live ✓ checked ${now}`);
  } catch (error) {
    console.warn(error);
    events = fallbackEvents;
    setApiStatus('error', 'ESPN failed ✕ using backup data');
  }

  renderFixtures(events);
  renderPlayers();
  renderPrizeTracker(events);
  renderTeamsStillIn();
}

init();
