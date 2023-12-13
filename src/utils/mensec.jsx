import { Link } from "react-router-dom";
import Men from "../constants/mens";
//import Addcart from "../components/cartitem";
//import { useCart } from "../components/cartcontext";
import { useState } from "react";
const MenShoes = ({ AddToCart }) => {
  const ItemShop = (props) => {
    //const itemInCart = cart.find((cartItem) => cartItem.id === props.id);
    const handleAddToCart = () => {
      console.log("Add to Cart clicked for:2", props.name);
      AddToCart(props); // Log relevant information or use debugger here
    };
    const handleBuyNow = () => {
      // Implement the logic for the "Buy Now" action
      // This function will depend on how you want to handle the buy now functionality
      // For example, you might want to redirect to a checkout page or show a modal
      console.log("Buy Now clicked for:", props.name);
    };

    return (
      <div className="menshoes">
        <div className="productmenshoe">
          <img className="imagemenshoe" src={props.image} />
          <div className="details">
            <h2 className="namemenshoe">{props.name}</h2>
            <span className="pricemenshoe">{props.price}</span>
            <p className="sizemenshoe">{props.size}</p>
            <div className="cartbtns">
              <Link
                to="/cartbtns"
                onClick={handleAddToCart}
                className="add-to-cart-btn"
              >
                Add to Cart
              </Link>

              <button onClick={handleBuyNow} className="buy-now-btn">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <img src="./src/images/menpic.jpg" alt="menpic" className="menpic" />
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
