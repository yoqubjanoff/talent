import React from "react";
import footerlogo from "../../assets/images/footerlogo.svg";
import kopiy from "../../assets/icons/kopiraytt.svg";
import wk from "../../assets/icons/wk-64.png";
import pinterset from "../../assets/icons/pinterest.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";
import facebok from "../../assets/icons/facebook.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-start-box">
            <img className="footer-logo" src={footerlogo} alt="" />
            <p className="start-box-descriptions">
              <span className="Subcribe">Subcribe,</span> to Our Newsletter to
              get important News, Amazing Offers & Inside Scoops:
            </p>
            <form className="form">
              <input
                className="footer-input"
                type="text"
                placeholder="Enter your email"
              />
              <button className="footer-btn">Subcribe</button>
            </form>
          </div>
          <hr className="firstY-line" />
          <div className="footer-center-box">
            <ul className="footer-nav">
              <li className="nav-items-title">
                <p className="navigation">Navigation</p>
              </li>
              <li className="footer-nav-items">
                <a className="nav-link" href="#">
                  Main page
                </a>
              </li>
              <li className="footer-nav-items">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="footer-nav-items">
                <a className="nav-link" href="#">
                  For companies
                </a>
              </li>
              <li className="footer-nav-items">
                <a className="nav-link" href="#">
                  For individuals
                </a>
              </li>
              <li className="footer-nav-items">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="footer-nav-items">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <hr className="firstY-line" />
          <div className="footer-end-box">
            <div className="end-box-text-box">
                <address className="adress">Adress</address>
                <p className="end-box-description">Adress Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            </div>
            <div className="social-box">
                <a href="#"><img className="social-icon" src={wk} alt="social network icon" /></a>
                <a href="#"><img className="social-icon" src={pinterset} alt="social network icon" /></a>
                <a href="#"><img className="social-icon" src={instagram} alt="social network icon" /></a>
                <a href="#"><img className="social-icon" src={twitter} alt="social network icon" /></a>
                <a href="#"><img className="social-icon" src={facebok} alt="social network icon" /></a>
            </div>
            <div className="end-box-bootom-text">
                <a className="end-box-bottom-text" href="#">Terms</a>
                <a className="end-box-bottom-text" href="#">Privacy</a>
                <a className="end-box-bottom-text" href="#">Policy</a>
            </div>
          </div>
        </div>
        <div className="kopirayt">
              <img className="kopiy-img" src={kopiy} alt="copyright icon" />
              <p className="kopiy-title">Copyright 2023 - ITIC</p>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
