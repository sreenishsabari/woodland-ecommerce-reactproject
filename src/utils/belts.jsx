import Belts from "../constants/belts";

import { useNavigate } from "react-router-dom";
const Belt = ({ AddToCart }) => {
  let Navigate = useNavigate();
  const ItemShop = (props) => {
    const handleAddToCart = () => {
      console.log("Add to Cart clicked for:2", props.name);
      AddToCart(props);
      Navigate("/cartbag"); // Log relevant information or use debugger here
    };
    const handleBuyNow = () => {
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
      <img src="./src/images/belts.jpg" alt="menpic" className="menpic" />
      <span className="menimgsub">
        MENS BELTS
        <p className="menpicpara">
          Our belts are crafted with precision and care with premium leather to
          ensure that it meets high standards of quality with a touch of
          elegance
        </p>
      </span>
      <div className="menshoedata">
        {Belts.map((item, id) => {
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

export default Belt;
