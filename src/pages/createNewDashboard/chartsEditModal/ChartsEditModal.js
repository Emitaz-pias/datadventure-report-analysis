import React from "react";
import Modal from "react-modal";

const ChartsEditModal = ({ modalIsOpen, closeMdal }) => {
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
  return (
    <div>
      {" "}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeMdal}
        style={customStyles}
        contentLabel=" charts Modal"
      >
        <h1>some in the modal</h1>
      </Modal>
    </div>
  );
};

export default ChartsEditModal;
