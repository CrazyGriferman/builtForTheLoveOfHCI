import React, { useEffect, useRef, useState } from "react";
import "./FMSCImageCarousel.scss";

export function FMSCImageCarousel({ imageCarousel }) {
  const [slideIndex, setSlideIndex] = useState(1);
  console.log(imageCarousel);
  const nextSlide = () => {
    if (slideIndex !== imageCarousel.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imageCarousel.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imageCarousel.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    imageCarousel && (
      <div className="carousel">
        {imageCarousel.map((item, index) => (
          <div
            className={
              slideIndex === index + 1
                ? "carousel-slide active-anim"
                : "carousel-slide"
            }
          >
            {item.caption}
            <img src={item.img} alt="test" key={index} />
          </div>
        ))}

        <div className="carousel-arrow right">
          <a href="#" onClick={nextSlide}>
            <i className="fa fa-angle-right"></i>
          </a>
        </div>
        <div className="carousel-arrow left">
          <a href="#" onClick={prevSlide}>
            <i className="fa fa-angle-left"></i>
          </a>
        </div>
      </div>
    )
  );
}
export default FMSCImageCarousel;
