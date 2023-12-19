import { Link } from "react-router-dom";
import pic15 from "../images/pic15.jpg";
import shorts from "../images/shorts.jpg";
import pic14 from "../images/pic14.jpg";
import pic17 from "../images/pic17.jpg";
const Items = () => {
  return (
    <div className="bannerimage-container">
      <div className="categoryimage3-container">
        <div className="categorysecbtn">
          <img src={pic15} alt="categorypic8" />
          <div className="categorysecname">
            <span className="categoryheading">Bags</span>
            <Link to="/bagbtn" className="categorybtn">
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="categorysecbtn">
          <img src={shorts} alt="categorypic9" />
          <div className="categorysecname">
            <span className="categoryheading">Shorts</span>
            <Link to="/boxerbtn" className="categorybtn">
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="categorysecbtn">
          <img src={pic17} alt="categorypic10" />
          <div className="categorysecname">
            <span className="categoryheading">Belts</span>
            <Link to="/beltsbtn" className="categorybtn">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="btnimgbanner">
        <img src={pic14} alt="banner" className="banner" />
        <div className="imagebanner">
          <Link to="/explore" className="btnbanner">
            EXPLORE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Items;
