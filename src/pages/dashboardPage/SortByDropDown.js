import { Dropdown } from "react-bootstrap";
import React from "react";
import "./SortByDropDown.css";

const SortByDropDown = () => {
  return (
    <Dropdown className="me-5 pe-5">
      <Dropdown.Toggle className="custom-dropdown" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortByDropDown;
