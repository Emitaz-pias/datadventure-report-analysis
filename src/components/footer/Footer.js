import React from "react";
import { Dropdown } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="d-flex justify-content-between mt-3">
      <a href="https://www.oxfordepi.com/">
        <small className="ms-5 ps-5 mb-2">
          Oxford Epidemiology Services LLC. All Rights Reserved.
        </small>
      </a>
      <Dropdown className="me-5 pe-5 mb-2">
        <Dropdown.Toggle className="custom-dropdown" id="dropdown-basic">
          Select Language
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item href="#/action-1">English</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Bangla</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Arabic</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Footer;
