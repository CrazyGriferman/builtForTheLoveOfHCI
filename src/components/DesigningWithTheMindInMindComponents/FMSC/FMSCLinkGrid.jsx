import React from "react";
import { useState } from "react";

export function FMSCLinkGrid(props) {
  console.log(props.props);

  return (
    props.props && (
      <ul>
        {props.props.map((item) => (
          <li>
            <a href={item.url}>{item.text}</a>
          </li>
        ))}
      </ul>
    )
  );
}

/* 
<a
              className={[`linkGrid__a`, `${props.props.className}__a`].join(
                " "
              )}
              href={item.url}
            >
             */
