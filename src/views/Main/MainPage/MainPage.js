import React, { useEffect } from "react";
import oldBookPage from "../../../assets/old-book-page.jpeg";
import designingImg from "../../../assets/designing-with-the-mind-in-mind.jpeg";
import dontMakeMeThinkImg from "../../../assets/dont-make-me-think.jpeg";
import designingInterfacesImg from "../../../assets/designing-interfaces.jpeg";
import webFormDesignImg from "../../../assets/web-form-design.jpeg";
import "./MainPage.css";

export function MainPage() {
  useEffect(() => {
    /* 点击翻页效果 */
    let pages = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
      let page = pages[i];
      if (i % 2 === 0) {
        page.style.zIndex = pages.length - i; /* 改变z层,让这些页面都排好 */
      }
    }

    (function () {
      for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        page.pageNum = i + 1;
        page.onclick = function () {
          if (this.pageNum % 2 === 0) {
            this.classList.remove("flipped");
            this.previousElementSibling.classList.remove("flipped");
          } else {
            this.classList.add("flipped");
            this.nextElementSibling.classList.add("flipped");
          }
        };
      }
    })();
    /* 点击翻页效果 */
  }, []);
  return (
    <>
      <div className="book">
        <div id="pages" className="pages">
          <div className="page page1">test</div>
          <div className="page page2">
            <img
              src={designingImg}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "relative",
              }}
            />
          </div>
          <div className="page page3">234</div>
          <div className="page page4">
            <img
              src={dontMakeMeThinkImg}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "relative",
              }}
            />
          </div>
          <div className="page page5">5342345</div>
          <div className="page page6">
            <img
              src={designingInterfacesImg}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "relative",
              }}
            />
          </div>
          <div className="page page7">12321</div>
          <div className="page page8">
            <img
              src={webFormDesignImg}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "relative",
              }}
            />
          </div>
          <div className="page page9">12321</div>
          <div className="page page9">12321</div>
        </div>
      </div>
    </>
  );
}
