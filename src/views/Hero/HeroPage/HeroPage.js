import React from "react";
import "./HeroPage.scss";
import { oldBookWithLight } from "../../../assets/index.js";
import { useHistory } from "react-router";

export function HeroPage() {
  const RouterHistory = useHistory();

  const toggleLink = (urlLink) => {
    RouterHistory.push(
      /* "/main/designingwiththemindinmind/chaptertwosimilarityfivestar" */
      "/main"
    );
  };

  return (
    <div>
      <h1 class="heroPageTitle" onClick={toggleLink}>
        click for Reading
      </h1>
      <img
        src={oldBookWithLight}
        style={{ width: "100vw", height: "100vh" }}
        alt=""
      />
    </div>
  );
}
