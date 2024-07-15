import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ServiceSection5 = () => {
  return (
    <section className="rv-8-services pt-120 pb-60">
      <div className="container">
        <div className="rv-8-services__heading">
          <div className="rv-8-section__heading">
            <h6 className="rv-8-section__sub-title rv-text-anime">
              Our Services
            </h6>
            <h2 className="rv-8-section__title rv-text-anime">
              That's Our {""}
              <span className="styled">
                Services
                <svg
                  width="191"
                  height="20"
                  viewBox="0 0 191 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.350829 19.9954C62.8308 5.83547 125.782 4.29367 187.776 13.0908C189.008 13.2659 190.838 11.7486 190.99 9.4079C191.144 7.02425 189.429 5.15235 188.194 4.95568C125.733 -5.0348 63.0249 0.340437 0.251936 18.7297C-0.147058 18.8469 -0.0406972 20.0845 0.350829 19.9954Z"
                    fill="#93B617"
                  />
                </svg>
              </span>
            </h2>
          </div>
        </div>

        <DivAnimateYAxis className="row rv-8-services__row g-30">
          <div className="col-md-6">
            <div className="rv-8-service">
              <div className="rv-8-service__icon">
                <i className="fa fa-laptop" aria-hidden="true"></i>
                {/* <img src="assets/img/software-service-icon-1.png" alt="Icon" /> */}
              </div>

              <div className="rv-8-service__txt">
                <h4 className="rv-8-service__title">
                  <a href="#">Web Development</a>
                </h4>
                <p className="rv-3-service__descr">
                  Building responsive and user-friendly websites tailored to your business needs.
                </p>
                <a
                  href="#"
                  className="rv-8-service__btn rv-1-schedule-conf__btn"
                >
                  Read More <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="rv-8-service">
              <div className="rv-8-service__icon">
                <i className="fa fa-laptop" aria-hidden="true"></i>

                {/* <img src="assets/img/software-service-icon-2.png" alt="Icon" /> */}
              </div>

              <div className="rv-8-service__txt">
                <h4 className="rv-8-service__title">
                  <a href="#">Mobile App Development</a>
                </h4>
                <p className="rv-3-service__descr">
                  Creating intuitive and engaging mobile applications for iOS and Android platforms.
                </p>
                <a
                  href="#"
                  className="rv-8-service__btn rv-1-schedule-conf__btn"
                >
                  Read More <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="rv-8-service">
              <div className="rv-8-service__icon">
                <i className="fa fa-laptop" aria-hidden="true"></i>

                {/* <img src="assets/img/rv-8-service-icon-3.png" alt="Icon" />
                 */}
              </div>

              <div className="rv-8-service__txt">
                <h4 className="rv-8-service__title">
                  <a href="#">Software Consulting</a>
                </h4>
                <p className="rv-3-service__descr">
                  Providing expert advice and strategic planning for software projects to maximize efficiency and success.
                </p>
                <a
                  href="#"
                  className="rv-8-service__btn rv-1-schedule-conf__btn"
                >
                  Read More <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="rv-8-service">
              <div className="rv-8-service__icon">
                <i className="fa fa-laptop" aria-hidden="true"></i>

                {/* <img src="assets/img/software-service-icon-4.png" alt="Icon" /> */}
              </div>

              <div className="rv-8-service__txt">
                <h4 className="rv-8-service__title">
                  <a href="#">Coding Tutoring</a>
                </h4>
                <p className="rv-3-service__descr">
                  Empowering those new to tech with knowledge by providing tutoring services for them.
                </p>
                <a
                  href="#"
                  className="rv-8-service__btn rv-1-schedule-conf__btn"
                >
                  Read More <i className="fa-regular fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default ServiceSection5;