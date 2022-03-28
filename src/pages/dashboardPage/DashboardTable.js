import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./DashboardTable.css";

const DashboardTable = () => {
  // show sites name here
  const siteName = ["site 1", "site 2", "site 3", "site 4"];
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

  const handleTdClick = (surveyId, responseId) => {
    // console.log(surveyId);
    setAlreadyOpen(!alreadyOpen);
    if (alreadyOpen === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    setResponseId(responseId);
  };
  return (
    <main>
      <Container className="responsesTable border">
        <Row className="thead flex-wrap border border-danger  mt-3 mb-3">
          {/* <span className="d-flex justify-content-around align-items-center"> */}
          <Col className="ms-2 order-0" md={5} sm={3} xs={3}>
            Name\\
          </Col>
          <Col className="ms-5 order-1" md={3} sm={3} xs={3}>
            Modified
          </Col>
          <Col className=" order-2" md={3} sm={3} xs={3}>
            User
          </Col>
        </Row>
        <hr />{" "}
        {allResponses.map((response) => (
          <div>
            <Row className="tBody flex-wrap">
              <Col
                onClick={() => handleTdClick(response.surveyId, response._id)}
                onMouseLeave={() => setAlreadyOpen(!alreadyOpen)}
                className="ms-2"
                md={5}
                sm={12}
                xs={12}
              >
                {response.surveyName}
                {open === true && response._id === responseId ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                )}
              </Col>

              <Col className="ms-5" md={3} sm={12} xs={12}>
                {open === true && response._id === responseId ? (
                  <p>Rachel Bro Modified It</p>
                ) : (
                  "Modified"
                )}
              </Col>
              <Col className="ms-5" md={3} sm={12} xs={12}>
                User
              </Col>
              {open === true && response._id === responseId ? (
                <Row className="ms-5">
                  {" "}
                  <h6 className="IMPLEMENTED">IMPLEMENTED IN</h6>
                  {siteName.map((site) => (
                    <p>{site}</p>
                  ))}
                </Row>
              ) : null}
            </Row>
            <hr />
          </div>
        ))}
      </Container>
    </main>
  );
};

export default DashboardTable;
