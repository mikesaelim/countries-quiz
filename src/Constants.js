import {standardizeGuess} from "./Standardize";

export const GAME_STATES = {
  IDLE: "IDLE",
  PLAYING: "PLAYING",
  WON: "WON",
  LOST: "LOST"
};

export const COUNTRY_DATA = [
  // Mostly taken from https://en.wikipedia.org/wiki/List_of_sovereign_states
  // plus Kosovo and Taiwan
  {
    "name": "Afghanistan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Albania",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Algeria",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Andorra",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Angola",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Antigua and Barbuda",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Argentina",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Armenia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Australia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Austria",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Azerbaijan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Bahamas",
    "aliases": ["The Bahamas"],
    "markerLatLng": []
  },
  {
    "name": "Bahrain",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Bangladesh",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Barbados",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Belarus",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Belgium",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Belize",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Benin",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Bhutan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Bolivia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Bosnia and Herzegovina",
    "aliases": ["Bosnia-Herzegovina"],
    "markerLatLng": []
  },
  {
    "name": "Botswana",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Brazil",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Brunei",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Bulgaria",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Burkina Faso",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Burundi",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Cambodia",
    "aliases": ["Kampuchea"],
    "markerLatLng": []
  },
  {
    "name": "Cameroon",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Canada",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Cape Verde",
    "aliases": ["Cabo Verde"],
    "markerLatLng": []
  },
  {
    "name": "Central African Republic",
    "aliases": ["CAR"],
    "markerLatLng": []
  },
  {
    "name": "Chad",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Chile",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "China",
    "aliases": ["People's Republic of China", "PRC"],
    "markerLatLng": []
  },
  {
    "name": "Colombia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Comoros",
    "aliases": ["The Comoros"],
    "markerLatLng": []
  },
  {
    "name": "Costa Rica",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Croatia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Cuba",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Cyprus",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Czech Republic",
    "aliases": ["Czechia"],
    "markerLatLng": []
  },
  {
    "name": "Democratic Republic of the Congo",
    "aliases": ["DRC", "DROC", "Congo-Kinshasa"],
    "markerLatLng": []
  },
  {
    "name": "Denmark",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Djibouti",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Dominica",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Dominican Republic",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "East Timor",
    "aliases": ["Timor-Leste"],
    "markerLatLng": []
  },
  {
    "name": "Ecuador",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Egypt",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "El Salvador",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Equatorial Guinea",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Eritrea",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Estonia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Eswatini",
    "aliases": ["Swaziland"],
    "markerLatLng": []
  },
  {
    "name": "Ethiopia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Fiji",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Finland",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "France",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Gabon",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Gambia",
    "aliases": ["The Gambia"],
    "markerLatLng": []
  },
  {
    "name": "Georgia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Germany",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Ghana",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Greece",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Grenada",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Guatemala",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Guinea",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Guinea-Bissau",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Guyana",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Haiti",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Honduras",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Hungary",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Iceland",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "India",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Indonesia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Iran",
    "aliases": ["Persia"],
    "markerLatLng": []
  },
  {
    "name": "Iraq",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Ireland",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Israel",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Italy",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Ivory Coast",
    "aliases": ["Côte d'Ivoire"],
    "markerLatLng": []
  },
  {
    "name": "Jamaica",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Japan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Jordan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Kazakhstan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Kenya",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Kiribati",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Kosovo",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Kuwait",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Kyrgyzstan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Laos",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Latvia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Lebanon",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Lesotho",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Liberia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Libya",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Liechtenstein",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Lithuania",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Luxembourg",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Madagascar",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Malawi",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Malaysia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Maldives",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Mali",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Malta",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Marshall Islands",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Mauritania",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Mauritius",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Mexico",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Micronesia",
    "aliases": ["Federated States of Micronesia", "FSM"],
    "markerLatLng": []
  },
  {
    "name": "Moldova",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Monaco",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Mongolia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Montenegro",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Morocco",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Mozambique",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Myanmar",
    "aliases": ["Burma"],
    "markerLatLng": []
  },
  {
    "name": "Namibia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Nauru",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Nepal",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Netherlands",
    "aliases": ["The Netherlands"],
    "markerLatLng": []
  },
  {
    "name": "New Zealand",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Nicaragua",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Niger",
    "aliases": ["The Niger"],
    "markerLatLng": []
  },
  {
    "name": "Nigeria",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "North Korea",
    "aliases": ["Democratic People's Republic of Korea", "DPRK"],
    "markerLatLng": []
  },
  {
    "name": "North Macedonia",
    "aliases": ["Macedonia"],
    "markerLatLng": []
  },
  {
    "name": "Norway",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Oman",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Pakistan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Palau",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Palestine",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Panama",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Papua New Guinea",
    "aliases": ["PNG"],
    "markerLatLng": []
  },
  {
    "name": "Paraguay",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Peru",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Philippines",
    "aliases": ["The Philippines"],
    "markerLatLng": []
  },
  {
    "name": "Poland",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Portugal",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Qatar",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Republic of the Congo",
    "aliases": ["Congo Republic", "Congo-Brazzaville"],
    "markerLatLng": []
  },
  {
    "name": "Romania",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Russia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Rwanda",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Saint Kitts and Nevis",
    "aliases": ["St. Kitts and Nevis"],
    "markerLatLng": []
  },
  {
    "name": "Saint Lucia",
    "aliases": ["St. Lucia"],
    "markerLatLng": []
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "aliases": ["St. Vincent and the Grenadines"],
    "markerLatLng": []
  },
  {
    "name": "Samoa",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "San Marino",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Saudi Arabia",
    "aliases": ["KSA"],
    "markerLatLng": []
  },
  {
    "name": "Senegal",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Serbia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Seychelles",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Sierra Leone",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Singapore",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Slovakia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Slovenia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Solomon Islands",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Somalia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "South Africa",
    "aliases": ["RSA"],
    "markerLatLng": []
  },
  {
    "name": "South Korea",
    "aliases": ["Republic of Korea", "ROK"],
    "markerLatLng": []
  },
  {
    "name": "South Sudan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Spain",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Sri Lanka",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Sudan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Suriname",
    "aliases": ["Surinam"],
    "markerLatLng": []
  },
  {
    "name": "Sweden",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Switzerland",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Syria",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "São Tomé and Príncipe",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Taiwan",
    "aliases": ["Republic of China", "ROC"],
    "markerLatLng": []
  },
  {
    "name": "Tajikistan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Tanzania",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Thailand",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Togo",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Tonga",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Trinidad and Tobago",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Tunisia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Turkey",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Turkmenistan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Tuvalu",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Uganda",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Ukraine",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "United Arab Emirates",
    "aliases": ["UAE", "Emirates", "The Emirates"],
    "markerLatLng": []
  },
  {
    "name": "United Kingdom",
    "aliases": ["UK", "Britain"],
    "markerLatLng": []
  },
  {
    "name": "United States",
    "aliases": ["United States of America", "US", "USA", "America"],
    "markerLatLng": []
  },
  {
    "name": "Uruguay",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Uzbekistan",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Vanuatu",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Vatican City",
    "aliases": ["Vatican", "The Vatican"],
    "markerLatLng": []
  },
  {
    "name": "Venezuela",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Vietnam",
    "aliases": ["Viet Nam"],
    "markerLatLng": []
  },
  {
    "name": "Yemen",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Zambia",
    "aliases": [],
    "markerLatLng": []
  },
  {
    "name": "Zimbabwe",
    "aliases": [],
    "markerLatLng": []
  }
];

export const COUNTRIES = COUNTRY_DATA.map(c => c.name);

export const ALIAS_TO_COUNTRY = (() => {
  const map = new Map();
  COUNTRY_DATA.forEach(country => {
    map.set(standardizeGuess(country.name), country.name);
    country.aliases.forEach(alias => map.set(standardizeGuess(alias), country.name));
  });
  return map;
})();
