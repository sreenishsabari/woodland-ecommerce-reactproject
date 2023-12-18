import React from "react";

const FilteredProductsDisplay = ({ filteredProducts }) => {
  return (
    <div>
      <h2>Filtered Products</h2>
      {filteredProducts.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <p>{category.image}</p>
        </div>
      ))}
    </div>
  );
};

export default FilteredProductsDisplay;
