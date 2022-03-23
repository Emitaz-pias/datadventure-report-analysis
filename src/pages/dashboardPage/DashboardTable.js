import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./DashboardTable.css";

const DashboardTable = () => {
  const [open, setOpen] = useState(false);

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
  console.log("our responses is", allResponses);

  const handleTdClick = () => {
    setOpen(false);
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
      </section>
    </main>
  );
};

export default DashboardTable;
