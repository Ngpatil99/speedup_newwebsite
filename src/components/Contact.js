import React from "react";
import "./Contact.css";
import Swal from "sweetalert2";
import { Input } from "semantic-ui-react";

import emailjs from "emailjs-com";
function Contact() {

  const SERVICE_ID = "service_064glzh";
  const TEMPLATE_ID = "service_064glzh";
  const PUBLIC_KEY = "5SA8v41g5-WM58FPz";
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="main-contact-bg">
      <div className="container-fluid">
        <div className="row mx-2 py-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="benefit-underline">
              <h6 className="benefit">CONTACT US</h6>
            </div>
            <h1 className="text-light py-4">
              We are always ready to <br /> help you and answer <br /> your
              questions
            </h1>

            <p className="text-justify">
              We build and activate brands through cultural insight, strategic
              vision, and the power of emotion across every element of its
              expression. Our eCommerce design starts and ends with a
              best-in-class experience.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <form onSubmit={handleOnSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <input
                    type="text"
                    class="form-control no-border"
                    id="form-input-control-name"
                    control={Input}
                    placeholder="Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <input
                    type="Email"
                    class="form-control no-border"
                    id="form-input-control-email-app"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row contact-row-2">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <input
                    type="text"
                    class="form-control no-border"
                    id="inputEmail3"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <input
                    type="Email"
                    class="form-control no-border"
                    id="inputEmail3"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="row mt-5 mx-1">
                <textarea
                  placeholder="Message"
                  className="form-control"
                ></textarea>
              </div>
              <p className="mt-4"><input type="checkbox"/>   I accept the privacy and terms.</p>
            </form>
            <a href="#" class="animated-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Send Message
            </a>
          </div>
        </div>

        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.132387105852!2d73.84381310842575!3d18.52291868249838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1643f8c351%3A0x40ac02878f9919e5!2sSpeedUp%20Infotech!5e0!3m2!1sen!2sin!4v1704799541221!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="row main-qutions">
          <div className="inner-main-qutions">
            <h1 className="text-center text-danger display-4 fw-bold ">
              Still have questions?
            </h1>
            <p className="text-center text-dark py-2">
              Stop worrying about technology problems. Focus on your business.
              <br /> Let us provide the support you deserve.
              <br /> <br /> <br />
              <a href="#" class="animated-button-contact2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Speak To an Expert{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
