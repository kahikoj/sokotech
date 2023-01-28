import React from "react";

const ProductPage = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
