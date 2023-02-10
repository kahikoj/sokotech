import React, { useState } from "react";
import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//css//
import '../App.css';

// //Images//
import { image } from './images';

const HomePage = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => setCurrentSlide(current)
  };

  //prop-types//
HomePage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

  const { images } = image();

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className='slider-image' src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <p>Displaying slide {currentSlide + 1} of {images.length}</p>
    </div>
  );
};

export default HomePage;
