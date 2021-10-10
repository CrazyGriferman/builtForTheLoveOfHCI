import React from "react";
import { FMSCLinkGrid } from "../../../components/DesigningWithTheMindInMindComponents/FMSC/FMSCLinkGrid";
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

  return <FMSCLinkGrid props={testContent} />;
}
