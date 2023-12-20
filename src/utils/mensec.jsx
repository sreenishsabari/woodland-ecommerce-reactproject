import { useNavigate } from "react-router-dom";
import menpic from "../images/menpic.jpg";

import { useState } from "react";
import Men from "../constants/mens";
import { FaHeart } from "react-icons/fa6";
const MenShoes = ({ AddToCart, AddToWishlist, wishlist, setWishlist }) => {
  let Navigate = useNavigate();
  const ItemShop = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleAddToCart = () => {
      console.log("Add to Cart clicked for:2", props.name);
      AddToCart(props);
      Navigate("/cartbag"); // Log relevant information or use debugger here
    };
    const handleWishlist = () => {
      console.log("wishlist clicked for:3", props.name);
      AddToWishlist(props);
      setIsClicked(!isClicked);
      //Navigate("/wishlistheart");
    };
    const onRemoveItem = (id) => {
      console.log("Trying to remove item with id:", id);
      const updatedWishlist = wishlist.filter((product) => product.id !== id);
      setWishlist(updatedWishlist);
      console.log("Item removed from wishlist:", id);
    };

    return (
      <div className="menshoes">
        <div className="productmenshoe">
          <img className="imagemenshoe" src={props.image} />
          <div className="details">
            <h2 className="namemenshoe">{props.name}</h2>
            <span className="pricemenshoe">Price:₹{props.price}</span>
            <p className="sizemenshoe">{props.size}</p>
            <div className="cartbtns">
              <button onClick={handleAddToCart} className="add-to-cart-btn">
                Add to Cart
              </button>

              <button
                onClick={() => {
                  handleWishlist();
                  if (isClicked) {
                    onRemoveItem(props.id);
                  }
                }}
                className="buy-now-btn"
                style={{ color: isClicked ? "red" : "black" }}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <img src={menpic} alt="menpic" className="menpic" />
      <span className="menimgsub">
        MEN'S SHOES
        <p className="menpicpara">
          Hike through the woods, or navigate urban streets, our boots are
          designed for ultimate comfort and durability.
        </p>
      </span>
      <div className="menshoedata">
        {Men.map((item, id) => {
          return (
            <ItemShop
              key={id}
              id={item.id}
              name={item.name}
              price={item.price}
              size={item.size}
              image={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenShoes;
