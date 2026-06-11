const teamOwners = {
  "Argentina": "Simon",
  "Belgium": "Simon",
  "Uruguay": "Simon",
  "Turkey": "Simon",
  "Mexico": "Simon",
  "Ecuador": "Simon",
  "Tunisia": "Simon",
  "Haiti": "Simon",

  "Spain": "Mum",
  "Croatia": "Mum",
  "Egypt": "Mum",
  "Czechia": "Mum",
  "Czech Republic": "Mum",
  "Australia": "Mum",
  "South Africa": "Mum",
  "Paraguay": "Mum",
  "Uzbekistan": "Mum",

  "France": "Dad",
  "Germany": "Dad",
  "Senegal": "Dad",
  "Switzerland": "Dad",
  "Canada": "Dad",
  "Bosnia and Herzegovina": "Dad",
  "Saudi Arabia": "Dad",
  "Cape Verde": "Dad",

  "England": "Andy",
  "Morocco": "Andy",
  "Ivory Coast": "Andy",
  "Côte d'Ivoire": "Andy",
  "Ghana": "Andy",
  "New Zealand": "Andy",
  "South Korea": "Andy",
  "Korea Republic": "Andy",
  "Qatar": "Andy",
  "Panama": "Andy",

  "Brazil": "Jay",
  "Netherlands": "Jay",
  "Norway": "Jay",
  "Colombia": "Jay",
  "Japan": "Jay",
  "Algeria": "Jay",
  "Iran": "Jay",
  "Jordan": "Jay",

  "Portugal": "Karl",
  "Scotland": "Karl",
  "Austria": "Karl",
  "Sweden": "Karl",
  "USA": "Karl",
  "United States": "Karl",
  "Democratic Republic of the Congo": "Karl",
  "DR Congo": "Karl",
  "Congo DR": "Karl",
  "Iraq": "Karl",
  "Curaçao": "Karl",
  "Curacao": "Karl"
};

const clubBadges = {
  "Arsenal": "https://resources.premierleague.com/premierleague/badges/t3.png",
  "Aston Villa": "https://resources.premierleague.com/premierleague/badges/t7.png",
  "West Ham United": "https://resources.premierleague.com/premierleague/badges/t21.png",
  "Manchester City": "https://resources.premierleague.com/premierleague/badges/t43.png",
  "Manchester United": "https://resources.premierleague.com/premierleague/badges/t1.png",
  "Liverpool": "https://resources.premierleague.com/premierleague/badges/t14.png",
  "Nottingham Forest": "https://resources.premierleague.com/premierleague/badges/t17.png",
  "Wolves": "https://resources.premierleague.com/premierleague/badges/t39.png",
  "Chelsea": "https://resources.premierleague.com/premierleague/badges/t8.png",
  "Tottenham Hotspur": "https://resources.premierleague.com/premierleague/badges/t6.png",
  "Newcastle United": "https://resources.premierleague.com/premierleague/badges/t4.png",
  "Everton": "https://resources.premierleague.com/premierleague/badges/t11.png",
  "Brighton": "https://resources.premierleague.com/premierleague/badges/t36.png",
  "Brentford": "https://resources.premierleague.com/premierleague/badges/t94.png",
  "Crystal Palace": "https://resources.premierleague.com/premierleague/badges/t31.png",
  "Fulham": "https://resources.premierleague.com/premierleague/badges/t54.png",
  "Bournemouth": "https://resources.premierleague.com/premierleague/badges/t91.png",
  "Leeds United": "https://resources.premierleague.com/premierleague/badges/t2.png",
  "Burnley": "https://resources.premierleague.com/premierleague/badges/t90.png",
  "Sunderland": "https://resources.premierleague.com/premierleague/badges/t56.png"
};

const countryFlags = {
  "Argentina": "https://flagcdn.com/w40/ar.png",
  "Belgium": "https://flagcdn.com/w40/be.png",
  "Uruguay": "https://flagcdn.com/w40/uy.png",
  "Turkey": "https://flagcdn.com/w40/tr.png",
  "Mexico": "https://flagcdn.com/w40/mx.png",
  "Ecuador": "https://flagcdn.com/w40/ec.png",
  "Tunisia": "https://flagcdn.com/w40/tn.png",
  "Haiti": "https://flagcdn.com/w40/ht.png",
  "Spain": "https://flagcdn.com/w40/es.png",
  "Croatia": "https://flagcdn.com/w40/hr.png",
  "Egypt": "https://flagcdn.com/w40/eg.png",
  "Czechia": "https://flagcdn.com/w40/cz.png",
  "Czech Republic": "https://flagcdn.com/w40/cz.png",
  "Australia": "https://flagcdn.com/w40/au.png",
  "South Africa": "https://flagcdn.com/w40/za.png",
  "Paraguay": "https://flagcdn.com/w40/py.png",
  "Uzbekistan": "https://flagcdn.com/w40/uz.png",
  "France": "https://flagcdn.com/w40/fr.png",
  "Germany": "https://flagcdn.com/w40/de.png",
  "Senegal": "https://flagcdn.com/w40/sn.png",
  "Switzerland": "https://flagcdn.com/w40/ch.png",
  "Canada": "https://flagcdn.com/w40/ca.png",
  "Bosnia and Herzegovina": "https://flagcdn.com/w40/ba.png",
  "Saudi Arabia": "https://flagcdn.com/w40/sa.png",
  "Cape Verde": "https://flagcdn.com/w40/cv.png",
  "England": "https://flagcdn.com/w40/gb-eng.png",
  "Morocco": "https://flagcdn.com/w40/ma.png",
  "Ivory Coast": "https://flagcdn.com/w40/ci.png",
  "Côte d'Ivoire": "https://flagcdn.com/w40/ci.png",
  "Ghana": "https://flagcdn.com/w40/gh.png",
  "New Zealand": "https://flagcdn.com/w40/nz.png",
  "South Korea": "https://flagcdn.com/w40/kr.png",
  "Korea Republic": "https://flagcdn.com/w40/kr.png",
  "Qatar": "https://flagcdn.com/w40/qa.png",
  "Panama": "https://flagcdn.com/w40/pa.png",
  "Brazil": "https://flagcdn.com/w40/br.png",
  "Netherlands": "https://flagcdn.com/w40/nl.png",
  "Norway": "https://flagcdn.com/w40/no.png",
  "Colombia": "https://flagcdn.com/w40/co.png",
  "Japan": "https://flagcdn.com/w40/jp.png",
  "Algeria": "https://flagcdn.com/w40/dz.png",
  "Iran": "https://flagcdn.com/w40/ir.png",
  "Jordan": "https://flagcdn.com/w40/jo.png",
  "Portugal": "https://flagcdn.com/w40/pt.png",
  "Scotland": "https://flagcdn.com/w40/gb-sct.png",
  "Austria": "https://flagcdn.com/w40/at.png",
  "Sweden": "https://flagcdn.com/w40/se.png",
  "USA": "https://flagcdn.com/w40/us.png",
  "United States": "https://flagcdn.com/w40/us.png",
  "Democratic Republic of the Congo": "https://flagcdn.com/w40/cd.png",
  "DR Congo": "https://flagcdn.com/w40/cd.png",
  "Iraq": "https://flagcdn.com/w40/iq.png",
  "Curaçao": "https://flagcdn.com/w40/cw.png"
};

const premierLeaguePlayers = [
  { name: "Bukayo Saka", club: "Arsenal", country: "England", note: "Big England name and one everyone will recognise." },
  { name: "Declan Rice", club: "Arsenal", country: "England", note: "England midfielder and Arsenal regular." },
  { name: "Eberechi Eze", club: "Arsenal", country: "England", note: "Creative England option." },
  { name: "Noni Madueke", club: "Arsenal", country: "England", note: "Another familiar England attacker." },
  { name: "William Saliba", club: "Arsenal", country: "France", note: "France defender and Arsenal regular." },
  { name: "Kai Havertz", club: "Arsenal", country: "Germany", note: "Germany attacker/midfielder." },
  { name: "Martin Ødegaard", club: "Arsenal", country: "Norway", note: "Norway captain and Arsenal star." },
  { name: "Viktor Gyökeres", club: "Arsenal", country: "Sweden", note: "Sweden forward." },
  { name: "Leandro Trossard", club: "Arsenal", country: "Belgium", note: "Belgium attacker." },
  { name: "Gabriel Magalhães", club: "Arsenal", country: "Brazil", note: "Brazil defender." },
  { name: "Gabriel Martinelli", club: "Arsenal", country: "Brazil", note: "Brazil winger." },
  { name: "Piero Hincapié", club: "Arsenal", country: "Ecuador", note: "Ecuador defender." },
  { name: "David Raya", club: "Arsenal", country: "Spain", note: "Spain goalkeeper." },
  { name: "Martin Zubimendi", club: "Arsenal", country: "Spain", note: "Spain midfielder." },
  { name: "Mikel Merino", club: "Arsenal", country: "Spain", note: "Spain midfielder." },

  { name: "Emiliano Martínez", club: "Aston Villa", country: "Argentina", note: "World Cup-winning Argentina goalkeeper." },
  { name: "Amadou Onana", club: "Aston Villa", country: "Belgium", note: "Belgium midfielder." },
  { name: "Youri Tielemans", club: "Aston Villa", country: "Belgium", note: "Belgium midfielder." },
  { name: "Ezri Konsa", club: "Aston Villa", country: "England", note: "England defender." },
  { name: "Morgan Rogers", club: "Aston Villa", country: "England", note: "England attacker." },
  { name: "Ollie Watkins", club: "Aston Villa", country: "England", note: "England striker." },
  { name: "John McGinn", club: "Aston Villa", country: "Scotland", note: "Scotland midfielder." },

  { name: "Edson Álvarez", club: "West Ham United", country: "Mexico", note: "West Ham familiar face for Simon’s Mexico." },
  { name: "Tomáš Souček", club: "West Ham United", country: "Czech Republic", note: "West Ham midfielder playing for Mum’s Czechia." },
  { name: "Aaron Wan-Bissaka", club: "West Ham United", country: "DR Congo", note: "West Ham link for Karl’s DR Congo." },
  { name: "El Hadji Malick Diouf", club: "West Ham United", country: "Senegal", note: "West Ham link for Dad’s Senegal." },
  { name: "Crysencio Summerville", club: "West Ham United", country: "Netherlands", note: "West Ham link for Jay’s Netherlands." },

  { name: "Erling Haaland", club: "Manchester City", country: "Norway", note: "One of the biggest names at the tournament." },
  { name: "Rodri", club: "Manchester City", country: "Spain", note: "Spain and Man City midfield star." },
  { name: "Rúben Dias", club: "Manchester City", country: "Portugal", note: "Portugal defender." },
  { name: "Bernardo Silva", club: "Manchester City", country: "Portugal", note: "Portugal creator." },
  { name: "John Stones", club: "Manchester City", country: "England", note: "England defender." },
  { name: "Joško Gvardiol", club: "Manchester City", country: "Croatia", note: "Croatia defender." },
  { name: "Omar Marmoush", club: "Manchester City", country: "Egypt", note: "Egypt forward." },
  { name: "Abdukodir Khusanov", club: "Manchester City", country: "Uzbekistan", note: "Uzbekistan player with a Premier League link." },

  { name: "Bruno Fernandes", club: "Manchester United", country: "Portugal", note: "Portugal and Man United star." },
  { name: "Diogo Dalot", club: "Manchester United", country: "Portugal", note: "Portugal full-back." },
  { name: "Casemiro", club: "Manchester United", country: "Brazil", note: "Brazil midfielder." },
  { name: "Matheus Cunha", club: "Manchester United", country: "Brazil", note: "Brazil attacker." },
  { name: "Marcus Rashford", club: "Manchester United", country: "England", note: "England forward." },
  { name: "Kobbie Mainoo", club: "Manchester United", country: "England", note: "England midfielder." },
  { name: "Noussair Mazraoui", club: "Manchester United", country: "Morocco", note: "Morocco defender." },
  { name: "Manuel Ugarte", club: "Manchester United", country: "Uruguay", note: "Uruguay midfielder." },

  { name: "Mohamed Salah", club: "Liverpool", country: "Egypt", note: "Huge familiar face for Mum’s Egypt." },
  { name: "Alisson Becker", club: "Liverpool", country: "Brazil", note: "Brazil goalkeeper." },
  { name: "Alexis Mac Allister", club: "Liverpool", country: "Argentina", note: "Argentina midfielder." },
  { name: "Virgil van Dijk", club: "Liverpool", country: "Netherlands", note: "Netherlands captain." },
  { name: "Cody Gakpo", club: "Liverpool", country: "Netherlands", note: "Netherlands forward." },
  { name: "Ryan Gravenberch", club: "Liverpool", country: "Netherlands", note: "Netherlands midfielder." },
  { name: "Andy Robertson", club: "Liverpool", country: "Scotland", note: "Scotland captain." },
  { name: "Alexander Isak", club: "Liverpool", country: "Sweden", note: "Sweden striker." },

  { name: "Chris Wood", club: "Nottingham Forest", country: "New Zealand", note: "New Zealand striker and familiar Premier League name." },
  { name: "Tyler Bindon", club: "Nottingham Forest", country: "New Zealand", note: "New Zealand defender." },

  { name: "Hwang Hee-chan", club: "Wolves", country: "South Korea", note: "Wolves forward for Andy’s South Korea." },
  { name: "Ladislav Krejčí", club: "Wolves", country: "Czech Republic", note: "Czechia defender." },
  { name: "David Møller Wolfe", club: "Wolves", country: "Norway", note: "Norway defender." },
  { name: "José Sá", club: "Wolves", country: "Portugal", note: "Portugal goalkeeper." },
  { name: "Jean-Ricner Bellegarde", club: "Wolves", country: "Haiti", note: "Haiti midfielder." }
];

function getOwner(country) {
  return teamOwners[country] || "Unassigned";
}

function getInitials(name) {
  return name
    .split(" ")
    .map(part => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getUniqueValues(key) {
  return [...new Set(premierLeaguePlayers.map(player => player[key]))].sort();
}

function renderClubBadge(club, playerName) {
  const badge = clubBadges[club];

  if (!badge) {
    return `<div class="pl-player-avatar">${getInitials(playerName)}</div>`;
  }

  return `
    <div class="pl-player-avatar has-badge">
      <img 
        class="club-badge" 
        src="${badge}" 
        alt="${club} badge"
        onerror="this.parentElement.classList.remove('has-badge'); this.parentElement.textContent='${getInitials(playerName)}';"
      />
    </div>
  `;
}

function renderCountryFlag(country) {
  const flag = countryFlags[country];

  if (!flag) {
    return "";
  }

  return `<img src="${flag}" alt="${country} flag" onerror="this.style.display='none';" />`;
}

function populateFilters() {
  const ownerFilter = document.getElementById("ownerFilter");
  const clubFilter = document.getElementById("clubFilter");

  const owners = [...new Set(Object.values(teamOwners))].sort();
  const clubs = getUniqueValues("club");

  owners.forEach(owner => {
    const option = document.createElement("option");
    option.value = owner;
    option.textContent = owner;
    ownerFilter.appendChild(option);
  });

  clubs.forEach(club => {
    const option = document.createElement("option");
    option.value = club;
    option.textContent = club;
    clubFilter.appendChild(option);
  });
}

function renderSummary(filteredPlayers) {
  document.getElementById("plPlayerCount").textContent = filteredPlayers.length;

  const clubCount = new Set(filteredPlayers.map(player => player.club)).size;
  document.getElementById("plClubCount").textContent = clubCount;

  const ownerCounts = filteredPlayers.reduce((counts, player) => {
    const owner = getOwner(player.country);
    counts[owner] = (counts[owner] || 0) + 1;
    return counts;
  }, {});

  const topOwner = Object.entries(ownerCounts).sort((a, b) => b[1] - a[1])[0];
  document.getElementById("plTopOwner").textContent = topOwner ? topOwner[0] : "-";
}

function renderPlayers() {
  const grid = document.getElementById("plPlayersGrid");
  const search = document.getElementById("playerSearch").value.toLowerCase();
  const ownerFilter = document.getElementById("ownerFilter").value;
  const clubFilter = document.getElementById("clubFilter").value;

  const filtered = premierLeaguePlayers.filter(player => {
    const owner = getOwner(player.country);

    const matchesSearch = [
      player.name,
      player.club,
      player.country,
      owner,
      player.note
    ].join(" ").toLowerCase().includes(search);

    const matchesOwner = ownerFilter === "all" || owner === ownerFilter;
    const matchesClub = clubFilter === "all" || player.club === clubFilter;

    return matchesSearch && matchesOwner && matchesClub;
  });

  renderSummary(filtered);

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state">No Premier League players match that filter.</div>';
    return;
  }

  grid.innerHTML = filtered.map(player => {
    const owner = getOwner(player.country);

    return `
      <article class="pl-player-card">
        <div class="pl-player-top">
          ${renderClubBadge(player.club, player.name)}
          <div>
            <div class="pl-player-name">${player.name}</div>
            <div class="pl-player-meta">${player.club} → ${player.country}</div>
          </div>
        </div>

        <div class="pl-badges">
          <span class="pl-badge pl-owner">Owned by ${owner}</span>
          <span class="pl-badge">🏟️ ${player.club}</span>
          <span class="pl-badge">${renderCountryFlag(player.country)} ${player.country}</span>
        </div>

        <p class="pl-note">${player.note}</p>
      </article>
    `;
  }).join("");
}

function initPremierLeagueWatch() {
  populateFilters();

  document.getElementById("playerSearch").addEventListener("input", renderPlayers);
  document.getElementById("ownerFilter").addEventListener("change", renderPlayers);
  document.getElementById("clubFilter").addEventListener("change", renderPlayers);

  renderPlayers();
}

initPremierLeagueWatch();