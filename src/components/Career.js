import React, { useEffect, useState } from "react";
import "./Career.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Applynow from "./Applynow.js"
import toast from "react-hot-toast";

import axios from "axios";

function Career() {
  const nav1 = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [career, setCareer] = useState([]);

  const getAllCareer = async () => {
    try {
      const { data } = await axios.get("http://localhost:8880/api/admin/career/get-career");
      if (data?.success) {
        setCareer(data?.career);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting Blogs");
    }
  };

  useEffect(() => {
    getAllCareer();
  }, []);

  return (
    <>
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative py-5 d-flex flex-column align-items-center">
            <div className="position-relative ourwork-header py-3">
              <div className="benefit-underline-career">
                <h6 className="benefit-career">CAREER</h6>
              </div>
            </div>
            <div className="col-lg-12">
              <h2 className="fs-2 text-white text-center py-2">
                Let's work and make things work. Our success is yours!!!
              </h2>
            </div>
          </div>
          <div className="row mx-5">
            {career.map((item, index) => (
              <div key={index} className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="500">
                  <h4>
                    <a href="#">{item.title}</a>
                  </h4>
                  <p>{item.job_description}</p>
                  <button className="animated-button1" onClick={handleShow}>
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="jobform-model">
              <Applynow/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" onClick={handleClose}>
                Close
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
    </>
  );
}

export default Career;
