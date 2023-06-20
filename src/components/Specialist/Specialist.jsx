import React from "react";
import "./Specialist.css";
import inputImg from "../../assets/icons/suitcases.png";
import arrow from "../../assets/icons/arrow.png";
import lupa from "../../assets/icons/lupa.svg";

const Specialist = () => {
  return (
    <section className="specialist-section">
      <div className="container">
        <div className="specialist-wrapper">
          <div className="specialist-top-box">
            <h2 className="specialist-title">Hire a specialist</h2>
            <p className="specialist-description">
              Type in the name of the position, company or job category you are
              looking for
            </p>
            <div className="input-wrapper">
              <div className="input-img-box">
                <div className="input-img-category-box d-flex align-items-center gap-2">
                  <div className="input-img">
                    <img src={inputImg} alt="" className="img" />
                  </div>
                  <p className="category"> Category</p>
                </div>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search skill..."
                />
              </div>
              <button type="button" className="search-button">
                <img className="button-img" src={lupa} alt="" />
                Search
              </button>
            </div>
          </div>
          <p className="choose-skil">or Choose ...</p>
          <div className="skils-box">
            <div className="skils-box1">
              <div className="skils">
                <a className="skils-link" href="#">
                  Full Stack Developer
                </a>
                <span className="skils-count">324</span>
              </div>
              <div className="skils">
                <a className="skils-link" href="#">
                  UI/UX Designer
                </a>
                <span className="skils-count">259</span>
              </div>
              <div className="skils">
                <a className="skils-link" href="#">
                  IOS Developer
                </a>
                <span className="skils-count">231</span>
              </div>
              <div className="skils">
                <a className="skils-link" href="#">
                  Web Developer
                </a>
                <span className="skils-count">222</span>
              </div>
              <div className="skils">
                <a className="skils-link" href="#">
                  Copywriter
                </a>
                <span className="skils-count">219</span>
              </div>
            </div>
            <div className="skils-box2">
              <div className="skils">
                <a className="skils-link" href="#">
                  Graphic Designer
                </a>
                <span className="skils-count">192</span>
              </div>
              <div className="skils">
                <a className="skils-link" href="#">
                  Illustrator
                </a>
                <span className="skils-count">176</span>
              </div>
              <div className="skils">
                <a className="skils-link" href="#">
                  Video Editor
                </a>
                <span className="skils-count">154</span>
              </div>
              <div className="skils">
                <a className="skils-link" href="#">
                  Front End Dev
                </a>
                <span className="skils-count">142</span>
              </div>
              <div className="skils">
                <a className="skils-link" href="#">
                  3D Modeler
                </a>
                <span className="skils-count">128</span>
              </div>
            </div>
            <div className="skils-box3">
              <div className="skils">
                <a className="skils-link" href="#">
                  Officer
                </a>
                <span className="skils-count">102</span>
              </div>
              <div className="skils">
                <a className="skils-link" href="#">
                  Content Creator
                </a>
                <span className="skils-count">95</span>
              </div>
              <div className="skils">
                <a className="skils-link" href="#">
                  Translator
                </a>
                <span className="skils-count">72</span>
              </div>
              <div className="skils">
                <a className="skils-link" href="#">
                  Java Developer
                </a>
                <span className="skils-count">51</span>
              </div>
            </div>
            <div className="categories-box d-flex">
              <a href="#" className="categories-title">More categories</a>
              <img className="arrow-img" src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
