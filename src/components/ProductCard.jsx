import React from "react";

const ProductCard = ({ title, price, description, imgSrc }) => {
  return (
    <>
      <h1 className="task-number">ЗАДАЧА №4</h1>
      <div className="product-card">
        <img src={imgSrc} alt="" width={250} height={200} />
        <div className="title-price">
          <h3>{title}</h3>
          <p>| {price}$</p>
        </div>

        <p className="description">{description}</p>
      </div>
    </>
  );
};

export default ProductCard;
