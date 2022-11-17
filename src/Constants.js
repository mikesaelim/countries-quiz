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
    "markerLatLng": [33.845, 64.959]
  },
  {
    "name": "Albania",
    "aliases": [],
    "markerLatLng": [41.088, 19.757]
  },
  {
    "name": "Algeria",
    "aliases": [],
    "markerLatLng": [28.257, 2.270]
  },
  {
    "name": "Andorra",
    "aliases": [],
    "markerLatLng": [42.523, 1.550]
  },
  {
    "name": "Angola",
    "aliases": [],
    "markerLatLng": [-12.552, 17.384]
  },
  {
    "name": "Antigua and Barbuda",
    "aliases": [],
    "markerLatLng": [17.086, -61.798]
  },
  {
    "name": "Argentina",
    "aliases": [],
    "markerLatLng": [-36.380, -65.695]
  },
  {
    "name": "Armenia",
    "aliases": [],
    "markerLatLng": [40.443, 44.730]
  },
  {
    "name": "Australia",
    "aliases": [],
    "markerLatLng": [-25.407, 134.506]
  },
  {
    "name": "Austria",
    "aliases": [],
    "markerLatLng": [47.494, 14.194]
  },
  {
    "name": "Azerbaijan",
    "aliases": [],
    "markerLatLng": [40.214, 48.303]
  },
  {
    "name": "Bahamas",
    "aliases": ["The Bahamas"],
    "markerLatLng": [24.471, -78.016]
  },
  {
    "name": "Bahrain",
    "aliases": [],
    "markerLatLng": [26.153, 50.523]
  },
  {
    "name": "Bangladesh",
    "aliases": [],
    "markerLatLng": [23.919, 90.319]
  },
  {
    "name": "Barbados",
    "aliases": [],
    "markerLatLng": [13.167, -59.566]
  },
  {
    "name": "Belarus",
    "aliases": [],
    "markerLatLng": [53.405, 27.740]
  },
  {
    "name": "Belgium",
    "aliases": [],
    "markerLatLng": [50.599, 4.553]
  },
  {
    "name": "Belize",
    "aliases": [],
    "markerLatLng": [17.022, -88.577]
  },
  {
    "name": "Benin",
    "aliases": [],
    "markerLatLng": [9.509, 2.510]
  },
  {
    "name": "Bhutan",
    "aliases": [],
    "markerLatLng": [27.337, 90.458]
  },
  {
    "name": "Bolivia",
    "aliases": [],
    "markerLatLng": [-16.887, -64.593]
  },
  {
    "name": "Bosnia and Herzegovina",
    "aliases": ["Bosnia-Herzegovina"],
    "markerLatLng": [43.962, 17.867]
  },
  {
    "name": "Botswana",
    "aliases": [],
    "markerLatLng": [-22.295, 23.922]
  },
  {
    "name": "Brazil",
    "aliases": [],
    "markerLatLng": [-8.674, -51.310]
  },
  {
    "name": "Brunei",
    "aliases": [],
    "markerLatLng": [4.449, 114.854]
  },
  {
    "name": "Bulgaria",
    "aliases": [],
    "markerLatLng": [42.483, 25.514]
  },
  {
    "name": "Burkina Faso",
    "aliases": [],
    "markerLatLng": [12.354, -1.761]
  },
  {
    "name": "Burundi",
    "aliases": [],
    "markerLatLng": [-3.569, 29.877]
  },
  {
    "name": "Cambodia",
    "aliases": ["Kampuchea"],
    "markerLatLng": [12.464, 104.326]
  },
  {
    "name": "Cameroon",
    "aliases": [],
    "markerLatLng": [4.171, 12.106]
  },
  {
    "name": "Canada",
    "aliases": [],
    "markerLatLng": [56.663, -101.551]
  },
  {
    "name": "Cape Verde",
    "aliases": ["Cabo Verde"],
    "markerLatLng": [15.032, -23.586]
  },
  {
    "name": "Central African Republic",
    "aliases": ["CAR"],
    "markerLatLng": [6.466, 20.414]
  },
  {
    "name": "Chad",
    "aliases": [],
    "markerLatLng": [15.006, 18.744]
  },
  {
    "name": "Chile",
    "aliases": [],
    "markerLatLng": [-33.626, -70.847]
  },
  {
    "name": "China",
    "aliases": ["People's Republic of China", "PRC"],
    "markerLatLng": [35.196, 107.400]
  },
  {
    "name": "Colombia",
    "aliases": [],
    "markerLatLng": [3.630, -73.500]
  },
  {
    "name": "Comoros",
    "aliases": ["The Comoros"],
    "markerLatLng": [-11.704, 43.328]
  },
  {
    "name": "Costa Rica",
    "aliases": [],
    "markerLatLng": [10.165, -84.223]
  },
  {
    "name": "Croatia",
    "aliases": [],
    "markerLatLng": [44.874, 15.267]
  },
  {
    "name": "Cuba",
    "aliases": [],
    "markerLatLng": [21.726, -78.917]
  },
  {
    "name": "Cyprus",
    "aliases": [],
    "markerLatLng": [34.817, 33.197]
  },
  {
    "name": "Czech Republic",
    "aliases": ["Czechia"],
    "markerLatLng": [49.840, 14.586]
  },
  {
    "name": "Democratic Republic of the Congo",
    "aliases": ["DRC", "DROC", "Congo-Kinshasa"],
    "markerLatLng": [-2.963, 23.505]
  },
  {
    "name": "Denmark",
    "aliases": [],
    "markerLatLng": [55.548, 9.501]
  },
  {
    "name": "Djibouti",
    "aliases": [],
    "markerLatLng": [11.718, 42.616]
  },
  {
    "name": "Dominica",
    "aliases": [],
    "markerLatLng": [15.417, -61.333]
  },
  {
    "name": "Dominican Republic",
    "aliases": [],
    "markerLatLng": [18.886, -70.276]
  },
  {
    "name": "East Timor",
    "aliases": ["Timor-Leste"],
    "markerLatLng": [-8.725, 126.056]
  },
  {
    "name": "Ecuador",
    "aliases": [],
    "markerLatLng": [-1.430, -78.652]
  },
  {
    "name": "Egypt",
    "aliases": [],
    "markerLatLng": [27.124, 29.881]
  },
  {
    "name": "El Salvador",
    "aliases": [],
    "markerLatLng": [13.545, -88.632]
  },
  {
    "name": "Equatorial Guinea",
    "aliases": [],
    "markerLatLng": [1.459, 10.434]
  },
  {
    "name": "Eritrea",
    "aliases": [],
    "markerLatLng": [15.341, 38.437]
  },
  {
    "name": "Estonia",
    "aliases": [],
    "markerLatLng": [58.736, 25.552]
  },
  {
    "name": "Eswatini",
    "aliases": ["Swaziland"],
    "markerLatLng": [-26.627, 31.467]
  },
  {
    "name": "Ethiopia",
    "aliases": [],
    "markerLatLng": [8.779, 39.501]
  },
  {
    "name": "Fiji",
    "aliases": [],
    "markerLatLng": [-17.852, 177.988]
  },
  {
    "name": "Finland",
    "aliases": [],
    "markerLatLng": [61.732, 25.646]
  },
  {
    "name": "France",
    "aliases": [],
    "markerLatLng": [46.861, 1.740]
  },
  {
    "name": "Gabon",
    "aliases": [],
    "markerLatLng": [-0.524, 11.253]
  },
  {
    "name": "Gambia",
    "aliases": ["The Gambia"],
    "markerLatLng": [13.382, -16.331]
  },
  {
    "name": "Georgia",
    "aliases": [],
    "markerLatLng": [42.021, 43.734]
  },
  {
    "name": "Germany",
    "aliases": [],
    "markerLatLng": [51.552, 10.048]
  },
  {
    "name": "Ghana",
    "aliases": [],
    "markerLatLng": [7.867, -1.181]
  },
  {
    "name": "Greece",
    "aliases": [],
    "markerLatLng": [39.081, 22.573]
  },
  {
    "name": "Grenada",
    "aliases": [],
    "markerLatLng": [12.106, -61.678]
  },
  {
    "name": "Guatemala",
    "aliases": [],
    "markerLatLng": [14.873, -90.588]
  },
  {
    "name": "Guinea",
    "aliases": [],
    "markerLatLng": [10.901, -11.135]
  },
  {
    "name": "Guinea-Bissau",
    "aliases": [],
    "markerLatLng": [11.978, -15.112]
  },
  {
    "name": "Guyana",
    "aliases": [],
    "markerLatLng": [5.656, -58.932]
  },
  {
    "name": "Haiti",
    "aliases": [],
    "markerLatLng": [18.842, -72.808]
  },
  {
    "name": "Honduras",
    "aliases": [],
    "markerLatLng": [14.786, -87.116]
  },
  {
    "name": "Hungary",
    "aliases": [],
    "markerLatLng": [46.743, 19.406]
  },
  {
    "name": "Iceland",
    "aliases": [],
    "markerLatLng": [64.739, -18.387]
  },
  {
    "name": "India",
    "aliases": [],
    "markerLatLng": [22.339, 79.462]
  },
  {
    "name": "Indonesia",
    "aliases": [],
    "markerLatLng": [-4.700, 121.540]
  },
  {
    "name": "Iran",
    "aliases": ["Persia"],
    "markerLatLng": [31.942, 53.974]
  },
  {
    "name": "Iraq",
    "aliases": [],
    "markerLatLng": [32.314, 43.427]
  },
  {
    "name": "Ireland",
    "aliases": [],
    "markerLatLng": [52.862, -8.433]
  },
  {
    "name": "Israel",
    "aliases": [],
    "markerLatLng": [31.085, 34.792]
  },
  {
    "name": "Italy",
    "aliases": [],
    "markerLatLng": [42.819, 12.397]
  },
  {
    "name": "Ivory Coast",
    "aliases": ["Côte d'Ivoire"],
    "markerLatLng": [7.328, -5.642]
  },
  {
    "name": "Jamaica",
    "aliases": [],
    "markerLatLng": [18.065, -77.365]
  },
  {
    "name": "Japan",
    "aliases": [],
    "markerLatLng": [35.922, 138.456]
  },
  {
    "name": "Jordan",
    "aliases": [],
    "markerLatLng": [31.474, 36.794]
  },
  {
    "name": "Kazakhstan",
    "aliases": [],
    "markerLatLng": [48.158, 67.244]
  },
  {
    "name": "Kenya",
    "aliases": [],
    "markerLatLng": [0.310, 37.921]
  },
  {
    "name": "Kiribati",
    "aliases": [],
    "markerLatLng": [1.350, 173.039]
  },
  {
    "name": "Kosovo",
    "aliases": [],
    "markerLatLng": [42.541, 20.916]
  },
  {
    "name": "Kuwait",
    "aliases": [],
    "markerLatLng": [29.236, 47.615]
  },
  {
    "name": "Kyrgyzstan",
    "aliases": [],
    "markerLatLng": [41.372, 74.250]
  },
  {
    "name": "Laos",
    "aliases": [],
    "markerLatLng": [19.544, 102.519]
  },
  {
    "name": "Latvia",
    "aliases": [],
    "markerLatLng": [56.910, 25.784]
  },
  {
    "name": "Lebanon",
    "aliases": [],
    "markerLatLng": [34.161, 36.012]
  },
  {
    "name": "Lesotho",
    "aliases": [],
    "markerLatLng": [-29.743, 28.220]
  },
  {
    "name": "Liberia",
    "aliases": [],
    "markerLatLng": [6.165, -9.305]
  },
  {
    "name": "Libya",
    "aliases": [],
    "markerLatLng": [26.980, 17.740]
  },
  {
    "name": "Liechtenstein",
    "aliases": [],
    "markerLatLng": [47.148, 9.559]
  },
  {
    "name": "Lithuania",
    "aliases": [],
    "markerLatLng": [55.443, 23.587]
  },
  {
    "name": "Luxembourg",
    "aliases": [],
    "markerLatLng": [49.682, 6.096]
  },
  {
    "name": "Madagascar",
    "aliases": [],
    "markerLatLng": [-21.194, 46.297]
  },
  {
    "name": "Malawi",
    "aliases": [],
    "markerLatLng": [-13.653, 34.168]
  },
  {
    "name": "Malaysia",
    "aliases": [],
    "markerLatLng": [3.480, 102.164]
  },
  {
    "name": "Maldives",
    "aliases": [],
    "markerLatLng": [-0.633, 73.102]
  },
  {
    "name": "Mali",
    "aliases": [],
    "markerLatLng": [17.817, -1.635]
  },
  {
    "name": "Malta",
    "aliases": [],
    "markerLatLng": [35.879, 14.444]
  },
  {
    "name": "Marshall Islands",
    "aliases": [],
    "markerLatLng": [7.176, 168.602]
  },
  {
    "name": "Mauritania",
    "aliases": [],
    "markerLatLng": [20.197, -10.433]
  },
  {
    "name": "Mauritius",
    "aliases": [],
    "markerLatLng": [-20.314, 57.521]
  },
  {
    "name": "Mexico",
    "aliases": [],
    "markerLatLng": [23.713, -102.490]
  },
  {
    "name": "Micronesia",
    "aliases": ["Federated States of Micronesia", "FSM"],
    "markerLatLng": [6.827, 158.055]
  },
  {
    "name": "Moldova",
    "aliases": [],
    "markerLatLng": [47.537, 28.484]
  },
  {
    "name": "Monaco",
    "aliases": [],
    "markerLatLng": [43.733, 7.420]
  },
  {
    "name": "Mongolia",
    "aliases": [],
    "markerLatLng": [46.822, 102.563]
  },
  {
    "name": "Montenegro",
    "aliases": [],
    "markerLatLng": [42.851, 19.324]
  },
  {
    "name": "Morocco",
    "aliases": [],
    "markerLatLng": [31.847, -6.459]
  },
  {
    "name": "Mozambique",
    "aliases": [],
    "markerLatLng": [-17.762, 35.289]
  },
  {
    "name": "Myanmar",
    "aliases": ["Burma"],
    "markerLatLng": [21.354, 96.112]
  },
  {
    "name": "Namibia",
    "aliases": [],
    "markerLatLng": [-23.112, 17.271]
  },
  {
    "name": "Nauru",
    "aliases": [],
    "markerLatLng": [-0.529, 166.939]
  },
  {
    "name": "Nepal",
    "aliases": [],
    "markerLatLng": [28.165, 84.049]
  },
  {
    "name": "Netherlands",
    "aliases": ["The Netherlands"],
    "markerLatLng": [52.015, 5.053]
  },
  {
    "name": "New Zealand",
    "aliases": [],
    "markerLatLng": [-42.402, 172.565]
  },
  {
    "name": "Nicaragua",
    "aliases": [],
    "markerLatLng": [12.875, -85.134]
  },
  {
    "name": "Niger",
    "aliases": ["The Niger"],
    "markerLatLng": [17.236, 9.202]
  },
  {
    "name": "Nigeria",
    "aliases": [],
    "markerLatLng": [8.637, 7.796]
  },
  {
    "name": "North Korea",
    "aliases": ["Democratic People's Republic of Korea", "DPRK"],
    "markerLatLng": [39.669, 126.641]
  },
  {
    "name": "North Macedonia",
    "aliases": ["Macedonia"],
    "markerLatLng": [41.549, 21.675]
  },
  {
    "name": "Norway",
    "aliases": [],
    "markerLatLng": [61.731, 9.029]
  },
  {
    "name": "Oman",
    "aliases": [],
    "markerLatLng": [19.876, 57.018]
  },
  {
    "name": "Pakistan",
    "aliases": [],
    "markerLatLng": [29.751, 69.850]
  },
  {
    "name": "Palau",
    "aliases": [],
    "markerLatLng": [7.481, 134.585]
  },
  {
    "name": "Palestine",
    "aliases": [],
    "markerLatLng": [31.842, 35.400]
  },
  {
    "name": "Panama",
    "aliases": [],
    "markerLatLng": [8.700, -80.144]
  },
  {
    "name": "Papua New Guinea",
    "aliases": ["PNG"],
    "markerLatLng": [-6.747, 144.281]
  },
  {
    "name": "Paraguay",
    "aliases": [],
    "markerLatLng": [-23.354, -58.479]
  },
  {
    "name": "Peru",
    "aliases": [],
    "markerLatLng": [-10.579, -75.611]
  },
  {
    "name": "Philippines",
    "aliases": ["The Philippines"],
    "markerLatLng": [12.409, 123.019]
  },
  {
    "name": "Poland",
    "aliases": [],
    "markerLatLng": [52.747, 19.115]
  },
  {
    "name": "Portugal",
    "aliases": [],
    "markerLatLng": [39.637, -8.395]
  },
  {
    "name": "Qatar",
    "aliases": [],
    "markerLatLng": [25.240, 51.264]
  },
  {
    "name": "Republic of the Congo",
    "aliases": ["Congo Republic", "Congo-Brazzaville"],
    "markerLatLng": [-1.019, 15.371]
  },
  {
    "name": "Romania",
    "aliases": [],
    "markerLatLng": [45.778, 25.017]
  },
  {
    "name": "Russia",
    "aliases": [],
    "markerLatLng": [57.479, 44.128]
  },
  {
    "name": "Rwanda",
    "aliases": [],
    "markerLatLng": [-1.939, 29.817]
  },
  {
    "name": "Saint Kitts and Nevis",
    "aliases": ["St. Kitts and Nevis"],
    "markerLatLng": [17.323, -62.732]
  },
  {
    "name": "Saint Lucia",
    "aliases": ["St. Lucia"],
    "markerLatLng": [13.881, -60.964]
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "aliases": ["St. Vincent and the Grenadines"],
    "markerLatLng": [13.235, -61.195]
  },
  {
    "name": "Samoa",
    "aliases": [],
    "markerLatLng": [-13.673, -172.447]
  },
  {
    "name": "San Marino",
    "aliases": [],
    "markerLatLng": [43.925, 12.460]
  },
  {
    "name": "Saudi Arabia",
    "aliases": ["KSA"],
    "markerLatLng": [23.602, 45.012]
  },
  {
    "name": "Senegal",
    "aliases": [],
    "markerLatLng": [14.412, -14.609]
  },
  {
    "name": "Serbia",
    "aliases": [],
    "markerLatLng": [44.071, 20.813]
  },
  {
    "name": "Seychelles",
    "aliases": [],
    "markerLatLng": [-4.729, 55.502]
  },
  {
    "name": "Sierra Leone",
    "aliases": [],
    "markerLatLng": [8.471, -11.973]
  },
  {
    "name": "Singapore",
    "aliases": [],
    "markerLatLng": [1.331, 103.878]
  },
  {
    "name": "Slovakia",
    "aliases": [],
    "markerLatLng": [48.589, 19.275]
  },
  {
    "name": "Slovenia",
    "aliases": [],
    "markerLatLng": [45.935, 14.573]
  },
  {
    "name": "Solomon Islands",
    "aliases": [],
    "markerLatLng": [-9.626, 160.176]
  },
  {
    "name": "Somalia",
    "aliases": [],
    "markerLatLng": [3.866, 45.539]
  },
  {
    "name": "South Africa",
    "aliases": ["RSA"],
    "markerLatLng": [-30.661, 24.193]
  },
  {
    "name": "South Korea",
    "aliases": ["Republic of Korea", "ROK"],
    "markerLatLng": [36.263, 127.858]
  },
  {
    "name": "South Sudan",
    "aliases": [],
    "markerLatLng": [7.321, 29.917]
  },
  {
    "name": "Spain",
    "aliases": [],
    "markerLatLng": [39.639, -3.137]
  },
  {
    "name": "Sri Lanka",
    "aliases": [],
    "markerLatLng": [7.193, 80.795]
  },
  {
    "name": "Sudan",
    "aliases": [],
    "markerLatLng": [15.921, 30.532]
  },
  {
    "name": "Suriname",
    "aliases": ["Surinam"],
    "markerLatLng": [4.209, -55.865]
  },
  {
    "name": "Sweden",
    "aliases": [],
    "markerLatLng": [61.585, 16.023]
  },
  {
    "name": "Switzerland",
    "aliases": [],
    "markerLatLng": [46.815, 7.717]
  },
  {
    "name": "Syria",
    "aliases": [],
    "markerLatLng": [35.082, 38.552]
  },
  {
    "name": "São Tomé and Príncipe",
    "aliases": [],
    "markerLatLng": [0.210, 6.587]
  },
  {
    "name": "Taiwan",
    "aliases": ["Republic of China", "ROC"],
    "markerLatLng": [23.893, 121.106]
  },
  {
    "name": "Tajikistan",
    "aliases": [],
    "markerLatLng": [38.655, 69.949]
  },
  {
    "name": "Tanzania",
    "aliases": [],
    "markerLatLng": [-6.407, 34.824]
  },
  {
    "name": "Thailand",
    "aliases": [],
    "markerLatLng": [14.732, 100.771]
  },
  {
    "name": "Togo",
    "aliases": [],
    "markerLatLng": [8.433, 1.081]
  },
  {
    "name": "Tonga",
    "aliases": [],
    "markerLatLng": [-21.188, -175.189]
  },
  {
    "name": "Trinidad and Tobago",
    "aliases": [],
    "markerLatLng": [10.425, -61.281]
  },
  {
    "name": "Tunisia",
    "aliases": [],
    "markerLatLng": [34.325, 9.660]
  },
  {
    "name": "Turkey",
    "aliases": [],
    "markerLatLng": [39.066, 35.060]
  },
  {
    "name": "Turkmenistan",
    "aliases": [],
    "markerLatLng": [38.895, 58.962]
  },
  {
    "name": "Tuvalu",
    "aliases": [],
    "markerLatLng": [-8.521, 179.173]
  },
  {
    "name": "Uganda",
    "aliases": [],
    "markerLatLng": [1.444, 32.186]
  },
  {
    "name": "Ukraine",
    "aliases": [],
    "markerLatLng": [49.206, 31.152]
  },
  {
    "name": "United Arab Emirates",
    "aliases": ["UAE", "Emirates", "The Emirates"],
    "markerLatLng": [23.743, 54.122]
  },
  {
    "name": "United Kingdom",
    "aliases": ["UK", "Britain"],
    "markerLatLng": [52.666, -1.601]
  },
  {
    "name": "United States",
    "aliases": ["United States of America", "US", "USA", "America"],
    "markerLatLng": [41.882, -87.628]
  },
  {
    "name": "Uruguay",
    "aliases": [],
    "markerLatLng": [-32.953, -56.165]
  },
  {
    "name": "Uzbekistan",
    "aliases": [],
    "markerLatLng": [41.459, 64.213]
  },
  {
    "name": "Vanuatu",
    "aliases": [],
    "markerLatLng": [-15.287, 166.908]
  },
  {
    "name": "Vatican City",
    "aliases": ["Vatican", "The Vatican"],
    "markerLatLng": [41.903, 12.453]
  },
  {
    "name": "Venezuela",
    "aliases": [],
    "markerLatLng": [7.276, -66.252]
  },
  {
    "name": "Vietnam",
    "aliases": ["Viet Nam"],
    "markerLatLng": [13.987, 108.782]
  },
  {
    "name": "Yemen",
    "aliases": [],
    "markerLatLng": [15.407, 47.218]
  },
  {
    "name": "Zambia",
    "aliases": [],
    "markerLatLng": [-14.424, 28.093]
  },
  {
    "name": "Zimbabwe",
    "aliases": [],
    "markerLatLng": [-19.177, 29.938]
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
