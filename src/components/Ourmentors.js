import React from "react";
import "./Ourmentors.css";
import { ArrowRight } from "react-bootstrap-icons";
function Ourmentors() {
  return (
    <div>
      <div className="main-ourbenifit">
        <div className="benefits-outer text-center px-5 mx-5">
          <div className="row position-relative py-5 d-flex flex-column align-items-center">
            <div className="col-12 position-relative benefit-header py-3 col-12">
              <div className="benefit-underline">
                <h6 className="benefit">OUR MENTORS</h6>
              </div>
            </div>
            <div className="col-12">
              <h2 className="fs-2 text-white">
                Our Exceptional Mentors <br /> Shaping Future Top-Notch
                Developers in MERN Stack + React Native
              </h2>
              <p className=" ">
                Industry experts with proven excellence and wealth of experience
                in MERN Stack and React Native <br /> to help them improve With
                a minimum of 4 to 5 years of hands-on experience,our mentors
                bring a deep understanding of the latest trends, technologies
                and best practices directly from the front lines of the tech
                industry.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card-content position-relative col-10  rounded-4">
                <div className="benefit-bg-img col-12 rounded-4">
                  <img
                    src="./images/pratik_profile.png"
                    className="img-fluid rounded-4 profile-img"
                    alt="img"
                  />
                </div>
                <div className="benefit-link col-12 p-3 text-start rounded-4">
                  <h3 className="text-light">Pratik Sable</h3>
                  <p className="text-light">Software Developer</p>

                  <p className=" text-light">
                    Our mentors aren't just educators; they are top developers
                    who have honed their skills in real-world scenarios.{" "}
                  </p>
                  <div className="fs-2 mt-3 benefit-arrow-container">
                    <div className="arrow-scroller">
                      <ArrowRight color="white" size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg- col-md-4 col-sm-12 ">
              <div className="card-content position-relative col-10  rounded-4">
                <div className="benefit-bg-img col-12 rounded-4">
                  <img
                    src="./images/neha_profile.jpeg"
                    className="img-fluid rounded-4 profile-img"
                    alt="img"
                  />
                </div>
                <div className="benefit-link col-12 p-3 text-start rounded-4">
                  <h3 className="text-light">Neha Patil</h3>
                  <p className="text-light">Software Developer</p>

                  <p className=" text-light">
                    We are able to give you truely indendant advice providing
                    you with invaluable insights and practical knowledge to
                    excel in the competitive world of IT.
                  </p>
                  <div className="fs-2 mt-3 benefit-arrow-container">
                    <div className="arrow-scroller">
                      <ArrowRight color="white" size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="position-relative card-content col-10  rounded-4">
                <div className="benefit-bg-img col-12 rounded-4">
                  <img
                    src="./images/pratik_profile.png"
                    className="img-fluid rounded-4 profile-img"
                    alt="img"
                  />
                </div>
                <div className="benefit-link col-12 p-3 text-start rounded-4">
                  <h3 className="text-light">Sachin Sharma</h3>
                  <p className="text-light">Software Developer</p>

                  <p className=" text-light">
                    Your journey at SpeedUp Infotech is guided by mentors who
                    are committed to your success.{" "}
                  </p>
                  <div className="fs-2 mt-3 benefit-arrow-container">
                    <div className="arrow-scroller">
                      <ArrowRight color="white" size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourmentors;
