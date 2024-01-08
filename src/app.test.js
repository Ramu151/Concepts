import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";
import UserList from "./UserList";
import App from "./app";

test("can recieve new user and show it in a list", async () => {
  render(<App />);
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.keyboard("ramu");
  await user.click(emailInput);
  await user.keyboard("ramu123@gmail.com");

  await user.click(button);

  // screen.debug();
  const name = screen.getByRole("cell", { name: "ramu" });
  const email = screen.getByRole("cell", { name: /ramu123@gmail.com/i });
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
