import { CgSearch } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
//import { GoPerson } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Category from "./categories";
const Navbar = ({ cart }) => {
  const location = useLocation();
  const hideSearchAndLoginRoutes = ["/cartbag"];
  const hideSearchForlogin = ["/contact"];

  // Add routes where search and login should be hidden

  const hiddenRoute = hideSearchForlogin.some((route) =>
    location.pathname.includes(route)
  );
  const isHiddenRoute = hideSearchAndLoginRoutes.some((route) =>
    location.pathname.includes(route)
  );
  //searchlogic

  console.log(cart);

  return (
    <nav>
      <div>
        <img src="./src/assets/logo.png" alt="logo" />
      </div>
      <ul>
        {!isHiddenRoute && (
          <>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
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
            <input type="text" placeholder="search.." />
            <CgSearch className="search-icon" />
          </>
        )}
      </div>
      <div>
        <ul>
          <li>
            <a href="#">
              <FaRegHeart />
            </a>
          </li>

          <li>
            <>
              <NavLink to="/cartbag" className="cartbtn">
                <FiShoppingBag />
                <div className="cartcount">{cart.length}</div>
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
