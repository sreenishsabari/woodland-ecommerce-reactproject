import React from "react";
import "./wishlist.scss";

const AddWishlist = ({ wishlist, setWishlist }) => {
  console.log("Adding item to cart:", wishlist);

  const onRemoveItem = (id) => {
    console.log("Trying to remove item with id:", id);
    const updatedWishlist = wishlist.filter((product) => product.id !== id);
    setWishlist(updatedWishlist);
    console.log("Item removed from wishlist:", id);
  };

  //const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

  return (
    <div className="wishlistsec">
      <div className="wishlistheading">
        <div className="heading">
          <span className="header1">WishlistProducts</span>
        </div>
      </div>

      <div className="wishlistitems">
        {wishlist.map((item) => {
          return (
            <div key={item?.id}>
              <div className="wishlistcontent">
                <img src={item.image} alt={item.name} />
                <div className="productdetails">
                  <span>{item.name}</span>
                  <br />
                  <span className="price">Price:₹{item.price}</span>
                </div>
                <button
                  className="wishlistremovebtn"
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

export default AddWishlist;
