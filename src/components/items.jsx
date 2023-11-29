const Items = () => {
  return (
    <div className="bannerimage-container">
      <div className="categoryimage3-container">
        <div className="categorysecbtn">
          <img src="./src/images/pic15.jpg" alt="categorypic8" />
          <div className="categorysecname">
            <span className="categoryheading">Bags</span>
            <button className="categorybtn">SHOP NOW</button>
          </div>
        </div>
        <div className="categorysecbtn">
          <img src="./src/images/pic16.jpg" alt="categorypic9" />
          <div className="categorysecname">
            <span className="categoryheading">Boxers</span>
            <button className="categorybtn">SHOP NOW</button>
          </div>
        </div>
        <div className="categorysecbtn">
          <img src="./src/images/pic17.jpg" alt="categorypic10" />
          <div className="categorysecname">
            <span className="categoryheading">Belts</span>
            <button className="categorybtn">SHOP NOW</button>
          </div>
        </div>
      </div>
      <div className="btnimgbanner">
        <img src="./src/images/pic14.jpg" alt="banner" className="banner" />
        <div className="imagebanner">
          <button className="btnbanner">EXPLORE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Items;
