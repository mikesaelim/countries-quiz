import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpoilerTag from "./SpoilerTag";

test("hides the spoiler text until clicked", () => {
  render(<SpoilerTag>meow</SpoilerTag>);

  const element = screen.getByText("meow");
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass("spoiler");

  userEvent.click(element);
  expect(element).toHaveClass("spoiler-revealed");
});
