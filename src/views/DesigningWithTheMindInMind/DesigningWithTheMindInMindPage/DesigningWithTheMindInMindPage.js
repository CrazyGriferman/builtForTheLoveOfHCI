import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import pureBrownBackground from "../../../assets/pure-brown-background.jpg";
import designingImg from "../../../assets/designing-with-the-mind-in-mind.jpeg";
import "./DesigningWithTheMindInMindPage.css";

function DesigningWithTheMindInMindPage() {
  const RouterHistory = useHistory();
  const location = useLocation();

  useEffect(() => {
    const designingbook_el = document.querySelector(".designingbook");
    designingbook_el.classList.remove("designingbook-is-active");
  }, [location]);

  return (
    <>
      <section>
        <img
          className="designingbackground"
          src={pureBrownBackground}
          alt="background"
        />
        <div className="designingbook designingbook-is-active ">
          <div className="designingpages">
            <div className="designingpage  "></div>
            <div className="designingpage flipped ">
              <img className="designingpageCover" src={designingImg} alt="" />
            </div>
            <div className="designingpage ">
              <div
                className="designingchapter"
                onClick={() => {
                  console.log(1);
                  RouterHistory.push(
                    "/main/designingwiththemindinmind/chaptertwosimilarityfivestar"
                  );
                }}
              >
                chaptertwosimilarityfivestar
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <p>432543534</p>
        <h2>5423</h2>
        <p>4234235</p>
      </section>
    </>
  );
}

export default DesigningWithTheMindInMindPage;
