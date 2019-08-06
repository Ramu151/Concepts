import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { sections } from "./data";
import { ProductItem } from "../components/productItem";
import "../style.scss";
const HomeContext = React.createContext();

const Home = () => {
  return (
    <main>
      <HomeContext.Provider value={sections}>
        <ProductItem />
      </HomeContext.Provider>
    </main>
  );
};

export { HomeContext, Home };
export default Home;
