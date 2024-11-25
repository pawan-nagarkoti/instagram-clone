import React from "react";
import "./sideBar.scss";
import UserList from "../userList";

function index() {
  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <h2>Chats</h2>
      </header>
      <UserList />

      <div className="slider-bottom-group-text">
        <p>Private Group Chat</p>
        <p>{true ? "New Group" : "Create Group"}</p>
      </div>
    </div>
  );
}

export default index;
