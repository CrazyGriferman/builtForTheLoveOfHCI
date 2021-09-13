import React from "react";
import { useHistory } from "react-router";
import designingImg from "../../../assets/designing-with-the-mind-in-mind.jpeg";
import "./DesigningWithTheMindInMindPage.css";

function DesigningWithTheMindInMindPage() {
  const RouterHistory = useHistory();

  return (
    <div className="book">
      <div className="pages">
        <div className="page "></div>
        <div className="page flipped ">
          <img className="pageCover" src={designingImg} alt="" />
        </div>
        <div className="page ">
          <div
            className="chapter"
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
  );
}

export default DesigningWithTheMindInMindPage;
