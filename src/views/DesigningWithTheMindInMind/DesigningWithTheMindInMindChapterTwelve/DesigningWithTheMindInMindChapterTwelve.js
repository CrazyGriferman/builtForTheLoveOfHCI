import React, { useState } from "react";
import {
  FMSCGridWithDropDown,
  FMSCDropdownForm,
  FMSCImageCarousel,
} from "../../../components/index.js";
import "./DesigningWithTheMindInMindChapterTwelve.scss";
import {
  FMSCLogo,
  carouselImg1,
  carouselImg2,
  carouselImg3,
  carouselImg4,
  carouselImg5,
  carouselImg6,
  oldBookWithLight,
  oldBookPage,
  pureBrownBackground,
} from "../../../assets/index.js";
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

  const SearchIcon = () => <i className="fa fa-search"></i>;

  const SearchForm = () => (
    <form className="designingTwelveFMSCWrap-navbar-buttonContainer__search_form">
      <input type="text" name="query" placeholder="Search" />
      <span>
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </span>
    </form>
  );

  const LoginIcon = () => <i className="fa fa-lock"> login</i>;

  const LoginForm = () => (
    <form className="designingTwelveFMSCWrap-navbar-buttonContainer__login_form">
      <div className="designingTwelveFMSCWrap-navbar-buttonContainer__login_form_group">
        <input type="email" placeholder="Email address" />
        <span>Email address is required.</span>
      </div>
      <div className="designingTwelveFMSCWrap-navbar-buttonContainer__login_form_group">
        <input type="password" placeholder="Password" />
        <span>Password is required.</span>
      </div>
      <div className="designingTwelveFMSCWrap-navbar-buttonContainer__login_form_group__help">
        Forgot password?
      </div>
      <div className="designingTwelveFMSCWrap-navbar-buttonContainer__login_form_group">
        <button type="submit">Log in</button>
      </div>
      <div className="designingTwelveFMSCWrap-navbar-buttonContainer__login_form__divider"></div>
      <div className="designingTwelveFMSCWrap-navbar-buttonContainer__login_form_group">
        <a href="#">Create Account</a>
      </div>
    </form>
  );

  const ImageCarousel = [
    {
      img: carouselImg1,
      caption: (
        <div className="carouselContent">
          <a href="#">Christmas Around the World</a>
          <br />
          <br />
          <span>
            Experience the sights, sounds and traditions of the Christmas season
            in FMSC partner communities.
            <br />
            Join us for free.
          </span>
          <br />
          <br />
          <button>
            <span>Register &gt;</span>
          </button>
        </div>
      ),
    },
    {
      img: carouselImg4,
      caption: (
        <div className="carouselContent">
          <a href="#">We're hiring!</a>
          <br />
          <br />
          <span>
            Looking for a way to use your skills to end hunger?{" "}
            <strong>Join our team of world changers.</strong>
          </span>
          <br />
          <br />
          <button>
            <span>See open positions &gt;</span>
          </button>
        </div>
      ),
    },
    {
      img: carouselImg6,
      caption: (
        <div className="carouselContent">
          <a href="#">Give gifts of hope</a>
          <br />
          <br />
          <span>
            This Christmas season, when you give $88, you'll get this
            handcrafted ornament.
            <br />
            And, you'll feed a child for an entire year.
          </span>
          <br />
          <br />
          <button>
            <span>Give now &gt;</span>
          </button>
        </div>
      ),
    },
  ];

  return (
    <section className="designingTwelveFMSCWrap">
      <nav className="designingTwelveFMSCWrap-navbar">
        <a href="#" className="designingTwelveFMSCWrap-navbar__logo">
          <img src={FMSCLogo} alt="" />
        </a>
        <div className="designingTwelveFMSCWrap-navbar__nav">
          <FMSCGridWithDropDown props={testContent2} />
        </div>
        <div className="designingTwelveFMSCWrap-navbar-buttonContainer">
          <button>Donate</button>
          <button>Volunteer</button>
          <div className="designingTwelveFMSCWrap-navbar-buttonContainer__search">
            <FMSCDropdownForm
              dropdownIcon={<SearchIcon />}
              dropdownForm={<SearchForm />}
            />
          </div>
          <div className="designingTwelveFMSCWrap-navbar-buttonContainer__login">
            <FMSCDropdownForm
              dropdownIcon={<LoginIcon />}
              dropdownForm={<LoginForm />}
            />
          </div>
        </div>
      </nav>
      <main>
        <div className="designingTwelveFMSCWrap-carousel">
          <FMSCImageCarousel imageCarousel={ImageCarousel} />
        </div>
        <div className="designingTwelveFMSCWrap-buttonList">
          <FMSCGridWithDropDown props={testContent} />
        </div>
        <div className="designingTwelveFMSCWrap-fluid">
          <h1>How it works</h1>
        </div>
      </main>
    </section>
  );
}

export default DesigningWithTheMindInMindChapterTwelve;
