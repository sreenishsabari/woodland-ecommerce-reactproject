import { Link } from "react-router-dom";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";

const Products = () => {
  // console.log(Categories);
  return (
    <div className="productimage-container">
      <div className="sectionbtn-container">
        <img src={pic1} alt="productpic1" />
        <div className="headingbtn-container">
          <span className="sectionname">BestSellers</span>
          <Link to="/bestseller" className="btnname">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src={pic2} alt="productpic2" />
        <div className="headingbtn-container">
          <span className="sectionname">Sneakers</span>
          <Link to="/sneaker" className="btnname">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src={pic3} alt="productpic3" />
        <div className="headingbtn-container">
          <span className="sectionname">Boots</span>
          <Link to="/boot" className="btnname">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src={pic4} alt="productpic4" />
        <div className="headingbtn-container">
          <span className="sectionname">Casuals</span>
          <Link to="/casuals" className="btnname">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src={pic5} alt="productpic5" />
        <div className="headingbtn-container">
          <span className="sectionname">Men's</span>
          <Link to="/menbtn" className="btnname">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src={pic6} alt="productpic6" />
        <div className="headingbtn-container">
          <span className="sectionname">Women’s</span>
          <Link to="/womenbtn" className="btnname">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
