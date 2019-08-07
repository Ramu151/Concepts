import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./route";
import { Header } from "./components/header";

const AppComponent = () => {
  return (
    <Router>
      <main>
        <Header />
        <Routes />
        <footer>Footer</footer>
      </main>
    </Router>
  );
};

ReactDOM.render(<AppComponent />, document.getElementById("root"));
