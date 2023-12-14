/*import React from "react";
import { Link } from "react-router-dom";
import { useCategoriesGlobalContext } from "../context/categories.context";
const Products = () => {
  const categories = [
    {
      id: 1,
      name: "BestSellers",
      image: "./src/images/pic1.jpg",
      route: "/bestsellers",
    },
    {
      id: 2,
      name: "Sneakers",
      image: "./src/images/pic2.jpg",
      route: "/sneakers",
    },
    { id: 3, name: "Boots", image: "./src/images/pic3.jpg", route: "/boots" },
    {
      id: 4,
      name: "Casuals",
      image: "./src/images/pic4.jpg",
      route: "/casuals",
    },
    { id: 5, name: "MEN'S", image: "./src/images/pic5.jpg", route: "/mens" },
    {
      id: 6,
      name: "Women’s",
      image: "./src/images/pic6.jpg",
      route: "/womens",
    },
  ];

  return (
    <div className="productimage-container">
      {categories.map((category) => (
        <div key={category.id} className="sectionbtn-container">
          <img src={category.image} alt={`productpic${category.id}`} />
          <div className="headingbtn-container">
            <span className="sectionname">{category.name}</span>
            <Link to={category.route} className="btnname2">
              SHOP NOW
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;*/

//import { NavLink } from "react-router-dom";

import { Link } from "react-router-dom";
import Categories from "../constants";
const Products = () => {
  console.log(Categories);
  return (
    <div className="productimage-container">
      <div className="sectionbtn-container">
        <img src="./src/images/pic1.jpg" alt="productpic1" />
        <div className="headingbtn-container">
          <span className="sectionname">BestSellers</span>
          <Link to="/bestseller" className="btnname2">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src="./src/images/pic2.jpg" alt="productpic2" />
        <div className="headingbtn-container">
          <span className="sectionname">Sneakers</span>
          <Link to="/sneaker" className="btnname2">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src="./src/images/pic3.jpg" alt="productpic3" />
        <div className="headingbtn-container">
          <span className="sectionname">Boots</span>
          <Link to="/boot" className="btnname2">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src="./src/images/pic4.jpg" alt="productpic4" />
        <div className="headingbtn-container">
          <span className="sectionname">Casuals</span>
          <Link to="/casuals" className="btnname2">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src="./src/images/pic5.jpg" alt="productpic5" />
        <div className="headingbtn-container">
          <span className="sectionname">Men's</span>
          <Link to="/menbtn" className="btnname2">
            SHOP NOW
          </Link>
        </div>
      </div>
      <div className="sectionbtn-container">
        <img src="./src/images/pic6.jpg" alt="productpic6" />
        <div className="headingbtn-container">
          <span className="sectionname">Women’s</span>
          <Link to="/womenbtn" className="btnname2">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
