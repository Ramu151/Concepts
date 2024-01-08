/**
 * @jest-environment jsdom
 */

/**
 * Pick one component at a time to test
 * Identify important parts of the components
 * write test case to make sure each parts works as expected
 * run test and verify reports
 */

/** in userForm we have name, email user input
 *  and add user button 3 dom elements and 3 user action
 * write a test case to make sure
 * 1. user entered name
 * 2. user entered email
 * 3. on user clicking add user button,
 * onUserAdd to be called
 * */

import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import user from "@testing-library/user-event";
// import "@testing-library/jest-dom";
import UserForm from "./UserForm";
import "@testing-library/jest-dom";

test("it should have two i/p and a btn", async () => {
  render(<UserForm />);
  /**
   * If you have not added the role attribute
   * and you want to identify a specific input field based on its name attribute,
   * you can use the screen.getBy* queries with a selector that matches the name attribute.
   * In this case, you can use screen.getByRole with the 'textbox' role, which is commonly used for input fields,
   * along with the name attribute as an option.
   */
  const inputs = await screen.getAllByRole("textbox");
  const button = await screen.getByRole("button");

  /**Assertion - expect 2 input and btn to be there */
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("on submit calls addUser function ", async () => {
  /**
   * we can also call like
   * <UserForm onUserAdd={() => {}}/>
   * to resolve the fn issue, but what we need
   * to assert is to have email and name passed
   * as params to onUserAdd()
   */

  /** below is another option  
  const userList = []
  const submitCallback = (...args) => {
     userList.push(args);
  }
render(<UserForm onUserAdd=submi tCallback />); 

on submit callback function called with username and email
and pushed into userList array
it's simply keep record of args passed
to verify callback called with args, 
we just need to print the length of userList
expect(userList).tohaveLength(1)
expect(userList[0][0]).toEqual({name: 'rama', email:'ramu123@gmail.com'})
*/
  const onUserAdd = jest.fn();

  render(<UserForm onUserAdd={onUserAdd} />);
  // const button = await screen.findByRole("button", {
  //   name: /Add user/i
  // });
  const [userNameInput, email] = await screen.getAllByRole("textbox");
  const button = await screen.getByRole("button");

  // simulate click name input field and type username
  await user.click(userNameInput);
  await user.keyboard("rama");

  // to clcik emailinput field and enter email
  await user.click(email);
  await user.keyboard("ramu123@gmail.com");

  // click button and call add user function
  await user.click(button);

  /* now for assertion, we expect on submit a function
  to be called with certain arguments 
  here we need to pass a object with username & email
  we need to mock a jest function to keep records of arguments
  passed and how many time it is called
  */

  // expect(onUserAdd).toBeCalled(1);
  expect(onUserAdd).toHaveBeenCalled();
  expect(onUserAdd).toHaveBeenCalledWith({
    name: "rama",
    email: "ramu123@gmail.com",
  });
});

test("get element by proper name", async () => {
  render(<UserForm onUserAdd={() => {}} />);
  const nameInput = screen.getByRole("textbox", { name: /enter email/i });
  const emailInput = screen.getByLabelText(/enter email/i);
  /** logTestingPlaygroundURL -> all our elements in component passed to render
   * can be viewed and inspected to write queries */
  // screen.logTestingPlaygroundURL();

  //screen.debug(); entire dom gets printed in the terminal to view what we have
});

test("reset form input on submit", async () => {
  // mock empty cbk
  render(<UserForm onUserAdd={() => {}} />);
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  await user.click(nameInput);
  await user.keyboard("ramu");
  await user.click(emailInput);
  await user.keyboard("ramu123@gmail.com");
  await user.click(button);
  /**if we dont reset setEmail(""); setName("");
   * onsubmit in userform.js
   * we will recieve ramu on expect(nameInput).toHaveValue("");
   * and test case will fail
   */
  //assertion
  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
