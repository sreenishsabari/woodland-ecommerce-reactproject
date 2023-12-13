//import React, { useState } from "react";
import ApparelSection from "../constants/menapparel";

const MenWomenApparelPage = ({ category }) => {
  const filteredProducts = ApparelSection.filter(
    (curData) =>
      curData.category &&
      curData.category.toUpperCase() === category.toUpperCase()
  );
  console.log(filteredProducts);
  const handleBuyNow = (productName) => {
    // Implement the logic for the "Buy Now" action
    // This function will depend on how you want to handle the buy now functionality
    console.log("Buy Now clicked for:", productName);
  };

  return (
    <div className="headerimg">
      {category.toLowerCase() === "menapparel" && (
        <>
          <img
            src="./src/images/menapparelpic.jpg"
            alt="menpic"
            className="menpic"
          />
          <span className="menimgsub">
            MENS POLO
            <p className="menpicpara">
              Our polo T-shirts are crafted from soft 100% cotton to provide you
              with all-day style and comfort.
            </p>
          </span>
        </>
      )}
      {category.toLowerCase() === "womenapparel" && (
        <>
          <img
            src="./src/images/womenapparelbg.jpg"
            alt="menpic"
            className="menpic"
          />
          <span className="menimgsub">
            WOMENS POLO
            <p className="menpicpara">
              Our polo T-shirts are made from cotton elastane, providing
              breathability with the softness of cotton
            </p>
          </span>
        </>
      )}
      <div className="menshoespic">
        {filteredProducts.map((values) => (
          <div className="productmenshoepic" key={values.id}>
            <img
              className="imagemenshoepic"
              src={values.imgUrl}
              alt={values.name}
            />
            <div className="detailspic">
              <h2 className="namemenshoepic">{values.name}</h2>
              <span className="pricemenshoepic">{values.price}</span>

              <div className="cartbtnspic">
                <button className="add-to-cart-btnpic">Add to Cart</button>
                <button
                  onClick={() => handleBuyNow(values.name)}
                  className="buy-now-btnpic"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenWomenApparelPage;
