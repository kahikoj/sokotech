import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <Link to={`/products/${product.category}/${product.id}`} key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>{product.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
