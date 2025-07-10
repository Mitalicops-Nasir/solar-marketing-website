import React, { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/images/logo.png";
import phone from "../../assets/icons/phone-fill.svg";
import "./navbar.css";








const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
    <p>
      <a href="#about us">About Us</a>
    </p>
    <p>
      <a href="#privacy policy">Privacy Policy</a>
    </p>
  </>
);

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 60);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`nav ${isSticky ? 'sticky' : ''}`}>
      <a href="#" className="logo">
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <span className="logo-text">Logo</span>
        </div>
      </a>
      <ul className="navbar">
        <Menu />
      </ul>

      <div className="navbar-top-btn">
        <a href="#" className="top-btn">
          <span>Call now</span>
          <img src={phone} alt="" />
        </a>
      </div>

      <div className="sm-devices-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="sm-devices-menu-container">
            <div className="sm-devices-menu-content">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
