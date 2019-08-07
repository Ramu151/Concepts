import React from "react";

const FormInput = props => {
  return (
    <>
      {props.label ? <label className={props.label}>{props.label}</label> : ""}
      <input value="" type="text" />
    </>
  );
};

export { FormInput };
export default FormInput;
