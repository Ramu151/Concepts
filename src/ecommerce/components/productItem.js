import React from "react";
import { ProductCard } from "../atoms/productCard";
import { HomeContext } from "../pages/home";

const ProductItem = props => {
  return (
    <section className="productSection">
      <HomeContext.Consumer>
        {context => <ProductCard data={[...context]} />}
      </HomeContext.Consumer>
    </section>
  );
};

export { ProductItem };
export default ProductItem;
