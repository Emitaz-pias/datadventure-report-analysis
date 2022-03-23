import React, { useEffect, useState } from "react";
import { Col, DropdownButton, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./DashboardTable.css";
import { Dropdown } from "bootstrap";

const DashboardTable = () => {
  const [open, setOpen] = useState(false);
  const [alreadyOpen, setAlreadyOpen] = useState(true);
  const [responseId, setResponseId] = useState("");

  const [allResponses, setAllResponses] = useState([]);

  // gather all the individual responses and put them in a packet []
  useEffect(() => {
    const loadSurveyResponsesFromServer = async () => {
      const res = await fetch(
        "https://dadsurveyresponses.herokuapp.com/sureveryResponse"
      );
      const data = await res.json();
      setAllResponses(data[0]);
    };
    loadSurveyResponsesFromServer();
  }, []);
  // const handleMouseEnter = () => {

  // }
  const handleTdClick = (surveyId, responseId, alredyOpen) => {
    // console.log(surveyId);
    if (alreadyOpen === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    setResponseId(responseId);
  };
  return (
    <main className="ms-5">
      <section className="responsesTable ms-5 border">
        <Row className="thead   mt-3 mb-3">
          {/* <span className="d-flex justify-content-around align-items-center"> */}
          <Col className="ms-2" md={5}>
            Name
          </Col>
          <Col className="ms-5" md={3}>
            Modified
          </Col>
          <Col className="ms-5" md={3}>
            User
          </Col>
        </Row>
        <hr />{" "}
        {allResponses.map((response) => (
          <div>
            <Row className="tBody">
              <Col
                onClick={() =>
                  handleTdClick(response.surveyId, response._id, alreadyOpen)
                }
                onMouseLeave={() => setAlreadyOpen(false)}
                className="ms-2"
                md={5}
              >
                {response.surveyName}
                {open === true && response._id === responseId ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                )}
              </Col>

              <Col className="ms-5" md={3}>
                Modified
              </Col>
              <Col className="ms-5" md={3}>
                User
              </Col>
              {open === true && response._id === responseId ? (
                <Row className="ms-5">hello</Row>
              ) : null}
            </Row>

            <hr />
          </div>
        ))}
      </section>
    </main>
  );
};

export default DashboardTable;
