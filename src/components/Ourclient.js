import React from "react";
import "./Ourclient.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Ourclient() {
  const settings = {
    dots: true,
    speed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  

  return (
    <div className="main-client">
      <h5>Companies where our Engineers are Placed..!</h5>


      <Slider {...settings} className="slider" style={{ overflow: "hidden" }}>
        <div className="d-flex">
          <img src="./images/logo01.png" />
          <img src="./images/logo02.png" />
          <img src="./images/logo03.png" />
          <img src="./images/logo04.png" />
          <img src="./images/logo05.png" />
          <img src="./images/logo06.png" />
          <img src="./images/logo07.png" />
        </div>
        <div className="d-flex">
          <img src="./images/logo01.png" />
          <img src="./images/logo02.png" />
          <img src="./images/logo03.png" />
          <img src="./images/logo04.png" />
          <img src="./images/logo05.png" />
          <img src="./images/logo06.png" />
          <img src="./images/logo07.png" />
        </div>
        <div className="d-flex">
          <img src="./images/logo01.png" />
          <img src="./images/logo02.png" />
          <img src="./images/logo03.png" />
          <img src="./images/logo04.png" />
          <img src="./images/logo05.png" />
          <img src="./images/logo06.png" />
          <img src="./images/logo07.png" />
        </div>
        <div className="d-flex">
          <img src="./images/logo01.png" />
          <img src="./images/logo02.png" />
          <img src="./images/logo03.png" />
          <img src="./images/logo04.png" />
          <img src="./images/logo05.png" />
          <img src="./images/logo06.png" />
          <img src="./images/logo07.png" />
        </div>
        <div className="d-flex">
          <img src="./images/logo8.png" />
          <img src="./images/logo9.jpeg" />
          <img src="./images/logo10.png" />
          <img src="./images/logo11.png" />
          <img src="./images/logo12.png" />
          <img src="./images/logo13.jpeg" />
          <img src="./images/logo15.png" />
          <img src="./images/logo16.jpeg" />

        </div>
       
      </Slider>


      
      
    </div>
  );
}

export default Ourclient;
