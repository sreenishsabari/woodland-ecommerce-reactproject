import Women from "../constants/womens";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import womenpic from "../images/womenpic.jpg";
const WomenShoes = ({ AddToCart, AddToWishlist }) => {
  const ItemShop = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    let Navigate = useNavigate();
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
              <button
                onClick={handleWishlist}
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
      <img src={womenpic} alt="menpic" className="menpic" />
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
