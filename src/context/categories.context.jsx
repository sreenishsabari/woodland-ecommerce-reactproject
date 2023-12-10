// categories.context.jsx
import React, { createContext, useContext, useState } from "react";

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categoriesState] = useState(categories);

  return (
    <CategoriesContext.Provider value={categoriesState}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategoriesGlobalContext = () => {
  return useContext(CategoriesContext);
};

export { CategoriesContext, CategoriesProvider, useCategoriesGlobalContext };
