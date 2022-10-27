import {standardizeGuess} from './Standardize'

export const GAME_STATES = {
    IDLE: "IDLE",
    PLAYING: "PLAYING",
    ENDED: "ENDED"
};

export const COUNTRIES_ALIASES = new Map([
    ["Czech Republic", ["Czechia"]],
    ["Mali", []]
]);

export const ALIAS_TO_COUNTRY = (() => {
    const map = new Map();
    COUNTRIES_ALIASES.forEach((aliases, country) => {
        map.set(standardizeGuess(country), country);
        aliases.forEach(alias => map.set(standardizeGuess(alias), country));
    });
    return map;
})();
