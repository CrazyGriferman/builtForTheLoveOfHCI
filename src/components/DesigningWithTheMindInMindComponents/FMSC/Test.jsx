import React, { useEffect, useRef, useState } from "react";
import "./Test.scss";
import {
  oldBookWithLight,
  oldBookPage,
  pureBrownBackground,
} from "../../../assets/index";

export function Test() {
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

  const handleClickPrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };

  const handleClickNext = () => {
    //1，2，3，4 判断4到1的情况
    if (index === images.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };


  const images = [oldBookWithLight, oldBookPage, pureBrownBackground];

  return (
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
          {images.map((img, i) => (
            <img src={img} alt="test" key={i} />
          ))}
        </div>
        <button className="test-carousel_button left" onClick={handleClickPrev}>
          53534
        </button>
        <button
          className="test-carousel_button right"
          onClick={handleClickNext}
        >
          42355
        </button>
      </div>
    </div>
  );
}
