import React from "react";
import triangle from "../../assets/icons/25224.png";
import logo from "../../assets/icons/logotip.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <div className="site-logo">
            <a href="#" className="logo">
              <img className="img-logo" src={logo} alt="" />
            </a>
          </div>
          <div className="navigate-box">
            <nav>
              <ul className="navigate-list">
                <li className="navigate-about">
                  <a href="#" className="about">
                    About us
                  </a>
                  <img className="triangle" src={triangle} alt="" />
                </li>
                <li className="navigate-item">
                  <a href="#" className="for-companies">
                    For companie
                  </a>
                </li>
                <li className="navigate-item">
                  <a href="#" className="for-companies">
                    For individuals
                  </a>
                </li>
                <li className="navigate-item">
                  <a href="#" className="login">
                    Login
                  </a>
                </li>
                <li className="navigate-item ">
                  <a href="#" className="sign-up">
                    Sign-up
                  </a>
                </li>
              </ul>
            </nav>
            <div className="language">
              <a href="#" className="language-link">EN</a>
            </div>
            <ul className="nav-list">
              <li className="nav-items">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-items">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-items">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-items">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-items">
                <a href="#" className="nav-link">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
