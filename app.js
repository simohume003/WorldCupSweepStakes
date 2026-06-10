const players = [
  { name: 'Simon', color: '#0f8a3a', avatar: '🧑🏻', teams: ['Brazil', 'England', 'Japan', 'Morocco', 'Switzerland', 'Croatia', 'Australia', 'Spain'] },
  { name: 'Dad', color: '#1258d6', avatar: '👨🏻', teams: ['France', 'Germany', 'USA', 'Portugal', 'Netherlands', 'Belgium', 'South Korea', 'Canada'] },
  { name: 'Mum', color: '#8236d9', avatar: '👩🏻', teams: ['Argentina', 'Denmark', 'Mexico', 'Sweden', 'Norway', 'Ghana', 'Poland', 'Uruguay'] },
  { name: 'Emma', color: '#e86919', avatar: '👩🏼', teams: ['Italy', 'Serbia', 'Turkey', 'Ecuador', 'Saudi Arabia', 'Chile', 'Wales', 'Scotland'] },
  { name: 'Jack', color: '#d7263d', avatar: '🧑🏼', teams: ['Senegal', 'Costa Rica', 'Tunisia', 'Cameroon', 'Iran', 'Qatar', 'Peru', 'South Africa'] },
  { name: 'Uncle John', color: '#087c8d', avatar: '👴🏻', teams: ['Ireland', 'Austria', 'Paraguay', 'Egypt', 'Algeria', 'Jamaica', 'Panama', 'New Zealand'] }
];

const teamStatus = {
  Brazil: { flag: '🇧🇷', status: 'Still In', points: 14, gd: 6 }, England: { flag: '🏴', status: 'Still In', points: 12, gd: 4 }, Japan: { flag: '🇯🇵', status: 'Still In', points: 8, gd: 2 }, Morocco: { flag: '🇲🇦', status: 'Still In', points: 7, gd: 1 }, Switzerland: { flag: '🇨🇭', status: 'Still In', points: 6, gd: 1 }, Croatia: { flag: '🇭🇷', status: 'Still In', points: 5, gd: 0 }, Australia: { flag: '🇦🇺', status: 'Still In', points: 4, gd: -1 }, Spain: { flag: '🇪🇸', status: 'Knocked Out', points: 3, gd: -2 },
  France: { flag: '🇫🇷', status: 'Still In', points: 12, gd: 5 }, Germany: { flag: '🇩🇪', status: 'Still In', points: 11, gd: 3 }, USA: { flag: '🇺🇸', status: 'Still In', points: 8, gd: 2 }, Portugal: { flag: '🇵🇹', status: 'Still In', points: 8, gd: 2 }, Netherlands: { flag: '🇳🇱', status: 'Still In', points: 5, gd: -1 }, Belgium: { flag: '🇧🇪', status: 'Knocked Out', points: 2, gd: -3 }, 'South Korea': { flag: '🇰🇷', status: 'Knocked Out', points: 2, gd: -2 }, Canada: { flag: '🇨🇦', status: 'Knocked Out', points: 1, gd: -4 },
  Argentina: { flag: '🇦🇷', status: 'Still In', points: 10, gd: 3 }, Denmark: { flag: '🇩🇰', status: 'Still In', points: 6, gd: 0 }, Mexico: { flag: '🇲🇽', status: 'Still In', points: 5, gd: 0 }, Sweden: { flag: '🇸🇪', status: 'Still In', points: 4, gd: -1 }, Norway: { flag: '🇳🇴', status: 'Knocked Out', points: 2, gd: -2 }, Ghana: { flag: '🇬🇭', status: 'Knocked Out', points: 2, gd: -3 }, Poland: { flag: '🇵🇱', status: 'Knocked Out', points: 1, gd: -3 }, Uruguay: { flag: '🇺🇾', status: 'Knocked Out', points: 1, gd: -4 },
  Italy: { flag: '🇮🇹', status: 'Still In', points: 7, gd: 2 }, Serbia: { flag: '🇷🇸', status: 'Still In', points: 5, gd: 0 }, Turkey: { flag: '🇹🇷', status: 'Still In', points: 4, gd: -1 }, Ecuador: { flag: '🇪🇨', status: 'Knocked Out', points: 2, gd: -2 }, 'Saudi Arabia': { flag: '🇸🇦', status: 'Knocked Out', points: 1, gd: -4 }, Chile: { flag: '🇨🇱', status: 'Knocked Out', points: 1, gd: -5 }, Wales: { flag: '🏴', status: 'Knocked Out', points: 1, gd: -3 }, Scotland: { flag: '🏴', status: 'Knocked Out', points: 0, gd: -5 },
  Senegal: { flag: '🇸🇳', status: 'Still In', points: 5, gd: 0 }, 'Costa Rica': { flag: '🇨🇷', status: 'Still In', points: 3, gd: -1 }, Tunisia: { flag: '🇹🇳', status: 'Knocked Out', points: 2, gd: -2 }, Cameroon: { flag: '🇨🇲', status: 'Knocked Out', points: 1, gd: -2 }, Iran: { flag: '🇮🇷', status: 'Knocked Out', points: 1, gd: -3 }, Qatar: { flag: '🇶🇦', status: 'Knocked Out', points: 0, gd: -5 }, Peru: { flag: '🇵🇪', status: 'Knocked Out', points: 0, gd: -4 }, 'South Africa': { flag: '🇿🇦', status: 'Knocked Out', points: 0, gd: -6 },
  Ireland: { flag: '🇮🇪', status: 'Still In', points: 4, gd: 0 }, Austria: { flag: '🇦🇹', status: 'Knocked Out', points: 2, gd: -1 }, Paraguay: { flag: '🇵🇾', status: 'Knocked Out', points: 1, gd: -3 }, Egypt: { flag: '🇪🇬', status: 'Knocked Out', points: 1, gd: -3 }, Algeria: { flag: '🇩🇿', status: 'Knocked Out', points: 0, gd: -4 }, Jamaica: { flag: '🇯🇲', status: 'Knocked Out', points: 0, gd: -4 }, Panama: { flag: '🇵🇦', status: 'Knocked Out', points: 0, gd: -5 }, 'New Zealand': { flag: '🇳🇿', status: 'Knocked Out', points: 0, gd: -5 }
};

const fixtures = [
  { time: '11:00 AM', home: 'Brazil', away: 'France', venue: 'Riverpark Stadium' },
  { time: '2:00 PM', home: 'Argentina', away: 'Portugal', venue: 'Coastal Arena' },
  { time: '5:00 PM', home: 'Germany', away: 'England', venue: 'Lakeside Stadium' },
  { time: '8:00 PM', home: 'USA', away: 'Japan', venue: 'Metro Stadium' }
];

function ownerOf(team) {
  return players.find(player => player.teams.includes(team));
}

function playerSummary(player) {
  const teams = player.teams.map(team => ({ team, ...teamStatus[team] }));
  const stillIn = teams.filter(team => team.status === 'Still In').length;
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

function renderStats() {
  const totalTeams = players.reduce((sum, player) => sum + player.teams.length, 0);
  const stillIn = Object.values(teamStatus).filter(team => team.status === 'Still In').length;
  document.getElementById('todayMatchesCount').textContent = fixtures.length;
  document.getElementById('teamsStillIn').textContent = `${stillIn} / ${totalTeams}`;
  document.getElementById('todayLabel').textContent = new Intl.DateTimeFormat('en-IE', {
    weekday: 'long', day: 'numeric', month: 'short'
  }).format(new Date());
}

function renderFixtures() {
  const container = document.getElementById('fixtureList');
  container.innerHTML = fixtures.map(match => {
    const homeOwner = ownerOf(match.home);
    const awayOwner = ownerOf(match.away);
    const home = teamStatus[match.home];
    const away = teamStatus[match.away];
    const [hour, ampm] = match.time.split(' ');
    return `
      <article class="fixture">
        <div class="timebox">${hour}<span>${ampm}</span></div>
        <div class="team">
          <span class="flag">${home.flag}</span>
          <div><strong>${match.home}</strong><span class="owner" style="color:${homeOwner.color}">${homeOwner.name}</span></div>
        </div>
        <span class="vs">VS</span>
        <div class="team">
          <span class="flag">${away.flag}</span>
          <div><strong>${match.away}</strong><span class="owner" style="color:${awayOwner.color}">${awayOwner.name}</span></div>
        </div>
        <div class="venue">📍 ${match.venue}<br><strong>${homeOwner.name} vs ${awayOwner.name}</strong></div>
      </article>
    `;
  }).join('');
}

function renderPerformance() {
  const container = document.getElementById('performanceTable');
  container.innerHTML = players.map(playerSummary).map(summary => {
    const percent = Math.round((summary.stillIn / summary.total) * 100);
    const [label, className] = statusFor(percent);
    return `
      <article class="player-row">
        <div class="player" style="color:${summary.color}"><span class="avatar">${summary.avatar}</span>${summary.name}</div>
        <div class="live-count" style="color:${summary.color}">${summary.stillIn} of ${summary.total}</div>
        <div class="progress"><span style="width:${percent}%; background:${summary.color}"></span></div>
        <div class="metric">${percent}%</div>
        <div class="status-pill ${className}">${label}</div>
        <div class="team-flags">${summary.teams.map(team => `<span title="${team.team} - ${team.status}">${team.flag}</span>`).join('')}</div>
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
      <div><span class="metric">${summary.points}</span> <span class="muted">points</span></div>
      <div><span class="metric">${summary.gd > 0 ? '+' : ''}${summary.gd}</span> <span class="muted">GD</span></div>
    </article>
  `).join('');
}

renderStats();
renderFixtures();
renderPerformance();
renderLeaderboard();
