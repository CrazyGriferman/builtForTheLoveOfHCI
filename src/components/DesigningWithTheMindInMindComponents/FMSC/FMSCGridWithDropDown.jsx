import React, { useState } from "react";
import "./FMSCGridWithDropDown.scss";

export function FMSCGridWithDropDown(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  /* change  */
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    props.props && (
      <>
        <ul className={click ? "dropdown active" : "dropdown"}>
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
        <div className="menu-icon" onClick={handleClick}>
          <a href="#">
            <i className={click ? "fa  fa-times" : "fa  fa-bars"} />
          </a>
        </div>
      </>
    )
  );
}

export default FMSCGridWithDropDown;
