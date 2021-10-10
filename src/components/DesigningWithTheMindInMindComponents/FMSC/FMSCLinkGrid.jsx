import React from "react";
import { useState } from "react";

export function FMSCLinkGrid(props) {
  console.log(props.props);

  return (
    props.props && (
      <div className={[`linkGrid`, `${props.props.className}`].join(" ")}>
        {props.props.content.map((item) => (
          <div>
            <a
              className={[`linkGrid__a`, `${props.props.className}__a`].join(
                " "
              )}
              href={item.url}
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    )
  );
}
