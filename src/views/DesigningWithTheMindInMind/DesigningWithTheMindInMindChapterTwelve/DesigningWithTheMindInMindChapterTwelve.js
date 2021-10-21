import React, { useState } from "react";
import { FMSCLinkGrid } from "../../../components/DesigningWithTheMindInMindComponents/FMSC/FMSCLinkGrid";
import "./DesigningWithTheMindInMindChapterTwelve.scss";
import {
  FMSCLogo,
  carouselImg1,
  carouselImg2,
  carouselImg3,
  carouselImg4,
  carouselImg5,
} from "../../../assets/index.js";
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
        NavBarName: "Ways to Give",
        ToggleLink: () => {
          console.log("订单");
        },
      },
      {
        NavBarName: "Impact of Our Work",
        ToggleLink: () => {
          console.log("个人资料");
        },
      },
      {
        NavBarName: "About Us",
        ToggleLink: () => {
          console.log("个人资料");
        },
      },
      {
        NavBarName: "MarketPlace",
        ToggleLink: () => {
          console.log("个人资料");
        },
      },
    ],
  });

  return (
    <section className="designingTwelveFMSCWrap">
      <nav className="designingTwelveFMSCWrap-navbar">
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
            <a href="">
              <i className="fa fa-search"></i>
            </a>
            <li>
              {/* <ul>
                <li>432</li>
                <li>432</li>
              </ul> */}
            </li>
          </ul>
        </div>
        <div className="designingTwelveFMSCWrap-navbar__login">
          <a href="">
            <i className="fa fa-lock"></i>
            <span> Log in</span>
          </a>
        </div>
      </nav>
      <main>
        <div className="designingTwelveFMSCWrap-carousel">
          <ol className="designingTwelveFMSCWrap-carousel_indicators">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
          <div className="designingTwelveFMSCWrap-carousel_item1">
            <img src="" alt="" />
          </div>
          <div className="designingTwelveFMSCWrap-carousel_item2"></div>
          <div className="designingTwelveFMSCWrap-carousel_item3"></div>
          <div className="designingTwelveFMSCWrap-carousel_item4"></div>
          <a href="">
            <i></i>
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
