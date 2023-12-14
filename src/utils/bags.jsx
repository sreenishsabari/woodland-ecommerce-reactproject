import Bags from "../constants/bags";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Bag = ({ AddToCart }) => {
  let Navigate = useNavigate();
  const ItemShop = (props) => {
    const handleAddToCart = () => {
      console.log("Add to Cart clicked for:2", props.name);
      AddToCart(props);
      Navigate("/cartbag"); // Log relevant information or use debugger here
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
            <div className="cartbtns">
              <button onClick={handleAddToCart} className="add-to-cart-btn">
                Add to Cart
              </button>
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
      <img src="./src/images/bagspic.jpg" alt="bagpic" className="menpic" />
      <span className="menimgsub">
        MEN'S BACKPACKS
        <p className="menpicpara">
          Our hiking backpacks are the perfect companion, providing durability,
          functionality, and comfort to outdoor enthusiasts of all levels.
        </p>
      </span>
      <div className="menshoedata">
        {Bags.map((item, id) => {
          return (
            <ItemShop
              key={id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Bag;
