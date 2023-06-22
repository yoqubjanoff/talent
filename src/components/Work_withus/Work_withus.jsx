import React from "react";
import logo from "../../assets/images/logotip.svg";
import "./Work_withus.css";

const Work_withus = () => {
  return (
    <section className="Work-withus">
      <div className="container">
        <div className="Work-withus-wrapper">
          <div className="Work-withus-start-box">
            <img className="Work-withus-logo" src={logo} alt="logtip" />
          </div>
          <div className="Work-withus-end-box">
            <h2 className="Work-withus-end-box-title">Work with us</h2>
            <form>
              <div className="form-style-box">
                <div className="form-top-box">
                  <input className="name-input" type="text" placeholder="Your name" />
                  <input className="name-input" type="text" placeholder="Last Name" />
                </div>
                <input className="email-input"  type="email" placeholder="Email Address" />
                <input className="phone-input" type="text" placeholder="Phone Number" />
                <button className="btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work_withus;
