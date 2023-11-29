import { CgSearch } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
//import { GoPerson } from "react-icons/go";
import { IoMdContact } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="./src/assets/logo.png" alt="logo" />
      </div>
      <ul>
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
      </ul>
      <div className="search-container">
        <input type="text" placeholder="search.." />
        <CgSearch className="search-icon" />
      </div>
      <div>
        <ul>
          <li>
            <a href="#">
              <FaRegHeart />
            </a>
          </li>
          <li>
            <a href="#">
              <FiShoppingBag />
            </a>
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
