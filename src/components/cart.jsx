// Addcart.jsx
import React from "react";
//import { useCart } from "../components/cartcontext";
import "./cart.scss";

const Addcart = ({ cart, setCart, item }) => {
  console.log("Adding item to cart:1", cart);
  const onRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    console.log(remaining);
    setCart(remaining);
  };
  const updateCart = (item, action) => {
    if (!item || !item.id) {
      console.error("Invalid item in updateCart:", item);
      return;
    }
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
  console.log("Cart contents:", cart);

  const itemInCart = item
    ? cart.find((cartItem) => cartItem && cartItem.id === item.id)
    : undefined;

  return (
    <div className="cartsec">
      <div className="cartheading">
        <div className="heading">
          <span>Product</span>
          <span>ProductImage</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>
      </div>

      <div className="cartitems">
        {cart.map((item = {}) => {
          console.log("Current item:", item);
          console.log("Current item id:", item && item.id);
          if (!item) {
            console.error("Undefined item in cart:", item);
            return null; // or handle accordingly
          }

          return (
            <div key={item?.id}>
              <div className="cartcontent">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateCart(item, "remove")}
                    className="quantity-btn"
                    disabled={!itemInCart}
                  >
                    -
                  </button>
                  <span className="quantity">
                    {itemInCart ? itemInCart.quantity : 0}
                  </span>
                  <button
                    onClick={() => updateCart(item, "add")}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <p className="total-price">
                  Total Price: ₹{calculateTotal(cart)}
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
    </div>
  );
};
const calculateTotal = (cart) => {
  let total = 0;
  return cart.map((item = {}) => {
    const itemPrice = parseFloat(item.price);
    const itemQuantity = item.quantity || 1;
    if (!isNaN(itemPrice) && itemQuantity > 0) {
      return total + itemPrice * itemQuantity;
    }

    return total;
  }, 0);
};

export default Addcart;

/*import React from "react";
import { useState } from "react";
//import { useCart } from "./CartContext";
import "./cart.scss";
const Addcart = () => {
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
  const onRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    console.log(remaining);
    setCart(remaining);
  };

  return (
    <div className="cartsec">
      <div className="cartheading">
        <div className="heading">
          <span>Product</span>
          <span>ProductImage</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>
      </div>

      <div className="cartitems">
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.name}</span>
              <div>
                <img src={item.image} alt={item.name} />
                <div className="quantity-controls">
                  <button
                    onClick={() => updateCart(item, "remove")}
                    className="quantity-btn"
                    disabled={!itemInCart}
                  >
                    -
                  </button>
                  <div className="quantity">
                    {itemInCart ? itemInCart.quantity : 0}
                  </div>
                  <button
                    onClick={() => updateCart(item, "add")}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>

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
      <div carttotal>
        <h1 className="text-2xl font-bold">Total: ₹{calculateTotal(cart)}</h1>
      </div>
    </div>
  );
};

const calculateTotal = (cart) => {
  return cart
    .reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = item.quantity || 1;
      if (!isNaN(itemPrice) && itemQuantity > 0) {
        return total + itemPrice * itemQuantity;
      }

      return total;
    }, 0)
    .toFixed(2);
};

export default Addcart;*/
