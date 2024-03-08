import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import Ourclient from "./Ourclient";
import Ourmentors from "./Ourmentors";
import Lifeline from "./Lifeline";

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={1500}>
          <div className="slider-img-1">
            <div className="slider-content">
              <h1 className="slider-heading">
                Speed<span className="text-danger">up</span>Infotech <br />
                provides the best React JS <br />
                Training in Pune.{" "}
              </h1>
              <h5>
                We merge imagination and technology to help thousands of brands{" "}
                <br />
                grow in an age of digital transformation.
              </h5>

              <div className="slider-button">
                <a href="#" class="animated-button1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Get Started
                </a>
                <a class="boxes move-up">CALL US:+91 -9766439090</a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        
        <Carousel.Item interval={1500}>
          <div className="slider-img-2">
            <div className="slider-content">
              <h1 className="slider-heading">
                Strategy & Technology <br></br>
                <span className="text-danger">Consultants</span> to the world.
              </h1>
              <h5>
                We merge imagination and technology to help thousands of brands{" "}
                <br />
                grow in an age of digital transformation.
              </h5>

              <div className="slider-button">
                <a href="#" class="animated-button1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Get Started
                </a>
                <a class="boxes move-up">CALL US:+91 -9766439090</a>
              </div>
            </div>
          </div>
        </Carousel.Item>{" "}
        <Carousel.Item interval={1500}>
          <div className="slider-img-3">
            <div className="slider-content">
              <h1 className="slider-heading">
                Strategy & Technology <br></br>
                <span className="text-danger">Consultants</span> to the world.
              </h1>
              <h5>
                We merge imagination and technology to help thousands of brands{" "}
                <br />
                grow in an age of digital transformation.
              </h5>

              <div className="slider-button">
                <a href="#" class="animated-button1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Get Started
                </a>
                <a class="boxes move-up">CALL US:+91 -9766439090</a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      
      <div>
        <Ourclient />
        <Ourmentors />

        <div className="py-5" style={{backgroundColor:"rgb(30, 38, 54)"}}>
          <Lifeline />
        </div>
      </div>
    </div>
  );
}

export default Slider;
