import React, { useEffect } from "react";
import oldBookPage from "../../../assets/old-book-page.jpeg";
import designingImg from "../../../assets/designing-with-the-mind-in-mind.jpeg";
import dontMakeMeThinkImg from "../../../assets/dont-make-me-think.jpeg";
import designingInterfacesImg from "../../../assets/designing-interfaces.jpeg";
import webFormDesignImg from "../../../assets/web-form-design.jpeg";
import { useHistory } from "react-router";
import "./MainPage.css";

export function MainPage() {
  const RouterHistory = useHistory();
  window.addEventListener("scroll", () => {
    console.log("scrolled");
  });
  useEffect(() => {
    /* bug: 翻页效果必须一页一页来，现在点击后面的页面仍然能够翻 */
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
        page.onwheel = function (event) {
          if (this.pageNum % 2 === 0 && event.deltaY < 0) {
            // scroll up - left flip
            this.classList.remove("flipped");
            this.previousElementSibling.classList.remove("flipped");
          } else {
            // scroll down - right flip
            this.classList.add("flipped");
            this.nextElementSibling.classList.add("flipped");
          }
        };
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
        <div className="pages">
          <div className="page ">
            <h1>HCI Gallery</h1>
          </div>
          <div className="page ">
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
              543543你好54325436457654765 675436453654765475436534654
              64537645765765475467546 7657564765756
            </div>
          </div>
          <div className="page pageCover">
            <img className="pageCover" src={dontMakeMeThinkImg} alt="" />
          </div>
          <div className="page ">5342345</div>
          <div className="page pageCover">
            <img className="pageCover" src={designingInterfacesImg} alt="" />
          </div>
          <div className="page ">12321</div>
          <div className="page pageCover">
            <img className="pageCover" src={webFormDesignImg} alt="" />
          </div>
          <div className="page ">12321</div>
          <div className="page ">12321</div>
        </div>
      </div>
    </>
  );
}
