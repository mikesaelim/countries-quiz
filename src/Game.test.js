import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { COUNTRIES_ALIASES } from "./Constants";
import Game from "./Game";

describe("Game", () => {
  test("starts in the idle state", () => {
    render(<Game />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
    expect(input).toBeDisabled();
    expect(screen.getByText("Start!", { selector: "button" })).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  describe("in the playing state", () => {
    test("accepts correct guesses, and allows the game to be ended early", async () => {
      const user = userEvent.setup();
      render(<Game />);
      await user.click(screen.getByText("Start!"));

      let input = screen.getByRole("textbox");
      expect(input).toHaveValue("");
      expect(input).toBeEnabled();
      expect(screen.queryByRole("listitem")).not.toBeInTheDocument();

      // Entering part of a country name doesn't do anything yet
      await user.type(input, "swed");
      expect(input).toHaveValue("swed");
      expect(screen.queryByRole("listitem")).not.toBeInTheDocument();

      // Entering a full country name is accepted
      await user.type(input, "en");
      expect(input).toHaveValue("");
      expect(screen.getByText("Sweden")).toBeInTheDocument();

      // Nothing happens when the country name is entered again
      await user.type(input, "sweden");
      expect(input).toHaveValue("sweden");

      // Ending the game early
      await user.click(screen.getByText("End"));
      input = screen.getByRole("textbox");
      expect(input).toHaveValue("");
      expect(input).toBeDisabled();
      expect(screen.getByText("Reset", { selector: "button" })).toBeInTheDocument();
      expect(screen.getByText("Norway")).toBeInTheDocument();
      expect(screen.getAllByRole("listitem").length).toEqual(COUNTRIES_ALIASES.size);
    });

    test("ends when all countries are guessed", async () => {
      const initialGuessedCountries = new Set([...COUNTRIES_ALIASES.keys()].filter(c => c !== "San Marino"));

      const user = userEvent.setup();
      render(<Game initialGuessedCountries={initialGuessedCountries} />);
      await user.click(screen.getByText("Start!"));

      const input = screen.getByRole("textbox");
      await user.type(input, "San Marino");

      expect(screen.getByText("Reset", { selector: "button" })).toBeInTheDocument();
      expect(screen.getAllByRole("listitem").length).toEqual(COUNTRIES_ALIASES.size);
    });
  });

  describe("in the ended state", () => {
    test("resets to the idle state when the reset button is pressed", async () => {
      const user = userEvent.setup();
      render(<Game />);
      await user.click(screen.getByText("Start!"));
      await user.click(screen.getByText("End"));

      const resetButton = screen.getByText("Reset");
      expect(resetButton).toBeInTheDocument();
      expect(screen.getAllByRole("listitem").length).toEqual(COUNTRIES_ALIASES.size);

      await user.click(resetButton);
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue("");
      expect(input).toBeDisabled();
      expect(screen.getByText("Start!", { selector: "button" })).toBeInTheDocument();
      expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    });
  });
});
