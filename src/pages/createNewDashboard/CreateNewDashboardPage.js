import {
  faChevronLeft,
  faChevronRight,
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import "./CreateNewDashBoard.css";
import sliderPage1 from "./charts/ChartsSliderDataPage1";
import sliderPage2 from "./charts/ChartsSliderDataPage2";
const CreateNewDashboardPage = () => {
  const [newDashBoardCreateClicked, setNewDashBoardCreateClicked] =
    useState(false);
  const [addOnClicked, setAddOnClicked] = useState(false);
  const [choosingVisuals, setChoosingVisuals] = useState(false);
  const [chartsPageNo, setChartsPageNo] = useState("1");
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
    setChoosingVisuals(true);
  };
  const handleCancelWidget = () => {
    setAddOnClicked(false);
    setChoosingVisuals(false);
  };
  const handlePrevious = (page) => {
    setChartsPageNo(page);
  };
  const handleNext = (page) => {
    setChartsPageNo(page);
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

      {/* // the charts reee? */}
      {choosingVisuals && (
        <section className="mt-5">
          <div className="d-flex ms-5 ps-3 justify-content-between">
            <h3 className="clickInst">
              <b>Click</b> or <b>Drag and Drop </b>your metric selection below
            </h3>
            <div className="me-5 pe-5">
              <button
                onClick={() => handlePrevious("1")}
                className="previous me-5 "
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <span
                className={`${
                  chartsPageNo === "1" ? "active2" : "non-active"
                } me-2 pNumber`}
              >
                1
              </span>
              <span
                className={`${
                  chartsPageNo === "2" ? "active1" : "non-active"
                } ms-2 pNumber`}
              >
                2
              </span>

              <button onClick={() => handleNext("2")} className="next ms-5">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div className="chartsReel d-inline-flex align-items-center  ms-5 mt-5">
            {chartsPageNo === "1"
              ? sliderPage1.map((chart) => (
                  <div className="singleChart  text-center ms-5 ">
                    <div id="pageOne">
                      <p>
                        <img
                          className="chartImg mt-2 "
                          src={chart.image}
                          alt=""
                        />
                      </p>
                      <p id={`${chart.id}`} className="chartsName">
                        {chart.title}
                      </p>
                    </div>
                  </div>
                ))
              : sliderPage2.map((chart) => (
                  <div className="singleChart  text-center ms-5 ">
                    <div id="pageOne">
                      <p>
                        <img
                          className="chartImg mt-2 "
                          src={chart.image}
                          alt=""
                        />
                      </p>
                      <p id={`${chart.id}`} className="chartsName">
                        {chart.title}
                      </p>
                    </div>
                  </div>
                ))}
            {}
          </div>
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
