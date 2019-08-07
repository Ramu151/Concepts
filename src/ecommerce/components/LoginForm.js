import React from "react";
import { FormInput } from "../atoms/formInput";

const LoginForm = () => {
  const handleSubmit = () => {
    console.log("clickedsubmit");
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <FormInput label={true} type="text" />
        <FormInput label={true} type="password" />
        <input type="submit" />
      </form>
    </section>
  );
};

export { LoginForm };
export default LoginForm;
