import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { model_portfolios as model } from "./data";
import { UserCards } from "./atoms/userCard";

import "./portfolio.scss";
const PortFolioContext = React.createContext();

const PortFolio = () => {
  const GetPortfolioModel = (ele, arr) => {
    return (
      <PortFolioContext.Provider value={ele}>
        <UserCards name="suresh" />
      </PortFolioContext.Provider>
    );
  };
  const template = model.map((ele, index, arr) => {
    return GetPortfolioModel(ele, arr);
  });

  return <main>{template}</main>;
};

ReactDOM.render(<PortFolio />, document.getElementById("root"));
export { PortFolioContext };
