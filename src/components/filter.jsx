import { useNavigate } from "react-router-dom";
import "./filter.scss";
const Filter = ({ filterProducts, AddToCart }) => {
  let Navigate = useNavigate();
  const handleAddToCart = (product) => {
    console.log("Add to Cart clicked for:4", product.name);
    AddToCart(product);
    Navigate("/cartbag"); // Log relevant information or use debugger here
  };
  return (
    <div className="filtered-products-container">
      <div className="filtered-products">
        <div className="card-products">
          {filterProducts.length !== 0 ? (
            filterProducts.map((product, ind) => {
              return (
                <div className="menshoespic2" key={ind}>
                  <div className="productmenshoepic2" key={product.id}>
                    <img
                      className="imagemenshoepic2"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="detailspic2">
                      <h2 className="namemenshoepic2">{product.name}</h2>
                      <span className="pricemenshoepic2">
                        Price:₹{product.price}
                      </span>
                      <div className="cartbtnspic2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="add-to-cart-btnpic2"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
