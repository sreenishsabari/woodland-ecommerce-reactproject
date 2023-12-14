import Women from "../constants/womens";
import { useNavigate } from "react-router-dom";
const WomenShoes = ({ AddToCart }) => {
  const ItemShop = (props) => {
    let Navigate = useNavigate();
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
      <img src="./src/images/womenpic.jpg" alt="menpic" className="menpic" />
      <span className="menimgsub">
        WOMEN'S SHOES
        <p className="menpicpara">
          Hitting the trails or just running errands around town, our boots are
          perfect to keep your feet warm and comfortable.
        </p>
      </span>
      <div className="menshoedata">
        {Women.map((item, id) => {
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

export default WomenShoes;
