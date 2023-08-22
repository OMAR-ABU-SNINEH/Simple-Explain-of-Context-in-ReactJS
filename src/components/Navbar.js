import React, { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";

function Navbar() {
  const value = useContext(ProductContext); //consumer
  return <h1>my total count project is {value.length}</h1>;
}

export default Navbar;
