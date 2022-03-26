import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./CreateNewDashBoard.css";

const CreateNewDashboardPage = () => {
  const [newDashBoardCreateClicked, setNewDashBoardCreateClicked] =
    useState(false);
  const handleNameDashboard = () => {
    setNewDashBoardCreateClicked(!newDashBoardCreateClicked);
  };
  return (
    <main>
      <NavBar></NavBar>
      <section className="d-flex justify-content-between">
        {" "}
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="dashBoardName ms-5 ps-4 mt-5">Dashboard name</h1>
          <p
            onClick={handleNameDashboard}
            className="penBorder mt-5 ms-5 text-center"
          >
            <FontAwesomeIcon color={"gray"} className="" icon={faPen} />
          </p>
        </div>
        <button className="custom-btn  btn mt-5 me-5 ">
          <FontAwesomeIcon icon={faPlus} /> Add Widgets
        </button>
      </section>
      <section className="ms-4 mt-5">
        <div className="ms-5 ps-5 indicatorBox text-center">
          <p className="tapOn pt-5 mt-3 me-5">Tap on + Add Widget to start</p>
        </div>
      </section>
    </main>
  );
};

export default CreateNewDashboardPage;
