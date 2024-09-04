// ModalContext.js
import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  return <ModalContext.Provider value={{ modalShow, handleShow, handleClose }}>{children}</ModalContext.Provider>;
};
