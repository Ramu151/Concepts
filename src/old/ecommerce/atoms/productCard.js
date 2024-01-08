import React from "react";

const ProductCard = props => {
  let { data } = props;
  return (
    <section className="">
      {data.map(ele => {
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
  );
};

export default ProductCard;
export { ProductCard };
