import React from "react";

const BannerSection7 = () => {
  return (
    <section className="rv-8-banner">
      <div className="container">
        <div className="row align-items-end justify-content-between">
          <div className="col-xxl-6 col-lg-6">
            <div className="rv-8-banner__txt">
              <h6 className="rv-8-section__sub-title rv-8-banner__sub-title rv-text-anime">
                Software Development
              </h6>

              <h1 className="rv-8-banner__title rv-text-anime">
                Crafting Innovative Solutions for Your Business.
              </h1>

              <p className="rv-8-banner__descr rv-text-anime">
                Empowering businesses with cutting-edge technology solutions that drive growth and efficiency. Let's build the future together.
              </p>
              <a href="#" className="rv-3-def-btn rv-8-def-btn">
                Discover Our Services
              </a>
            </div>
          </div>

          <div className="col-xxl-2 col-lg-1">
            <div className="rv-8-banner__img">
              <img src="assets/img/logo/mylogo.png" alt="Software Development" />
            </div>
          </div>

          <div className="col-xxl-4 col-lg-5">
            <div className="rv-8-banner__form-area">
              <h5 className="rv-text-anime">Get a Free Consultation</h5>
              <form action="#" className="rv-8-banner__form">
                <input
                  type="text"
                  name="name"
                  id="rv-8-form__name"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  id="rv-8-form__email"
                  placeholder="Email Address"
                />
                <select name="service-type" id="rv-8-form__service-type">
                  <option value="none" hidden>
                    Select Service Type
                  </option>
                  <option value="web-development">
                    Web Development
                  </option>
                  <option value="mobile-app-development">
                    Mobile App Development
                  </option>
                  <option value="software-consulting">
                    Software Consulting
                  </option>
                  <option value="cloud-solutions">
                    Cloud Solutions
                  </option>
                </select>
                <input type="date" name="date" id="rv-8-form__date" />
                <input
                  type="text"
                  name="company"
                  id="rv-8-form__company"
                  placeholder="Company Name"
                />
                <button type="submit" className="rv-3-def-btn">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="rv-8-banner__vectors">
        <img
          src="assets/img/rv-8-vector-1.png"
          alt="vector"
          className="rv-8-banner__vector rv-8-banner__vector--1"
        />
        <img
          src="assets/img/rv-8-vector-2.png"
          alt="vector"
          className="rv-8-banner__vector rv-8-banner__vector--2"
        />
        <img
          src="assets/img/rv-8-vector-3.png"
          alt="vector"
          className="rv-8-banner__vector rv-8-banner__vector--3"
        />
      </div>
    </section>
  );
};

export default BannerSection7;
