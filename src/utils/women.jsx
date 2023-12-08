import Women from "../constants/womens";
const WomenShoes = () => {
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
