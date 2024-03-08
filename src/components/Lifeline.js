import React from "react";
import "./Lifeline.css";

function Lifeline() {
  return (
    <div className="main-lifeline-bg ">
      <div className="back-marquee-bg">
        <div className="row main-marquee-footer">
          <marquee className="" behavior="alternate">
            <ul className="footer-headline">
              <li>
                🚀 Hurry Up! Secure Your Future in IT with High-Paying Packages!
                🚀
              </li>
              <li>🌟 Limited Seats Available – Only 30! 🌟</li>
              <li>
                🎓 Join us for Expert Training and Aim for 5 to 9 LPA Packages
                in the IT Industry!
              </li>
            </ul>
          </marquee>
        </div>
      </div>
      <div className="container">
        <div className="row position-relative py-5 d-flex flex-column align-items-center">
          <div className="position-relative ourwork-header py-3">
            <div className="ourwork-underline me-5">
              <h6 className="ourwork">LIFELINE AT SPEEDUP </h6>
            </div>
          </div>
          <div className="col-lg-12">
            <h2 className="fs-2 text-white text-center py-2">
              Life at SpeedUp Infotech Where Dedication Meets Happiness
            </h2>
            <p className="text-center">
              Experience the dynamic life at SpeedUp Infotech, where our
              workforce is not just dedicated but radiates happiness. Our team
              comprises experts in the industry, creating a vibrant work
              environment that fosters collaboration, innovation, and success.
              Join us and be part of a thriving community where every day is a
              journey filled with joy and dedication!
            </p>
          </div>
        </div>

        <div className="row mx-4">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card">
              <img
                class="card__background"
                src="./images/team02.jpg"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div class="card__content | flow">
                <a href="#" class="underline-hover-effect">
                  SpeedUp Infotech{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card">
              <img
                class="card__background"
                src="./images/team01.jpg"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div class="card__content | flow">
                <a href="#" class="underline-hover-effect">
                  SpeedUp Infotech{" "}
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card">
              <img
                class="card__background"
                src="./images/slider-1.jpg"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div class="card__content | flow">
                <a href="#" class="underline-hover-effect">
                  SpeedUp Infotech{" "}
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="row mx-4 lifelinerow2">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card">
              <img
                class="card__background"
                src="./images/team02.jpg"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
             <div class="card__content | flow">
                <a href="#" class="underline-hover-effect">
                  SpeedUp Infotech{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card">
              <img
                class="card__background"
                src="./images/team01.jpg"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div class="card__content | flow">
                <a href="#" class="underline-hover-effect">
                  SpeedUp Infotech{" "}
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div class="card">
              <img
                class="card__background"
                src="./images/slider-3.png"
                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                width="1920"
                height="2193"
              />
              <div class="card__content | flow">
                <a href="#" class="underline-hover-effect">
                  SpeedUp Infotech{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lifeline;
