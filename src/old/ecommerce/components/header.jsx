import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./crown.svg";

const Header = props => {
  const { data } = props;
  console.log(props.data);
  return (
    <>
      <section className="HeaderSection">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="shopLink">
          <Link to="/shop">Shop</Link>
        </div>
        <div className="signInLink">
          <Link to="/signin">Login</Link>
        </div>
      </section>
    </>
  );
};

export { Header };
export default Header;
