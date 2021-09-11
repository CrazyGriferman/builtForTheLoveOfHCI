import React, { useState } from "react";
import "./Navigation.css";

export function Navigation() {
  const defaultState = [
    {
      id: "one",
      imgurl:
        "https://blog-1300038350.cos.ap-shanghai.myqcloud.com/blogImage/20210301012309.png",
      bookName: "don't make me think",
      introduction: "hello",
    },
    {
      id: "two",
      imgurl:
        "https://blog-1300038350.cos.ap-shanghai.myqcloud.com/blogImage/20210301012309.png",
      bookName: "trust",
      introduction: "test",
    },
  ];
  const [NavItem] = useState(defaultState);

  return (
    <div class="outer-wrapper">
      <div class="wrapper">
        {NavItem.map((item) => (
          <div className={"slide " + item.id}> {item.bookName} </div>
        ))}
      </div>
    </div>
  );
}
