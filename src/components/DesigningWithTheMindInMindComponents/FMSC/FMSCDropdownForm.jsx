import React from "react";
import "./FMSCDropdownForm.scss";
export function FMSCDropdownForm({ dropdownIcon, dropdownForm }) {
  return (
    dropdownIcon &&
    dropdownForm && (
      <ul className="dropdownForm">
        <li>
          {dropdownIcon}
          <ul className="dropdownForm-list">
            <li>{dropdownForm}</li>
          </ul>
        </li>
      </ul>
    )
  );
}
