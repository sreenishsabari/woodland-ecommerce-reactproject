import { useNavigate } from "react-router-dom";
import Categories from "../constants";

const CategoryPage = ({ category, AddToCart }) => {
  let Navigate = useNavigate();
  const filteredProducts = Categories.filter(
    (curData) =>
      curData.category &&
      curData.category.toUpperCase() === category.toUpperCase()
  );
  const handleAddToCart = (values) => {
    console.log("Add to Cart clicked for:4", values.name);
    AddToCart(values);
    Navigate("/cartbag"); // Log relevant information or use debugger here
  };

  const handleBuyNow = (productName) => {
    // Implement the logic for the "Buy Now" action
    // This function will depend on how you want to handle the buy now functionality
    console.log("Buy Now clicked for:", productName);
  };

  return (
    <div className="headerimg">
      {category.toLowerCase() === "bestseller" && (
        <>
          <img
            src="./src/images/bestsellerpic.jpg"
            alt="menpic"
            className="menpic"
          />
          <span className="menimgsub">
            BESTSELLERS
            <p className="menpicpara">
              Now discover our most popular products based on sales
            </p>
          </span>
        </>
      )}
      {category.toLowerCase() === "sneakers" && (
        <>
          <img
            src="./src/images/sneakerpic.jpg"
            alt="menpic"
            className="menpic"
          />
          <span className="menimgsub">
            MENS SNEAKERS
            <p className="menpicpara">
              Stay effortless with our cool, trendy sneakers which are crafted
              bold, and unique that inspire sneakers for all ages.
            </p>
          </span>
        </>
      )}
      {category.toLowerCase() === "boots" && (
        <>
          <img src="./src/images/menpic.jpg" alt="menpic" className="menpic" />
          <span className="menimgsub">
            MENS CASUALS LACE UP
            <p className="menpicpara">
              Our Lace-up casual shoes are made of comfortable, durable material
              and a lace-up closure provides secure and adjustable fit..
            </p>
          </span>
        </>
      )}
      {category.toLowerCase() === "casuals" && (
        <>
          <img
            src="./src/images/casualpic.jpg"
            alt="menpic"
            className="menpic"
          />
          <span className="menimgsub">
            MENS BOOTS
            <p className="menpicpara">
              Hike through the woods, or navigate urban streets, our boots are
              designed for ultimate comfort and durability.
            </p>
          </span>
        </>
      )}
      {category.toLowerCase() === "men's" && (
        <>
          <img src="./src/images/menimg.jpg" alt="menpic" className="menpic" />
          <span className="menimgsub">
            MENS JACKETS FULL SLEEVE
            <p className="menpicpara">
              An ideal choice for outdoor enthusiasts, our full-sleeve jacket is
              made from high-quality polyester fabric, to provide excellent
              insulation and warmth.
            </p>
          </span>
        </>
      )}
      {category.toLowerCase() === "women's" && (
        <>
          <img
            src="./src/images/womenimg.jpg"
            alt="menpic"
            className="menpic"
          />
          <span className="menimgsub">
            WOMENS JACKETS FULL SLEEVE
            <p className="menpicpara">
              An ideal choice for outdoor enthusiasts, our full-sleeve jacket is
              made from high-quality polyester fabric, to provide excellent
              insulation and warmth
            </p>
          </span>
        </>
      )}
      <div className="menshoespic">
        {filteredProducts.map((values) => (
          <div className="productmenshoepic" key={values.id}>
            <img
              className="imagemenshoepic"
              src={values.image}
              alt={values.name}
            />
            <div className="detailspic">
              <h2 className="namemenshoepic">{values.name}</h2>
              <span className="pricemenshoepic">Price:₹{values.price}</span>
              <div className="cartbtnspic">
                <button
                  onClick={() => handleAddToCart(values)}
                  className="add-to-cart-btnpic"
                >
                  Add to Cart
                </button>
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

export default CategoryPage;

// CategoryPage.jsx
/*import React from "react";
//import { useParams } from "react-router-dom";
import Categories from "../constants";

console.log("Current Category:", Categories);

const CategoryPage = ({ category }) => {
  console.log("Rendering CategoryPage");
  //const { category } = useParams();
  console.log("Current Category:", category);
  const filteredProducts = Categories.filter(
    (curData) =>
      curData.category &&
      curData.category.toUpperCase() === category.toUpperCase()
  );

  console.log("Filtered Products:", filteredProducts);

  return (
    <div className="menshoespic">
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

export default CategoryPage;*/
