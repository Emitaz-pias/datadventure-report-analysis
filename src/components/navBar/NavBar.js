import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import logo from "../../images/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar d-flex align-items-center">
      <Nav.Item>
        <Nav.Link className="logoLink" href="/">
          <img className="logo" src={logo} alt="this is the logo" />
        </Nav.Link>
      </Nav.Item>

      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="navItem" href="/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navItem" eventKey="link-1">
            Reports
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navItem" eventKey="link-2">
            Clients
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navItem" eventKey="link-2">
            Managers
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navItem" eventKey="link-2">
            Add Tasks
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navItem" eventKey="link-2">
            Surveys
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="navItem" eventKey="link-2">
            Configuration
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="bellIcon" eventKey="link-2">
            <FontAwesomeIcon size="2x" icon={faBell} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;
