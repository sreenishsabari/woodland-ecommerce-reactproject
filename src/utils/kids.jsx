import Kids from "../constants/kids";
import { useState } from "react";
const KidsShoes = () => {
  const [cart, setCart] = useState([]);

  const updateCart = (item, action) => {
    let updatedCart = [...cart];
    const index = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (action === "add") {
      if (index !== -1) {
        updatedCart[index].quantity += 1;
      } else {
        // Initialize totalPrice when adding a new item to the cart
        const newItem = { ...item, quantity: 1, totalPrice: item.price };
        updatedCart.push(newItem);
      }
    } else if (action === "remove") {
      if (index !== -1 && updatedCart[index].quantity > 0) {
        updatedCart[index].quantity -= 1;
      }
    }

    // Update totalPrice based on the quantity
    updatedCart.forEach((cartItem) => {
      cartItem.totalPrice = cartItem.quantity * cartItem.price;
    });

    setCart(updatedCart);
  };
  const ItemShop = (props) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === props.id);

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
              <button
                onClick={() => addToCart(props)}
                className="add-to-cart-btn"
              >
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
      <img src="./src/images/kidspic.jpg" alt="menpic" className="menpic" />
      <span className="menimgsub">
        KID'S SHOES
        <p className="menpicpara">
          Hike through the woods, or navigate urban streets, our boots are
          designed for ultimate comfort and durability.
        </p>
      </span>
      <div className="menshoedata">
        {Kids.map((item, id) => {
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

export default KidsShoes;
