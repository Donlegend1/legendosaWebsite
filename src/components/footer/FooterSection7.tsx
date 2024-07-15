import Link from "next/link";
import React from "react";

const FooterSection7 = () => {
  return (
    <footer className="rv-8-footer">
      <div className="rv-4-footer__socials">
         <div className="rv-4-footer__social">
          <Link href="https://www.instagram.com/legendosaconsultants" target="blank">
            <i className="fa-brands fa-instagram"></i> Instagram
          </Link>
        </div>
         <div className="rv-4-footer__social">
          <Link href="https://www.linkedin.com/in/legendosa-consultants-0795b2303/" target="blank">
            <i className="fa-brands fa-linkedin-in"></i> LinkedIn
          </Link>
        </div>
        <div className="rv-4-footer__social">
          <Link href="#">
            <i className="fa-brands fa-facebook-f"></i> Facebook
          </Link>
        </div>
        <div className="rv-4-footer__social">
          <Link href="#">
            <i className="fa-brands fa-twitter"></i> Twitter
          </Link>
        </div>
       
      </div>

      <div className="rv-8-footer-middle">
        <div className="container">
          <div className="row gy-4 gx-lg-4 gx-md-5 gx-3 justify-content-center ">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="rv-1-footer__about">
                <Link href="/">
                  <img
                    style={{height:"100px", width:"250px"}}
                    src="assets/img/logo/mylogo.png"
                    alt="Logo"
                    className="logo"
                  />
                </Link>
                {/* <p className="rv-1-footer__about-txt">
                 Legend OSA Consultants.
                </p> */}
                <div className="rv-1-footer-widget rv-8-footer-widget">
                  <ul className="rv-1-footer-widget__infos">
                    <li>
                      <img src="assets/img/rv-1-icon-6.png" alt="icon" /> 24th
                     Abuja, Nigeria
                    </li>
                    <li>
                      <img src="assets/img/rv-1-icon-7.png" alt="icon" />{" "}
                      <Link href="tel:+12365858988">+2348147122184</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="rv-1-footer-widget rv-8-footer-widget">
                <h5 className="rv-1-footer-widget__title">Our Services</h5>
                <ul className="rv-8-footer-widget__links">
                  <li>
                    <Link href="#">Web Development</Link>
                  </li>
                  <li>
                    <Link href="#">Mobile App Development</Link>
                  </li>
                  <li>
                    <Link href="#">ICT Consultation</Link>
                  </li>
                  <li>
                    <Link href="#">Coding Tutor</Link>
                  </li>
                  <li>
                    <Link href="#">Computers and Accessories</Link>
                  </li>
                </ul>
              </div>
            </div>

        

            <div className="col-xl-4 col-lg-12 col-md-4 col-sm-12">
              <div className="rv-1-footer-nwsltr rv-8-footer-widget">
                <h5 className="rv-1-footer-widget__title">Newsletter Signup</h5>
                <form
                  action="#"
                  className="rv-6-footer-nwsltr__form  rv-8-footer-nwsltr__form"
                >
                  <div className="nwsltr-top">
                    <input
                      type="email"
                      name="email"
                      id="rv-8-subs-form"
                      placeholder="Enter your Email..."
                    />
                    <button>
                      <i className="fa-light fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="rv-6-footer-nwsltr__checkbox">
                    <input
                      type="checkbox"
                      id="nwsltr-checkbox"
                      name="checkbox"
                      value="1"
                      required
                    />
                    <label htmlFor="nwsltr-checkbox">
                      {" "}
                      I agree to the <Link href="#">Privacy Policy</Link>.
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rv-2-footer rv-8-footer-bottom">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-md-7">
              <p className="rv-2-copyright rv-1-copyright mb-0 text-center text-md-start">
                &copy; {new Date().getFullYear()} LegendOSA All Rights Reserved
                by site
              </p>
            </div>
            <div className="col-md-5">
              <div className="rv-2-footer__nav rv-8-footer-bottom__nav">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Term of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection7;
