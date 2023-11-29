import MenList from "../constants/mens";
const MenShoes = () => {
  const ItemShop = (props) => {
    return (
      <div className="menshoes">
        <imgUrl className="imagemenshoe" src="{props.img}" />
        <h2 className="namemenshoe">{props.name}</h2>
        <span className="pricemenshoe">{props.price}</span>
        <p className="sizemenshoe">{props.size}</p>
      </div>
    );
  };
  return (
    <div className="menshoedata">
      {MenList.map((item, id) => {
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
  );
};

export default MenShoes;
