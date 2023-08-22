import React, { createContext, useState } from "react";

export const ProductContext = createContext([]);

function ProductsContext(props) {
  const [products, setProducts] = useState([
    { id: 1, title: "Omar" },
    { id: 2, title: "Sama" },
    { id: 3, title: "Nuha" },
  ]);
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductsContext;
