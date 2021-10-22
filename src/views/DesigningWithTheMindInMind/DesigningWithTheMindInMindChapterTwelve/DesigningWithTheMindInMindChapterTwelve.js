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
  const testContent = [
    {
      url: "http://www.baidu.com",
      text: "Food Aid Request",
    },
    {
      url: "http://www.google.com",
      text: "Haiti Earthquake",
    },
    {
      url: "http://www.google.com",
      text: "Blog",
    },
  ];

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
        <a href="#" className="designingTwelveFMSCWrap-navbar__logo">
          <img src={FMSCLogo} alt="" />
        </a>
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
          <div className="designingTwelveFMSCWrap-carousel_item">
            <div className="designingTwelveFMSCWrap-carousel_item__caption">
              <h4>
                <a href="">Christmas Around the World</a>
                <br />
                <br />
                <span>
                  Experience the sights, sounds and traditions of the Christmas
                  season in FMSC partner communities.
                  <br />
                  <br />
                  Join us for free.
                </span>
                <br />
                <br />
                <button>
                  <span>Give now &gt;</span>
                </button>
              </h4>
            </div>
            <img src={carouselImg1} alt="" />
          </div>
          <div className="designingTwelveFMSCWrap-carousel_item"></div>
          <div className="designingTwelveFMSCWrap-carousel_item"></div>
          <div className="designingTwelveFMSCWrap-carousel_item"></div>
          <a href="">
            <i></i>
          </a>
          <a href="">
            <i></i>
          </a>
        </div>
        <div className="designingTwelveFMSCWrap-buttonList">
          <FMSCLinkGrid props={testContent} />
        </div>
        <div className="designingTwelveFMSCWrap-fluid">
          <h1>How it works</h1>
        </div>
      </main>
    </section>
  );
}
