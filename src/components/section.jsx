import { Link } from "react-router-dom";
import pic10 from "../images/pic10.jpg";
import pic11 from "../images/pic11.jpg";
import pic12 from "../images/pic12.jpg";
import pic13 from "../images/pic13.jpg";
const Section = () => {
  return (
    <div className="categoryimage2-container">
      <Link to="/t-shirt">
        <img src={pic10} alt="categorypic4" />
        <div className="categoryname">
          <span className="sectionname">T-Shirt</span>
        </div>
      </Link>
      <Link to="/shirt">
        <img src={pic11} alt="categorypic5" />
        <div className="categoryname">
          <span className="sectionname">Shirts</span>
        </div>
      </Link>
      <Link to="/short">
        <img src={pic12} alt="categorypic6" />
        <div className="categoryname">
          <span className="sectionname">Shorts</span>
        </div>
      </Link>
      <Link to="/jeans">
        <img src={pic13} alt="categorypic7" />
        <div className="categoryname">
          <span className="sectionname">Jeans</span>
        </div>
      </Link>
    </div>
  );
};

export default Section;
