import { render, screen } from "@testing-library/react";
import { COUNTRIES } from "./Constants";
import MapResults from "./MapResults";

describe("MapResults", () => {
  const guessedCountries = new Set(["Estonia", "Latvia", "Lithuania"]);

  describe("when not showing missed countries", () => {
    test("shows question marks for the countries if no countries have been guessed", () => {
      render(
        <MapResults
          guessedCountries={new Set()}
          showMissed={false}
          lastMatch={""}
        />
      );

      expect(screen.queryAllByAltText("Marker").length).toEqual(COUNTRIES.length);
    });

    test("shows guessed countries and highlights the last guessed country in green", () => {
      render(
        <MapResults
          guessedCountries={guessedCountries}
          showMissed={false}
          lastMatch={"Latvia"}
        />
      );

      expect(screen.getByText("Estonia")).not.toHaveClass("last-match");
      expect(screen.getByText("Latvia")).toHaveClass("last-match");
      expect(screen.getByText("Lithuania")).not.toHaveClass("last-match");
      expect(screen.queryByText("Belarus")).not.toBeInTheDocument();
    });
  });

  describe("when showing missed countries", () => {
    test("shows all countries and highlights missed countries in red", () => {
      render(
        <MapResults
          guessedCountries={guessedCountries}
          showMissed={true}
          lastMatch={"Latvia"}
        />
      );

      guessedCountries.forEach(country => {
        expect(screen.getByText(country)).not.toHaveClass("missed");
      });

      let missedCountries = COUNTRIES.filter(c => !guessedCountries.has(c));
      missedCountries.forEach(country => {
        expect(screen.getByText(country)).toHaveClass("missed");
      });
    });
  });
});
