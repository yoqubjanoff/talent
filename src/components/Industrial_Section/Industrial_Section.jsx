import React from "react";
import "./Industrial_Section.css";
import dotbg from "../../assets/icons/dotbg.svg"

const Industrial_Section = () => {
  return (
    <section className="industrial-section" id="Industries Experience">
      <div className="container">
        <div className="industrial-section-wrapper">
          <div className="industrial-section-start-box">
            <h2 className="industrial-section-title">Industries Experience</h2>
            <span className="line"></span>
            <p className="industrial-section-description">
              The scope of our industry experience across multiple markets
              combined with proven talent expertise fuels.
            </p>
          </div>
          <div className="industrial-section-end-box">
            <div className="industrial-section-end-box1">
              <h5 className="fintech custom-bg-1">Fintech</h5>
              <p className="fintech-description">
                Lorem ipsum dolor sit amet. consectur adipiscing.
              </p>
            </div>
            <div className="industrial-section-end-box1">
              <h5 className="fintech custom-bg-2">Ed Tech</h5>
              <p className="fintech-description">
                Lorem ipsum dolor sit amet. consectur adipiscing.
              </p>
            </div>
            <div className="industrial-section-end-box1">
              <h5 className="fintech custom-bg-3">Ecommerce</h5>
              <p className="fintech-description">
                Lorem ipsum dolor sit amet. consectur adipiscing.
              </p>
            </div>
            <div className="industrial-section-end-box1">
              <h5 className="fintech custom-bg-4">Blockchain</h5>
              <p className="fintech-description">
                Lorem ipsum dolor sit amet. consectur adipiscing.
              </p>
            </div>
            <div className="industrial-section-end-box1">
              <h5 className="fintech custom-bg-5">Agri Tech</h5>
              <p className="fintech-description">
                Lorem ipsum dolor sit amet. consectur adipiscing.
              </p>
            </div>
            <div className="industrial-section-end-box1">
              <h5 className="fintech custom-bg-6">Production</h5>
              <p className="fintech-description">
                Lorem ipsum dolor sit amet. consectur adipiscing.
              </p>
            </div>
            <img className="dotbg" src={dotbg} alt="background image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industrial_Section;
