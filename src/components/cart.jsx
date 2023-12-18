// Addcart.jsx
import React from "react";
import "./cart.scss";

const Addcart = ({ cart, setCart }) => {
  console.log("Adding item to wishlist:", cart);

  const onRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    console.log(remaining);
    setCart(remaining);
  };

  const addQuantity = (id) => {
    const cartProducts = cart.map((product) => {
      if (product.id === id) {
        console.log(product.quantity + 1);
        return { ...product, quantity: product.quantity + 1 };
      } else {
        return product;
      }
    });
    setCart(cartProducts);
  };

  const minusQuantity = (id) => {
    const cartProducts = cart.map((product) => {
      if (product.id === id && product.quantity !== 1) {
        return { ...product, quantity: product.quantity - 1 };
      } else {
        return product;
      }
    });
    setCart(cartProducts);
  };

  //const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

  return (
    <div className="cartsec">
      <div className="cartheading">
        <div className="heading">
          <span className="header1">Product</span>
          <span className="header2">ProductDetails</span>
        </div>
      </div>

      <div className="cartitems">
        {cart.map((item) => {
          return (
            <div key={item?.id}>
              <div className="cartcontent">
                <img src={item.image} alt={item.name} />
                <div className="productdetails">
                  <span>{item.name}</span>
                  <br />
                  <span className="price">Price:₹{item.price}</span>
                </div>
                <div className="quantity-controls">
                  <button
                    onClick={() => minusQuantity(item.id)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() => addQuantity(item.id)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <p className="total-price">
                  ₹{(Number(item.price) * item.quantity).toFixed(2)}
                </p>
                <button
                  className="cartremovebtn"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="carttotal">
        <h1>Total: ₹{calculateTotal(cart)}</h1>
      </div>
    </div>
  );
};
const calculateTotal = (cart) => {
  console.log(cart);
  return cart
    .reduce((total, item) => {
      const itemPrice = parseFloat(item.price) || 0; // Convert price to number or default to 0
      const itemQuantity = parseInt(item.quantity, 10) || 1; // Convert quantity to number or default to 1

      if (!isNaN(itemPrice) && itemQuantity > 0) {
        return total + itemPrice * itemQuantity;
      }

      return total;
    }, 0)
    .toFixed(2);
};

export default Addcart;
