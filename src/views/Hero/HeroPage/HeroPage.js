import React from "react";
import "./HeroPage.css";
import oldBookWithLight from "../../../assets/old-book-with-light.jpg";
import { useHistory } from "react-router";

export function HeroPage() {
  const RouterHistory = useHistory();

  const toggleLink = () => {
    RouterHistory.push(
      "/main/designingwiththemindinmind/chaptertwosimilarityfivestar"
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
