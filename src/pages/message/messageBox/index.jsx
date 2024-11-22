import React from "react";
import "./messageBox.scss";

function index({ sender, text }) {
  return (
    <div className={`message ${sender === "user" ? "user-message" : "friend-message"}`}>
      <p>{text}</p>
    </div>
  );
}

export default index;
