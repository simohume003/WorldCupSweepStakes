const ESPN_KNOCKOUT_URL =
  'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?dates=20260628-20260719';

const confirmedQualifiers = [
  'Mexico',
  'USA'
];

const teamOwners = {
  Argentina: { owner: 'Simon', color: '#0f8a3a' },
  Belgium: { owner: 'Simon', color: '#0f8a3a' },
  Uruguay: { owner: 'Simon', color: '#0f8a3a' },
  Turkey: { owner: 'Simon', color: '#0f8a3a' },
  Mexico: { owner: 'Simon', color: '#0f8a3a' },
  Ecuador: { owner: 'Simon', color: '#0f8a3a' },
  Tunisia: { owner: 'Simon', color: '#0f8a3a' },
  Haiti: { owner: 'Simon', color: '#0f8a3a' },

  Spain: { owner: 'Mum', color: '#7a2fd4' },
  Croatia: { owner: 'Mum', color: '#7a2fd4' },
  Egypt: { owner: 'Mum', color: '#7a2fd4' },
  Czechia: { owner: 'Mum', color: '#7a2fd4' },
  Australia: { owner: 'Mum', color: '#7a2fd4' },
  'South Africa': { owner: 'Mum', color: '#7a2fd4' },
  Paraguay: { owner: 'Mum', color: '#7a2fd4' },
  Uzbekistan: { owner: 'Mum', color: '#7a2fd4' },

  France: { owner: 'Dad', color: '#1258d6' },
  Germany: { owner: 'Dad', color: '#1258d6' },
  Senegal: { owner: 'Dad', color: '#1258d6' },
  Switzerland: { owner: 'Dad', color: '#1258d6' },
  Canada: { owner: 'Dad', color: '#1258d6' },
  'Bosnia and Herzegovina': { owner: 'Dad', color: '#1258d6' },
  'Saudi Arabia': { owner: 'Dad', color: '#1258d6' },
  'Cape Verde': { owner: 'Dad', color: '#1258d6' },

  England: { owner: 'Andy', color: '#e86f00' },
  Morocco: { owner: 'Andy', color: '#e86f00' },
  'Ivory Coast': { owner: 'Andy', color: '#e86f00' },
  Ghana: { owner: 'Andy', color: '#e86f00' },
  'New Zealand': { owner: 'Andy', color: '#e86f00' },
  'South Korea': { owner: 'Andy', color: '#e86f00' },
  Qatar: { owner: 'Andy', color: '#e86f00' },
  Panama: { owner: 'Andy', color: '#e86f00' },

  Brazil: { owner: 'Jay', color: '#d92d20' },
  Netherlands: { owner: 'Jay', color: '#d92d20' },
  Norway: { owner: 'Jay', color: '#d92d20' },
  Colombia: { owner: 'Jay', color: '#d92d20' },
  Japan: { owner: 'Jay', color: '#d92d20' },
  Algeria: { owner: 'Jay', color: '#d92d20' },
  Iran: { owner: 'Jay', color: '#d92d20' },
  Jordan: { owner: 'Jay', color: '#d92d20' },

  Portugal: { owner: 'Karl', color: '#008c95' },
  Scotland: { owner: 'Karl', color: '#008c95' },
  Austria: { owner: 'Karl', color: '#008c95' },
  Sweden: { owner: 'Karl', color: '#008c95' },
  USA: { owner: 'Karl', color: '#008c95' },
  'United States': { owner: 'Karl', color: '#008c95' },
  'Democratic Republic of the Congo': { owner: 'Karl', color: '#008c95' },
  'DR Congo': { owner: 'Karl', color: '#008c95' },
  Iraq: { owner: 'Karl', color: '#008c95' },
  'Curaçao': { owner: 'Karl', color: '#008c95' },
  Curacao: { owner: 'Karl', color: '#008c95' }
};

const teamAliases = {
  Türkiye: 'Turkey',
  'Czech Republic': 'Czechia',
  'Côte d’Ivoire': 'Ivory Coast',
  "Côte d'Ivoire": 'Ivory Coast',
  'Korea Republic': 'South Korea',
  'Bosnia-Herzegovina': 'Bosnia and Herzegovina',
  'Cape Verde Islands': 'Cape Verde',
  'Congo DR': 'Democratic Republic of the Congo',
  'DR Congo': 'Democratic Republic of the Congo',
  Curacao: 'Curaçao'
};

const flagCodes = {
  Argentina: 'ar',
  Australia: 'au',
  Austria: 'at',
  Belgium: 'be',
  Brazil: 'br',
  Canada: 'ca',
  'Cape Verde': 'cv',
  Colombia: 'co',
  Croatia: 'hr',
  Czechia: 'cz',
  'Democratic Republic of the Congo': 'cd',
  Ecuador: 'ec',
  Egypt: 'eg',
  England: 'gb-eng',
  France: 'fr',
  Germany: 'de',
  Ghana: 'gh',
  Haiti: 'ht',
  Iran: 'ir',
  Iraq: 'iq',
  'Ivory Coast': 'ci',
  Japan: 'jp',
  Jordan: 'jo',
  Mexico: 'mx',
  Morocco: 'ma',
  Netherlands: 'nl',
  'New Zealand': 'nz',
  Norway: 'no',
  Panama: 'pa',
  Paraguay: 'py',
  Portugal: 'pt',
  Qatar: 'qa',
  'Saudi Arabia': 'sa',
  Scotland: 'gb-sct',
  Senegal: 'sn',
  'South Africa': 'za',
  'South Korea': 'kr',
  Spain: 'es',
  Sweden: 'se',
  Switzerland: 'ch',
  Tunisia: 'tn',
  Turkey: 'tr',
  Uruguay: 'uy',
  USA: 'us',
  Uzbekistan: 'uz',
  'Bosnia and Herzegovina': 'ba',
  'Curaçao': 'cw',
  Algeria: 'dz'
};



const roundConfigs = [
  { key: 'Round of 32', slug: 'round32', placeholderCount: 16 },
  { key: 'Round of 16', slug: 'round16', placeholderCount: 8 },
  { key: 'Quarter-finals', slug: 'quarters', placeholderCount: 4 },
  { key: 'Semi-finals', slug: 'semis', placeholderCount: 2 },
  { key: 'Final', slug: 'final', placeholderCount: 1 },
  { key: 'Third Place', slug: 'third', placeholderCount: 1 }
];

function normaliseTeamName(name = '') {
  const cleaned = name.trim();
  return teamAliases[cleaned] || cleaned;
}

function getOwner(teamName) {
  return teamOwners[normaliseTeamName(teamName)];
}

function flagForTeam(teamName) {
  const team = normaliseTeamName(teamName);
  const code = flagCodes[team];
  return code ? `https://flagcdn.com/w80/${code}.png` : 'https://flagcdn.com/w80/un.png';
}

function setBracketStatus(mode, message) {
  const status = document.getElementById('bracketStatus');
  const text = document.getElementById('bracketStatusText');
  if (!status || !text) return;

  const dot = status.querySelector('.status-dot');
  dot.className = 'status-dot';

  if (mode === 'live') dot.classList.add('status-live');
  else if (mode === 'error') dot.classList.add('status-error');
  else dot.classList.add('status-checking');

  text.textContent = message;
}

function renderQualifiedTeams() {
  const container = document.getElementById('qualifiedTeams');
  const count = document.getElementById('qualifiedCount');
  if (!container) return;

  if (count) count.textContent = confirmedQualifiers.length;

  if (!confirmedQualifiers.length) {
    container.innerHTML = `
      <div class="empty-state">
        Add teams to <strong>confirmedQualifiers</strong> in bracket.js and they will appear here.
      </div>
    `;
    return;
  }

  container.innerHTML = confirmedQualifiers.map(teamName => {
    const owner = getOwner(teamName);

    return `
      <div class="qualified-team-card">
        <img
          src="${flagForTeam(teamName)}"
          alt="${teamName} flag"
          onerror="this.src='https://flagcdn.com/w80/un.png'"
        />

        <div>
          <strong>${normaliseTeamName(teamName)}</strong>
          <span style="color:${owner?.color || '#667085'}">
            ${owner ? `${owner.owner}'s team` : 'No owner found'}
          </span>
        </div>

        <span class="qualified-badge">Qualified</span>
      </div>
    `;
  }).join('');
}

function getRoundName(event) {
  const slug = (event.season?.slug || '').toLowerCase();

  const note =
    event.competitions?.[0]?.notes?.[0]?.headline ||
    event.competitions?.[0]?.notes?.[0]?.text ||
    event.competitions?.[0]?.format?.name ||
    '';

  const eventName = event.name || '';
  const combined = `${slug} ${note} ${eventName}`.toLowerCase();

  if (
    slug.includes('round-of-32') ||
    combined.includes('round of 32')
  ) {
    return 'Round of 32';
  }

  if (
    slug.includes('round-of-16') ||
    combined.includes('round of 16')
  ) {
    return 'Round of 16';
  }

  if (
    slug.includes('quarter') ||
    combined.includes('quarter')
  ) {
    return 'Quarter-finals';
  }

  if (
    slug.includes('semi') ||
    combined.includes('semi')
  ) {
    return 'Semi-finals';
  }

  if (
    slug.includes('third') ||
    combined.includes('third place') ||
    combined.includes('bronze')
  ) {
    return 'Third Place';
  }

  if (
    slug === 'final' ||
    combined.includes('final')
  ) {
    return 'Final';
  }

  return 'Other';
}

function getCompetitors(event) {
  const competitors = event.competitions?.[0]?.competitors || [];
  const home = competitors.find(team => team.homeAway === 'home') || competitors[0];
  const away = competitors.find(team => team.homeAway === 'away') || competitors[1];
  return { home, away };
}

function renderTeamRow(competitor) {
  if (!competitor?.team) {
    return `
      <div class="espn-team-row espn-team-tbd">
        <div class="espn-team-left">
          <img src="https://flagcdn.com/w80/un.png" alt="TBD flag" />
          <div>
            <strong>TBD</strong>
            <span>Owner TBD</span>
          </div>
        </div>
        <strong class="espn-team-score">—</strong>
      </div>
    `;
  }

  const teamName = normaliseTeamName(
    competitor.team.displayName ||
    competitor.team.shortDisplayName ||
    'TBD'
  );

  const owner = getOwner(teamName);
  const score = competitor.score ?? '—';
  const isWinner = competitor.winner === true;

  return `
    <div class="espn-team-row ${isWinner ? 'espn-team-row-winner' : ''}">
      <div class="espn-team-left">
        <img
          src="${competitor.team.logo || flagForTeam(teamName)}"
          alt="${teamName} flag"
          onerror="this.src='https://flagcdn.com/w80/un.png'"
        />
        <div>
          <strong>${teamName}</strong>
          <span style="color:${owner?.color || '#667085'}">
            ${owner ? owner.owner : 'Unassigned'}
          </span>
        </div>
      </div>

      <strong class="espn-team-score">${score}</strong>
    </div>
  `;
}
function formatBracketDate(event) {
  const date = new Date(event.date);

  return date.toLocaleDateString('en-IE', {
    timeZone: 'America/New_York',
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });
}

function renderMatchCard(event) {
  const { home, away } = getCompetitors(event);

  const status =
    event.status?.type?.shortDetail ||
    event.status?.type?.description ||
    'Scheduled';

  const dateText = formatBracketDate(event);

  return `
    <article class="espn-match-card">
      <div class="espn-match-top">
        <span>${dateText}</span>
        <span>${status}</span>
      </div>
      ${renderTeamRow(away)}
      ${renderTeamRow(home)}
    </article>
  `;
}

function renderPlaceholderCard() {
  return `
    <article class="espn-match-card espn-placeholder-card">
      <div class="espn-match-top">
        <span>TBD</span>
        <span>Pending</span>
      </div>

      <div class="espn-team-row espn-team-tbd">
        <div class="espn-team-left">
          <img src="https://flagcdn.com/w80/un.png" alt="TBD flag" />
          <div>
            <strong>TBD</strong>
            <span>Owner TBD</span>
          </div>
        </div>
        <strong class="espn-team-score">—</strong>
      </div>

      <div class="espn-team-row espn-team-tbd">
        <div class="espn-team-left">
          <img src="https://flagcdn.com/w80/un.png" alt="TBD flag" />
          <div>
            <strong>TBD</strong>
            <span>Owner TBD</span>
          </div>
        </div>
        <strong class="espn-team-score">—</strong>
      </div>
    </article>
  `;
}

function renderBracket(events) {
  const board = document.getElementById('bracketBoard');
  const notice = document.getElementById('bracketNotice');
  const count = document.getElementById('knockoutMatchCount');

  if (!board) return;

  const grouped = Object.fromEntries(roundConfigs.map(round => [round.key, []]));

  events.forEach(event => {
    const round = getRoundName(event);
    if (grouped[round]) grouped[round].push(event);
  });

  const matchCount = Object.values(grouped).reduce((sum, arr) => sum + arr.length, 0);
  if (count) count.textContent = matchCount;

  if (notice) {
    notice.textContent = matchCount
      ? 'Live knockout fixtures are now being pulled from ESPN.'
      : 'No confirmed knockout fixtures yet — showing the ESPN-style bracket shell for now.';
  }

  board.innerHTML = roundConfigs.map(round => {
    const matches = grouped[round.key];
    const cards = matches.length
      ? matches.map(renderMatchCard).join('')
      : Array.from({ length: round.placeholderCount }, renderPlaceholderCard).join('');

    return `
      <section class="espn-round espn-round-${round.slug}">
        <div class="espn-round-title">${round.key}</div>
        <div class="espn-round-column">
          ${cards}
        </div>
      </section>
    `;
  }).join('');
}

async function loadBracket() {
  try {
    setBracketStatus('checking', 'Checking ESPN knockout fixtures...');

    const response = await fetch(ESPN_KNOCKOUT_URL, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`ESPN returned ${response.status}`);
    }

    const data = await response.json();

    renderQualifiedTeams();
    renderBracket(data.events || []);

    const checkedAt = new Date().toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit'
    });

    setBracketStatus('live', `ESPN bracket ✓ checked ${checkedAt}`);
  } catch (error) {
    console.warn('Bracket fetch failed:', error);

    renderQualifiedTeams();
    renderBracket([]);

    setBracketStatus('error', 'Bracket feed unavailable — showing bracket shell');
  }
}
renderQualifiedTeams();
loadBracket();