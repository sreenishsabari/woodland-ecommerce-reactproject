import Bags from "../constants/bags";
const Bag = () => {
  const ItemShop = (props) => {
    return (
      <div className="menshoes">
        <div style={{ backgroundColor: "grey" }}>
          <div className="productmenshoe">
            <img className="imagemenshoe" src={props.image} />
            <div className="details">
              <h2 className="namemenshoe">{props.name}</h2>
              <span className="pricemenshoe">{props.price}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <img src="./src/images/bagspic.jpg" alt="bagpic" className="menpic" />
      <span className="menimgsub">
        MEN'S BACKPACKS
        <p className="menpicpara">
          Our hiking backpacks are the perfect companion, providing durability,
          functionality, and comfort to outdoor enthusiasts of all levels.
        </p>
      </span>
      <div className="menshoedata">
        {Bags.map((item, id) => {
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

export default Bag;
