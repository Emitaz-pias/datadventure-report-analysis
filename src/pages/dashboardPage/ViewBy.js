import React from "react";
import { Dropdown } from "react-bootstrap";

const ViewBy = () => {
  return (
    <Dropdown className="me-5 pe-4">
      <Dropdown.Toggle className="custom-dropdown" id="dropdown-basic">
        View
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ViewBy;
