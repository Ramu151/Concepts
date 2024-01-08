[
  {
    content:
      'import { render, screen } from \'@testing-library/react\';\r\n\r\nconst RoleExample = () => {\r\n  return (\r\n    <div>\r\n      <a href="/">Link</a>\r\n      <button>Button</button>\r\n      <footer>Contentinfo</footer>\r\n      <h1>heading</h1>\r\n      <header>Banner</header>\r\n      <img alt="description" /> Img\r\n      <input type="checkbox" /> Checkbox\r\n      <input type="number" /> Spinbutton\r\n      <input type="radio" /> Radio\r\n      <input type="text" /> Textbox\r\n      <li>Listitem</li>\r\n      <ul>Listgroup</ul>\r\n    </div>\r\n  );\r\n}\r\nrender(<RoleExample />);',
    type: "code",
    id: "uupc5",
  },
  {
    content:
      "test('can find all element by role', async () => {\r\nrender(<RoleExample />)\r\n  const roles = [\r\n    'link',\r\n    'button',\r\n    'contentinfo',\r\n    'heading',\r\n    'banner',\r\n    'img',\r\n    'checkbox',\r\n    'spinbutton',\r\n    'radio',\r\n    'textbox',\r\n    'listitem',\r\n    'list'\r\n  ]\r\n\r\nfor (let role of roles) {\r\n  const el = screen.getByRole(role)\r\n  expect(el).toBeInTheDocument();\r\n}\r\n\r\n})",
    type: "code",
    id: "6gxf6",
  },
  {
    content:
      '/*\r\nfind button and input field (using htmlfor in label) using accessible name\r\nalso icons like svgs using accessible name\r\n<button><svg/></button>\r\n<button><svg/></button>\r\nin above case we can use a fallback aria-label - purpose of btn\r\n<button arial-label="close"><svg/></button>\r\nscreen.getByRole(\'button\', { name: /close/i})\r\n\r\n*/\r\n\r\nfunction ButtonExample() {\r\n  return (\r\n    <div>\r\n      <button aria-label="signIn"><svg /></button>\r\n      <button aria-label="signout"><svg /></button>\r\n    </div>\r\n  )\r\n}\r\nrender(<ButtonExample />)\r\n\r\n',
    type: "code",
    id: "pebcj",
  },
  {
    content:
      "test('', async() => {\r\n  render(<ButtonExample />)\r\n  const signInBtn = screen.getByRole('button', {name : /signin/i})\r\n  const signOutBtn = screen.getByRole('button', {name : /signout/i})\r\n  // /signin/i - regex and i denotes case neutral\r\n})",
    type: "code",
    id: "g6zc5",
  },
];
