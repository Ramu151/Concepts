import React from "react";
import { CategoryGrid } from "../components/categoryGrid";
import { SHOP_DATA } from "../store";

const Shop = () => {
  return (
    <main>
      <CategoryGrid data={[...SHOP_DATA]} />
      <div>Shop page</div>
    </main>
  );
};

export { Shop };
export default Shop;
