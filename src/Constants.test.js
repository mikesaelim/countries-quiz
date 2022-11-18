import { COUNTRY_DATA, COUNTRIES, ALIAS_TO_COUNTRY, MAP_LATLNG_BOUNDS } from "./Constants";
import { standardizeGuess } from "./Standardize";

const EXPECTED_NUMBER_OF_COUNTRIES = 197;

describe("COUNTRY_DATA", () => {
  test("has the correct number of countries", () => {
    expect(COUNTRY_DATA.length).toEqual(EXPECTED_NUMBER_OF_COUNTRIES);
  });

  test("has no duplicated country names or aliases, after standardization", () => {
    const allStrings = [];
    COUNTRY_DATA.forEach(c => {
      allStrings.push(standardizeGuess(c.name));
      c.aliases.forEach(alias => allStrings.push(standardizeGuess(alias)));
    });

    expect((new Set(allStrings)).size).toEqual(allStrings.length);
  });

  test("is defined with country names in alphabetical order", () => {
    // This isn't necessary for the correctness of the game, but it helps me maintain the list
    const countryNames = COUNTRY_DATA.map(c => c.name);
    expect([...countryNames].sort()).toEqual(countryNames);
  });

  test("has valid marker positions for each country", () => {
    const minLatitude = MAP_LATLNG_BOUNDS[0][0];
    const maxLatitude = MAP_LATLNG_BOUNDS[1][0];
    const minLongitude = MAP_LATLNG_BOUNDS[0][1];
    const maxLongitude = MAP_LATLNG_BOUNDS[1][1];

    COUNTRY_DATA.forEach(c => {
      expect(c.markerLatLng).toBeInstanceOf(Array);
      expect(c.markerLatLng.length).toEqual(2);
      expect(c.markerLatLng[0]).toBeGreaterThan(minLatitude);
      expect(c.markerLatLng[0]).toBeLessThan(maxLatitude);
      expect(c.markerLatLng[1]).toBeGreaterThan(minLongitude);
      expect(c.markerLatLng[1]).toBeLessThan(maxLongitude);
    });
  });
});

describe("COUNTRIES", () => {
  test("has the correct number of countries", () => {
    expect(COUNTRIES.length).toEqual(EXPECTED_NUMBER_OF_COUNTRIES);
  });

  test("has country names in alphabetical order", () => {
    expect([...COUNTRIES].sort()).toEqual(COUNTRIES);
  });
});

describe("ALIAS_TO_COUNTRY", () => {
  test("has keys that are all standardized", () => {
    for (const key of ALIAS_TO_COUNTRY.keys()) {
      expect(standardizeGuess(key)).toEqual(key);
    }
  });
});
