import React from "react";
import "./Second_section.css";
import dynamic from "../../assets/icons/dynamic.png";
import portfolio from "../../assets/icons/after2.png";
import specialist from "../../assets/icons/after3.png";
import skills from "../../assets/icons/after4.png";
import jobs from "../../assets/icons/after5.png";
import income from "../../assets/icons/after6.png";
import achkarik from "../../assets/images/achkarik/Mask Group.jpg";
import negrcha from "../../assets/images/negr/Mask Group@2x.jpg";
import brat2 from "../../assets/images/brat2/Mask Group@2x.jpg";

const SecondSection = () => {
  return (
    <section className="second-section">
      <div className="container">
        <h2 className="second-section-title">Pass the test and get hired</h2>
        <div className="second-wrapper">
          <ul className="start-box">
            <li className="startbox-items">
              <div className="secondbox-textbox custom-bg-1">
                <h3 className="start-box-title">Find out your level in IT</h3>
                <p className="start-box-description">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </li>
            <li className="startbox-items">
              <div className="secondbox-textbox custom-bg-2">
                <h3 className="start-box-title">Find out your level in IT</h3>
                <p className="start-box-description">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </li>
            <li className="startbox-items">
              <div className="secondbox-textbox custom-bg-3">
                <h3 className="start-box-title">Find out your level in IT</h3>
                <p className="start-box-description">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </li>
            <li className="startbox-items">
              <div className="secondbox-textbox custom-bg-4">
                <h3 className="start-box-title">Find out your level in IT</h3>
                <p className="start-box-description">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </li>
            <li className="startbox-items">
              <div className="secondbox-textbox custom-bg-5">
                <h3 className="start-box-title">Find out your level in IT</h3>
                <p className="start-box-description">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </li>
            <li className="startbox-items">
              <div className="secondbox-textbox custom-bg-6">
                <h3 className="start-box-title">Find out your level in IT</h3>
                <p className="start-box-description">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </li>
          </ul>
          <div className="end-box">
            <p className="become">Become</p>
            <span className="border"></span>
            <h2 className="endbox-title">The best Uzbek Talent</h2>
            <img className="endbox-first-img" src={achkarik} alt="Achkarik" />
            <img className="endbox-second-img" src={negrcha} alt="Negrcha" />
            <img className="endbox-thriths-img" src={brat2} alt="Brat2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
