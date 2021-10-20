import React, { useState } from "react";
import { FMSCLinkGrid } from "../../../components/DesigningWithTheMindInMindComponents/FMSC/FMSCLinkGrid";
import "./DesigningWithTheMindInMindChapterTwelve.scss";
import FMSCLogo from "../../../assets/designing/fmsc-web-logo.png";
import "./DesigningWithTheMindInMindChapterTwelve.scss";
export function DesigningWithTheMindInMindChapterTwelve() {
  const testContent = {
    className: "test",
    content: [
      {
        url: "http://www.baidu.com",
        text: "百度",
      },
      {
        url: "http://www.google.com",
        text: "谷歌",
      },
    ],
  };

  const [NavItem] = useState({
    content: [
      {
        NavBarName: "Get Involved",
        ToggleLink: () => {
          console.log("市场");
        },
      },
      {
        NavBarName: "订单",
        ToggleLink: () => {
          console.log("订单");
        },
      },
      {
        NavBarName: "个人资料",
        ToggleLink: () => {
          console.log("个人资料");
        },
      },
    ],
  });
  console.log(NavItem);

  return (
    <section className="designingTwelveFMSCWrap">
      <header>
        <div className="designingTwelveFMSCWrap-navbar">
          <img
            className="designingTwelveFMSCWrap-navbar__logo"
            src={FMSCLogo}
            alt=""
          />
          <div className="designingTwelveFMSCWrap-navbar__nav">
            <ul>
              {NavItem.content.map((Nav) => {
                return (
                  <li key={Nav.NavBarName}>
                    <a href="#" onClick={Nav.ToggleLink}>
                      {Nav.NavBarName}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="designingTwelveFMSCWrap-navbar-buttonContainer">
            <button>32423</button>
            <button>543543</button>
          </div>
          <div className="designingTwelveFMSCWrap-navbar__search">
            <ul>
              <a href="">dropdown1</a>
              <li>
                <ul>
                  <li>432</li>
                  <li>432</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="designingTwelveFMSCWrap-navbar__login">
            <a href="">dropdown2</a>
          </div>
        </div>
      </header>
      <main>
        <div className="designingTwelveFMSCWrap-carousel">
          <ol className="designingTwelveFMSCWrap-carousel_indicators">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
          <div className="designingTwelveFMSCWrap-carousel_item1"></div>
          <div className="designingTwelveFMSCWrap-carousel_item2"></div>
          <div className="designingTwelveFMSCWrap-carousel_item3"></div>
          <div className="designingTwelveFMSCWrap-carousel_item4"></div>
          <a href="">
            <i>左边箭头</i>
          </a>
          <a href="">
            <i>右边箭头</i>
          </a>
        </div>
        <div className="designingTwelveFMSCWrap-main-buttonList">
          <FMSCLinkGrid props={testContent} />
        </div>
        <div className="designingTwelveFMSCWrap-main-title1">
          <h1>How it works</h1>
        </div>
      </main>
    </section>
  );
}
