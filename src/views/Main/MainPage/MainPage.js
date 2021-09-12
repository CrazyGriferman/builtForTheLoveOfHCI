import React, { useEffect } from "react";
import oldBookPage from "../../../assets/old-book-page.jpeg";
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
          <div className="page">test</div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
        </div>
      </div>
    </>
  );
}
