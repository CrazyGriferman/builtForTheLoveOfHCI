import React from "react";
import "./FMSCGridWithDropDown.scss";

export function FMSCGridWithDropDown(props) {
  return (
    props.props && (
      <ul className="dropdown">
        {props.props.map((item) => (
          <li>
            <a href="#" className="dropdown-select">
              {item.category}
            </a>
            {item.dropdown && (
              <ul className="dropdown-list">
                {item.dropdown.map((list) => (
                  <li>
                    <a className="dropdown-list__link" href={list.url}>
                      {list.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    )
  );
}

export default FMSCGridWithDropDown;