import React from "react";
import logo from "../../assets/icons/logotip.svg";
import kasoy from "../../assets/icons/kasoy.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <div className="site-logo">
            <a href="#" className="logo">
              <img className="img-logo" src={logo} alt="sites icon" />
            </a>
          </div>
          <div className="navigate-box">
            <nav>
              <ul className="navigate-list">
                <li className="navigate-about">
                  <a href="#" className="about">
                    About us
                  </a>
                  <ul className="nav-list">
                    <li className="nav-items">
                      <a href="#" className="nav-link">
                        Main page
                      </a>
                    </li>
                    <li className="nav-items">
                      <a
                        href="#Pass the test and get hired"
                        className="nav-link"
                      >
                        Pass the test
                      </a>
                    </li>
                    <li className="nav-items">
                      <a href="#Hire a specialist" className="nav-link">
                        Hire a specialist
                      </a>
                    </li>
                    <li className="nav-items">
                      <a href="#Industries Experience" className="nav-link">
                        Industries
                      </a>
                    </li>
                    <li className="nav-items">
                      <a href="#Our Blog" className="nav-link">
                        Our Blog
                      </a>
                    </li>
                    <li className="nav-items">
                      <a href="#Our parthners" className="nav-link">
                        Our parthners
                      </a>
                    </li>
                  </ul>
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
            <div>
              <a className="language" href="#">
                EN
              </a>
            </div>
          </div>
          <img className="kasoy-img" src={kasoy} alt="position image" />
          <div className="position-text-box">
            <p className="position-text">Hire</p>
            <p className="position-text">Curate</p>
            <p className="position-text">Cultivate</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
