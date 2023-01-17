import { render, screen } from "@testing-library/react";
import { COUNTRIES } from "./Constants";
import TextResults from "./TextResults";

describe("TextResults", () => {
  const guessedCountries = new Set(["Estonia", "Latvia", "Lithuania"]);

  describe("when not showing missed countries", () => {
    test("shows nothing if no countries have been guessed", () => {
      render(
        <TextResults
          guessedCountries={new Set()}
          showMissed={false}
          lastMatch={""}
        />
      );

      expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    });

    test("shows guessed countries and highlights the last guessed country in green", () => {
      render(
        <TextResults
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
    test("shows all countries in alphabetical order", () => {
      render(
        <TextResults
          guessedCountries={guessedCountries}
          showMissed={true}
          lastMatch={"Latvia"}
        />
      );

      const countries = screen.getAllByRole("listitem").map(e => e.textContent);
      expect(countries).toEqual(COUNTRIES);
      expect([...countries].sort()).toEqual(countries);
    });

    test("highlights missed countries in red", () => {
      render(
        <TextResults
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
