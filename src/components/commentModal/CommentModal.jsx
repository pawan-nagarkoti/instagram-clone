import React from "react";
import { CommonModal } from "../CommonModal";
import { useModal } from "../../services/hook/ModalContext";

export default function CommentModal() {
  const { modalShow, handleClose } = useModal();

  return (
    <>
      <CommonModal show={modalShow} handleClose={handleClose} title="Modal title">
        <p>Modal content goes here...</p>
        <h1>pawan singh</h1>
      </CommonModal>
    </>
  );
}
