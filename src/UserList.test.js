/** for userList we have 3 tr including the title name email,
 * but we need to simulate and verify only rows belong to <tbody></tbody>
 * getByAllRole("rows") - will return all 3 only
 * to get the row belongs to particular parent, when roles are helpfull
 * we need to use escape hatches
 */

import { render, screen, within } from "@testing-library/react";
import React from "react";
import user from "@testing-library/user-event";
import UserList from "./UserList";

const beforeEach = () => {
  const users = [
    { name: "ramu", email: "ramu123@gmail.com" },
    { name: "tamil", email: "tamil123@gmail.com" },
  ];
  render(<UserList users={users} />);
  return users;
};

test("render email and name list", async () => {
  /** escape hatches - there are situations where we need some fallback
   * where role does not work to query the element
   * 1. data-testid attr can be added to element we need to find
   * {within} from 'testing-library/react'
   * within(screen.getByTestId("user")).getAllByRole('row')
   */
  beforeEach();
  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  /** escape hatch 2
   * conainer - outermost layer added by default for the component rendered
   * it have access to all elements, we can use normal html query selector
   * to locate/ find the element
   */
});

test("escape hatch 2 container", async () => {
  const users = beforeEach();
  //   render(<UserList users={users} />);
  //   const { container } = render(<UserList users={users} />);
  //   const rows1 = container.querySelectorAll("tbody tr");
  //   console.log("rows1 : ", rows1.length);
  //   expect(rows1).toHaveLength(2);

  for (let user of users) {
    console.log("name-----------: ", user.name, " ---email: ", user.email);
    const name = await screen.getByRole("cell", { name: user.name });
    const email = await screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
