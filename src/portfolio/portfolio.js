import React, { Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { model_portfolios as model } from "./data";
import "./style.css";

const {Provider, Consumer} = React.createContext();

const PortFolio = () => {
  //const = useState()
  const GetPortfolioModel = (ele, arr) => {
    console.log(ele, arr);
    return (
      <Provider value={ele}>
        <CheckContext name="suresh"/>
      </Provider>
    );
  };
  const template = model.map((ele, index, arr) => {
    return GetPortfolioModel(ele, arr);
  });

  console.log(template);
  return <main>{template}</main>;
};

const CheckContext = (props) => {
  console.log("ON",props);
  return <Consumer>{ (context) => (
    console.log('context',context),
        <section className="pfSection">
          <img src="" alt="" />
          <title>{context.name}</title>
          <div className="pfAttrElement">
            <div className="attrLabelClass">volatility</div>
            <div className="attrValueClass">{context.volatility}</div>
          </div>
          <div className="pfAttrElement">
            <div className="attrLabelClass">currency</div>
            <div className="attrValueClass">{context.currency}</div>
          </div>
          <div className="pfAttrElement">
            <div className="attrLabelClass">mean_return</div>
            <div className="attrValueClass">{context.mean_return}</div>
          </div>
        </section>
  )}</Consumer>
}

ReactDOM.render(<PortFolio />, document.getElementById("root"));
