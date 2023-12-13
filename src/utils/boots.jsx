import Boots from "../constants/boots";
const BootShoes = ({ addToCart }) => {
  const ItemShop = (props) => {
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
      <img src="./src/images/menpic.jpg" alt="menpic" className="menpic" />
      <span className="menimgsub">
        MEN'S BOOTS
        <p className="menpicpara">
          Hike through the woods, or navigate urban streets, our boots are
          designed for ultimate comfort and durability.
        </p>
      </span>
      <div className="menshoedata">
        {Boots.map((item, id) => {
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

export default BootShoes;
