import {standardizeGuess} from "./Standardize";

export const GAME_STATES = {
  IDLE: "IDLE",
  PLAYING: "PLAYING",
  ENDED: "ENDED"
};

export const COUNTRIES_ALIASES = new Map([
  // Mostly taken from https://en.wikipedia.org/wiki/List_of_sovereign_states
  // plus Kosovo and Taiwan
  ["Afghanistan", []],
  ["Albania", []],
  ["Algeria", []],
  ["Andorra", []],
  ["Angola", []],
  ["Antigua and Barbuda", []],
  ["Argentina", []],
  ["Armenia", []],
  ["Australia", []],
  ["Austria", []],
  ["Azerbaijan", []],
  ["Bahamas", ["The Bahamas"]],
  ["Bahrain", []],
  ["Bangladesh", []],
  ["Barbados", []],
  ["Belarus", []],
  ["Belgium", []],
  ["Belize", []],
  ["Benin", []],
  ["Bhutan", []],
  ["Bolivia", []],
  ["Bosnia and Herzegovina", ["Bosnia-Herzegovina"]],
  ["Botswana", []],
  ["Brazil", []],
  ["Brunei", []],
  ["Bulgaria", []],
  ["Burkina Faso", []],
  ["Burundi", []],
  ["Cambodia", ["Kampuchea"]],
  ["Cameroon", []],
  ["Canada", []],
  ["Cape Verde", ["Cabo Verde"]],
  ["Central African Republic", ["CAR"]],
  ["Chad", []],
  ["Chile", []],
  ["China", ["People's Republic of China", "PRC"]],
  ["Colombia", []],
  ["Comoros", ["The Comoros"]],
  ["Costa Rica", []],
  ["Croatia", []],
  ["Cuba", []],
  ["Cyprus", []],
  ["Czech Republic", ["Czechia"]],
  ["Democratic Republic of the Congo", ["DRC", "DROC", "Congo-Kinshasa"]],
  ["Denmark", []],
  ["Djibouti", []],
  ["Dominica", []],
  ["Dominican Republic", []],
  ["East Timor", ["Timor-Leste"]],
  ["Ecuador", []],
  ["Egypt", []],
  ["El Salvador", []],
  ["Equatorial Guinea", []],
  ["Eritrea", []],
  ["Estonia", []],
  ["Eswatini", ["Swaziland"]],
  ["Ethiopia", []],
  ["Fiji", []],
  ["Finland", []],
  ["France", []],
  ["Gabon", []],
  ["Gambia", ["The Gambia"]],
  ["Georgia", []],
  ["Germany", []],
  ["Ghana", []],
  ["Greece", []],
  ["Grenada", []],
  ["Guatemala", []],
  ["Guinea", []],
  ["Guinea-Bissau", []],
  ["Guyana", []],
  ["Haiti", []],
  ["Honduras", []],
  ["Hungary", []],
  ["Iceland", []],
  ["India", []],
  ["Indonesia", []],
  ["Iran", ["Persia"]],
  ["Iraq", []],
  ["Ireland", []],
  ["Israel", []],
  ["Italy", []],
  ["Ivory Coast", ["Côte d'Ivoire"]],
  ["Jamaica", []],
  ["Japan", []],
  ["Jordan", []],
  ["Kazakhstan", []],
  ["Kenya", []],
  ["Kiribati", []],
  ["Kosovo", []],
  ["Kuwait", []],
  ["Kyrgyzstan", []],
  ["Laos", []],
  ["Latvia", []],
  ["Lebanon", []],
  ["Lesotho", []],
  ["Liberia", []],
  ["Libya", []],
  ["Liechtenstein", []],
  ["Lithuania", []],
  ["Luxembourg", []],
  ["Madagascar", []],
  ["Malawi", []],
  ["Malaysia", []],
  ["Maldives", []],
  ["Mali", []],
  ["Malta", []],
  ["Marshall Islands", []],
  ["Mauritania", []],
  ["Mauritius", []],
  ["Mexico", []],
  ["Micronesia", ["Federated States of Micronesia", "FSM"]],
  ["Moldova", []],
  ["Monaco", []],
  ["Mongolia", []],
  ["Montenegro", []],
  ["Morocco", []],
  ["Mozambique", []],
  ["Myanmar", ["Burma"]],
  ["Namibia", []],
  ["Nauru", []],
  ["Nepal", []],
  ["Netherlands", ["The Netherlands"]],
  ["New Zealand", []],
  ["Nicaragua", []],
  ["Niger", ["The Niger"]],
  ["Nigeria", []],
  ["North Korea", ["Democratic People's Republic of Korea", "DPRK"]],
  ["North Macedonia", ["Macedonia"]],
  ["Norway", []],
  ["Oman", []],
  ["Pakistan", []],
  ["Palau", []],
  ["Palestine", []],
  ["Panama", []],
  ["Papua New Guinea", ["PNG"]],
  ["Paraguay", []],
  ["Peru", []],
  ["Philippines", ["The Philippines"]],
  ["Poland", []],
  ["Portugal", []],
  ["Qatar", []],
  ["Republic of the Congo", ["Congo Republic", "Congo-Brazzaville"]],
  ["Romania", []],
  ["Russia", []],
  ["Rwanda", []],
  ["Saint Kitts and Nevis", ["St. Kitts and Nevis"]],
  ["Saint Lucia", ["St. Lucia"]],
  ["Saint Vincent and the Grenadines", ["St. Vincent and the Grenadines"]],
  ["Samoa", []],
  ["San Marino", []],
  ["São Tomé and Príncipe", []],
  ["Saudi Arabia", ["KSA"]],
  ["Senegal", []],
  ["Serbia", []],
  ["Seychelles", []],
  ["Sierra Leone", []],
  ["Singapore", []],
  ["Slovakia", []],
  ["Slovenia", []],
  ["Solomon Islands", []],
  ["Somalia", []],
  ["South Africa", ["RSA"]],
  ["South Korea", ["Republic of Korea", "ROK"]],
  ["South Sudan", []],
  ["Spain", []],
  ["Sri Lanka", []],
  ["Sudan", []],
  ["Suriname", ["Surinam"]],
  ["Sweden", []],
  ["Switzerland", []],
  ["Syria", []],
  ["Taiwan", ["Republic of China", "ROC"]],
  ["Tajikistan", []],
  ["Tanzania", []],
  ["Thailand", []],
  ["Togo", []],
  ["Tonga", []],
  ["Trinidad and Tobago", []],
  ["Tunisia", []],
  ["Turkey", []],
  ["Turkmenistan", []],
  ["Tuvalu", []],
  ["Uganda", []],
  ["Ukraine", []],
  ["United Arab Emirates", ["UAE", "Emirates", "The Emirates"]],
  ["United Kingdom", ["UK", "Britain"]],
  ["United States", ["United States of America", "US", "USA", "America"]],
  ["Uruguay", []],
  ["Uzbekistan", []],
  ["Vanuatu", []],
  ["Vatican City", ["Vatican", "The Vatican"]],
  ["Venezuela", []],
  ["Vietnam", ["Viet Nam"]],
  ["Yemen", []],
  ["Zambia", []],
  ["Zimbabwe", []]
]);

export const ALIAS_TO_COUNTRY = (() => {
  const map = new Map();
  COUNTRIES_ALIASES.forEach((aliases, country) => {
    map.set(standardizeGuess(country), country);
    aliases.forEach(alias => map.set(standardizeGuess(alias), country));
  });
  return map;
})();
