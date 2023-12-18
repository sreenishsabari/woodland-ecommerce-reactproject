import { CgSearch } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
//import { GoPerson } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Categories from "../constants";

//import Categories from "../constants";
const Navbar = ({ filterProducts, handlerFilter, cart, wishlist }) => {
  const location = useLocation();
  const hideSearchAndLoginRoutes = ["/cartbag"];
  const hideSearchForlogin = ["/contact"];

  let navigate = useNavigate();

  // Add routes where search and login should be hidden

  const hiddenRoute = hideSearchForlogin.some((route) =>
    location.pathname.includes(route)
  );
  const isHiddenRoute = hideSearchAndLoginRoutes.some((route) =>
    location.pathname.includes(route)
  );

  // useState
  const [userInput, SetUserInput] = useState("");
  // search function

  // update usestate
  const updateStateVariable = (val) => {
    let input = val;
    input = input.replaceAll(" ", "");
    input = input.replaceAll(`'`, "");
    SetUserInput(input);
  };

  function filteredData() {
    if (userInput) {
      const products = Categories.filter((product) => {
        product.name = product.name.replaceAll(/[.,\/\\$|\-']/g, "");
        product.category = product.category.replaceAll(/[.,\/\\$|\-']/g, "");
        let item = product.category
          .toLowerCase()
          .includes(userInput.toLowerCase());
        if (!item) {
          if (product.name.toLowerCase().includes(userInput.toLowerCase())) {
            return product;
          }
        } else {
          return product;
        }
      });
      if (products.length !== 0) {
        handlerFilter(products);
        navigate("/filter");
      } else {
        alert(`Data not found!!!`);
      }
    }
    SetUserInput("");
  }

  return (
    <nav>
      <div>
        <img src="./src/assets/logo.png" alt="logo" />
      </div>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        {!isHiddenRoute && (
          <>
            <li>
              <NavLink to="/men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/women">Women</NavLink>
            </li>
            <li>
              <NavLink to="/kids">Kids</NavLink>
            </li>
            <li>
              <NavLink to="/bags&gear">Bags&Gear</NavLink>
            </li>
          </>
        )}
      </ul>

      <div className="search-container">
        {!hiddenRoute && (
          <>
            <input
              type="text"
              placeholder="search.."
              value={userInput}
              onChange={(event) => updateStateVariable(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  filteredData();
                }
                console.log(event.key === "Enter");
              }}
            />
            <CgSearch className="search-icon" onClick={() => filteredData()} />
          </>
        )}
      </div>

      <div>
        <ul>
          <NavLink to="/wishlistheart" className="heartbtn">
            <FaRegHeart />
            {wishlist.length > 0 && (
              <div className="heartcount">{wishlist.length}</div>
            )}
          </NavLink>
          <li>
            <>
              <NavLink to="/cartbag" className="cartbtn">
                <FiShoppingBag />
                {cart.length > 0 && (
                  <div className="cartcount">{cart.length}</div>
                )}
              </NavLink>
            </>
          </li>
          <li>
            <NavLink to="/contact" className="loginbt">
              <IoMdContact />
              <div className="loginperson">Login</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
