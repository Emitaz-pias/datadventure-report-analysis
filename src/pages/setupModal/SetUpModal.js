import React from "react";
import Modal from "react-modal";

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

const SetUpModal = ({ modalIsOpen, closeModal, id }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="setup Modal"
      ></Modal>
    </div>
  );
};

export default SetUpModal;
