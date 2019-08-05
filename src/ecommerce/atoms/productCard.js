import React from "react";
import { BrowserRouter, Link, Route } from "react-router";
import { withRouter } from "react-router-dom";
import { HomeContext } from "../pages/home";

const ProductCard = props => {
  //console.log(Object.keys(context),[...context])
  return (
    <HomeContext.Consumer>
      {context => (
        console.log(context),
        (
          <section className="">
            {[...context].map(ele => {
              return (
                <div
                  className="productMenuWrap"
                  style={{ backgroundImage: `url(${ele.imageUrl})` }}
                >
                  <div className="pdtMenu">{ele.title}</div>
                </div>
              );
            })}
          </section>
        )
      )}
    </HomeContext.Consumer>
  );
};

export default ProductCard;
export { ProductCard };
