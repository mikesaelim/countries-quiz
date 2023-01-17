import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpoilerTag from "./SpoilerTag";

test("hides the spoiler text until clicked", async () => {
  const user = userEvent.setup();
  render(<SpoilerTag>meow</SpoilerTag>);

  const element = screen.getByText("meow");
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass("spoiler");

  await user.click(element);
  expect(element).toHaveClass("spoiler-revealed");
});
