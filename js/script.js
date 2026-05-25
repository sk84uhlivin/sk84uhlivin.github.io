window.onload = function() {
	document.getElementById('options').style.display = "block";
	document.getElementById('report').style.display = "none";
};

const actualPokemon = 0;
const preEvolution = 1;
const itemForGoal = 2;

var routes = {
	'SPROUT TOWER 1F': 1,
	'SPROUT TOWER 2F': 2,
	'TIN TOWER 2F': 3,
	'TIN TOWER 3F': 4,
	'TIN TOWER 4F': 5,
	'TIN TOWER 5F': 6,
	'TIN TOWER 6F': 7,
	'TIN TOWER 7F': 8,
	'TIN TOWER 8F': 9,
	'TIN TOWER 9F': 10,
	'BURNED TOWER ENTRANCE': 11,
	'BURNED TOWER B1F': 12,
	'NATIONAL PARK': 13,
	'RUINS OF ALPH GRASS': 14,
	'RUINS OF ALPH ROOM': 15,
	'UNION CAVE ENTRANCE': 16,
	'UNION CAVE B1F': 17,
	'UNION CAVE B2F': 18,
	'SLOWPOKE WELL ENTRANCE': 19,
	'SLOWPOKE WELL B2F': 20,
	'ILEX FOREST': 21,
	'MT.MORTAR ENTRANCE': 22,
	'MT.MORTAR 1F': 23,
	'MT.MORTAR 2F': 24,
	'MT.MORTAR B1F': 25,
	'ICE PATH ENTRANCE/EXIT': 26,
	'ICE PATH B1F': 27,
	'ICE PATH B2F': 28,
	'ICE PATH TM ROOM': 29,
	'ICE PATH ROCK SMASH ROOM': 30,
	'WHIRL ISLANDS 1': 31,
	'WHIRL ISLANDS 2': 32,
	'WHIRL ISLANDS 3': 33,
	'WHIRL ISLANDS 4': 34,
	'WHIRL ISLANDS 5': 35,
	'WHIRL ISLANDS 6': 36,
	'WHIRL ISLANDS 7': 37,
	'WHIRL ISLANDS 8': 38,
	'SILVER CAVE 1': 39,
	'SILVER CAVE 2': 40,
	'SILVER CAVE 3': 41,
	'SILVER CAVE 4': 42,
	'DARK CAVE VIOLET SIDE': 43,
	'DARK CAVE BLACKTHORN SIDE': 44,
	'ROUTE 29': 45,
	'ROUTE 30': 46,
	'ROUTE 31': 47,
	'ROUTE 32': 48,
	'ROUTE 33': 49,
	'ROUTE 34': 50,
	'ROUTE 35': 51,
	'ROUTE 36': 52,
	'ROUTE 37': 53,
	'ROUTE 38': 54,
	'ROUTE 39': 55,
	'ROUTE 42': 56,
	'ROUTE 43': 57,
	'ROUTE 44': 58,
	'ROUTE 45': 59,
	'ROUTE 46': 60,
	'SILVER CAVE GRASS': 61,
	'RUINS OF ALPH SURFING': 62,
	'UNION CAVE ENTRANCE SURFING': 63,
	'UNION CAVE B1F SURFING': 64,
	'UNION CAVE B2F SURFING': 65,
	'SLOWPOKE WELL ENTRANCE SURFING': 66,
	'SLOWPOKE WELL B2F SURFING': 67,
	'ILEX FOREST SURFING': 68,
	'MT.MORTAR ENTRANCE SURFING': 69,
	'MT.MORTAR 2F SURFING': 70,
	'MT.MORTAR B1F SURFING': 71,
	'WHIRL ISLANDS 1 SURFING': 72,
	'WHIRL ISLANDS 2 SURFING': 73,
	'WHIRL ISLANDS 3 SURFING': 74,
	'SILVER CAVE SURFING': 75,
	'DARK CAVE VIOLET SIDE SURFING': 76,
	'DARK CAVE BLACKTHORN SIDE SURFING': 77,
	'DRAGON\'S DEN': 78,
	'OLIVINE CITY PORT': 79,
	'ROUTE 30 SURFING': 80,
	'ROUTE 31 SURFING': 81,
	'ROUTE 32 SURFING': 82,
	'ROUTE 34 SURFING': 83,
	'ROUTE 35 SURFING': 84,
	'ROUTE 40 SURFING': 85,
	'ROUTE 41 SURFING': 86,
	'ROUTE 42 SURFING': 87,
	'ROUTE 43 SURFING': 88,
	'ROUTE 44 SURFING': 89,
	'ROUTE 45 SURFING': 90,
	'NEW BARK TOWN': 91,
	'CHERRYGROVE CITY': 92,
	'VIOLET CITY': 93,
	'CIANWOOD CITY': 94,
	'OLIVINE CITY': 95,
	'ECRUTEAK CITY': 96,
	'LAKE OF RAGE': 97,
	'BLACKTHORN CITY': 98,
	'SILVER CAVE': 99,
	'DIGLETT\'S CAVE': 100,
	'MT.MOON': 101,
	'ROCK TUNNEL 1': 102,
	'ROCK TUNNEL 2': 103,
	'VICTORY ROAD': 104,
	'TOHJO FALLS': 105,
	'ROUTE 1': 106,
	'ROUTE 2': 107,
	'ROUTE 3': 108,
	'ROUTE 4': 109,
	'ROUTE 5': 110,
	'ROUTE 6': 111,
	'ROUTE 7': 112,
	'ROUTE 8': 113,
	'ROUTE 9': 114,
	'ROUTE 10': 115,
	'ROUTE 11': 116,
	'ROUTE 13': 117,
	'ROUTE 14': 118,
	'ROUTE 15': 119,
	'ROUTE 16': 120,
	'ROUTE 17': 121,
	'ROUTE 18': 122,
	'ROUTE 21': 123,
	'ROUTE 22': 124,
	'ROUTE 24': 125,
	'ROUTE 25': 126,
	'ROUTE 26': 127,
	'ROUTE 27': 128,
	'ROUTE 28': 129,
	'TOHJO FALLS SURFING': 130,
	'VERMILION CITY PORT': 131,
	'ROUTE 4 SURFING': 132,
	'ROUTE 6 SURFING': 133,
	'ROUTE 9 SURFING': 134,
	'ROUTE 10 SURFING': 135,
	'ROUTE 12 SURFING': 136,
	'ROUTE 13 SURFING': 137,
	'ROUTE 19 SURFING': 138,
	'ROUTE 20 SURFING': 139,
	'ROUTE 21 SURFING': 140,
	'ROUTE 22 SURFING': 141,
	'ROUTE 24 SURFING': 142,
	'ROUTE 25 SURFING': 143,
	'ROUTE 26 SURFING': 144,
	'ROUTE 27 SURFING': 145,
	'ROUTE 28 SURFING': 146,
	'PALLET TOWN': 147,
	'VIRIDIAN CITY': 148,
	'CERULEAN CITY': 149,
	'VERMILION CITY': 150,
	'CELADON CITY': 151,
	'FUCHSIA CITY': 152,
	'CINNABAR ISLAND': 153,
	'DARK CAVE SWARM': 154,
	'ROUTE 35 SWARM': 155,
	'Fishing 1': 156,
	'Fishing 2': 157,
	'Fishing 3': 158,
	'Fishing 4': 159,
	'Fishing 5': 160,
	'Fishing 6': 161,
	'Fishing 7': 162,
	'Fishing 8': 163,
	'Fishing 9': 164,
	'Fishing 10': 165,
	'Fishing 11': 166,
	'Fishing 12': 167,
	'Headbutt Trees 1': 168,
	'Headbutt Trees 2': 169,
	'Headbutt Trees 3': 170,
	'Headbutt Trees 4': 171,
	'Headbutt Trees 5': 172,
	'Headbutt Trees 6': 173,
	'Headbutt Trees 7': 174,
	'Headbutt Trees 8': 175,
	'Headbutt Trees 9': 176,
	'Headbutt Trees 10': 177,
	'Headbutt Trees 11': 178,
	'Headbutt Trees 12': 179,
	'Headbutt Trees 13': 180,
	'Bug Catching': 181
};

var trades = {
	'ABRA': 1,
	'BELLSPROUT': 2,
	'KRABBY': 3,
	'DRAGONAIR': 4,
	'HAUNTER': 5,
	'CHANSEY': 6,
	'DUGTRIO': 7
};

var statics = {
	'LAPRAS': 1,
	'ELECTRODE': 2,
	'ELECTRODE(2)': 3,
	'ELECTRODE(3)': 4,
	'LUGIA': 5,
	'GYARADOS': 6,
	'SUDOWOODO': 7,
	'SNORLAX': 8,
	'HO-OH': 9,
	'SUICUNE': 10,
	'VOLTORB': 11,
	'GEODUDE': 12,
	'KOFFING': 13,
	'SHUCKLE': 14,
	'TYROGUE': 15,
	'TOGEPI': 16,
	'SPEAROW': 17,
	'EEVEE': 18,
	'DRATINI': 19,
	'RAIKOU': 20,
	'ENTEI': 21,
	'ABRA': 22,
	'CUBONE': 23,
	'WOBBUFFET': 24,
	'PIKACHU': 25,
	'PORYGON': 26,
	'LARVITAR': 27,
	'PICHU': 28,
	'PICHU(2)': 29,
	'CLEFFA': 30,
	'CLEFFA(2)': 31,
	'IGGLYBUFF': 32,
	'IGGLYBUFF(2)': 33,
	'SMOOCHUM': 34,
	'SMOOCHUM(2)': 35,
	'MAGBY': 36,
	'MAGBY(2)': 37,
	'ELEKID': 38,
	'ELEKID(2)': 39,
	'TYROGUE(2)': 40,
	'TYROGUE(3)': 41
};

// Bidimensional array
// first array has the Pokemon applicable for the goal if applicable
// second array has the preevos, if applicable
// third array has the items usable for the goal if applicable

var pokeGoals = {
	"Trade a Pokémon": [["ABRA", "BELLSPROUT", "KRABBY", "DRAGONAIR"]],
	"Obtain a Baby Pokémon": [["PICHU", "CLEFFA", "IGGLYBUFF", "TOGEPI", "TYROGUE", "SMOOCHUM", "ELEKID", "MAGBY"]],
	"2 Different Eeveelutions": [["JOLTEON", "FLAREON", "VAPOREON", "ESPEON", "UMBREON"], ["EEVEE"]],
	"3 Different Genderless Pokémon": [["MAGNEMITE", "MAGNETON", "VOLTORB", "ELECTRODE", "STARYU", "STARMIE", "PORYGON", "PORYGON2",
		"DITTO", "ARTICUNO", "ZAPDOS", "MOLTRES", "MEWTWO", "MEW", "UNOWN", "RAIKOU", "ENTEI", "SUICUNE", "LUGIA", "HO-OH", "CELEBI"], ["STARYU"]],
	"A Dark-Type Pokémon": [["HOUNDOOM", "HOUNDOUR", "SNEASEL", "MURKROW", "TYRANITAR"]],
	"A Dragon-Type Pokémon": [["DRATINI", "DRAGONAIR", "DRAGONITE", "KINGDRA"]],
	"A Ghost-Type Pokémon": [["GASTLY", "HAUNTER", "GENGAR", "MISDREAVUS"]],
	"A Steel-Type Pokémon": [["MAGNEMITE", "MAGNETON", "SKARMORY", "SCIZOR", "STEELIX", "FORRETRESS"]],
	"A Pokémon with a Paradox Variant": [["DONPHAN", "DELIBIRD", "TYRANITAR", "MAGNETON", "JIGGLYPUFF", "MISDREAVUS", "SUICUNE", "RAIKOU", "ENTEI"]],
	"A Pokémon with a Paldea Variant": [["TAUROS", "WOOPER", "QUAGSIRE", "TENTACOOL", "TENTACRUEL", "DIGLETT", "DUGTRIO"]],
	"A Pokémon with a Hisui Variant": [["GROWLITHE", "VOLTORB", "ELECTRODE", "QWILFISH", "ARCANINE", "SNEASEL", "TYPHLOSION"]],
	"2 Pokémon with a Galar Variant": [["MEOWTH", "PERSIAN", "PONYTA", "RAPIDASH", "SLOWPOKE", "SLOWBRO", "SLOWKING", "FARFETCH'D", "WEEZING", "MR.MIME", "CORSOLA", "ARTICUNO", "ZAPDOS", "MOLTRES"]],
	"3 Pokémon with a Alolan Variant": [["RATTATA", "RATICATE", "RAICHU", "SANDSHREW", "SANDSLASH", "VULPIX", "NINETALES", "DIGLETT", "DUGTRIO", "MEOWTH", "PERSIAN", "GEODUDE", "GRAVELER", "GOLEM", "GRIMER", "MUK", "EXEGGUTOR", "MAROWAK"], ["PIKACHU", "EXEGGCUTE"]],
	"Obtain a Legendary Bird": [["ARTICUNO", "ZAPDOS", "MOLTRES", "HO-OH", "LUGIA"]],
	"Aerodactyl, Kabuto, or Omanyte": [["AERODACTYL", "KABUTO", "OMANYTE"]],
	"Aipom, Heracross, or Pinsir": [["AIPOM", "HERACROSS", "PINSIR"]],
	"Arbok or Xatu": [["ARBOK", "XATU"], ["EKANS", "NATU"]],
	"Arcanine or Ninetales": [["ARCANINE", "NINETALES"], ["GROWLITHE", "VULPIX"]],
	"Ariados or Ledian": [["ARIADOS", "LEDIAN"], ["SPINARAK", "LEDYBA"]],
	"Articuno, Zapdos, or Moltres" : [["ARTICUNO", "ZAPDOS", "MOLTRES"]],
	"Azumarill or Quagsire": [["AZUMARILL", "QUAGSIRE"], ["MARILL", "WOOPER"]],
	"Bayleef, Quilava, or Croconaw": [["BAYLEEF", "QUILAVA", "CROCONAW"], ["CHIKORITA", "CYNDAQUIL", "TOTODILE"]],
	"Beedrill or Butterfree": [["BEEDRILL", "BUTTERFREE"], ["WEEDLE", "KAKUNA", "CATERPIE", "METAPOD"]],
	"Berry Juice or Elixer": [["SHUCKLE", "MAGIKARP"], [], ["BERRY JUICE", "ELIXER"]],
	"Blissey, Onix, or Scyther": [["BLISSEY", "ONIX", "SCYTHER"]],
	"Celebi, Mew, or Mewtwo": [["CELEBI", "MEW", "MEWTWO"]],
	"Charmeleon, Ivysaur, or Wartortle": [["CHARMELEON", "IVYSAUR", "WARTORTLE"], ["CHARMANDER", "BULBASAUR", "SQUIRTLE"]],
	"Clefable or Wigglytuff": [["CLEFABLE", "WIGGLYTUFF"], ["CLEFAIRY", "JIGGLYPUFF"]],
	"Cloyster or Starmie": [["CLOYSTER", "STARMIE"], ["SHELLDER", "STARYU"]],
	"Corsola, Golduck, or Qwilfish": [["CORSOLA", "GOLDUCK", "QWILFISH"]],
	"Cubone, Phanpy, Rhyhorn, or Teddiursa": [["CUBONE", "PHANPY", "RHYHORN", "TEDDIURSA"]],
	"Delibird, Snubbull, or Stantler": [["DELIBIRD", "SNUBBULL", "STANTLER"]],
	"Dewgong, Seaking, or Tentacool": [["DEWGONG", "SEAKING", "TENTACOOL"]],
	"Dodrio, Dugtrio, or Magneton": [["DODRIO", "DUGTRIO", "MAGNETON"]],
	"Dragonite, Porygon2, or Tyranitar": [["DRAGONITE", "PORYGON2", "TYRANITAR"]],
	"Drowzee, Koffing, or Zubat": [["DROWZEE", "KOFFING", "ZUBAT"]],
	"Dunsparce, Girafarig, or Wobbuffet": [["DUNSPARCE", "WOBBUFFET", "GIRAFARIG"]],
	"Electabuzz, Jynx, or Magmar" : [["ELECTABUZZ", "JYNX", "MAGMAR"]],
	"Farfetch'd, Lickitung, or Mr. Mime": [["FARFETCH'D", "LICKITUNG", "MR.MIME"]],
	"Fearow or Noctowl": [["FEAROW", "NOCTOWL"], ["SPEAROW", "HOOTHOOT"]],
	"Flaaffy or Skiploom": [["FLAAFFY", "SKIPLOOM"], ["MAREEP", "HOPPIP"]],
	"Forretress, Magcargo, or Muk": [["FORRETRESS", "MAGCARGO", "MUK"]],
	"Furret or Kadabra": [["FURRET", "KADABRA"], ["SENTRET", "ABRA"]],
	"Gligar, Mantine, or Skarmory" : [["GLIGAR", "MANTINE", "SKARMORY"]],
	"Graveler, Haunter, or Machoke": [["GRAVELER", "HAUNTER", "MACHOKE"]],
	"Hitmonchan, Hitmontop, or Hitmonlee" : [["HITMONCHAN", "HITMONTOP", "HITMONLEE"], ["TYROGUE"]],
	"Horsea, Houndour, or Ponyta": [["HORSEA", "HOUNDOUR", "PONYTA"]],
	"Kangaskhan, Ditto, or Smeargle": [["KANGASKHAN", "DITTO", "SMEARGLE"]],
	"Kingler, Lanturn, or Octillery": [["KINGLER", "LANTURN", "OCTILLERY"]],
	"Magikarp, Mankey, or Meowth": [["MAGIKARP", "MANKEY", "MEOWTH"]],
	"Miltank, Snorlax, or Tauros": [["MILTANK", "SNORLAX", "TAUROS"]],
	"Misdreavus, Murkrow, or Sneasel": [["MISDREAVUS", "MURKROW", "SNEASEL"]],
	"Mewtwo, Mew or Celebi" : [["MEWTWO", "MEW", "CELEBI"]],
	"Nidoking or Nidoqueen": [["NIDOKING", "NIDOQUEEN"], ["NIDORAN♂", "NIDORINO", "NIDORAN♀", "NIDORINA"]],
	"Pidgeotto or Raticate": [["PIDGEOTTO", "RATICATE"], ["PIDGEY", "RATTATA"]],
	"Pikachu, Sandshrew, or Togetic": [["PIKACHU", "SANDSHREW", "TOGETIC"]],
	"Piloswine, Tangela, or Yanma": [["PILOSWINE", "TANGELA", "YANMA"]],
	"Poliwrath or Slowking": [["POLIWRATH", "SLOWKING"], ["POLIWHIRL", "SLOWPOKE"]],
	"Suicune, Raikou, or Entei": [["SUICUNE", "RAIKOU", "ENTEI"]],
	"Sunflora or Exeggutor": [["SUNFLORA", "EXEGGUTOR"], ["SUNKERN", "EXEGGCUTE"]],
	"TM34 (Swagger) or TM46 (Thief)" : [[], [], ["TM34", "TM46"]],
	"TM04 (Rollout) or TM20 (Endure)" : [[], [], ["TM04", "TM20"]],
	"Vileplume or Victreebel": [["VILEPLUME", "VICTREEBEL"], ["ODDISH", "GLOOM", "BELLSPROUT", "WEEPINBELL"]],
}

var goldenrodBasementItems = [84, 85, 86, 87, 88, 89, 90, 91, 92, 93];
var darkCaveItems = [151, 152, 153, 154, 155, 156];
var hideoutItems = [64, 65, 66, 67, 68, 69,70, 71, 72, 73];
var mtMortarWaterfallLockedItems = [97, 99, 101, 103, 105, 106, 107, 108, 109, 110, 253];
var whirlIslandsLockedLocations = ["WHIRL ISLANDS"];
var dragonsDenLockedLocations = ["DRAGON'S DEN"];

var whirlpoolWaterfallLockedLocations = [
"SILVER CAVE",
"DIGLETT'S CAVE",
"KANTO UNDERGROUND",
"ROCK TUNNEL",
"VICTORY ROAD",
"CINNABAR ISLAND",
"ROUTE 4",
"ROUTE 9",
"ROUTE 25",
"CERULEAN CITY",
"ROUTE 11",
"VERMILION CITY",
"OLIVINE CITY",
"MT.MOON",
"ROUTE 13",
"ROUTE 15",
"ROUTE 12",
"ROUTE 28",
"SILVER CAVE",
"ROUTE 17",
"CELADON CITY",
"ROUTE 2",
"ROUTE 26",
"ROUTE 27",
"SAFFRON CITY"];

var mandatoryTrainers = [1, 2, 3, 4, 7, 42, 79, 80, 98, 189, 190, 213, 400, 402, 403, 405, 478, 479, 486, 511, 512, 513, 514, 515, 536];

var azaleaLeftSide = [237, 516];
var azaleaRightSide = [236, 519];
var route39male = [497];
var route39female = [527];

var route32trainers = [43, 44, 91, 250, 251, 254, 424];
var route35trainers = [81, 238, 390, 393, 426, 427, 452, 453, 535];
var route44trainers = [85, 134, 151, 186, 259, 260, 419];
var lighthousetrainers = [82, 84, 102, 220, 224, 316, 317, 318, 319];
var nationalparktrainers = [55, 101, 496, 526];
var phonebooktrainers = [41, 55, 57, 234, 238, 251, 354, 393, 424, 425, 451]
var pokemaniactrainers = [174, 175, 176, 177, 178, 179, 180, 184, 185, 188]
var hikertrainers = [351, 352, 353, 354, 355, 356, 357, 359, 367, 369]
var swimmertrainers = [276, 277, 278, 280, 281, 282, 296, 297, 298, 299, 300, 301, 302]
var mineralbadgetrainers = [6, 102, 220, 224]
var glacierbadgetrainers = [5, 225]
var risingbadgetrainers = [8, 118, 119, 138, 139]
var callsailortrainer = [316]
var calllasstrainer = [107]
var callblackbelttrainer = [406]
var mortarnerd = [341]
var eusine = [541]
var alphpsychic = [412]
var tintower = [483, 484, 485]
var sprouttower = [474, 476, 481, 482]

var trainerInfo = {
	1: ["LEADER FALKNER", "VIOLET CITY GYM", "mandatory trainer"],
	2: ["LEADER WHITNEY", "GOLDENROD CITY GYM", "mandatory trainer"],
	3: ["LEADER BUGSY", "AZALEA TOWN GYM", "mandatory trainer"],
	4: ["LEADER MORTY", "ECRUTEAK CITY GYM", "mandatory trainer"],
	5: ["LEADER PRYCE", "MAHOGANY CITY GYM", "Glacier Badge trainer"],
	6: ["LEADER JASMINE", "OLIVINE CITY GYM", "Mineral Badge trainer"],
	7: ["LEADER CHUCK", "CIANWOOD CITY GYM", "mandatory trainer"],
	8: ["LEADER CLAIR", "BLACKTHORN CITY GYM", "Rising Badge trainer"],
	41: ["YOUNGSTER JOEY", "ROUTE 30", "phonebook trainer"],
	42: ["YOUNGSTER MIKEY", "ROUTE 30", "mandatory trainer"],
	43: ["YOUNGSTER ALBERT", "ROUTE 32", "Route 32 trainer"],
	44: ["YOUNGSTER GORDON", "ROUTE 32", "Route 32 trainer"],
	55: ["SCHOOLBOY JACK", "NATIONAL PARK", "National Park/phonebook trainer"],
	57: ["SCHOOLBOY ALAN", "ROUTE 36", "Route 36/phonebook trainer"],
	79: ["BIRD KEEPER ROD", "VIOLET CITY GYM", "mandatory trainer"],
	80: ["BIRD KEEPER ABE", "VIOLET CITY GYM", "mandatory trainer"],
	81: ["BIRD KEEPER BRYAN", "ROUTE 35", "Route 35 trainer"],
	82: ["BIRD KEEPER THEO", "LIGHTHOUSE", "Lighthouse trainer"],
	84: ["BIRD KEEPER DENNIS", "LIGHTHOUSE", "Lighthouse trainer"],
	85: ["BIRD KEEPER VANCE", "ROUTE 44", "Route 44 trainer"],
	91: ["BIRD KEEPER PETER", "ROUTE 32", "Route 32 trainer"],
	98: ["LASS CARRIE", "GOLDENROD CITY GYM", "mandatory trainer"],
	101: ["LASS KRISE", "NATIONAL PARK", "National Park trainer"],
	102: ["LASS CONNIE", "LIGHTHOUSE", "Lighthouse/Mineral Badge trainer"],
	107: ["LASS DANA", "ROUTE 38", "call lass trainer"],
	118: ["COOLTRAINER PAUL", "BLACKTORN CITY GYM", "Rising Badge trainer"],
	119: ["COOLTRAINER CODY", "BLACKTORN CITY GYM", "Rising Badge trainer"],
	134: ["COOLTRAINER ALLEN", "ROUTE 44", "Route 44 trainer"],
	138: ["COOLTRAINER FRAN", "BLACKTORN CITY GYM", "Rising Badge trainer"],
	139: ["COOLTRAINER LOLA", "BLACKTORN CITY GYM", "Rising Badge trainer"],
	151: ["COOLTRAINER CYBIL", "ROUTE 44", "Route 44 trainer"],
	174: ["POKÉMANIAC LARRY", "UNION CAVE", "pokémaniac trainer"],
	175: ["POKÉMANIAC ANDREW", "UNION CAVE", "pokémaniac trainer"],
	176: ["POKÉMANIAC CALVIN", "UNION CAVE", "pokémaniac trainer"],
	177: ["POKÉMANIAC SHANE", "ROUTE 42", "pokémaniac trainer"],
	178: ["POKÉMANIAC BEN", "ROUTE 43", "pokémaniac trainer"],
	179: ["POKÉMANIAC BRENT", "ROUTE 43", "pokémaniac trainer"],
	180: ["POKÉMANIAC RON", "ROUTE 43", "pokémaniac trainer"],
	184: ["POKÉMANIAC ISAAC", "GOLDENROD TUNNEL", "pokémaniac trainer"],
	185: ["POKÉMANIAC DONALD", "GOLDENROD TUNNEL", "pokémaniac trainer"],
	186: ["POKÉMANIAC ZACH", "ROUTE 44", "Route 44 trainer"],
	188: ["POKÉMANIAC MILLER", "MT. MORTAR", "Pokémaniac trainer"],
	189: ["ROCKET GRUNT", "SLOWPOKE WELL", "mandatory trainer"],
	190: ["ROCKET GRUNT", "SLOWPOKE WELL", "mandatory trainer"],
	213: ["ROCKET GRUNT", "SLOWPOKE WELL", "mandatory trainer"],
	220: ["GENTLEMAN PRESTON", "LIGHTHOUSE", "Lighthouse/Mineral Badge trainer"],
	224: ["GENTLEMAN ALFRED", "LIGHTHOUSE", "Lighthouse/Mineral Badge trainer"],
	225: ["SKIER ROXANNE", "MAHOGANY CITY GYM", "Glacier Badge trainer"],
	234: ["BUG CATCHER WADE", "ROUTE 31", "phonebook trainer"],
	236: ["BUG CATCHER AL", "AZALEA TOWN GYM", "Azalea Gym right side"],
	237: ["BUG CATCHER JOSH", "AZALEA TOWN GYM", "Azalea Gym left side"],
	238: ["BUG CATCHER ARNIE", "ROUTE 35", "Route 35/phonebook trainer"],
	250: ["FISHER JUSTIN", "ROUTE 32", "Route 32 trainer"],
	251: ["FISHER RALPH", "ROUTE 32", "Route 32/phonebook trainer"],
	254: ["FISHER HENRY", "ROUTE 32", "Route 32 trainer"],
	259: ["FISHER WILTON", "ROUTE 44", "Route 44 trainer"],
	260: ["FISHER EDGAR", "ROUTE 44", "Route 44 trainer"],
	276: ["SWIMMER SIMON", "ROUTE 40", "swimmer trainer"],
	277: ["SWIMMER RANDALL", "ROUTE 40", "swimmer trainer"],
	278: ["SWIMMER CHARLIE", "ROUTE 41", "swimmer trainer"],
	280: ["SWIMMER BERKE", "ROUTE 41", "swimmer trainer"],
	281: ["SWIMMER KIRK", "ROUTE 41", "swimmer trainer"],
	282: ["SWIMMER MATTHEW", "ROUTE 41", "swimmer trainer"],
	296: ["SWIMMER ELAINE", "ROUTE 40", "swimmer trainer"],
	297: ["SWIMMER PAULA", "ROUTE 40", "swimmer trainer"],
	298: ["SWIMMER KAYLEE", "ROUTE 41", "swimmer trainer"],
	299: ["SWIMMER SUSIE", "ROUTE 41", "swimmer trainer"],
	300: ["SWIMMER DENISE", "ROUTE 41", "swimmer trainer"],
	301: ["SWIMMER KARA", "ROUTE 41", "swimmer trainer"],
	302: ["SWIMMER WENDY", "ROUTE 41", "swimmer trainer"],
	316: ["SAILOR HUEY", "LIGHTHOUSE", "Lighthouse/sailor call trainer"],
	317: ["SAILOR TERRELL", "LIGHTHOUSE", "Lighthouse trainer"],
	318: ["SAILOR KENT", "LIGHTHOUSE", "Lighthouse trainer"],
	319: ["SAILOR ERNEST", "LIGHTHOUSE", "Lighthouse trainer"],
	341: ["SUPER NERD MARKUS", "MT.MORTAR", "Mt. Mortar trainer"],
	351: ["HIKER RUSSELL", "UNION CAVE", "hiker trainer"],
	352: ["HIKER PHILLIP", "UNION CAVE", "hiker trainer"],
	353: ["HIKER LEONARD", "UNION CAVE", "hiker trainer"],
	354: ["HIKER ANTHONY", "ROUTE 33", "hiker/phonebook trainer"],
	355: ["HIKER BENJAMIN", "ROUTE 42", "hiker trainer"],
	356: ["HIKER ERIK", "ROUTE 45", "hiker trainer"],
	357: ["HIKER MICHAEL", "ROUTE 45", "hiker trainer"],
	359: ["HIKER TIMOTHY", "ROUTE 45", "hiker trainer"],
	367: ["HIKER DANIEL", "UNION CAVE", "hiker trainer"],
	369: ["HIKER PARRY", "ROUTE 45", "hiker trainer"],
	390: ["FIREBREATHER WALT", "ROUTE 35", "Route 35 trainer"],
	393: ["JUGGLER IRWIN", "ROUTE 35", "Route 35/phonebook trainer"],
	400: ["BLACKBELT YOSHI", "CIANWOOD CITY GYM", "mandatory trainer"],
	402: ["BLACKBELT YAO", "CIANWOOD CITY GYM", "mandatory trainer"],
	403: ["BLACKBELT NOB", "CIANWOOD CITY GYM", "mandatory trainer"],
	405: ["BLACKBELT LUNG", "CIANWOOD CITY GYM", "mandatory trainer"],
	406: ["BLACKBELT KENJI", "ROUTE 45", "call blackbelt trainer"],
	412: ["PSYCHIC NATHAN", "RUINS OF ALPH", "Ruins of Alph trainer"],
	424: ["PICNICKER LIZ", "ROUTE 32", "Route 32/phonebook trainer"],
	425: ["PICNICKER GINA", "ROUTE 34", "phonebook trainer"],
	426: ["PICNICKER BROOKE", "ROUTE 35", "Route 35 trainer"],
	427: ["PICNICKER KIM", "ROUTE 35", "Route 35 trainer"],
	451: ["CAMPER TODD", "ROUTE 34", "phonebook trainer"],
	452: ["CAMPER IVAN", "ROUTE 35", "Route 35 trainer"],
	453: ["CAMPER ELLIOT", "ROUTE 35", "Route 35 trainer"],
	474: ["SAGE CHOW", "SPROUT TOWER", "Sprout Tower trainer"],
	476: ["SAGE JIN", "SPROUT TOWER", "Sprout Tower trainer"],
	478: ["SAGE JEFFREY", "ECRUTEAK CITY GYM", "mandatory trainer"],
	479: ["SAGE PING", "ECRUTEAK CITY GYM", "mandatory trainer"],
	481: ["SAGE NEAL", "SPROUT TOWER", "Sprout Tower trainer"],
	482: ["SAGE LI", "SPROUT TOWER", "Sprout Tower trainer"],
	483: ["SAGE GAKU", "ECRUTEAK CITY", "Tin Tower trainer"],
	484: ["SAGE MASA", "ECRUTEAK CITY", "Tin Tower trainer"],
	485: ["SAGE KOJI", "ECRUTEAK CITY", "Tin Tower trainer"],
	486: ["MEDIUM MARTHA", "ECRUTEAK CITY GYM", "mandatory trainer"],
	496: ["POKÉFAN WILLIAM", "NATIONAL PARK", "National Park trainer"],
	497: ["POKÉFAN DEREK", "ROUTE 38", "Male Pokéfan", "mandatory trainer"],
	511: ["KIMONO GIRL NAOKO", "ECRUTEAK CITY", "mandatory trainer"],
	512: ["KIMONO GIRL SAYO", "ECRUTEAK CITY", "mandatory trainer"],
	513: ["KIMONO GIRL ZUKI", "ECRUTEAK CITY", "mandatory trainer"],
	514: ["KIMONO GIRL KUNI", "ECRUTEAK CITY", "mandatory trainer"],
	515: ["KIMONO GIRL MIKI", "ECRUTEAK CITY", "mandatory trainer"],
	516: ["TWINS AMY & MAY", "AZALEA TOWN GYM", "Azalea left side"],
	519: ["TWINS AMY & MAY", "AZALEA TOWN GYM", "Azalea right side"],
	526: ["POKÉFAN BEVERLY", "NATIONAL PARK", "National Park trainer"],
	527: ["POKÉFAN RUTH", "ROUTE 38", "Female Pokéfan"],
	535: ["OFFICER DIRK", "ROUTE 35", "Route 35 trainer"],
	536: ["ROCKET GRUNT", "SLOWPOKE WELL", "mandatory trainer"],
	541: ["MYSTICALMAN EUSINE", "CIANWOOD CITY", "Eusine"]}

var itemgoals = ["BERRY JUICE", "ELIXER", "TM34", "TM46", "TM04", "TM20"]


function handleLogFile(){
	const file = document.getElementById('logfile').files[0];
	let reader = new FileReader();
	reader.onload = event => {
		var input = reader.result;
		const text = input.split('\n');
		var obtainablePokes = {};
		obtainablePokes.starters = extractStarters(text);
		obtainablePokes.statics = extractStatics(text, generateLegalStaticsArray());
		obtainablePokes.trades = extractTrades(text, generateTradesArray());
		obtainablePokes.routes = extractRoutes(text, generateRoutesArray());
		var obtainableInformation = extractTrainers(text, generateTrainersArray());
		var obtainableItems = extractItems(text, generateDisallowedItemsArray());
		analyseObtainableGoals(obtainablePokes, obtainableInformation, obtainableItems);
		toggleReportDisplay();
	}
	reader.readAsText(file, "UTF-8");
	return false;	
}

function toggleReportDisplay() {
	const options = document.getElementById('options');
	const report = document.getElementById('report');
	const obtainable = document.getElementById('obtainableRow'); 
	const spoilerfreemode = document.getElementById('spoilerfreemode'); 
	if(report.style.display == 'none'){
		if(spoilerfreemode.checked) {
			obtainable.style.display = 'none';
			document.getElementById('informationUnobtainableCell').style.display = 'none';
		}
		options.style.display = 'none';
        report.style.display = 'block';
    }
    else {
        options.style.display = 'block';
        report.style.display = 'none';
        report.innerHTML = '<h2> Report </h2>\n<button type="button" onclick="toggleReportDisplay()">Go Back</button>\n<br><br>\n<table>\n<tr>\n<td>\n<h3> Goals Not Obtainable: </h3>\n<ul id="unobtainable">\n</ul>\n</td>\n<td id="informationUnobtainableCell"><h3> Information Not Obtainable: </h3>\n<ul id="informationunobtainable">\n</ul>\n</td>\n</tr>\n<tr id="obtainableRow">\n<td>\n<h3 class="obtainable"> Goals Obtainable: </h3>\n<ul id="obtainable" class="obtainable">\n</ul>\n</td>\n<td>\n<h3 class="obtainable"> Information Obtainable: </h3>\n<ul id="informationobtainable" class="obtainable">\n</ul>\n</td>\n</tr>\n</table>\n<br><button type="button" onclick="toggleReportDisplay()">Go Back</button>'
        
    }
}	

function analyseObtainableGoals(obtainablePokes, obtainableInformation, obtainableItems) {
	var keys = Object.keys(pokeGoals);
	for(var i = 0; i < keys.length; ++i) {
		// requirements has two lists -> one with the actual Pokemon and another with the preevos that can be evolved into the Pokemon
		var requirements = pokeGoals[keys[i]];
		var availabilities = [];
		var informationAvailabilities = [];
		var availabilities_evolve = [];
		var informationAvailabilities_evolve = [];
		var itemAvailabilities = [];
		for(var j = 0; j < requirements[actualPokemon].length; ++j) {
			var locations = checkPokemonAvailability(obtainablePokes, requirements[actualPokemon][j]);
			var information = checkPokemonInformation(obtainableInformation, requirements[actualPokemon][j])
			availabilities.push(locations);
			informationAvailabilities.push(information);
		}
		if(requirements.length >= 2){
			for(var j = 0; j < requirements[preEvolution].length; ++j) {
				var locations = checkPokemonAvailability(obtainablePokes, requirements[preEvolution][j]);
				var information = checkPokemonInformation(obtainableInformation, requirements[preEvolution][j])				
				availabilities_evolve.push(locations);
				informationAvailabilities_evolve.push(information);
			}
		}
		if(requirements.length >= 3) {
			for(var j = 0; j < requirements[itemForGoal].length; ++j) {
				var item = requirements[itemForGoal][j];
				itemAvailabilities.push(obtainableItems[item]);
			}
		}
		addAvailabilitiesToWebPage(keys[i], availabilities, availabilities_evolve, itemAvailabilities);
		addInformationAvailabilitiesToWebPage(keys[i], informationAvailabilities, informationAvailabilities_evolve);
	}
}

function checkPokemonInformation(information, pokemon) {
	var availabilities = [];
	var trainerIds = Object.keys(information);
	for(var i = 0; i < trainerIds.length; ++i) {
		let trainerPokemon = information[trainerIds[i]];
		for(var j = 0; j < trainerPokemon.length; ++j) {
			if(trainerPokemon[j].localeCompare(pokemon) == 0)
				availabilities.push(trainerIds[i]);
		}
	}
	return availabilities;
}

// Returns a dictionary with location -> rarity for pokemon
function checkPokemonAvailability(obtainablePokes, pokemon) {
	const landEncounterSlots = 7;
	const waterEncounterSlots = 3;
	const bugCatchingSlots = 10;
	var availabilities = {};
	var starterIndex = obtainablePokes.starters.indexOf(pokemon);
	if(starterIndex != -1) availabilities.starter = "-";
	var static_keys = Object.keys(obtainablePokes.statics);
	for(var i = 0; i < static_keys.length; ++i){
		if(obtainablePokes.statics[static_keys[i]].localeCompare(pokemon) == 0)
			availabilities[static_keys[i]] = '-';
	}
	var tradeKeys = Object.keys(obtainablePokes.trades);
	for(var i = 0; i < tradeKeys.length; ++i) {
		if(obtainablePokes.trades[tradeKeys[i]].localeCompare(pokemon) == 0)
			availabilities[tradeKeys[i]] = '-';
	}
	var routeKeys = Object.keys(obtainablePokes.routes);
	for(var i = 0; i < routeKeys.length; ++i) {
		var encounterTableSlots = obtainablePokes.routes[routeKeys[i]].length;
		for(var j = 0; j < encounterTableSlots; ++j) {
			if(obtainablePokes.routes[routeKeys[i]][j][0] == pokemon) {

				if(encounterTableSlots == landEncounterSlots) {
					if(j < 2)
						availabilities[routeKeys[i]] = 'COMMON';
					else if (j < 4)
						availabilities[routeKeys[i]] = 'UNCOMMON';
					else
						availabilities[routeKeys[i]] = 'RARE';
				}
				else if(encounterTableSlots == waterEncounterSlots) {
					if(j == 0)
						availabilities[routeKeys[i]] = 'COMMON';
					else if (j == 1)
						availabilities[routeKeys[i]] = 'UNCOMMON';
					else
						availabilities[routeKeys[i]] = 'RARE';
				}
				else
					availabilities[routeKeys[i]] = "";
			}
		}

	}
	return availabilities;
}

function addListOfLocations(goal, availabilities, isPreEvo) {
	var html = "";
	var index = isPreEvo? preEvolution : actualPokemon;
	for(var i = 0; i < availabilities.length; ++i) {
		var locations = Object.keys(availabilities[i]);
		for(var j = 0; j < locations.length; ++j) {
			if(locations[j] == 'starter'){
				var pokemon = pokeGoals[goal][index][i];
				if(isPreEvo)
					html += ("<li> Choose and evolve the starter " + pokemon + ". </li>");
				else
					html += ("<li> Choose the starter " + pokemon + ". </li>");
			}
			else if(Object.keys(statics).indexOf(locations[j]) != -1) {
				var pokemon = pokeGoals[goal][index][i];
				var location = locations[j];
				if(isPreEvo)
					html += ("<li> Evolve " + pokemon + ", available via the static " + locationRenamer(location, true) + ". </li>");
				else
					html += ("<li>" + pokemon + " is available via the static " + locationRenamer(location, true) + ". </li>");
			}
			else if (Object.keys(trades).indexOf(locations[j]) != -1) {
				var pokemon = pokeGoals[goal][index][i];
				var location = locations[j];
				if(isPreEvo)
					html += ("<li> Get and evolve " + pokemon + " by trading " + location + ". </li>");
				else
					html += ("<li> Get  " + pokemon + " by trading " + location + ". </li>");
			}
			else {
				var pokemon = pokeGoals[goal][index][i];
				var rarity = availabilities[i][locations[j]];
				var location = locations[j];
				if(!document.getElementById('noraresmode').checked || rarity != "RARE")
					if(isPreEvo)
						html += "<li> Catch and evolve " + pokemon + ", " + rarity + " in " + locationRenamer(location, true) + ". </li>"
					else
						html += ("<li> Catch " + pokemon + ", " + rarity + " in " + locationRenamer(location, true) + ". </li>");
			}
		}
	}
	return html;
}

function addItemLocations(goal, itemAvailabilities) {
	var html = "";
	for(var i = 0; i < itemAvailabilities.length; ++i) {
		var item = pokeGoals[goal][itemForGoal][i];
		var locations = itemAvailabilities[i];
		for(var j = 0; j < locations.length; ++j) {
			html += ("<li> Pick up " + (item.includes("TM")? "": "the ") + item + " in " + locations[j] + ".</li>");
		}
	}
	return html
}

function addInformation(goal, availabilities, isPreEvo) {
	var html = "";
	var index = isPreEvo? preEvolution : actualPokemon;
	var name = 0;
	var location = 1;
	var trainerPack = 2;
	for(var i = 0; i < availabilities.length; ++i) {
		var trainers = availabilities[i];
		for(var j = 0; j < trainers.length; ++j) {
			var trainer = trainers[j];
			var pokemon = pokeGoals[goal][index][i];
			html += ("<li> Fight " + trainerInfo[trainer][name] + " in " + trainerInfo[trainer][location] + " for " + pokemon + " information (" + trainerInfo[trainer][trainerPack] + "). </li>");	
		}
	}
	return html;
}

function addAvailabilitiesToWebPage(goal, availabilities, availabilities_evolve, itemAvailabilities) {
	var html = addListOfLocations(goal, availabilities, false);
	var listId = "obtainable";

	// Both the actual Pokemons and its pre evos can be used to complete the goal
	if(availabilities_evolve.length > 0)
		html += addListOfLocations(goal, availabilities_evolve, true);

	if(itemAvailabilities.length > 0)
		html += addItemLocations(goal, itemAvailabilities);

	// Goal is not obtainable
	if(html == "")
		listId = "unobtainable";

	html = "<ul>" + html + "</ul>";
	html = "<li>" + goal + html + "</li>";
	document.getElementById(listId).innerHTML += html;
}

function addInformationAvailabilitiesToWebPage(goal, availabilities, availabilities_evolve) {
	// Not a Pokemon goal, irrelevant to continue
	if(pokeGoals[goal][actualPokemon].length == 0)
		return;

	var html = addInformation(goal, availabilities, false);
	var listId = "informationobtainable";

	// Both the actual Pokemons and its pre evos can be used to complete the goal
	if(availabilities_evolve.length >= 0)
		html += addInformation(goal, availabilities_evolve, true);

	// Information is not obtainable
	if(html == "")
		listId = "informationunobtainable";

	html = "<ul>" + html + "</ul>";
	html = "<li>" + goal + html + "</li>";
	document.getElementById(listId).innerHTML += html;
}

function extractStarters(text){
	const index = indexOf(text, "Random Starters");
	let re = /Set starter \d to (.+)/
	let starter1 = text[index+1].match(re)[1];
	let starter2 = text[index+2].match(re)[1];
	let starter3 = text[index+3].match(re)[1];
	return [starter1, starter2, starter3];
}

function extractRoutes(text, routesArray){
	const index = indexOf(text, "Wild Pokemon");
	var ret = {};
	var line;
	for(var i=0; i<routesArray.length;++i){
		ret[routesArray[i]] = extractRoute(text[index+routes[routesArray[i]]]);
	}
	return ret;
}

function extractRoute(encounterTable){
	var re = /Set #\d\d?\d? - .+ - (.+)/
	let pokes = encounterTable.match(re)[1].split(', ');
	var ret = [];
	for(var i = 0; i < pokes.length; ++i) {
		poke = pokes[i].split(' Lv');
		ret.push([poke[0], parseInt(poke[1])]);
	}
	return ret;
}

function extractTrades(text, tradesArray){
	const index = indexOf(text, "In-Game Trades");
	var ret = {};
	var line;
	for(var i=0; i< tradesArray.length;++i){
		line = text[index+trades[tradesArray[i]]].split(" ");
		pokemon = line[line.length-1];
		// Remove the trailing newline
		ret[tradesArray[i]] = pokemon.substring(0, pokemon.length - 1);
	}
	return ret;
}

function extractStatics(text, staticsArray){
	const index = indexOf(text, "Static Pokemon");
	var ret = [];
	var line;
	for(var i=0; i<staticsArray.length;++i){
		line = text[index+statics[staticsArray[i]]].split(" ");
		pokemon = line[line.length-1];
		// Remove the trailing newline
		ret[staticsArray[i]] = pokemon.substring(0, pokemon.length - 1);
	}
	return ret;
}

function extractTrainers(text, trainersArray){
	const index = indexOf(text, "Trainers Pokemon");
	var ret = {}
	var line;
	for(var i=0; i< trainersArray.length;++i){
		var trainerPokemon = [];
		line = text[index+parseInt(trainersArray[i])].split(' - ')[1];
		var pokemons = line.split(', ');
		for(var j = 0; j< pokemons.length; ++j) {
			trainerPokemon.push(pokemons[j].split(" ")[0]);
		}
		ret[trainersArray[i]] = trainerPokemon;
	}
	return ret;
}

function extractItems(text, disallowedItemsArray) {
	const index = indexOf(text, "Field Items");
	const nItems = 260;
	var ret = {};
	for(var i = 0; i < itemgoals.length; ++i) {
		ret[itemgoals[i]] = [];
	}

	for(var i=1; i <= nItems; ++i) {
		var item = text[index+i].split("=> ")[1];
		//remove trailing newline
		item = item.substring(0, item.length-1);
		if(i == 151)
			console.log("Test");
		if(itemgoals.includes(item)) {
			var location = text[index+i].split(" @")[0];
			location = locationRenamer(location, false);
			if(!disallowedItemsArray.includes(location) && !disallowedItemsArray.includes(i))
				ret[item].push(location); 
		}
	}

	return ret;
}

function generateRoutesArray() {
	routesArray = [];
	if(document.getElementById('1').checked) routesArray.push('ROUTE 1');
	if(document.getElementById('2').checked) routesArray.push('ROUTE 2');
	if(document.getElementById('3').checked) routesArray.push('ROUTE 3');
	if(document.getElementById('4').checked) routesArray.push('ROUTE 4');
	if(document.getElementById('5').checked) routesArray.push('ROUTE 5');
	if(document.getElementById('6').checked) routesArray.push('ROUTE 6');
	if(document.getElementById('7').checked) routesArray.push('ROUTE 7');
	if(document.getElementById('8').checked) routesArray.push('ROUTE 8');
	if(document.getElementById('9').checked) routesArray.push('ROUTE 9');
	if(document.getElementById('10').checked) routesArray.push('ROUTE 10');
	if(document.getElementById('11').checked) routesArray.push('ROUTE 11');
	if(document.getElementById('13').checked) routesArray.push('ROUTE 13');
	if(document.getElementById('14').checked) routesArray.push('ROUTE 14');
	if(document.getElementById('15').checked) routesArray.push('ROUTE 15');
	if(document.getElementById('16').checked) routesArray.push('ROUTE 16');
	if(document.getElementById('17').checked) routesArray.push('ROUTE 17');
	if(document.getElementById('18').checked) routesArray.push('ROUTE 18');
	if(document.getElementById('21').checked) routesArray.push('ROUTE 21');
	if(document.getElementById('22').checked) routesArray.push('ROUTE 22');
	if(document.getElementById('24').checked) routesArray.push('ROUTE 24');
	if(document.getElementById('25').checked) routesArray.push('ROUTE 25');
	if(document.getElementById('26').checked) routesArray.push('ROUTE 26');
	if(document.getElementById('27').checked) routesArray.push('ROUTE 27');
	if(document.getElementById('28').checked) routesArray.push('ROUTE 28');
	if(document.getElementById('29').checked) routesArray.push('ROUTE 29');
	if(document.getElementById('30').checked) routesArray.push('ROUTE 30');
	if(document.getElementById('31').checked) routesArray.push('ROUTE 31');
	if(document.getElementById('32').checked) routesArray.push('ROUTE 32');
	if(document.getElementById('33').checked) routesArray.push('ROUTE 33');
	if(document.getElementById('34').checked) routesArray.push('ROUTE 34');
	if(document.getElementById('35').checked) routesArray.push('ROUTE 35');
	if(document.getElementById('36').checked) routesArray.push('ROUTE 36');
	if(document.getElementById('37').checked) routesArray.push('ROUTE 37');
	if(document.getElementById('38').checked) routesArray.push('ROUTE 38');
	if(document.getElementById('39').checked) routesArray.push('ROUTE 39');
	if(document.getElementById('42').checked) routesArray.push('ROUTE 42');
	if(document.getElementById('43').checked) routesArray.push('ROUTE 43');
	if(document.getElementById('44').checked) routesArray.push('ROUTE 44');
	if(document.getElementById('45').checked) routesArray.push('ROUTE 45');
	if(document.getElementById('46').checked) routesArray.push('ROUTE 46');

	if(document.getElementById('4surfing').checked) routesArray.push('ROUTE 4 SURFING');
	if(document.getElementById('6surfing').checked) routesArray.push('ROUTE 6 SURFING');
	if(document.getElementById('9surfing').checked) routesArray.push('ROUTE 8 SURFING');
	if(document.getElementById('10surfing').checked) routesArray.push('ROUTE 10 SURFING');
	if(document.getElementById('12surfing').checked) routesArray.push('ROUTE 12 SURFING');
	if(document.getElementById('13surfing').checked) routesArray.push('ROUTE 13 SURFING');
	if(document.getElementById('19surfing').checked) routesArray.push('ROUTE 19 SURFING');
	if(document.getElementById('20surfing').checked) routesArray.push('ROUTE 20 SURFING');
	if(document.getElementById('21surfing').checked) routesArray.push('ROUTE 21 SURFING');
	if(document.getElementById('22surfing').checked) routesArray.push('ROUTE 22 SURFING');
	if(document.getElementById('24surfing').checked) routesArray.push('ROUTE 24 SURFING');
	if(document.getElementById('25surfing').checked) routesArray.push('ROUTE 25 SURFING');
	if(document.getElementById('26surfing').checked) routesArray.push('ROUTE 26 SURFING');
	if(document.getElementById('27surfing').checked) routesArray.push('ROUTE 27 SURFING');
	if(document.getElementById('28surfing').checked) routesArray.push('ROUTE 28 SURFING');
	if(document.getElementById('30surfing').checked) routesArray.push('ROUTE 30 SURFING');
	if(document.getElementById('31surfing').checked) routesArray.push('ROUTE 31 SURFING');
	if(document.getElementById('32surfing').checked) routesArray.push('ROUTE 32 SURFING');
	if(document.getElementById('34surfing').checked) routesArray.push('ROUTE 34 SURFING');
	if(document.getElementById('35surfing').checked) routesArray.push('ROUTE 35 SURFING');
	if(document.getElementById('36surfing').checked) routesArray.push('ROUTE 40 SURFING');
	if(document.getElementById('37surfing').checked) routesArray.push('ROUTE 41 SURFING');
	if(document.getElementById('42surfing').checked) routesArray.push('ROUTE 42 SURFING');
	if(document.getElementById('43surfing').checked) routesArray.push('ROUTE 43 SURFING');
	if(document.getElementById('44surfing').checked) routesArray.push('ROUTE 44 SURFING');
	if(document.getElementById('45surfing').checked) routesArray.push('ROUTE 45 SURFING');

	if(document.getElementById('newbark').checked) routesArray.push('NEW BARK TOWN');
	if(document.getElementById('cherrygrove').checked) routesArray.push('CHERRYGROVE CITY');
	if(document.getElementById('violet').checked) routesArray.push('VIOLET CITY');
	if(document.getElementById('cianwood').checked) routesArray.push('CIANWOOD CITY');
	if(document.getElementById('ecruteak').checked) routesArray.push('ECRUTEAK CITY');
	if(document.getElementById('lake').checked) routesArray.push('LAKE OF RAGE');
	if(document.getElementById('blackthorn').checked) routesArray.push('BLACKTHORN CITY');
	if(document.getElementById('den').checked) routesArray.push('DRAGON\'S DEN');

	if(document.getElementById('pallet').checked) routesArray.push('PALLET TOWN');
	if(document.getElementById('viridian').checked) routesArray.push('VIRIDIAN CITY');
	if(document.getElementById('cerulean').checked) routesArray.push('CERULEAN CITY');
	if(document.getElementById('celadon').checked) routesArray.push('CELADON CITY');
	if(document.getElementById('fuschia').checked) routesArray.push('FUSCHIA CITY');
	if(document.getElementById('cinnabar').checked) routesArray.push('CINNABAR ISLAND');

	if(document.getElementById('national').checked) routesArray.push('NATIONAL PARK');
	if(document.getElementById('contest').checked) routesArray.push('Bug Catching');
	if(document.getElementById('moon').checked) routesArray.push('MT.MOON');
	if(document.getElementById('diglett').checked) routesArray.push('DIGLETT\'S CAVE');
	if(document.getElementById('vroad').checked) routesArray.push('VICTORY ROAD');

	if(document.getElementById('unionentrance').checked) routesArray.push('UNION CAVE ENTRANCE');
	if(document.getElementById('unionb1f').checked) routesArray.push('UNION CAVE B1F');
	if(document.getElementById('unionb2f').checked) routesArray.push('UNION CAVE B2F');
	if(document.getElementById('unionentrancesurfing').checked) routesArray.push('UNION CAVE ENTRANCE SURFING');
	if(document.getElementById('unionb1fsurfing').checked) routesArray.push('UNION CAVE B1F SURFING');
	if(document.getElementById('unionb2fsurfing').checked) routesArray.push('UNION CAVE B2F SURFING');

	if(document.getElementById('roaroom').checked) routesArray.push('RUINS OF ALPH ROOM');
	if(document.getElementById('roagrass').checked) routesArray.push('RUINS OF ALPH GRASS');
	if(document.getElementById('roawater').checked) routesArray.push('RUINS OF ALPH SURFING');

	if(document.getElementById('wellentrance').checked) routesArray.push('SLOWPOKE WELL ENTRANCE');
	if(document.getElementById('wellb2f').checked) routesArray.push('SLOWPOKE WELL B2F');
	if(document.getElementById('wellentrancesurfing').checked) routesArray.push('SLOWPOKE WELL ENTRANCE SURFING');
	if(document.getElementById('wellb2fsurfing').checked) routesArray.push('SLOWPOKE WELL B2F SURFING');
	
	if(document.getElementById('darkviolet').checked) routesArray.push('DARK CAVE VIOLET SIDE');
	if(document.getElementById('darkblackthorn').checked) routesArray.push('DARK CAVE BLACKTHORN SIDE');
	if(document.getElementById('darkvioletsurfing').checked) routesArray.push('DARK CAVE VIOLET SIDE SURFING');
	if(document.getElementById('darkblackthornsurfing').checked) routesArray.push('DARK CAVE BLACKTHORN SIDE SURFING');

	if(document.getElementById('mortarentrance').checked) routesArray.push('MT.MORTAR ENTRANCE');
	if(document.getElementById('mortar1f').checked) routesArray.push('MT.MORTAR 1F');
	if(document.getElementById('mortar2f').checked) routesArray.push('MT.MORTAR 2F');
	if(document.getElementById('mortarb1f').checked) routesArray.push('MT.MORTAR B1F');
	if(document.getElementById('mortarentrancesurfing').checked) routesArray.push('MT.MORTAR ENTRANCE SURFING');
	if(document.getElementById('mortar2fsurfing').checked) routesArray.push('MT.MORTAR 2F SURFING');
	if(document.getElementById('mortarb1fsurfing').checked) routesArray.push('MT.MORTAR B1F SURFING');

	if(document.getElementById('mortarb1fsurfing').checked) routesArray.push('MT.MORTAR B1F SURFING');
	if(document.getElementById('mortarb1fsurfing').checked) routesArray.push('MT.MORTAR B1F SURFING');
	if(document.getElementById('mortarb1fsurfing').checked) routesArray.push('MT.MORTAR B1F SURFING');
	if(document.getElementById('mortarb1fsurfing').checked) routesArray.push('MT.MORTAR B1F SURFING');
	if(document.getElementById('mortarb1fsurfing').checked) routesArray.push('MT.MORTAR B1F SURFING');

	if(document.getElementById('rocksmash').checked) routesArray.push('Headbutt Trees 13');

	if(document.getElementById('olivine').checked) {
		routesArray.push('OLIVINE CITY');
		routesArray.push('OLIVINE CITY PORT');
	}

	if(document.getElementById('vermilion').checked) {
		routesArray.push('VERMILION CITY');
		routesArray.push('VERMILION CITY PORT');
	}

	if(document.getElementById('tunnel').checked) {
		routesArray.push('ROCK TUNNEL 1');
		routesArray.push('ROCK TUNNEL 2');
	}	

	if(document.getElementById('ilex').checked) {
		routesArray.push('ILEX FOREST');
		routesArray.push('ILEX FOREST SURFING');
	}


	if(document.getElementById('tohjo').checked) {
		routesArray.push('TOHJO FALLS');
		routesArray.push('TOHJO FALLS SURFING');
	}	

	if(document.getElementById('sprout').checked) {
		routesArray.push('SPROUT TOWER 1F');
		routesArray.push('SPROUT TOWER 2F');
	}

	if(document.getElementById('tin').checked) {
		routesArray.push('TIN TOWER 2F');
		routesArray.push('TIN TOWER 3F');
		routesArray.push('TIN TOWER 4F');
		routesArray.push('TIN TOWER 5F');
		routesArray.push('TIN TOWER 6F');
		routesArray.push('TIN TOWER 7F');
		routesArray.push('TIN TOWER 8F');
		routesArray.push('TIN TOWER 9F');
	}

	if(document.getElementById('burned').checked) {
		routesArray.push('BURNED TOWER ENTRANCE');
		routesArray.push('BURNED TOWER B1F');
	}

	if(document.getElementById('ice').checked) {
		routesArray.push('ICE PATH ENTRANCE/EXIT');
		routesArray.push('ICE PATH B1F');
		routesArray.push('ICE PATH B2F');
		routesArray.push('ICE PATH TM ROOM');
		routesArray.push('ICE PATH ROCK SMASH ROOM');
	}


	if(document.getElementById('whirl').checked) {
		routesArray.push('WHIRL ISLANDS 1');
		routesArray.push('WHIRL ISLANDS 2');
		routesArray.push('WHIRL ISLANDS 3');
		routesArray.push('WHIRL ISLANDS 4');
		routesArray.push('WHIRL ISLANDS 5');
		routesArray.push('WHIRL ISLANDS 6');
		routesArray.push('WHIRL ISLANDS 7');
		routesArray.push('WHIRL ISLANDS 8');
		routesArray.push('WHIRL ISLANDS 1 SURFING');
		routesArray.push('WHIRL ISLANDS 2 SURFING');
		routesArray.push('WHIRL ISLANDS 3 SURFING');
	}

	if(document.getElementById('silver').checked) {
		routesArray.push('SILVER CAVE');
		routesArray.push('SILVER CAVE 1');
		routesArray.push('SILVER CAVE 2');
		routesArray.push('SILVER CAVE 3');
		routesArray.push('SILVER CAVE 4');
		routesArray.push('SILVER CAVE GRASS');
		routesArray.push('SILVER CAVE SURFING');
	}

	if(document.getElementById('fishing').checked) {
		routesArray.push('Fishing 1');
		routesArray.push('Fishing 2');
		routesArray.push('Fishing 3');
		routesArray.push('Fishing 4');
		routesArray.push('Fishing 5');
		routesArray.push('Fishing 7');
		routesArray.push('Fishing 8');
		routesArray.push('Fishing 9');
		routesArray.push('Fishing 10');
		routesArray.push('Fishing 11');
		routesArray.push('Fishing 12');
	}

	if(document.getElementById('headbutt').checked) {
		routesArray.push('Headbutt Trees 1');
		routesArray.push('Headbutt Trees 2');
		routesArray.push('Headbutt Trees 3');
		routesArray.push('Headbutt Trees 4');
		routesArray.push('Headbutt Trees 5');
		routesArray.push('Headbutt Trees 6');
		routesArray.push('Headbutt Trees 7');
		routesArray.push('Headbutt Trees 8');
		routesArray.push('Headbutt Trees 9');
		routesArray.push('Headbutt Trees 10');
		routesArray.push('Headbutt Trees 11');
		routesArray.push('Headbutt Trees 12');
	}

	if(document.getElementById('swarms').checked) {
		routesArray.push('DARK CAVE SWARM');
		routesArray.push('ROUTE 35 SWARM');
		routesArray.push('Fishing 6');
	}

	return routesArray;
}

function generateTradesArray(){
	tradesArray = [];
	if(document.getElementById('abra').checked) tradesArray.push('ABRA');
	if(document.getElementById('bellsprout').checked) tradesArray.push('BELLSPROUT');
	if(document.getElementById('krabby').checked) tradesArray.push('KRABBY');
	if(document.getElementById('dragonair').checked) tradesArray.push('DRAGONAIR');
	if(document.getElementById('haunter').checked) tradesArray.push('HAUNTER');
	if(document.getElementById('dugtrio').checked) tradesArray.push('DUGTRIO');
	if(document.getElementById('chansey').checked) tradesArray.push('CHANSEY');
	return tradesArray;
}

function generateLegalStaticsArray(){
	staticsArray = [];
	if(document.getElementById('lapras').checked) staticsArray.push('LAPRAS');
	if(document.getElementById('lugia').checked) staticsArray.push('LUGIA');
	if(document.getElementById('gyarados').checked) staticsArray.push('GYARADOS');
	if(document.getElementById('sudowoodo').checked) staticsArray.push('SUDOWOODO');
	if(document.getElementById('snorlax').checked) staticsArray.push('SNORLAX');
	if(document.getElementById('hooh').checked) staticsArray.push('HO-OH');
	if(document.getElementById('suicune').checked) staticsArray.push('SUICUNE');
	if(document.getElementById('shuckie').checked) staticsArray.push('SHUCKLE');
	if(document.getElementById('tyrogue').checked) staticsArray.push('TYROGUE');
	if(document.getElementById('mysteryegg').checked) staticsArray.push('TOGEPI');
	if(document.getElementById('kenya').checked) staticsArray.push('SPEAROW');
	if(document.getElementById('eevee').checked) staticsArray.push('EEVEE');
	if(document.getElementById('dratini').checked) staticsArray.push('DRATINI');
	if(document.getElementById('roamers').checked) {
		staticsArray.push('RAIKOU');
		staticsArray.push('ENTEI');
	}
	if(document.getElementById('gamecornerjohto').checked) {
		staticsArray.push('ABRA');
		staticsArray.push('CUBONE');
		staticsArray.push('WOBBUFFET');
	}
	if(document.getElementById('gamecornerkanto').checked) {
		staticsArray.push('PIKACHU');
		staticsArray.push('PORYGON');
		staticsArray.push('LARVITAR');
	}
	if(document.getElementById('rockettraps').checked) {
		staticsArray.push('VOLTORB');
		staticsArray.push('GEODUDE');
		staticsArray.push('KOFFING');
	}
	if(document.getElementById('electrodes').checked) {
		staticsArray.push('ELECTRODE');
		staticsArray.push('ELECTRODE(2)');
		staticsArray.push('ELECTRODE(3)');
	}
	if(document.getElementById('oddegg').checked) {
		staticsArray.push('PICHU');
		staticsArray.push('CLEFFA');
		staticsArray.push('IGGLYBUFF');
		staticsArray.push('MAGBY');
		staticsArray.push('SMOOCHUM');
		staticsArray.push('ELEKID');
		staticsArray.push('TYROGUE(2)');
	}
	if(document.getElementById('oddeggshinies').checked) {
		staticsArray.push('PICHU(2)');
		staticsArray.push('CLEFFA(2)');
		staticsArray.push('IGGLYBUFF(2)');
		staticsArray.push('MAGBY(2)');
		staticsArray.push('SMOOCHUM(2)');
		staticsArray.push('ELEKID(2)');
		staticsArray.push('TYROGUE(3)');
	}
	staticsArray.sort(function(a,b){return a-b;});
	return staticsArray;
}

function generateTrainersArray(){
	var trainersArray = mandatoryTrainers;
	if(document.getElementById("leftside").checked) trainersArray = trainersArray.concat(azaleaLeftSide);
	if(document.getElementById("rightside").checked) trainersArray = trainersArray.concat(azaleaRightSide);
	if(document.getElementById("39male").checked) trainersArray = trainersArray.concat(route39male);
	if(document.getElementById("39female").checked) trainersArray = trainersArray.concat(route39female);
	if(document.getElementById("32trainers").checked) trainersArray = trainersArray.concat(route32trainers);
	if(document.getElementById("35trainers").checked) trainersArray = trainersArray.concat(route35trainers);
	if(document.getElementById("lighthousetrainers").checked) trainersArray = trainersArray.concat(lighthousetrainers);
	if(document.getElementById("nptrainers").checked) trainersArray = trainersArray.concat(nationalparktrainers);
	if(document.getElementById("phonetrainers").checked) trainersArray = trainersArray.concat(phonebooktrainers);
	if(document.getElementById("maniacs").checked) trainersArray = trainersArray.concat(pokemaniactrainers);
	if(document.getElementById("hikers").checked) trainersArray = trainersArray.concat(hikertrainers);
	if(document.getElementById("swimmers").checked) trainersArray = trainersArray.concat(swimmertrainers);
	if(document.getElementById("olivinegym").checked) trainersArray = trainersArray.concat(mineralbadgetrainers);
	if(document.getElementById("mahoganygym").checked) trainersArray = trainersArray.concat(glacierbadgetrainers);
	if(document.getElementById("blackthorngym").checked) trainersArray = trainersArray.concat(risingbadgetrainers);
	if(document.getElementById("38lass").checked) trainersArray = trainersArray.concat(calllasstrainer);
	if(document.getElementById("lighthousesailor").checked) trainersArray = trainersArray.concat(callsailortrainer);
	if(document.getElementById("45blackbelt").checked) trainersArray = trainersArray.concat(callblackbelttrainer);
	if(document.getElementById("mortarnerd").checked) trainersArray = trainersArray.concat(mortarnerd);
	if(document.getElementById("eusine").checked) trainersArray = trainersArray.concat(eusine);
	if(document.getElementById("alphpsychic").checked) trainersArray = trainersArray.concat(alphpsychic);
	if(document.getElementById("sproutelders").checked) trainersArray = trainersArray.concat(sprouttower);
	if(document.getElementById("elders").checked) trainersArray = trainersArray.concat(tintower);
	return [...new Set(trainersArray)];
}

function generateDisallowedItemsArray(){
	var disallowedItemsArray = [];
	if(!document.getElementById("waterfallwhirlpoolitems").checked) {
		disallowedItemsArray = disallowedItemsArray.concat(mtMortarWaterfallLockedItems);
		disallowedItemsArray = disallowedItemsArray.concat(whirlpoolWaterfallLockedLocations);
	}
	if(!document.getElementById("whirlislandsitems").checked) {
		disallowedItemsArray = disallowedItemsArray.concat(whirlIslandsLockedLocations);
	}
	if(!document.getElementById("dragonsdenitems").checked) {
		disallowedItemsArray = disallowedItemsArray.concat(dragonsDenLockedLocations);
	}
	if(!document.getElementById("mortaritems").checked) disallowedItemsArray = disallowedItemsArray.concat(["MT.MORTAR", "MT.MORTAR (STRENGTH AND/OR WATERFALL-LOCKED)"]);
	if(!document.getElementById("darkcaveitems").checked) disallowedItemsArray = disallowedItemsArray.concat(darkCaveItems);
	if(!document.getElementById("tinitems").checked) disallowedItemsArray.push("TIN TOWER");
	if(!document.getElementById("bugcatchingitems").checked) disallowedItemsArray.push("BUG CATCHING CONTEST");
	if(!document.getElementById("alphhoohitems").checked) disallowedItemsArray.push("RUINS OF ALPH (HO-OH CHAMBER)");
	if(!document.getElementById("alphhoohitems").checked) disallowedItemsArray.push("RUINS OF ALPH (FLASH CHAMBER)");
	if(!document.getElementById("alphhoohitems").checked) disallowedItemsArray.push("RUINS OF ALPH (WATER STONE CHAMBER)");
	if(!document.getElementById("unionsurfitems").checked) disallowedItemsArray.push("UNION CAVE (SURF-LOCKED)");
	if(!document.getElementById("lighthouseitems").checked) disallowedItemsArray.push("LIGHTHOUSE");
	if(!document.getElementById("hideoutitems").checked) disallowedItemsArray = disallowedItemsArray.concat(hideoutItems);
	if(!document.getElementById("basementitems").checked) disallowedItemsArray = disallowedItemsArray.concat(goldenrodBasementItems);

	return disallowedItemsArray;
}

function locationRenamer(text, isPokemonLocation) {
	if(isPokemonLocation) {
		// Statics
		if (text == "CUBONE")
			return "CUBONE (second Goldenrod Game Corner Pokemon)";
		else if (text == "ABRA")
			return "ABRA (first Goldenrod Game Corner Pokemon)";
		else if (text == "WOBBUFFET")
			return "WOBBUFFET (third Goldenrod Game Corner Pokemon)";
		else if (text == "ELECTRODE")
			return "first ELECTRODE";
		else if (text == "ELECTRODE(2)")
			return "second ELECTRODE";
		else if (text == "ELECTRODE(3)")
			return "third ELECTRODE";
		else if (text == "GEODUDE")
			return "GEODUDE (Rocket Hideout Trap)";
		else if (text == "KOFFING")
			return "KOFFING (Rocket Hideout Trap)";
		else if (text == "VOLTORB")
			return "VOLTORB (Rocket Hideout Trap)";
		// Pokemon locations
		else if (text == "Bug Catching")
			return "BUG CATCHING CONTEST";
		return text
	} else {
	// Item locations
		if (text == "RUINS OF ALPH (3.30)")
			return "RUINS OF ALPH (ESCAPE ROPE CHAMBER)";
		else if (text == "RUINS OF ALPH (3.29)")
			return "RUINS OF ALPH (HO-OH CHAMBER)";
		else if (text == "RUINS OF ALPH (3.32)")
			return "RUINS OF ALPH (FLASH CHAMBER)";
		else if (text == "RUINS OF ALPH (3.32)")
			return "RUINS OF ALPH (WATER STONE CHAMBER)";
		else if (text == "NATIONAL PARK (3.16)")
			return "BUG CATCHING CONTEST";
		else if (text == "GOLDENROD CITY (3.53)")
			return "GOLDENROD UNDERGROUND";
		else if (text == "GOLDENROD CITY (3.54)")
			return "GOLDENROD DEPT. STORE BASEMENT";
		else if (text == "GOLDENROD CITY (3.55)")
			return "GOLDENROD DEPT. STORE BASEMENT";
		else if (text == "GOLDENROD CITY (3.56)")
			return "GOLDENROD DEPT. STORE BASEMENT";
		else if (text == "MAHOGANY TOWN (3.49)" )
			return "ROCKET HIDEOUT";
		else if (text == "MAHOGANY TOWN (3.50)" )
			return "ROCKET HIDEOUT";
		else if (text == "MAHOGANY TOWN (3.51)" )
			return "ROCKET HIDEOUT";
		else if (text == "UNDERGROUND (3.86)")
			return "KANTO UNDERGROUND";
		else if (text == "UNION CAVE (3.39)")
			return "UNION CAVE (SURF-LOCKED)";
		else if (text == "MT. MORTAR (3.58)")
			return "MT.MORTAR (STRENGTH AND/OR WATERFALL-LOCKED)";
		else if (text == "MT. MORTAR (3.59)")
			return "MT.MORTAR (STRENGTH AND/OR WATERFALL-LOCKED)";
		else if (text == "MT. MORTAR (3.60)")
			return "MT.MORTAR (STRENGTH AND/OR WATERFALL-LOCKED)";
		return text.split(" (")[0];
	}
}

function indexOf(text, expression){
	for(var i = 0; i < text.length; ++i){
		if(text[i].includes(expression))
			return i;
	}
	return -1;
}
