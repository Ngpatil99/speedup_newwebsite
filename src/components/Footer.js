import React from "react";
import "./Footer.css";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <>
      <div className="back-marquee-bg">
        <div className="row main-marquee-footer">
          <marquee className="" behavior="scroll" scrollamount="12">
            <ul className="footer-headline">
              <li>⏳ Don't Miss Out on Your Opportunity! Enroll Now! ⏳</li>
            </ul>
          </marquee>
        </div>
      </div>
      <div className="main-footer">
        <div className="container-fluid">
          <div className="row  mx-4 ">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <img src="./images/logo.png" className="w-50" />
              <div className="py-4">
                <h4> We are here</h4>
                <p>
                  {" "}
                  Speedup Infotech, 3rd Floor, 1204/16, DNG House, Avenir
                  Building, Jangali Maharaj Rd, opposite Bal Gandharv Police
                  Station, beside Shree Gajanan Maharaj Temple, Shivajinagar,
                  Pune, Maharashtra 411004
                </p>{" "}
                <h5 className="text-danger">+91 -9766439090</h5>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12">
              <h5 className="me-4">Services</h5>
              <div className="py-5 services-link">
                <p>
                  <a href="#">Logo Design</a>
                </p>
                <p>
                  {" "}
                  <a href="#">Website Development Apppcation </a>
                </p>{" "}
                <p>
                  {" "}
                  <a href="#">Android Apppcation </a>
                </p>
                <p>
                  <a href="#">ios Apppcation </a>
                </p>
                <p>
                  {" "}
                  <a href="#">IT Staffing </a>
                </p>{" "}
              </div>
            </div>{" "}
            <div className="col-lg-2 col-md-2 col-sm-12 ">
              <h5 className="">Company</h5>
              <div className="py-5 services-link">
                <p><a href="#">Success Stories</a></p>
                <p><a href="#">About Us</a></p>
                <p><a href="#">Hire From Us</a></p>
                <p><a href="#">Careers</a></p>
              </div>
            </div>{" "}
            <div className="col-lg-3 col-md-2 col-sm-12">
              <h5>Courses</h5>
              <div className="py-5 services-link">
                <p><a href="#">Certification in MERN Stack Development</a></p>
                <p><a href="#">Certification in Full Stack Web Development</a></p>
                <p><a href="#">Certification in Front End Web Development</a></p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12">
              <h5>Legal Information</h5>
              <div className="py-5 services-link">
                <p><a href="#">Terms & Conditions</a></p>
                <p><a href="#">Privacy Popcies</a></p>
                <p><a href="#">Refund Popcy</a></p>
                <p><a href="#">Quick Info</a></p>
              </div>
            </div>
            <hr />
            <div className="row footer-icon py-3">
              <div className="col-lg-6 col-md-8 col-sm-12">
                <p>
                  Copyright © 2023 Saga. Designed & Developed by MotivoWeb only
                  on Envato Market.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div class="rounded-social-buttons">
                  <a
                    href="https://www.facebook.com/speedupinfotech?mibextid=ZbWKwL"
                    target="_blank"
                  >
                    {" "}
                    <CiFacebook url="" class="social-button twitter" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/speedupinfotech/?originalSubdomain=in"
                    target="_blank"
                  >
                    <CiLinkedin class="social-button linkedin" />
                  </a>
                  <a
                    href="https://youtube.com/@SpeedUpInfotech?si=xgiJEuydJ2VhDK6b"
                    target="_blank"
                  >
                    <CiYoutube class="social-button youtube" />
                  </a>
                  <a
                    href="https://www.instagram.com/speedupinfotech?igsh=MzRlODBiNWFlZA=="
                    target="_blank"
                  >
                    {" "}
                    <CiInstagram class="social-button instagram" />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 ">
                <div class="bt_whatsapp">
                  <a
                    href="https://api.whatsapp.com/send?phone=+91-9975127827&text=Any%20Queries%20Contact%20Us"
                    target="_blank"
                    rel="noopener"
                  >
                    {" "}
                    <img
                      src="./images/whatsapp.svg"
                      class="img-fluid"
                      alt=" Technologies WhatsApp"
                      width="50px"
                      height="50px"
                    />
                  </a>
                </div>
                <div class="bt_call">
                  <a
                    href="tel:+919766439090"
                    id="callnowbutton"
                    onclick="return gtag_report_conversion('tel:+919766439090');"
                  >
                    <img
                      src="https://fortunecloudindia.com/assets/img/icons/call_new.png"
                      height="50px"
                      width="50px"
                      alt="float img "
                      id="floating2_img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
