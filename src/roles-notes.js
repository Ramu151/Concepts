/**it will be in cascading manner
 * top most element can be accessed by below elements
 * but upper element cannot access lower in RTL book
 *  */
/** in RTL we can render component even outside test
 *  to preview the component
 */

/**  */

import { render, screen } from "@testing-library/react";

const RoleExample = () => {
  return (
    <div>
      <a href="/">Link</a>
      <button>Button</button>
      <footer>Contentinfo</footer>
      <h1>heading</h1>
      <header>Banner</header>
      <img alt="description" /> Img
      <input type="checkbox" /> Checkbox
      <input type="number" /> Spinbutton
      <input type="radio" /> Radio
      <input type="text" /> Textbox
      <li>Listitem</li>
      <ul>Listgroup</ul>
    </div>
  );
};
render(<RoleExample />);

test("can find all element by role", async () => {
  render(<RoleExample />);
  const roles = [
    "link",
    "button",
    "contentinfo",
    "heading",
    "banner",
    "img",
    "checkbox",
    "spinbutton",
    "radio",
    "textbox",
    "listitem",
    "list",
  ];

  for (let role of roles) {
    const el = screen.getByRole(role);
    expect(el).toBeInTheDocument();
  }
});

/*
find button and input field (using htmlfor in label) using accessible name
also icons like svgs using accessible name
<button><svg/></button>
<button><svg/></button>
in above case we can use a fallback aria-label - purpose of btn
<button arial-label="close"><svg/></button>
screen.getByRole('button', { name: /close/i})

*/

function ButtonExample() {
  return (
    <div>
      <button aria-label="signIn">
        <svg />
      </button>
      <button aria-label="signout">
        <svg />
      </button>
    </div>
  );
}
render(<ButtonExample />);

test("", async () => {
  render(<ButtonExample />);
  const signInBtn = screen.getByRole("button", { name: /signin/i });
  const signOutBtn = screen.getByRole("button", { name: /signout/i });
  // /signin/i - regex and i denotes case neutral
});
