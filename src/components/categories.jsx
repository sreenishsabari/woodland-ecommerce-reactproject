import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="categoryimage-container">
      <div className="imagebtncategory">
        <img
          src="./src/images/pic7.jpg"
          alt="categorypic1"
          className="categorypic1"
        />
        <div className="imagebtn7">
          <Link to="/outdoor" className="btnpic7">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="categoryimage1-container">
        <div className="menimage">
          <img src="./src/images/pic8.jpg" alt="categorypic2" />
          <div className="mencategory">
            <span className="menpara">Shop Men’s Apparel</span>
            <Link to="/menapparel" className="menbtn">
              SHOP NOW
            </Link>
          </div>
        </div>
        <div className="womenimage">
          <img src="./src/images/pic9.jpg" alt="categorypic3" />
          <div className="womencategory">
            <span className="womenpara">Shop Women’s Apparel</span>
            <Link to="womenapparel" className="womenbtn">
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
