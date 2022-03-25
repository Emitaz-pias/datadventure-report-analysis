import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Modal from "react-modal";
import "./SetUpModal.css";

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
// gather all the individual responses and put them in a packet []

const SetUpModal = ({ modalIsOpen, closeModal, id }) => {
  const [allResponses, setAllResponses] = useState([]);
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
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="setup Modal"
      >
        <main
          className="fullModal"
          style={{
            height: "80vh",
            width: "80vw",

            backgroundColor: "transparent",
          }}
        >
          <div className="d-flex justify-content-between align-items-center ">
            <h4 className="custtomModalheading">
              Select data source before editing your dashboard
            </h4>
            <FontAwesomeIcon
              onClick={closeModal}
              className="me-3 mb-2"
              size={"2x"}
              icon={faXmark}
            />
          </div>

          {/* show the survey and questions to analyze here */}
          <div className="d-flex justify-content-between mt-4">
            <section>
              <h5 className="customH5 text-center">DATA SOURCE</h5>
              {/* // display the survey name of that response  */}
              {allResponses.map((response) => (
                <div className="surveysTable ms-3">
                  <Row className="border p-1  singleSurveyRow rounded-top">
                    <p>{response.surveyName}</p>
                  </Row>
                </div>
              ))}
            </section>
            <section>
              <h5 className="customH5 me-5 pe-5">QUESTIONS TO ANALYZE</h5>
            </section>
          </div>
        </main>
      </Modal>
    </div>
  );
};

export default SetUpModal;
