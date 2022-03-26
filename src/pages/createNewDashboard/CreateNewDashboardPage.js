import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import "./CreateNewDashBoard.css";

const CreateNewDashboardPage = () => {
  return (
    <main>
      <NavBar></NavBar>
      <section className="d-flex justify-content-between">
        {" "}
        <h1 className="dashBoardName ms-5 ps-4 mt-5">Dashboard name</h1>
        <button className="custom-btn  btn mt-5 me-5 ">
          <FontAwesomeIcon icon={faPlus} /> New Widget
        </button>
      </section>
    </main>
  );
};

export default CreateNewDashboardPage;
