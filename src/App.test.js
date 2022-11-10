import { render, screen } from '@testing-library/react';

import App from './App';
import userEvent from "@testing-library/user-event";

test("renders the form and subscribe button", () => {
  render(<App />);
  expect(
    screen.getByPlaceholderText("bobloblaw@gmail.com")
  ).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("ensures that the success text is not present when email is not provided and button is clicked", () => {
  render(<App />);
  userEvent.click(screen.getByRole("button"));
  expect(screen.queryByText(/you're subscribed!/i)).not.toBeInTheDocument();
});

test("renders success message when email is submitted", () => {
  render(<App />);
  userEvent.type(
    screen.getByPlaceholderText("bobloblaw@gmail.com"),
    "test@test.com"
  );
  userEvent.click(screen.getByRole("button"));
  expect(screen.getByText(/you're subscribed!/i)).toBeInTheDocument();
});

test("removes value from form after submitted", () => {
  render(<App />);
  userEvent.type(
    screen.getByPlaceholderText("bobloblaw@gmail.com"),
    "test@test.com"
  );
  userEvent.click(screen.getByRole("button"));
  expect(screen.queryByDisplayValue(/test@test.com/i)).not.toBeInTheDocument();
});
