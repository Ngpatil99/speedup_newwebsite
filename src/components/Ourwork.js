import React from "react";
import "./Ourwork.css";
import Carousel from "react-bootstrap/Carousel";

function Ourwork() {
  return (
    <>
      <div className="main-ourwork-bg">
        <div className="container">
          <div className="row position-relative py-2 d-flex flex-column align-items-center">
            <div className="position-relative ourwork-header py-3">
              <div className="ourwork-underline me-5">
                <h3 className="ourwork">OUR WORK SHOWCASE</h3>
              </div>
            </div>
            <div className="col-lg-12">
              <h2 className="fs-2 text-white text-center py-2">
                Enjoy our incredible recently <br />
                completed projects.
              </h2>
            </div>
          </div>

          <div className="row py-4">
            <Carousel>
              <Carousel.Item interval={3000}>
                <div className="row mx-3">
                  <div className="col-lg-3 col-md-3 col-sm-12 mt-5">
                    <div class="hover03 ">
                      <figure>
                        <img
                          src="./images/quiesta.jpg"
                          className="ourwork-slider-img"
                        />{" "}
                      </figure>
                      <h4 className="pt-2">Cravita Technology</h4>
                      <p className="readmore move-right">
                        <a>Design/Development</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div class="hover03 ">
                      <figure>
                        <img
                          src="./images/PIAC.JPG"
                          className="ourwork-slider-img"
                        />{" "}
                      </figure>
                      <h4 className="pt-2">PIAC IAS Academy</h4>
                      <p className="readmore move-right">
                        <a>Design/Development</a>
                      </p>{" "}
                    </div>
                  </div>{" "}
                  <div className="col-lg-3 col-md-3 col-sm-12 mt-5 ">
                    <div class="hover03 ">
                      <figure>
                        <img
                          src="./images/Retail_storeys.jpg"
                          className="ourwork-slider-img"
                        />{" "}
                      </figure>
                      <h4 className="pt-2">Retails Storys</h4>
                      <p className="readmore move-right">
                        <a>Design/Development</a>
                      </p>{" "}
                    </div>
                  </div>{" "}
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div class="hover03 ">
                      <figure>
                        <img
                          src="./images/shree.jpg"
                          className="ourwork-slider-img"
                        />{" "}
                      </figure>
                      <h4 className="pt-2">Shree Gurudev Sainiki</h4>
                      <p className="readmore move-right">
                        <a>Design/Development</a>
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <div className="row mx-3">
                  <div className="col-lg-3 col-md-3 col-sm-12 mt-5">
                    <div class="hover03 ">
                      <figure>
                        <img
                          src="./images/quiesta.jpg"
                          className="ourwork-slider-img"
                        />{" "}
                      </figure>
                      <h4 className="pt-2">Cravita Technology</h4>
                      <p className="readmore move-right">
                        <a>Design/Development</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div class="hover03 ">
                      <figure>
                        <img
                          src="./images/PIAC.JPG"
                          className="ourwork-slider-img"
                        />{" "}
                      </figure>
                      <h4 className="pt-2">PIAC IAS Academy</h4>
                      <p className="readmore move-right">
                        <a>Design/Development</a>
                      </p>{" "}
                    </div>
                  </div>{" "}
                  <div className="col-lg-3 col-md-3 col-sm-12 mt-5 ">
                    <div class="hover03 ">
                      <figure>
                        <img
                          src="./images/Retail_storeys.jpg"
                          className="ourwork-slider-img"
                        />{" "}
                      </figure>
                      <h4 className="pt-2">Retails Storys</h4>
                      <p className="readmore move-right">
                        <a>Design/Development</a>
                      </p>{" "}
                    </div>
                  </div>{" "}
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <div class="hover03 ">
                      <figure>
                        <img
                          src="./images/shree.jpg"
                          className="ourwork-slider-img"
                        />{" "}
                      </figure>
                      <h4 className="pt-2">Shree Gurudev Sainiki</h4>
                      <p className="readmore move-right">
                        <a>Design/Development</a>
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourwork;
