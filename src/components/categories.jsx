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
          <button className="btnpic7">SHOP NOW</button>
        </div>
      </div>
      <div className="categoryimage1-container">
        <div className="menimage">
          <img src="./src/images/pic8.jpg" alt="categorypic2" />
          <div className="mencategory">
            <span className="menpara">Shop Men’s Apparel</span>
            <button className="menbtn">SHOP NOW</button>
          </div>
        </div>
        <div className="womenimage">
          <img src="./src/images/pic9.jpg" alt="categorypic3" />
          <div className="womencategory">
            <span className="womenpara">Shop Women’s Apparel</span>
            <button className="womenbtn">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
