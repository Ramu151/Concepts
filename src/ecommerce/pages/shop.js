import React, { useEffect, useState } from "react";
import { CategoryGrid } from "../components/categoryGrid";
import { SHOP_DATA } from "../store";

const ShopPage = () => {
  return (
    <main>
      <CategoryGrid data={SHOP_DATA} />
    </main>
  );
};

export { ShopPage };
export default ShopPage;
