import React from "react";
import "./FMSCDropdownForm.scss";
export function FMSCDropdownForm({ dropdownIcon, dropdownForm }) {
  return (
    dropdownIcon &&
    dropdownForm && (
      <ul className="dropdownForm">
        <li>
          <a href="" className="dropdownForm-select">
            {dropdownIcon}
          </a>
          <ul className="dropdownForm-list">
            <li>{dropdownForm}</li>
          </ul>
        </li>
      </ul>
    )
  );
}
