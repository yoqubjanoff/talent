import React from "react";
import firstSectionImg from "../../assets/images/virtualmasck/Rectangle 40@2x.jpg";
import kasoy from "../../assets/icons/kasoy.svg";
import "./First_Section.css";

const First_Section = () => {
  return (
    <section className="fisrt-section">
      <div className="container">
        <div className="wrapper ">
          <div className="text-box">
            <h1 className="main-title">
              The potential of IT could lead to a better and overall smarter
              future for everyone
            </h1>
            <h3 className="description">
              We strive for excellence in the growing world of talent and we
              hire, curate, and cultivate talent in Uzbekistan
            </h3>
            <a href="#" className="navigate-link">
              Learn
            </a>
          </div>
          <img
            className="first-section-img"
            src={firstSectionImg}
            alt="a person how is wearing VR glases"
          />
          <img className="kasoy-img" src={kasoy} alt="position image" />
          <div className="position-text-box">
            <p className="position-text">Hire</p>
            <p className="position-text">Curate</p>
            <p className="position-text">Cultivate</p>
          </div>
        </div>
        <div className="bg-wrapper1">
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
          <span className="litle-boxes1"></span>
        </div>
      </div>
    </section>
  );
};

export default First_Section;
