import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import logo from "../../images/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="me-5 pe-5" href="/">
          <img className="logo" src={logo} alt="this is the logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navItem ms-4 p-1 " href="/home">
              Home
            </Nav.Link>
            <Nav.Link className="navItem ms-4 p-1 " eventKey="link-1">
              Reports
            </Nav.Link>
            <Nav.Link className="navItem ms-4 p-1 " eventKey="link-2">
              Clients
            </Nav.Link>
            <Nav.Link className="navItem ms-4 p-1" eventKey="link-2">
              Managers
            </Nav.Link>
            <Nav.Link className="navItem ms-4 p-1" eventKey="link-2">
              Add Tasks
            </Nav.Link>
            <Nav.Link className="navItem ms-4 p-1 " eventKey="link-2">
              Surveys
            </Nav.Link>
            <Nav.Link className="navItem ms-4 p-1 " eventKey="link-2">
              Configuration
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="bellIcon" eventKey="link-2">
              <FontAwesomeIcon size="2x" icon={faBell} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
