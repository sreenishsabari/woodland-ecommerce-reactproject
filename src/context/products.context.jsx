import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const initialValues = { products, setProducts };
  return (
    <ProductContext.Provider value={initialValues}>
      {children}
    </ProductContext.Provider>
  );
};

const ProductProviderGlobalContext = () => {
  return useContext(ProductContext);
};

export default { ProductProvider, ProductProviderGlobalContext };
