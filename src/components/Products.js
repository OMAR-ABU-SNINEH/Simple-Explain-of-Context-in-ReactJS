import React, { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";

function Products(pops) {
  const value = useContext(ProductContext);
  return (
    <div>
      {value.map((product) => (
        <h1 key={product.id}>Product title is {product.title}</h1>
      ))}
    </div>
  );
}

export default Products;
