import Casual from "../constants/casuals";
const CasualShoes = () => {
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
      <img src="./src/images/casualpic.jpg" alt="menpic" className="menpic" />
      <span className="menimgsub">
        CASUAL'S SHOES
        <p className="menpicpara">
          Our Lace-up casual shoes are made of comfortable, durable material and
          a lace-up closure provides secure and adjustable fit.
        </p>
      </span>
      <div className="menshoedata">
        {Casual.map((item, id) => {
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

export default CasualShoes;
