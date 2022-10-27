export function standardizeGuess(guess) {
    return guess
        .trim()
        .toLowerCase()
        // Removes accents from characters - https://stackoverflow.com/a/37511463
        .normalize("NFD").replace(/\p{Diacritic}/gu, "")
        // Remove anything that isn't alphanumeric or a space
        .replace(/[^\w\s]|_/g, "");
}
