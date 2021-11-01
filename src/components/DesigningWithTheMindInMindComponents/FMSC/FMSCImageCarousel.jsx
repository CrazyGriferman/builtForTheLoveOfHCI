import React, { useEffect, useRef, useState } from "react";
import "./FMSCImageCarousel.scss";

export function FMSCImageCarousel({ imageCarousel }) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);

  const slideRef = useRef();

  useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current.clientWidth;
      setWidth(width);
    }
  }, [setWidth]);

  window.addEventListener("resize", function () {
    const width = slideRef.current.clientWidth;
    //setXPosition(xPosition + width);
    setWidth(width);
  });

  const handleClickPrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };

  const handleClickNext = () => {
    //1，2，3，4 判断4到1的情况
    if (index === imageCarousel.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };

  return (
    imageCarousel && (
      <div className="test">
        <div className="test-carousel">
          <div
            className="test-carousel_slide"
            style={{
              transition: "transform 0.6s ease-in-out",
              transform: `translateX(${xPosition}px)`,
            }}
            ref={slideRef}
          >
            {imageCarousel.map((item, i) => (
              <div className="test-carousel_slide_item">
                {item.caption}
                <img src={item.img} alt="test" key={i} />
              </div>
            ))}
          </div>
          <button
            className="test-carousel_button left"
            onClick={handleClickPrev}
          >
            prev
          </button>
          <button
            className="test-carousel_button right"
            onClick={handleClickNext}
          >
            next
          </button>
        </div>
      </div>
    )
  );
}
export default FMSCImageCarousel;
