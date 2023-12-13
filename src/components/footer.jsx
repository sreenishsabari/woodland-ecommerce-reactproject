import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@yourfootwearbrand.com</p>
          <p>Phone: 1-800-123-4567</p>
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
          <h4 className="headfilters">Always keep exploring more!</h4>
          <span> Get alerts for new arrivals, offers, and more!</span>
          <form action="/submit" method="post">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <button type="submit">Submit</button>
          </form>
          <p className="footpara">
            <span>By entering your email, you agree to our Terms of </span>
            <span>Service & PrivacyPolicy, including receipt of emails</span>
            <span>and promotions. You can unsubscribe at any time.</span>
          </p>
        </div>

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
