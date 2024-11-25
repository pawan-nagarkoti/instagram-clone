import React, { useEffect } from "react";
import "./userList.scss";
import { _get } from "../../../services/api";

export default function index() {
  const chatList = [
    { name: "John Doe", lastMessage: "Hey! How are you?", time: "10:00 AM", message: 2 },
    { name: "Jane Smith", lastMessage: "See you soon!", time: "Yesterday", message: 10 },
    { name: "Bob Ross", lastMessage: "Let's meet tomorrow.", time: "2 days ago", message: 50 },
  ];

  const getAvailabeUserForChat = async () => {
    try {
      const getApiResponse = await _get("chat-app/chats/users");
      console.log(getApiResponse);
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Error Status Code:", error.response.status);
        console.error("Error Message:", error.response.data.message);
        showToast(error.response.data.message, "error");
      } else {
        console.error("An unknown error occurred.");
      }
    } finally {
    }
  };
  useEffect(() => {
    getAvailabeUserForChat();
  }, []);
  return (
    <>
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
    </>
  );
}
