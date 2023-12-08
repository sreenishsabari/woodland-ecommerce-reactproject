import Sneaker from "../constants/sneakers";
const SneakerShoe = () => {
  const ItemShop = (props) => {
    return (
      <div className="menshoes">
        <div style={{ backgroundColor: "grey" }}>
          <div className="productmenshoe">
            <img className="imagemenshoe" src={props.image} />
            <div className="details">
              <h2 className="namemenshoe">{props.name}</h2>
              <span className="pricemenshoe">{props.price}</span>
              <p className="sizemenshoe">{props.size}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <img src="./src/images/sneakerpic.jpg" alt="menpic" className="menpic" />
      <span className="menimgsub">
        MENS SNEAKERS
        <p className="menpicpara">
          Stay effortless with our cool, trendy sneakers which are crafted bold,
          and unique that inspire sneakers for all ages.
        </p>
      </span>
      <div className="menshoedata">
        {Sneaker.map((item, id) => {
          return (
            <ItemShop
              key={id}
              id={item.id}
              name={item.name}
              price={item.price}
              size={item.size}
              image={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SneakerShoe;
