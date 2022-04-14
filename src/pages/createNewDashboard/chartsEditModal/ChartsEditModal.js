import { faCross, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import Modal from "react-modal";
import "./ChartsEditModal.css";

const ChartsEditModal = ({ modalIsOpen, closeMdal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeMdal}
      style={customStyles}
      contentLabel=" charts Modal"
    >
      <main className="fullModal">
        {/* // close switch and tile */}
        <div className="d-flex justify-content-between">
          <h3>Edit Widget</h3>
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            style={{ cursor: "pointer" }}
          />
        </div>
        <Row className="mt-3">
          <Col md={2}>
            <h5 className="mb-3">Enter Graph Title</h5>
            <input
              className="ms-1 form-control"
              style={{
                height: "2.7em",
              }}
              type="text"
            ></input>
          </Col>
          <Col className="ms-4" md={4}>
            <h5 className="mb-3">Select Specific Question</h5>
            <Dropdown>
              <Dropdown.Toggle className="custom-dropdown" id="dropdown-basic">
                Question
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-dropdown-menu">
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bangla</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Arabic</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col className="ms-5 ps-5 mt-3" md={4}>
            <div className="ms-5 ps-5 mt-4">
              <Dropdown>
                <Dropdown.Toggle
                  className="custom-dropdown"
                  id="dropdown-basic"
                >
                  Timeview Selection
                </Dropdown.Toggle>

                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Bangla</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Arabic</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </main>
    </Modal>
  );
};

export default ChartsEditModal;
