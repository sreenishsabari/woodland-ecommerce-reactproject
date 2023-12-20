import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  let Navigation = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email:care@woodlandworldwide.com</p>
          <p>Phone: 1800 103 3445</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="followlink">
            <a href="#" target="_blank">
              <FaFacebook />
            </a>
            <a href="#" target="_blank">
              <FaInstagram />
            </a>
            <a href="#" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Shop Footwear</h4>
          <Link to="/boot">Boots</Link>
          <Link to="/sneaker">Sneakers</Link>
          <Link to="/casuals">Casuals</Link>
          <Link to="/men">Formals</Link>
        </div>
        <div className="footer-section">
          <h4>Shop Clothing Tops</h4>
          <Link to="/menbtn">Jackets</Link>
          <Link to="/t-shirt">T-shirts</Link>
          <Link to="/returns">Shirts</Link>
          <Link to="/boxerbtn">Shorts</Link>
        </div>
        <div className="footer-section">
          <h4>Shop Accessories & Bags</h4>
          <Link to="/bagbtn">Hiking Backpacks</Link>
          <Link to="/bagbtn">Cross Body Bags</Link>
          <Link to="/beltsbtn">Belts</Link>
          <Link to="/returns">Wallets</Link>
        </div>

        {/* <div className="footer-section">
          <h4 className="headfilters">Always keep exploring more!</h4>
          <span> Get alerts for new arrivals, offers, and more!</span>
        </div> */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/returns">Return Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
