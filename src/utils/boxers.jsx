import Boxers from "../constants/boxers";

import { useNavigate } from "react-router-dom";
const Boxer = ({ AddToCart }) => {
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
            <span className="pricemenshoe">Price:₹{props.price}</span>
            <p className="sizemenshoe">{props.size}</p>

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
      <img src="./src/images/Boxerspic.jpg" alt="menpic" className="menpic" />
      <span className="menimgsub">
        BOXER'S
        <p className="menpicpara">
          Our briefs and boxers are designed to provide a comfortable fit and
          come with an elastic waistband, perfect for adventure-packed summer
          days or even lounging around the pool.
        </p>
      </span>
      <div className="menshoedata">
        {Boxers.map((item, id) => {
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

export default Boxer;
