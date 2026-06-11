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
  "Sunderland": "https://resources.premierleague.com/premierleague/badges/t56.png",
  "Hull City": "https://resources.premierleague.com/premierleague/badges/t88.png",
"Ipswich Town": "https://resources.premierleague.com/premierleague/badges/t40.png",
"Leicester City": "https://resources.premierleague.com/premierleague/badges/t13.png"
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
  // Mexico — Simon
  { name: "Edson Alvarez", club: "West Ham United", country: "Mexico", note: "West Ham player representing Mexico." },
  { name: "Raul Jimenez", club: "Fulham", country: "Mexico", note: "Fulham player representing Mexico." },

  // South Africa — Mum
  { name: "Lyle Foster", club: "Burnley", country: "South Africa", note: "Burnley player representing South Africa." },

  // South Korea — Andy
  { name: "Hwang Hee-chan", club: "Wolves", country: "South Korea", note: "Wolves player representing South Korea." },

  // Czechia — Mum
  { name: "Ladislav Krejci", club: "Wolves", country: "Czech Republic", note: "Wolves player representing Czechia." },
  { name: "Tomas Soucek", club: "West Ham United", country: "Czech Republic", note: "West Ham player representing Czechia." },

  // Canada — Dad
  { name: "Owen Goodman", club: "Crystal Palace", country: "Canada", note: "Crystal Palace player representing Canada." },
  { name: "Luc de Fougerolles", club: "Fulham", country: "Canada", note: "Fulham player representing Canada." },
  { name: "Liam Millar", club: "Hull City", country: "Canada", note: "Hull City player representing Canada." },

  // Switzerland — Dad
  { name: "Granit Xhaka", club: "Sunderland", country: "Switzerland", note: "Sunderland player representing Switzerland." },
  { name: "Zeki Amdouni", club: "Burnley", country: "Switzerland", note: "Burnley player representing Switzerland." },
  { name: "Dan Ndoye", club: "Nottingham Forest", country: "Switzerland", note: "Nottingham Forest player representing Switzerland." },
  { name: "Noah Okafor", club: "Leeds United", country: "Switzerland", note: "Leeds player representing Switzerland." },

  // Brazil — Jay
  { name: "Alisson Becker", club: "Liverpool", country: "Brazil", note: "Liverpool player representing Brazil." },
  { name: "Gabriel Magalhaes", club: "Arsenal", country: "Brazil", note: "Arsenal player representing Brazil." },
  { name: "Bruno Guimaraes", club: "Newcastle United", country: "Brazil", note: "Newcastle player representing Brazil." },
  { name: "Casemiro", club: "Manchester United", country: "Brazil", note: "Manchester United player representing Brazil." },
  { name: "Gabriel Martinelli", club: "Arsenal", country: "Brazil", note: "Arsenal player representing Brazil." },
  { name: "Igor Thiago", club: "Brentford", country: "Brazil", note: "Brentford player representing Brazil." },
  { name: "Matheus Cunha", club: "Manchester United", country: "Brazil", note: "Manchester United player representing Brazil." },
  { name: "Rayan", club: "Bournemouth", country: "Brazil", note: "Bournemouth player representing Brazil." },

  // Morocco — Andy
  { name: "Noussair Mazraoui", club: "Manchester United", country: "Morocco", note: "Manchester United player representing Morocco." },
  { name: "Chadi Riad", club: "Crystal Palace", country: "Morocco", note: "Crystal Palace player representing Morocco." },
  { name: "Issa Diop", club: "Fulham", country: "Morocco", note: "Fulham player representing Morocco." },
  { name: "Chemsdine Talbi", club: "Sunderland", country: "Morocco", note: "Sunderland player representing Morocco." },

  // Haiti — Simon
  { name: "Jean-Ricner Bellegarde", club: "Wolves", country: "Haiti", note: "Wolves player representing Haiti." },
  { name: "Wilson Isidor", club: "Sunderland", country: "Haiti", note: "Sunderland player representing Haiti." },

  // Scotland — Karl
  { name: "Angus Gunn", club: "Nottingham Forest", country: "Scotland", note: "Nottingham Forest player representing Scotland." },
  { name: "Aaron Hickey", club: "Brentford", country: "Scotland", note: "Brentford player representing Scotland." },
  { name: "Nathan Patterson", club: "Everton", country: "Scotland", note: "Everton player representing Scotland." },
  { name: "Andy Robertson", club: "Liverpool", country: "Scotland", note: "Liverpool player representing Scotland." },
  { name: "Ryan Christie", club: "Bournemouth", country: "Scotland", note: "Bournemouth player representing Scotland." },
  { name: "Ben Gannon-Doak", club: "Bournemouth", country: "Scotland", note: "Bournemouth player representing Scotland." },
  { name: "Tyler Fletcher", club: "Manchester United", country: "Scotland", note: "Manchester United player representing Scotland." },
  { name: "John McGinn", club: "Aston Villa", country: "Scotland", note: "Aston Villa player representing Scotland." },
  { name: "George Hirst", club: "Ipswich Town", country: "Scotland", note: "Ipswich player representing Scotland." },

  // United States — Karl
  { name: "Chris Richards", club: "Crystal Palace", country: "United States", note: "Crystal Palace player representing USA." },
  { name: "Antonee Robinson", club: "Fulham", country: "United States", note: "Fulham player representing USA." },
  { name: "Tyler Adams", club: "Bournemouth", country: "United States", note: "Bournemouth player representing USA." },
  { name: "Brenden Aaronson", club: "Leeds United", country: "United States", note: "Leeds player representing USA." },

  // Paraguay — Mum
  { name: "Omar Alderete", club: "Sunderland", country: "Paraguay", note: "Sunderland player representing Paraguay." },
  { name: "Diego Gomez", club: "Brighton", country: "Paraguay", note: "Brighton player representing Paraguay." },

  // Turkey — Simon
  { name: "Altay Bayindir", club: "Manchester United", country: "Turkey", note: "Manchester United player representing Turkey." },
  { name: "Ferdi Kadioglu", club: "Brighton", country: "Turkey", note: "Brighton player representing Turkey." },

  // Germany — Dad
  { name: "Malick Thiaw", club: "Newcastle United", country: "Germany", note: "Newcastle player representing Germany." },
  { name: "Pascal Gross", club: "Brighton", country: "Germany", note: "Brighton player representing Germany." },
  { name: "Florian Wirtz", club: "Liverpool", country: "Germany", note: "Liverpool player representing Germany." },
  { name: "Kai Havertz", club: "Arsenal", country: "Germany", note: "Arsenal player representing Germany." },
  { name: "Nick Woltemade", club: "Newcastle United", country: "Germany", note: "Newcastle player representing Germany." },

  // Ivory Coast — Andy
  { name: "Ibrahim Sangare", club: "Nottingham Forest", country: "Ivory Coast", note: "Nottingham Forest player representing Ivory Coast." },
  { name: "Simon Adingra", club: "Sunderland", country: "Ivory Coast", note: "Sunderland player representing Ivory Coast." },
  { name: "Amad", club: "Manchester United", country: "Ivory Coast", note: "Manchester United player representing Ivory Coast." },
  { name: "Evann Guessand", club: "Aston Villa", country: "Ivory Coast", note: "Aston Villa player representing Ivory Coast." },

  // Ecuador — Simon
  { name: "Piero Hincapie", club: "Arsenal", country: "Ecuador", note: "Arsenal player representing Ecuador." },
  { name: "Moises Caicedo", club: "Chelsea", country: "Ecuador", note: "Chelsea player representing Ecuador." },
  { name: "Kendry Paez", club: "Chelsea", country: "Ecuador", note: "Chelsea player representing Ecuador." },
  { name: "Nilson Angulo", club: "Sunderland", country: "Ecuador", note: "Sunderland player representing Ecuador." },

  // Netherlands — Jay
  { name: "Robin Roefs", club: "Sunderland", country: "Netherlands", note: "Sunderland player representing Netherlands." },
  { name: "Bart Verbruggen", club: "Brighton", country: "Netherlands", note: "Brighton player representing Netherlands." },
  { name: "Nathan Ake", club: "Manchester City", country: "Netherlands", note: "Manchester City player representing Netherlands." },
  { name: "Virgil van Dijk", club: "Liverpool", country: "Netherlands", note: "Liverpool player representing Netherlands." },
  { name: "Jorrel Hato", club: "Chelsea", country: "Netherlands", note: "Chelsea player representing Netherlands." },
  { name: "Jan Paul van Hecke", club: "Brighton", country: "Netherlands", note: "Brighton player representing Netherlands." },
  { name: "Micky van de Ven", club: "Tottenham Hotspur", country: "Netherlands", note: "Spurs player representing Netherlands." },
  { name: "Lutsharel Geertruida", club: "Sunderland", country: "Netherlands", note: "Sunderland player representing Netherlands." },
  { name: "Ryan Gravenberch", club: "Liverpool", country: "Netherlands", note: "Liverpool player representing Netherlands." },
  { name: "Tijjani Reijnders", club: "Manchester City", country: "Netherlands", note: "Manchester City player representing Netherlands." },
  { name: "Mats Wieffer", club: "Brighton", country: "Netherlands", note: "Brighton player representing Netherlands." },
  { name: "Brian Brobbey", club: "Sunderland", country: "Netherlands", note: "Sunderland player representing Netherlands." },
  { name: "Cody Gakpo", club: "Liverpool", country: "Netherlands", note: "Liverpool player representing Netherlands." },
  { name: "Justin Kluivert", club: "Bournemouth", country: "Netherlands", note: "Bournemouth player representing Netherlands." },
  { name: "Crysencio Summerville", club: "West Ham United", country: "Netherlands", note: "West Ham player representing Netherlands." },

  // Japan — Jay
  { name: "Wataru Endo", club: "Liverpool", country: "Japan", note: "Liverpool player representing Japan." },
  { name: "Daichi Kamada", club: "Crystal Palace", country: "Japan", note: "Crystal Palace player representing Japan." },
  { name: "Ao Tanaka", club: "Leeds United", country: "Japan", note: "Leeds player representing Japan." },

  // Sweden — Karl
  { name: "Hjalmar Ekdal", club: "Burnley", country: "Sweden", note: "Burnley player representing Sweden." },
  { name: "Gabriel Gudmundsson", club: "Leeds United", country: "Sweden", note: "Leeds player representing Sweden." },
  { name: "Victor Lindelof", club: "Aston Villa", country: "Sweden", note: "Aston Villa player representing Sweden." },
  { name: "Yasin Ayari", club: "Brighton", country: "Sweden", note: "Brighton player representing Sweden." },
  { name: "Lucas Bergvall", club: "Tottenham Hotspur", country: "Sweden", note: "Spurs player representing Sweden." },
  { name: "Anthony Elanga", club: "Newcastle United", country: "Sweden", note: "Newcastle player representing Sweden." },
  { name: "Viktor Gyokeres", club: "Arsenal", country: "Sweden", note: "Arsenal player representing Sweden." },
  { name: "Alexander Isak", club: "Liverpool", country: "Sweden", note: "Liverpool player representing Sweden." },

  // Tunisia — Simon
  { name: "Hannibal Mejbri", club: "Burnley", country: "Tunisia", note: "Burnley player representing Tunisia." },

  // Belgium — Simon
  { name: "Senne Lammens", club: "Manchester United", country: "Belgium", note: "Manchester United player representing Belgium." },
  { name: "Mike Penders", club: "Chelsea", country: "Belgium", note: "Chelsea player representing Belgium." },
  { name: "Timothy Castagne", club: "Fulham", country: "Belgium", note: "Fulham player representing Belgium." },
  { name: "Maxim De Cuyper", club: "Brighton", country: "Belgium", note: "Brighton player representing Belgium." },
  { name: "Amadou Onana", club: "Aston Villa", country: "Belgium", note: "Aston Villa player representing Belgium." },
  { name: "Youri Tielemans", club: "Aston Villa", country: "Belgium", note: "Aston Villa player representing Belgium." },
  { name: "Jeremy Doku", club: "Manchester City", country: "Belgium", note: "Manchester City player representing Belgium." },
  { name: "Leandro Trossard", club: "Arsenal", country: "Belgium", note: "Arsenal player representing Belgium." },

  // Egypt — Mum
  { name: "Omar Marmoush", club: "Manchester City", country: "Egypt", note: "Manchester City player representing Egypt." },
  { name: "Mohamed Salah", club: "Liverpool", country: "Egypt", note: "Liverpool player representing Egypt." },

  // New Zealand — Andy
  { name: "Alex Paulsen", club: "Bournemouth", country: "New Zealand", note: "Bournemouth player representing New Zealand." },
  { name: "Tyler Bindon", club: "Nottingham Forest", country: "New Zealand", note: "Nottingham Forest player representing New Zealand." },
  { name: "Chris Wood", club: "Nottingham Forest", country: "New Zealand", note: "Nottingham Forest player representing New Zealand." },

  // Spain — Mum
  { name: "David Raya", club: "Arsenal", country: "Spain", note: "Arsenal player representing Spain." },
  { name: "Pedro Porro", club: "Tottenham Hotspur", country: "Spain", note: "Spurs player representing Spain." },
  { name: "Marc Cucurella", club: "Chelsea", country: "Spain", note: "Chelsea player representing Spain." },
  { name: "Rodri", club: "Manchester City", country: "Spain", note: "Manchester City player representing Spain." },
  { name: "Martin Zubimendi", club: "Arsenal", country: "Spain", note: "Arsenal player representing Spain." },
  { name: "Mikel Merino", club: "Arsenal", country: "Spain", note: "Arsenal player representing Spain." },
  { name: "Yeremy Pino", club: "Crystal Palace", country: "Spain", note: "Crystal Palace player representing Spain." },

  // Uruguay — Simon
  { name: "Santiago Bueno", club: "Wolves", country: "Uruguay", note: "Wolves player representing Uruguay." },
  { name: "Manuel Ugarte", club: "Manchester United", country: "Uruguay", note: "Manchester United player representing Uruguay." },
  { name: "Rodrigo Bentancur", club: "Tottenham Hotspur", country: "Uruguay", note: "Spurs player representing Uruguay." },

  // France — Dad
  { name: "Lucas Digne", club: "Aston Villa", country: "France", note: "Aston Villa player representing France." },
  { name: "Malo Gusto", club: "Chelsea", country: "France", note: "Chelsea player representing France." },
  { name: "Ibrahima Konate", club: "Liverpool", country: "France", note: "Liverpool player representing France." },
  { name: "Maxence Lacroix", club: "Crystal Palace", country: "France", note: "Crystal Palace player representing France." },
  { name: "William Saliba", club: "Arsenal", country: "France", note: "Arsenal player representing France." },
  { name: "Rayan Cherki", club: "Manchester City", country: "France", note: "Manchester City player representing France." },
  { name: "Jean-Philippe Mateta", club: "Crystal Palace", country: "France", note: "Crystal Palace player representing France." },

  // Senegal — Dad
  { name: "Mamadou Sarr", club: "Chelsea", country: "Senegal", note: "Chelsea player representing Senegal." },
  { name: "El-Hadji Malick Diouf", club: "West Ham United", country: "Senegal", note: "West Ham player representing Senegal." },
  { name: "Idrissa Gueye", club: "Everton", country: "Senegal", note: "Everton player representing Senegal." },
  { name: "Habib Diarra", club: "Sunderland", country: "Senegal", note: "Sunderland player representing Senegal." },
  { name: "Pape Matar Sarr", club: "Tottenham Hotspur", country: "Senegal", note: "Spurs player representing Senegal." },
  { name: "Iliman Ndiaye", club: "Everton", country: "Senegal", note: "Everton player representing Senegal." },
  { name: "Nicolas Jackson", club: "Chelsea", country: "Senegal", note: "Chelsea player representing Senegal." },
  { name: "Ismaila Sarr", club: "Crystal Palace", country: "Senegal", note: "Crystal Palace player representing Senegal." },

  // Iraq — Karl
  { name: "Ali Al-Hamadi", club: "Ipswich Town", country: "Iraq", note: "Ipswich player representing Iraq." },

  // Norway — Jay
  { name: "David Moller Wolfe", club: "Wolves", country: "Norway", note: "Wolves player representing Norway." },
  { name: "Kristoffer Ajer", club: "Brentford", country: "Norway", note: "Brentford player representing Norway." },
  { name: "Martin Odegaard", club: "Arsenal", country: "Norway", note: "Arsenal player representing Norway." },
  { name: "Sander Berge", club: "Fulham", country: "Norway", note: "Fulham player representing Norway." },
  { name: "Erling Haaland", club: "Manchester City", country: "Norway", note: "Manchester City player representing Norway." },
  { name: "Jorgen Strand Larsen", club: "Crystal Palace", country: "Norway", note: "Crystal Palace player representing Norway." },
  { name: "Oscar Bobb", club: "Fulham", country: "Norway", note: "Fulham player representing Norway." },

  // Argentina — Simon
  { name: "Emiliano Martinez", club: "Aston Villa", country: "Argentina", note: "Aston Villa player representing Argentina." },
  { name: "Lisandro Martinez", club: "Manchester United", country: "Argentina", note: "Manchester United player representing Argentina." },
  { name: "Cristian Romero", club: "Tottenham Hotspur", country: "Argentina", note: "Spurs player representing Argentina." },
  { name: "Enzo Fernandez", club: "Chelsea", country: "Argentina", note: "Chelsea player representing Argentina." },
  { name: "Alexis Mac Allister", club: "Liverpool", country: "Argentina", note: "Liverpool player representing Argentina." },

  // Algeria — Jay
  { name: "Rayan Ait-Nouri", club: "Manchester City", country: "Algeria", note: "Manchester City player representing Algeria." },

  // Austria — Karl
  { name: "Kevin Danso", club: "Tottenham Hotspur", country: "Austria", note: "Spurs player representing Austria." },
  { name: "Sasa Kalajdzic", club: "Wolves", country: "Austria", note: "Wolves player representing Austria." },

  // Portugal — Karl
  { name: "Jose Sa", club: "Wolves", country: "Portugal", note: "Wolves player representing Portugal." },
  { name: "Diogo Dalot", club: "Manchester United", country: "Portugal", note: "Manchester United player representing Portugal." },
  { name: "Matheus Nunes", club: "Manchester City", country: "Portugal", note: "Manchester City player representing Portugal." },
  { name: "Ruben Dias", club: "Manchester City", country: "Portugal", note: "Manchester City player representing Portugal." },
  { name: "Bruno Fernandes", club: "Manchester United", country: "Portugal", note: "Manchester United player representing Portugal." },
  { name: "Bernardo Silva", club: "Manchester City", country: "Portugal", note: "Manchester City player representing Portugal." },
  { name: "Pedro Neto", club: "Chelsea", country: "Portugal", note: "Chelsea player representing Portugal." },

  // DR Congo — Karl
  { name: "Arthur Masuaku", club: "Sunderland", country: "DR Congo", note: "Sunderland player representing DR Congo." },
  { name: "Axel Tuanzebe", club: "Burnley", country: "DR Congo", note: "Burnley player representing DR Congo." },
  { name: "Aaron Wan-Bissaka", club: "West Ham United", country: "DR Congo", note: "West Ham player representing DR Congo." },
  { name: "Noah Sadiki", club: "Sunderland", country: "DR Congo", note: "Sunderland player representing DR Congo." },
  { name: "Yoane Wissa", club: "Newcastle United", country: "DR Congo", note: "Newcastle player representing DR Congo." },

  // Uzbekistan — Mum
  { name: "Abdukodir Khusanov", club: "Manchester City", country: "Uzbekistan", note: "Manchester City player representing Uzbekistan." },

  // Colombia — Jay
  { name: "Daniel Munoz", club: "Crystal Palace", country: "Colombia", note: "Crystal Palace player representing Colombia." },
  { name: "Jefferson Lerma", club: "Crystal Palace", country: "Colombia", note: "Crystal Palace player representing Colombia." },

  // England — Andy
  { name: "Dean Henderson", club: "Crystal Palace", country: "England", note: "Crystal Palace player representing England." },
  { name: "Jordan Pickford", club: "Everton", country: "England", note: "Everton player representing England." },
  { name: "James Trafford", club: "Manchester City", country: "England", note: "Manchester City player representing England." },
  { name: "Dan Burn", club: "Newcastle United", country: "England", note: "Newcastle player representing England." },
  { name: "Marc Guehi", club: "Manchester City", country: "England", note: "Manchester City player representing England." },
  { name: "Reece James", club: "Chelsea", country: "England", note: "Chelsea player representing England." },
  { name: "Ezri Konsa", club: "Aston Villa", country: "England", note: "Aston Villa player representing England." },
  { name: "Tino Livramento", club: "Newcastle United", country: "England", note: "Newcastle player representing England." },
  { name: "Nico O'Reilly", club: "Manchester City", country: "England", note: "Manchester City player representing England." },
  { name: "Djed Spence", club: "Tottenham Hotspur", country: "England", note: "Spurs player representing England." },
  { name: "John Stones", club: "Manchester City", country: "England", note: "Manchester City player representing England." },
  { name: "Elliot Anderson", club: "Nottingham Forest", country: "England", note: "Nottingham Forest player representing England." },
  { name: "Eberechi Eze", club: "Arsenal", country: "England", note: "Arsenal player representing England." },
  { name: "Jordan Henderson", club: "Brentford", country: "England", note: "Brentford player representing England." },
  { name: "Kobbie Mainoo", club: "Manchester United", country: "England", note: "Manchester United player representing England." },
  { name: "Declan Rice", club: "Arsenal", country: "England", note: "Arsenal player representing England." },
  { name: "Morgan Rogers", club: "Aston Villa", country: "England", note: "Aston Villa player representing England." },
  { name: "Anthony Gordon", club: "Newcastle United", country: "England", note: "Newcastle/Barcelona player representing England." },
  { name: "Noni Madueke", club: "Arsenal", country: "England", note: "Arsenal player representing England." },
  { name: "Marcus Rashford", club: "Manchester United", country: "England", note: "Manchester United player representing England." },
  { name: "Bukayo Saka", club: "Arsenal", country: "England", note: "Arsenal player representing England." },
  { name: "Ollie Watkins", club: "Aston Villa", country: "England", note: "Aston Villa player representing England." },

  // Croatia — Mum
  { name: "Ivor Pandur", club: "Hull City", country: "Croatia", note: "Hull City player representing Croatia." },
  { name: "Josko Gvardiol", club: "Manchester City", country: "Croatia", note: "Manchester City player representing Croatia." },
  { name: "Luka Vuskovic", club: "Tottenham Hotspur", country: "Croatia", note: "Spurs player representing Croatia." },
  { name: "Mateo Kovacic", club: "Manchester City", country: "Croatia", note: "Manchester City player representing Croatia." },

  // Ghana — Andy
  { name: "Abdul Fatawu Issahaku", club: "Leicester City", country: "Ghana", note: "Leicester player representing Ghana." },
  { name: "Antoine Semenyo", club: "Manchester City", country: "Ghana", note: "Manchester City player representing Ghana." }
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