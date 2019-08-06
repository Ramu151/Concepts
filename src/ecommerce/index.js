import React from "react";
import ReactDOM from "react-dom";
import { Link, Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./route";

const AppComponent = () => {
  return (
    <main>
      <header>Header</header>
      <Router>
        <Routes />
      </Router>
      <footer>Footer</footer>
    </main>
  );
};

ReactDOM.render(<AppComponent />, document.getElementById("root"));
