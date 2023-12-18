import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Categories from "../constants";
import { FaHeart } from "react-icons/fa6";
import Bags from "../images/bagspic.jpg";
import Boxers from "../images/Boxerspic.jpg";
import Belts from "../images/belts.jpg";
const CategoryPage = ({ category, AddToCart, AddToWishlist }) => {
  let Navigate = useNavigate();
  const filteredProducts = Categories.filter(
    (curData) =>
      curData.category &&
      curData.category.toUpperCase() === category.toUpperCase()
  );
  const [wishlist, setWishlist] = useState([]);
  const [isClicked, setIsClicked] = useState(filteredProducts.map(() => false));
  const handleAddToCart = (values) => {
    console.log("Add to Cart clicked for:4", values.name);
    AddToCart(values);
    Navigate("/cartbag"); // Log relevant information or use debugger here
  };

  const handleWishlist = (values) => {
    AddToWishlist(values);

    const index = wishlist.findIndex((item) => item.id === values.id);

    if (index === -1) {
      // Product is not in the wishlist, add it
      setWishlist([...wishlist, values]);
    } else {
      // Product is in the wishlist, remove it
      const newWishlist = [...wishlist];
      newWishlist.splice(index, 1);
      setWishlist(newWishlist);
    }

    // Toggle the isClicked state for the clicked product
    setIsClicked((prevIsClicked) => {
      const newIsClicked = [...prevIsClicked];
      newIsClicked[filteredProducts.indexOf(values)] =
        !newIsClicked[filteredProducts.indexOf(values)];
      return newIsClicked;
    });
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
            WOMEN'S SNEAKERS
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
            MEN'S CASUALS LACE UP
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
            MEN'S BOOTS
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
            MEN'S JACKETS FULL SLEEVE
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
            WOMEN'S JACKETS FULL SLEEVE
            <p className="menpicpara">
              An ideal choice for outdoor enthusiasts, our full-sleeve jacket is
              made from high-quality polyester fabric, to provide excellent
              insulation and warmth
            </p>
          </span>
        </>
      )}
      {category.toLowerCase() === "bag" && (
        <>
          <img src={Bags} alt="menpic" className="menpic" />
          <span className="menimgsub">
            MEN'S BACKPACKS
            <p className="menpicpara">
              Our hiking backpacks are the perfect companion, providing
              durability, functionality, and comfort to outdoor enthusiasts of
              all levels.
            </p>
          </span>
        </>
      )}
      {category.toLowerCase() === "boxer" && (
        <>
          <img src={Boxers} alt="menpic" className="menpic" />
          <span className="menimgsub">
            SHORT'S
            <p className="menpicpara">
              Our shorts are designed to provide a comfortable fit and come with
              an elastic waistband, perfect for adventure-packed summer days or
              even lounging around the pool.
            </p>
          </span>
        </>
      )}
      {category.toLowerCase() === "belt" && (
        <>
          <img src={Belts} alt="menpic" className="menpic" />
          <span className="menimgsub">
            MEN'S BELTS
            <p className="menpicpara">
              Our belts are crafted with precision and care with premium leather
              to ensure that it meets high standards of quality with a touch of
              elegance
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
                  onClick={() => handleWishlist(values)}
                  className="heartbtn"
                  style={{
                    color: isClicked[filteredProducts.indexOf(values)]
                      ? "red"
                      : "black",
                  }}
                >
                  <FaHeart />
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
