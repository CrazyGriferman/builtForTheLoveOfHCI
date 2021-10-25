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
import { FMSCDropdownForm } from "../../../components/DesigningWithTheMindInMindComponents/FMSC/FMSCDropdownForm";
export function DesigningWithTheMindInMindChapterTwelve() {
  const testContent = [
    {
      category: "Food Aid Request",
    },
    {
      category: "Haiti Earthquake",
    },
    {
      category: "Blog",
    },
  ];

  const testContent2 = [
    {
      category: "Get Involved",
      dropdown: [
        {
          text: "Overview",
          url: "http://www.baidu.com",
        },
        {
          text: "Volunteer",
          url: "http://www.baidu.com",
        },
        {
          text: "Volunteer Info",
          url: "http://www.baidu.com",
        },
        {
          text: "Host a MobilePack event",
          url: "http://www.baidu.com",
        },
        {
          text: "Become a speaker",
          url: "http://www.baidu.com",
        },
        {
          text: "Virtual experiences",
          url: "http://www.baidu.com",
        },
        {
          text: "Food in Action trips",
          url: "http://www.baidu.com",
        },
      ],
    },
    {
      category: "Ways to Give",
      dropdown: [
        {
          text: "Overview",
          url: "http://www.google.com",
        },
        {
          text: "Fundraise for FMSC",
          url: "http://www.google.com",
        },
        {
          text: "Make a monthly donation",
          url: "http://www.google.com",
        },
        {
          text: "Planned giving",
          url: "http://www.google.com",
        },
        {
          text: "Matching gifts",
          url: "http://www.google.com",
        },
        {
          text: "Give to grow",
          url: "http://www.google.com",
        },
        {
          text: "Donate to a MobilePack",
          url: "http://www.google.com",
        },
        {
          text: "Other ways to give",
          url: "http://www.google.com",
        },
      ],
    },
    {
      category: "Impact of Our Work",
      dropdown: [
        {
          text: "Overview",
          url: "http://www.google.com",
        },
        {
          text: "What makes us different",
          url: "http://www.google.com",
        },
        {
          text: "Where we serve",
          url: "http://www.google.com",
        },
        {
          text: "Blog",
          url: "http://www.google.com",
        },
        {
          text: "Food aid request",
          url: "http://www.google.com",
        },
      ],
    },
    {
      category: "About Us",
      dropdown: [
        {
          text: "Overview",
          url: "http://www.google.com",
        },
        {
          text: "Our mission",
          url: "http://www.google.com",
        },
        {
          text: "Financial accountability",
          url: "http://www.google.com",
        },
        {
          text: "Values",
          url: "http://www.google.com",
        },
        {
          text: "FAQs",
          url: "http://www.google.com",
        },
        {
          text: "Careers",
          url: "http://www.google.com",
        },
        {
          text: "Board of directors",
          url: "http://www.google.com",
        },
        {
          text: "Executive staff",
          url: "http://www.google.com",
        },
        {
          text: "FMSC history",
          url: "http://www.google.com",
        },
        {
          text: "Resources",
          url: "http://www.google.com",
        },
        {
          text: "Contact us",
          url: "http://www.google.com",
        },
        {
          text: "Request a speaker",
          url: "http://www.google.com",
        },
      ],
    },
    {
      category: "MarketPlace",
      dropdown: [
        {
          text: "Shop online",
          url: "http://www.google.com",
        },
        {
          text: "Shop in store",
          url: "http://www.google.com",
        },
        {
          text: "Meet the artisans",
          url: "http://www.google.com",
        },
        {
          text: "What is MarketPlace",
          url: "http://www.google.com",
        },
      ],
    },
  ];

  const SearchIcon = () => (
    <a href="#">
      <i className="fa fa-search"></i>
    </a>
  );

  const SearchForm = () => (
    <form className="designingTwelveFMSCWrap-navbar__search_form">
      <input type="text" name="query" placeholder="Search" />
      <span>
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </span>
    </form>
  );

  return (
    <section className="designingTwelveFMSCWrap">
      <nav className="designingTwelveFMSCWrap-navbar">
        <a href="#" className="designingTwelveFMSCWrap-navbar__logo">
          <img src={FMSCLogo} alt="" />
        </a>
        <div className="designingTwelveFMSCWrap-navbar__nav">
          <FMSCLinkGrid props={testContent2} />
        </div>
        <div className="designingTwelveFMSCWrap-navbar-buttonContainer">
          <button>Donate</button>
          <button>Volunteer</button>
        </div>
        <div className="designingTwelveFMSCWrap-navbar__search">
          <FMSCDropdownForm
            dropdownIcon={<SearchIcon />}
            dropdownForm={<SearchForm />}
          />
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
