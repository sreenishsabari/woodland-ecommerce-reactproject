// CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../constants";

//console.log("Current Category:", categories);

const CategoryPage = () => {
  const { category } = useParams();
  const filteredProducts = Categories.filter(
    (curData) => curData.category === category
  );

  return (
    <div className="menshoes">
      {filteredProducts.map((values) => (
        <div className="productmenshoe" key={values.id}>
          <img className="imagemenshoe" src={values.imgUrl} alt={values.name} />
          <div className="details">
            <h2 className="namemenshoe">{values.name}</h2>
            <span className="pricemenshoe">{values.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
