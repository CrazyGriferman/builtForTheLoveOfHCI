import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { designingImg } from "../../../assets/";
import { pureBrownBackground } from "../../../assets";
import "./DesigningWithTheMindInMindPage.scss";

function DesigningWithTheMindInMindPage(props) {
  const RouterHistory = useHistory();
  const location = useLocation();

  useEffect(() => {
    const designingbook_el = document.querySelector(".designingbook");
    designingbook_el.classList.remove("designingbook-is-active");
  }, [location]);

  return (
    <>
      <img
        className="designingbackground"
        src={pureBrownBackground}
        alt="background"
      />
      <div className="designingbook  designingbook-is-active">
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
              test
            </div>
          </div>
        </div>
      </div>
      {props.children}
    </>
  );
}

export default DesigningWithTheMindInMindPage;
