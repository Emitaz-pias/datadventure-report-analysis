import { Dropdown } from "react-bootstrap";
import "./SortByDropDown.css";
import React from "react";

const SortByDropDown = () => {
  return (
    <div>
      <Dropdown className="me-5 pe-5">
        <Dropdown.Toggle className="custom-dropdown" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item href="#/action-1">Oldest</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Last Modified</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Recently Added</Dropdown.Item>
          <Dropdown.Item href="#/action-3">A-Z</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SortByDropDown;
