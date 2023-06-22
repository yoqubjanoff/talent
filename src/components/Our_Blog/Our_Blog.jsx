import React from "react";
import "./Our_Blog.css";
import ourblogimg1 from "../../assets/images/ourblogimg2/image 24.jpg";
import ourblogimg2 from "../../assets/images/imgourblog/image 24@2x.jpg";
import arrow from "../../assets/icons/arrowright1.svg";
import arrow2 from "../../assets/icons/arrow2.svg";
import dotbg from "../../assets/icons/dotbg.svg";

const Our_Blog = () => {
  return (
    <section className="our-blog" id="Our Blog">
      <div className="container">
        <div className="our-blog-wrapper">
          <div className="our-blog-top-box">
            <h2 className="our-blog-title">Our Blog</h2>
            <div className="our-blog-line"></div>
            <p className="our-blog-description">
              Our ecosystem is comprised of talented IT professionals and
              Software Developers who are passionate about technology.
            </p>
          </div>
          <div className="our-blog-bottom-box-wrapper">
            <div className="our-blog-bottom-box">
              <div className="our-blog-cards1">
                <img
                  className="our-blog-bottom-box-img"
                  src={ourblogimg1}
                  alt="image of developper"
                />
                <span className="our-blog-bottom-box-img-title1">Taining</span>
                <div className="our-blog-text-box">
                  <p className="our-blog-bottom-box-description">
                    Set on a practical project based training model with the
                    ourpose of improving the skills of Software Developers and
                  </p>
                  <a className="our-blog-link1" href="#">
                    Learn More <img className="arrow-img" src={arrow} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="our-blog-bottom-box">
              <div className="our-blog-cards2">
                <img
                  className="our-blog-bottom-box-img"
                  src={ourblogimg2}
                  alt="image of developper"
                />
                <span className="our-blog-bottom-box-img-title2">
                  Marketplace
                </span>
                <div className="our-blog-text-box">
                  <p className="our-blog-bottom-box-description">
                    Set on a practical project based training model with the
                    ourpose of improving the skills of Software Developers and
                  </p>
                  <a className="our-blog-link2" href="#">
                    Learn More{" "}
                    <img
                      className="arrow-img"
                      src={arrow}
                      alt="image of developper"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="our-blog-bottom-box">
              <div className="our-blog-cards3">
                <img
                  className="our-blog-bottom-box-img"
                  src={ourblogimg1}
                  alt="image of developper"
                />
                <span className="our-blog-bottom-box-img-title3">Startup</span>
                <div className="our-blog-text-box">
                  <p className="our-blog-bottom-box-description">
                    Set on a practical project based training model with the
                    ourpose of improving the skills of Software Developers and
                  </p>
                  <a className="our-blog-link3" href="#">
                    Learn More <img className="arrow-img" src={arrow2} alt="arrow right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img className="dotimgbg" src={dotbg} alt="position image" />
        </div>
      </div>
    </section>
  );
};

export default Our_Blog;
