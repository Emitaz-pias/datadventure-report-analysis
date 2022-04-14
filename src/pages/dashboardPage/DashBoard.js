import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Dropdown } from "bootstrap";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import Pagination from "../../components/pagination/Pagination";
import SetUpModal from "../setupModal.js/SetUpModal";
import "./Dashboard.css";
import DashboardTable from "./DashboardTable";
import SortByDropDown from "./SortByDropDown";
import ViewBy from "./ViewBy";

const DashBoard = () => {
  // const [allResponses, setAllResponses] = useState([]);

  // fuctions of modal

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // handle click on the new dashboard button
  const handleNewDashboard = () => {
    openModal();
  };

  // load all the responses here

  return (
    <div>
      {/* the nav section */}

      <NavBar />
      <Container fluid>
        <Row className="mt-2 flex-wrap">
          <Col className="mt-2 order-1" lg={5} md={5} sm={12} xs={12}>
            <h2 className="dashboard-heading ms-5">Dashboards</h2>
          </Col>
          <Col
            className="mt-4
           order-3"
            lg={3}
            md={3}
            sm={12}
            xs={12}
          >
            <input
              placeholder="&#xF002;            Search Dashboard"
              className="me-5 searchInput form-control"
              type="text"
            />
          </Col>
          <Col className="mt-3 order-2" lg={3} md={3} sm={12} xs={12}>
            <button
              onClick={handleNewDashboard}
              className="custom-btn  btn ms-5"
            >
              <FontAwesomeIcon icon={faPlus} /> New Dashboard
            </button>
          </Col>
        </Row>

        {/* pagination sortby and view section  */}
        <Row className="mt-5 flex-wrap-reverse">
          <Col className="mt-2" md={7} sm={12} xs={12}>
            <Pagination />
          </Col>
          <Col className="mt-2" md={2} sm={6} xs={6}>
            <SortByDropDown />
          </Col>
          <Col className="mt-2" md={2} sm={6} xs={6}>
            <ViewBy />
          </Col>
        </Row>

        {/* our daashboard data */}
        <section>
          <DashboardTable />
        </section>
        {modalIsOpen && (
          <section>
            <SetUpModal modalIsOpen={openModal} closeModal={closeModal} />
          </section>
        )}
        <div>
          <Footer />
        </div>
      </Container>
    </div>
  );
};

export default DashBoard;
