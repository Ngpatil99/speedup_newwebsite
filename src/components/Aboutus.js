import React from "react";
import "./Aboutus.css";
import Vision from "./Vision";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Enform from "./Enform";

function Aboutus() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container-fluid main-about-bg">
        <div className="row mx-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="mx-5 main-img">
              <div class="img-wrapper">
                <img className="circle-img" src="./images/team02.jpg" />
                <img src="./images/slider-2.jpg" className="px-5 about-img" />
              </div>

              <img src="./images/slider-1.jpg" className="about-img-2" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="benefit-underline-about">
              <h6 className="benefit-about">WHY CHOOSE US</h6>
            </div>
            <h2 className="text-light mt-2">Welcome To Speedup Infotech</h2>

            <p className="mt-3">
              Speedup Infotech has created a career platform for aspirants
              through our React JS training, offering offline classes,
              self-paced videos, or live online interactive sessions. With
              exercises, use cases, and discussions over complex coding
              scenarios, learners will gain a deeper understanding of React JS
              concepts and expand their skills to become the best React JS
              application developer.
            </p>
            <section id="faq" class="faq p-0">
              <div class="container" data-aos="fade-up">
                <h4 className="text-light">Our Process & Methodology</h4>

                <ul class="faq-list accordion p-1" data-aos="fade-up">
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      class="collapsed"
                      data-bs-target="#faq1"
                    >
                      Demo Session
                      <i class="bx bx-chevron-down icon-show"></i>
                    </a>
                    <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                      <p>
                      Welcome to our highly anticipated demo session, where innovation meets exploration.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#faq5"
                      class="collapsed"
                    >
                      Classroom/Online Training
                      <i class="bx bx-chevron-down icon-show"></i>
                    </a>
                    <div id="faq5" class="collapse" data-bs-parent=".faq-list">
                      <p>
                      Embark on a transformative learning journey with our comprehensive training programs, available both in traditional classroom settings and convenient online formats.
                      </p>
                    </div>
                  </li>
                 
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                      class="collapsed"
                    >
                      Study Material and Syllabus
                      <i class="bx bx-chevron-down icon-show"></i>
                    </a>
                    <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                      <p>
                      Unlock the door to academic excellence with our meticulously curated study materials and comprehensive syllabus.
                      </p>
                    </div>
                  </li>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                      class="collapsed"
                    >
                      Mock Interview{" "}
                      <i class="bx bx-chevron-down icon-show"></i>
                    </a>
                    <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                      <p>
                      Prepare for success with our Mock Interview sessions tailored to enhance your interview skills and boost your confidence.
                      </p>
                    </div>
                  </li>

                </ul>
              </div>
            </section>
          
              <div className="">
              <a
                type="button"
                href="#"
                class="animated-button-navbar"
                onClick={handleShow}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Download Brouchure
              </a>
              <Modal show={show} onHide={handleClose}>
                <div closeButton>
                  <div class="background">
                    <div class="shape"></div>
                    <div class="shape"></div>
                  </div>
                  <Enform/>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mission">
      <div className="row">
        <Vision />
      </div>
      </div>
    </>
  );
}

export default Aboutus;
