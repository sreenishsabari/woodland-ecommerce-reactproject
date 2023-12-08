import MenApparel from "../constants/menapparel";
const Menapparel = () => {
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
      <img
        src="./src/images/menapparelpic.jpg"
        alt="menpic"
        className="menpic"
      />
      <span className="menimgsub">
        MENS POLO
        <p className="menpicpara">
          Our polo T-shirts are crafted from soft 100% cotton to provide you
          with all-day style and comfort.
        </p>
      </span>
      <div className="menshoedata">
        {MenApparel.map((item, id) => {
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

export default Menapparel;
