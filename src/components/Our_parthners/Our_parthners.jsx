import React from "react";
import './Our_parthners.css'
import xd from "../../assets/images/Сгруппировать 7097/Сгруппировать 7097.jpg"

const Our_parthners = () => {

  return (
    <section className="our-parthners" id="Our parthners">
      <div className="container">
        <div className="our-parthners-wrapper">
          <div className="our-parthners-text-box">
            <h2 className="our-parthners-title">Our Partners</h2>
            <div className="our-parthners-line"></div>
            <p className="our-parthners-description">
              We cooperate with various companies, including
            </p>
          </div>
            <div className="our-parthners-img-box">
                <img className="our-parthners-img" src={xd} alt="our partners image" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Our_parthners;
