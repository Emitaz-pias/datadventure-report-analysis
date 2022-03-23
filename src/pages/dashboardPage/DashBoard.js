import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Pagination from "../../components/pagination/Pagination";
import "./Dashboard.css";
import DashboardTable from "./DashboardTable";
import SortByDropDown from "./SortByDropDown";
import ViewBy from "./ViewBy";

const DashBoard = () => {
  return (
    <div>
      {/* the nav section */}
      <section>
        <NavBar />
        <div className="d-flex align-items-center justify-content-between mt-4">
          <h2 className="dashboard-heading ms-5 ps-5">Dashboards</h2>
          <div className="search-button-container me-5 pe-5 d-flex align-items-center">
            <input
              placeholder="&#xF002;            Search Dashboard"
              className="me-5 searchInput form-control"
              type="text"
            />
            <button className="custom-btn  btn ms-5">
              <FontAwesomeIcon icon={faPlus} /> New Dashboard
            </button>
          </div>
        </div>
      </section>
      {/* pagination sorby and view section  */}
      <section className="d-flex align-items-center justify-content-between mt-5 ">
        <Pagination />
        <div className="d-flex mb-2">
          <SortByDropDown />
          <ViewBy />
        </div>
      </section>
      {/* our daashboard data */}
      <section>
        <DashboardTable />
      </section>
    </div>
  );
};

export default DashBoard;
