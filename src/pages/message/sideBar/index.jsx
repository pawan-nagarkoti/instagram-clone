import React from "react";
import "./sideBar.scss";

function index() {
  const chatList = [
    { name: "John Doe", lastMessage: "Hey! How are you?", time: "10:00 AM", message: 2 },
    { name: "Jane Smith", lastMessage: "See you soon!", time: "Yesterday", message: 10 },
    { name: "Bob Ross", lastMessage: "Let's meet tomorrow.", time: "2 days ago", message: 50 },
  ];

  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <h2>Chats</h2>
      </header>
      <div className="chat-list">
        {chatList.map((chat, index) => (
          <div key={index} className="chat-item">
            <div className="chat-avatar">{chat.name[0]}</div>
            <div className="chat-info">
              <h4>{chat.name}</h4>
              {/* <p>{chat.lastMessage}</p> */}
            </div>
            <div className="d-flex flex-column gap-2 align-items-center">
              <div className="d-flex align-items-center gap-2">
                <span className="chat-time">{chat.time}</span>
                <span className="chat-message">{chat.message}</span>
              </div>
              <div className="d-flex gap-2">
                <button>delete</button>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-bottom-group-text">
        <p>Private Group Chat</p>
        <p>{true ? "New Group" : "Create Group"}</p>
      </div>
    </div>
  );
}

export default index;
