import React from "react";
import firstSectionImg from "../../assets/images/negr/Mask Group@2x.jpg"
import "./First_Section.css"

const First_Section = () => {
  return (
    <section className="fisrt-section">
      <div className="container">
        <div className="wrapper">
          <div className="text-box">
            <h1 className="main-title">
              The potential of IT could lead to a better and overall smarter
              future for everyone
            </h1>
            <h3 className="description">
            We strive for excellence in the growing world of talent and we hire, curate, and cultivate talent in Uzbekistan
            </h3>
            <a href="#" className="navigate-link">
              Learn
            </a>
          </div>
          <img className="first-section-img" src={firstSectionImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default First_Section;
