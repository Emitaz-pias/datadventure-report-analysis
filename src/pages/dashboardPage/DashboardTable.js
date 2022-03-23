import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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
  // load the survey here
  // useEffect(() => {
  //   const loadDataFromServer = async () => {
  //     const res = await fetch("https://dadsurveyresponses.herokuapp.com/");
  //     const data = await res.json();
  //   };
  //   loadDataFromServer();
  // }, []);

  const handleTdClick = () => {
    setOpen(false);
  };
  return (
    <div className="ms-5 ps-5">
      {/* <Table className="dashboardTable " striped bordered hover>
        <thead>
          <tr className="heading">
            <th>Name</th>
            <th>Modified</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody className="tablesBody">
          <tr onClick={handleTdClick}>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <FontAwesomeIcon icon={faChevronCircleRight} />
            </td>
            <td>Lorem, ipsum dolor.</td>
            <td>Lorem, ipsum dolor.</td>
          </tr>
          {
            <tr>
              {openImplementSite ? (
                <span>
                  <p>something</p>
                </span>
              ) : (
                <p>nothing</p>
              )}
            </tr>
          }
          <tr onClick={handleTdClick}>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{">"}
            </td>
            <td>Lorem, ipsum dolor.</td>
            <td>Lorem, ipsum dolor.</td>
          </tr>
          <tr onClick={handleTdClick}>
            <td>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{">"}
            </td>
            <td>Lorem, ipsum dolor.</td>
            <td>Lorem, ipsum dolor.</td>
          </tr>
        </tbody>
      </Table> */}
    </div>
  );
};

export default DashboardTable;
