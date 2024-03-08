import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CareerBlock = () => {
  const [career, setCareer] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const getAllCareer = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8880/api/admin/career/get-career"
      );
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

  //  console.log(career);
  return (
    <div>
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative py-5 d-flex flex-column align-items-center">
            <div className="position-relative ourwork-header py-3 d-flex justify-content-between align-items-center">
              <div className="benefit-underline-career">
                <h6 className="benefit-career">CAREER</h6>
              </div>
              <button
                onClick={() => {
                  navigate("/admin/adminmenu");
                }}
              >
                Back To Menu
              </button>
            </div>
            <div className="col-lg-12">
              <h2 className="fs-2 text-white text-center py-2">
                Lets work and make things work. Our success is yours!!!
              </h2>
            </div>
          </div>
          <div className="row mx-5">
            {career.map((item, index) => (
              <div key={index} className="col-md-6 mt-4 mt-md-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h4>
                    <a href="#">{item.title}</a>
                  </h4>
                  <p>{item.job_description}</p>
                  <button className="">Update</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerBlock;
