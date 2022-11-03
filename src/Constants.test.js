import { COUNTRIES_ALIASES, ALIAS_TO_COUNTRY } from "./Constants";
import { standardizeGuess } from "./Standardize";

describe("COUNTRIES_ALIASES", () => {
  test("has the correct number of countries", () => {
    expect(COUNTRIES_ALIASES.size).toEqual(197);
  });

  test("has no duplicated country names or aliases, after standardization", () => {
    const allStrings = [];
    COUNTRIES_ALIASES.forEach((v, k) => {
      allStrings.push(standardizeGuess(k));
      v.forEach(alias => allStrings.push(standardizeGuess(alias)));
    });

    expect((new Set(allStrings)).size).toEqual(allStrings.length);
  });

  test("is defined with country names in alphabetical order", () => {
    // This isn't necessary for the correctness of the game, but it helps me maintain the list
    const keysInInsertionOrder = [...COUNTRIES_ALIASES.keys()];
    expect([...keysInInsertionOrder].sort()).toEqual(keysInInsertionOrder);
  });
});

describe("ALIAS_TO_COUNTRY", () => {
  test("has keys that are all standardized", () => {
    for (const key of ALIAS_TO_COUNTRY.keys()) {
      expect(standardizeGuess(key)).toEqual(key);
    }
  });
});
