import React from "react";
import { Dropdown } from "react-bootstrap";

const ViewBy = () => {
  return (
    <Dropdown className="me-5 pe-4">
      <Dropdown.Toggle className="custom-dropdown" id="dropdown-basic">
        View
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
          Report of specific project for all sites
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Report for each site</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Report of every site</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ViewBy;
