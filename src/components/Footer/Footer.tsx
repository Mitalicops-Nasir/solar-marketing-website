
import icon1 from "../../assets/icons/mail-line.svg";
import icon2 from "../../assets/icons/phone-fill.svg";
import icon3 from "../../assets/icons/map-pin-fill.svg";
import logo from "../../assets/images/logo.png";

import social1 from "../../assets/icons/facebook-fill.svg";
import social2 from "../../assets/icons/instagram-fill.svg";
import social3 from "../../assets/icons/linkedin-fill.svg";
import social4 from "../../assets/icons/youtube-fill.svg";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-social">
        <a href="#" className="logo-footer">
          <div className="logo-container-footer">
            <img src={logo} className="footer-logo" />
            <span className="logo-text-footer">Logo</span>
          </div>
        </a>

        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
        <div className="icons">
          <img src={social1} className="social-1" />
          <img src={social2} className="social-2" />
          <img src={social3} className="social-3" />
          <img src={social4} className="social-4" />
        </div>
      </div>

      <div className="footer-box">
        <h3>Services</h3>
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Projects</a>
        <a href="">Reviews</a>
        <a href="">Updates</a>
      </div>

      <div className="footer-box">
        <h3>Company</h3>
        <a href="">About</a>
        <a href="">Contact us</a>
        <a href="">Careers</a>
        <a href="">Culture</a>
        <a href="">Blog</a>
      </div>

      <div className="footer-box">
        <h3>Support</h3>
        <a href="">Getting started</a>
        <a href="">Help Center</a>
        <a href="">Server status</a>
        <a href="">Report a bug</a>
        <a href="">Chat support</a>
      </div>

      <div className="footer-box">
        <h3>Contact us</h3>
        <a href="">
          <img src={icon1} />
          contact@company.com
        </a>
        <a href="">
          <img src={icon2} />
          (414)687-5892
        </a>
        <a href="">
          <img src={icon3} />
          794 Mcallister St San Francisco, 94102
        </a>
      </div>
    </section>

  );
};

export default Footer;
