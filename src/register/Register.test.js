import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";

test("renders register form", () => {
  render(<Register />);
  const element = screen.getByRole("heading");
  expect(element).toBeInTheDocument();
});

test("should show error message when all the fields are not entered", () => {
  render(<Register />);
  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);
  waitFor(() => {
    const alertElement = screen.findByText("Please fill complete form");
    expect(alertElement).toBeInTheDocument();
  });
});
