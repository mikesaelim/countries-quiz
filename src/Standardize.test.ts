import { standardizeGuess } from "./Standardize";

describe("standardizeGuess", () => {
  test("trims leading and trailing spaces", () => {
    expect(standardizeGuess("canada")).toEqual("canada");
    expect(standardizeGuess("  canada ")).toEqual("canada");
    expect(standardizeGuess(" ")).toEqual("");
  });

  test("standardizes to lowercase letters without accents or punctuation", () => {
    expect(standardizeGuess("United States")).toEqual("united states");
    expect(standardizeGuess("People's Republic of China")).toEqual("peoples republic of china");
    expect(standardizeGuess("Côte d'Ivoire")).toEqual("cote divoire");
    expect(standardizeGuess("St. Lucia")).toEqual("st lucia");
    expect(standardizeGuess("São Tomé and Príncipe")).toEqual("sao tome and principe");
  });
});
