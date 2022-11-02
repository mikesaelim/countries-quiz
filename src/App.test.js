import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders", () => {
  render(<App />);
  const element = screen.getByText("Can you name all the countries?");
  expect(element).toBeInTheDocument();
});
