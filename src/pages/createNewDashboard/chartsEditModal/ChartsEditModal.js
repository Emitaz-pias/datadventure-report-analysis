import { faPlus, faTimes, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import { Col, Dropdown, Row, Button } from "react-bootstrap";
import Modal from "react-modal";
import "./ChartsEditModal.css";
import slectVisualsData from "../charts/SelectVisualsData";

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
  const metricArray = [1];
  const handleAddNewMetric = () => {
    metricArray.push(1);
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeMdal}
      style={customStyles}
      contentLabel=" charts Modal"
    >
      <main className="fullModal">
        {/* // close switch and title */}
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
              placeholder="Graph Title"
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
        <Row className="mt-3">
          <Col md={12}>
            <h5 className="mb-3">Select Your Visualization</h5>
            {slectVisualsData.map((chartName, i) => (
              <button key={i} className="chartName">
                {chartName.title}
              </button>
            ))}
          </Col>
        </Row>
        <hr />

        {/* // new metric button area */}
        <section>
          <div className="d-flex justify-content-between">
            <h5>Graph Your Data</h5>
            <button onClick={handleAddNewMetric} className="custom-btn btn">
              <FontAwesomeIcon icon={faPlus} /> New Metric
            </button>
          </div>
        </section>

        <section className="mt-2">
          {metricArray.map((metric, index) => (
            <ol className="mt-5 customListtype" key={index}>
              <li>
                <Row className="d-flex align-items-center">
                  <Col
                    className={
                      "d-flex justify-content-between align-items-center"
                    }
                    xs={1}
                    md={3}
                  >
                    <p>
                      <b>Metric</b>
                    </p>
                    <input
                      name="metric"
                      id="metric"
                      className="form-control ms-2 mb-1"
                      style={{
                        height: "2.5em",
                      }}
                      placeholder={`"Metric From Survey-Keyword"`}
                      type="text"
                    ></input>
                  </Col>

                  <Col
                    className={
                      "d-flex justify-content-between align-items-center"
                    }
                    xs={1}
                    md={3}
                  >
                    <p>From</p>
                    <div className="mb-3">
                      {" "}
                      <label for="sourceTag">(Source Tags)</label>
                      <input
                        name="sourceTag"
                        id="sourceTag"
                        className="ms-1 form-control"
                        style={{
                          height: "2.7em",
                        }}
                        placeholder={"Survey"}
                        type="text"
                      ></input>
                    </div>
                  </Col>

                  <Col className="mb-3" xs={1} md={3}>
                    <label for="sourceTag">(Country/Region Report Type)</label>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="custom-dropdown"
                        id="dropdown-basic"
                      >
                        Avg by
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="custom-dropdown-menu">
                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Bangla</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Arabic</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col xs={1} md={2}>
                    <input
                      name="sourceTag"
                      id="sourceTag"
                      className="ms-1 form-control text-center"
                      style={{
                        height: "2.7em",
                      }}
                      placeholder={"Everything"}
                      type="text"
                    ></input>
                  </Col>
                  <Col>
                    <FontAwesomeIcon
                      style={{ cursor: "pointer" }}
                      icon={faTrashCan}
                    ></FontAwesomeIcon>
                  </Col>
                </Row>

                <hr />

                <Row className={"d-flex align-items-center"}>
                  <Col className={"d-flex justify-content-between"} md={3}>
                    <p>Display</p>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="custom-dropdown"
                        id="dropdown-basic"
                      >
                        Lines
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="custom-dropdown-menu">
                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Bangla</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Arabic</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col className={"d-flex justify-content-between"} md={3}>
                    <p>Color</p>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="custom-dropdown"
                        id="dropdown-basic"
                      >
                        Warm
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="custom-dropdown-menu">
                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Bangla</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Arabic</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col className={"d-flex justify-content-between"} md={3}>
                    <p>Style</p>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="custom-dropdown"
                        id="dropdown-basic"
                      >
                        Solid
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="custom-dropdown-menu">
                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Bangla</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Arabic</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>

                  <Col className={"d-flex justify-content-between"} md={3}>
                    <p>Stroke</p>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="custom-dropdown"
                        id="dropdown-basic"
                      >
                        Normal
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="custom-dropdown-menu">
                        <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Bangla</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Arabic</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </li>
            </ol>
          ))}
        </section>
      </main>
    </Modal>
  );
};

export default ChartsEditModal;
