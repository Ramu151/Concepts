import React from "react";
import { ProductCard } from "../atoms/productCard";

const ProductItem = props => {
  return (
    <section className="productSection">
      <ProductCard />
    </section>
  );
};

export { ProductItem };
export default ProductItem;
