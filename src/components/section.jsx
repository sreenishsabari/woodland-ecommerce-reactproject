import { Link } from "react-router-dom";
const Section = () => {
  return (
    <div className="categoryimage2-container">
      <Link to="/t-shirt">
        <img src="./src/images/pic10.jpg" alt="categorypic4" />
        <div className="categoryname">
          <span className="sectionname">T-Shirt</span>
        </div>
      </Link>
      <Link to="/shirt">
        <img src="./src/images/pic11.jpg" alt="categorypic5" />
        <div className="categoryname">
          <span className="sectionname">Shirts</span>
        </div>
      </Link>
      <Link to="/short">
        <img src="./src/images/pic12.jpg" alt="categorypic6" />
        <div className="categoryname">
          <span className="sectionname">Shorts</span>
        </div>
      </Link>
      <Link to="/jeans">
        <img src="./src/images/pic13.jpg" alt="categorypic7" />
        <div className="categoryname">
          <span className="sectionname">Jeans</span>
        </div>
      </Link>
    </div>
  );
};

export default Section;
