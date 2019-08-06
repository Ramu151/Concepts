import React from "react";
import { ProductCard } from "../atoms/productCard";

const CategoryGrid = props => {
  return (
    <section className="CategoryGridSection">
      <title>{props.title}</title>
      <ProductCard data={props.items} />
    </section>
  );
};

export { CategoryGrid };
export default CategoryGrid;
