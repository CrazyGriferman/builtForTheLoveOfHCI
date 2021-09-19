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
  useEffect(() => {
    /* bug: 翻页效果必须一页一页来，现在点击后面的页面仍然能够翻 */
    /* 目前想到的解决办法： 让某个事件在n秒内只能被监听到一次 */
    /* 点击翻页效果 */
    const pages = document.getElementsByClassName("page");

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
                RouterHistory.push(
                  "/main/designingwiththemindinmind"
                  /* "/main/designingwiththemindinmind/chaptertwosimilarityfivestar" */
                );
              }}
            >
              <h1>Chapter 1</h1>
              <h1>Chapter 2</h1>
              <h1>Chapter 3</h1>
              <h1>Chapter 4</h1>
              <h1>Chapter 5</h1>
              <h1>Chapter 6</h1>
              <h1>Chapter 7</h1>
              <h1>Chapter 8</h1>
              <h1>Chapter 9</h1>
              <h1>Chapter 10</h1>
              <h1>Chapter 11</h1>
              <h1>Chapter 12</h1>
              <h1>Chapter 13</h1>
              <h1>Chapter 14</h1>
              <h1>Chapter 15</h1>
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
