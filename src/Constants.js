
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
    let map = new Map();
    COUNTRIES_ALIASES.forEach((aliases, country) => {
        map.set(country.toLowerCase(), country.toLowerCase());
        aliases.forEach(alias => map.set(alias.toLowerCase(), country.toLowerCase()));
    });
    return map;
})();
