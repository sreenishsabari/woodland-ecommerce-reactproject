import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <div className="productimage-container">
      <div className="sectionbtn-container">
        <img src="./src/images/pic1.jpg" alt="productpic1" />
        <div className="headingbtn-container">
          <span className="sectionname">BestSellers</span>
          <NavLink to="bestbtn" className="btnname2">
            SHOP NOW
          </NavLink>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src="./src/images/pic2.jpg" alt="productpic2" />
        <div className="headingbtn-container">
          <span className="sectionname">Sneakers</span>
          <NavLink to="/sneakerbtn" className="btnname2">
            SHOP NOW
          </NavLink>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src="./src/images/pic3.jpg" alt="productpic3" />
        <div className="headingbtn-container">
          <span className="sectionname">Boots</span>
          <NavLink to="/bootbtn" className="btnname2">
            SHOP NOW
          </NavLink>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src="./src/images/pic4.jpg" alt="productpic4" />
        <div className="headingbtn-container">
          <span className="sectionname">Casuals</span>
          <NavLink to="/casualbtn" className="btnname2">
            SHOP NOW
          </NavLink>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src="./src/images/pic5.jpg" alt="productpic5" />
        <div className="headingbtn-container">
          <span className="sectionname">MEN'S</span>
          <NavLink to="menbtn" className="btnname2">
            SHOP NOW
          </NavLink>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src="./src/images/pic6.jpg" alt="productpic6" />
        <div className="headingbtn-container">
          <span className="sectionname">Women’s</span>
          <NavLink to="/womenbtn" className="btnname2">
            SHOP NOW
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Products;
