import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => setCurrentSlide(current)
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="./images/840.jpg" alt="laptop" />
        </div>
        <div>
          <img src="https://via.placeholder.com/500x500" alt="computer" />
        </div>
        <div>
          <img src="https://via.placeholder.com/500x500" alt="accessory" />
        </div>
      </Slider>
      <p>Displaying slide {currentSlide + 1} of 3</p>
    </div>
  );
};

export default HomePage;
