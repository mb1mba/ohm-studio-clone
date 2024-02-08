import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductsContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }
  return context;
};

export { ProductsProvider, useProductsContext };
