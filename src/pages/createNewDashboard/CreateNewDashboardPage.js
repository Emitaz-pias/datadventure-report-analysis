import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import "./CreateNewDashBoard.css";

const CreateNewDashboardPage = () => {
  const [newDashBoardCreateClicked, setNewDashBoardCreateClicked] =
    useState(false);
  const [addOnClicked, setAddOnClicked] = useState(false);
  const handleNameDashboard = () => {
    setNewDashBoardCreateClicked(!newDashBoardCreateClicked);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleAddNewWidget = () => {
    setAddOnClicked(true);
  };
  const handleCancelWidget = () => {
    setAddOnClicked(false);
  };
  console.log(addOnClicked);
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
        {addOnClicked ? (
          <button
            onClick={handleCancelWidget}
            className="custom-white-btn  btn mt-5 me-5 "
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={handleAddNewWidget}
            className="custom-btn  btn mt-5 me-5 "
          >
            <FontAwesomeIcon icon={faPlus} /> Add Widgets
          </button>
        )}
      </section>
      {newDashBoardCreateClicked && (
        <section className="ms-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="ms-5 ps-5 dashboardName"
              style={{
                height: "3em",
                width: "18em",
              }}
              type="text"
            ></input>
            <input
              className="form-control ms-5 ps-5 reportName mt-4"
              type="text"
              placeholder="Report Name"
              {...register("Report Name", {
                required: true,
                maxLength: 80,
              })}
            />
            <br />
            <textarea
              style={{ height: "8em" }}
              className="form-control ms-5 ps-5 description"
              name="description"
              placeholder="Description"
              {...register("Descriptio", {
                required: true,
                maxLength: 100,
              })}
            />
            {/* <input
            style={{ backgroundColor: "white" }}
            className="btn text-success"
            type="submit"
          /> */}
          </form>
        </section>
      )}

      <section className="ms-4 mt-5">
        <div className="ms-5 ps-5 indicatorBox text-center">
          <p className="tapOn pt-5 mt-3 me-5">Tap on + Add Widget to start</p>
        </div>
      </section>
      <div
        className={`${newDashBoardCreateClicked ? "formOpen" : "formClosed"}`}
      >
        <Footer></Footer>
      </div>
    </main>
  );
};

export default CreateNewDashboardPage;
