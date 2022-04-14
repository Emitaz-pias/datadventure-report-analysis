import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
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
  const [surveySelected, setSelectedSurvey] = useState(false);
  const [selectedSurveyIndex, setSelectedSurveyIndex] = useState("");
  const [choosenQestions, setChoosenQuestion] = useState([]);
  const [questions, setQuestions] = useState([]);

  // slice up the surveys..

  const slicedSurveys = allResponses.slice(0, 7);
  const slicedQuesitons = questions.slice(0, 7);

  // load the source survey data
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

  const handleSelectDataSourceSurvey = async (id, index, whole) => {
    setSelectedSurvey(!surveySelected);
    setSelectedSurveyIndex(index);
    // console.log("whole,", whole);
    const questionsArray = [];
    whole.answers.map((ans) => {
      return ans.questions.map((q) => {
        questionsArray.push(q);
        return setQuestions(questionsArray);
      });
    });
    // const res = await fetch(
    //   `https://datadventure-backend.herokuapp.com/survey/get/${id}`
    // );
    // const data = await res.json();
    // setChoosenSurvey(data);
    // // map all teh questions to gather all the questions from selcted survey

    // if (choosenSurvey.data !== undefined) {
    //   const questionsArray = [];
    //   choosenSurvey.data.surveyQuestions.map((singleSection) => {
    //     singleSection.questions.map((qustns) => {
    //       setQuestions(qustns);
    //     });
    //   });
    // }
  };
  const handleQuestionClick = (questions) => {
    const qArray = [...choosenQestions, questions];
    setChoosenQuestion(qArray);
  };
  const handleRemoveQuestion = (questionIndex) => {
    for (let i = 0; i < choosenQestions.length; i++) {
      if (choosenQestions[i] === questionIndex) {
        // const removedArray = choosenQestions.splice(i, 1);
        // const removedItem = removedArray[0];
        // const qArray = [...choosenQestions];
        // setChoosenQuestion(qArray);
        // console.log(qArray, "q arry");
      }
    }
  };
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
            <section className="surveysTable">
              <h5 className="customH5 text-center">DATA SOURCE</h5>
              {/* // display the survey name of that response  */}
              {slicedSurveys.map((response, i) => (
                <div key={i} className=" ms-3">
                  <Row
                    onClick={() =>
                      handleSelectDataSourceSurvey(
                        response.surveyId,
                        i,
                        response
                      )
                    }
                    className={`border p-1 singleSurveyRow rounded-top`}
                  >
                    <div className="d-flex justify-content-between">
                      <p>{response.surveyName}</p>
                      {selectedSurveyIndex === i && surveySelected ? (
                        <FontAwesomeIcon
                          className="me-5 pe-3"
                          color="#1B476B"
                          size="2x"
                          icon={faCheck}
                        />
                      ) : null}
                    </div>
                  </Row>
                </div>
              ))}
              <Pagination />
            </section>
            <section className="questionsTable">
              <h5 className="customH5 me-5 pe-5">QUESTIONS TO ANALYZE</h5>
              {questions !== undefined &&
                slicedQuesitons.map((question, index) => (
                  <div key={index} className="">
                    <Row
                      onClick={() =>
                        handleQuestionClick({
                          question: question.question,
                          index: index,
                        })
                      }
                      className="border p-1 rounded-top singleQuestionRow"
                    >
                      <div className="d-flex justify-content-between">
                        <p>{question.question}</p>
                        {choosenQestions.map((q) =>
                          q === question.question ? (
                            <FontAwesomeIcon
                              className="me-5 pe-3"
                              color="#1B476B"
                              size="2x"
                              icon={faCheck}
                              onClick={() => handleRemoveQuestion(index)}
                            />
                          ) : null
                        )}
                      </div>
                    </Row>
                  </div>
                ))}
              {<Pagination />}
            </section>
          </div>
          <div className="d-flex justify-content-end me-5 mt-4">
            <button className="btn customCancelButton me-5 ">Cancel</button>
            <Link
              to="/createNewDashboard"
              className="btn customContinueButton ms-5"
            >
              Continue
            </Link>
          </div>
        </main>
      </Modal>
    </div>
  );
};

export default SetUpModal;
