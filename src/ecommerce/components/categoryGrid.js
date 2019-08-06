import React from "react";
import { ProductCard } from "../atoms/productCard";

const CategoryGrid = props => {
  const { data } = props;
  console.log(props.data);
  return (
    <>
      <section className="CategoryGridSection">
        {props.data}
        <title>{props.title}</title>
        <ProductCard data={props.items} />
      </section>
    </>
  );
};

export { CategoryGrid };
export default CategoryGrid;
