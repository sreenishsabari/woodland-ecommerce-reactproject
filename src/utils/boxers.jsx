import Boxers from "../constants/boxers";
const Boxer = () => {
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
      <img src="./src/images/Boxerspic.jpg" alt="menpic" className="menpic" />
      <span className="menimgsub">
        BOXER'S
        <p className="menpicpara">
          Our briefs and boxers are designed to provide a comfortable fit and
          come with an elastic waistband, perfect for adventure-packed summer
          days or even lounging around the pool.
        </p>
      </span>
      <div className="menshoedata">
        {Boxers.map((item, id) => {
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

export default Boxer;
