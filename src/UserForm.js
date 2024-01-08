import React, { useState } from "react";

const UserForm = ({ onUserAdd }) => {
  // State to store user input values
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    console.log("name:", name);
    console.log("email:", email);
    // Reset form fields
    onUserAdd({ name, email });
    setEmail("");
    setName("");
  };

  return (
    <div>
      <h2>User Input Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e?.target?.value);
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e?.target?.value);
            }}
            required
          />
        </div>
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default UserForm;
