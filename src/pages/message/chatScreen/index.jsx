import React, { useState } from "react";
import "./chatScreen.scss";
import MessageBox from "../messageBox";

function index() {
  const [messages, setMessages] = useState([
    { sender: "user", text: "Hi! How are you?" },
    { sender: "friend", text: "I'm good, thanks! How about you?" },
    { sender: "user", text: "Doing great! What's up?" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "user", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-screen">
      <header className="chat-header">
        <p className="mb-0">Name</p>
        <div className="d-flex gap-2">
          <button>Delete Chat</button>
          <li className="nav-item dropdown" style={{ listStyle: "none" }}>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Delete Chat
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Update group name
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Leave group
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                  </button>
                </a>
              </li>
            </ul>
          </li>
        </div>
      </header>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="message-area">
        {messages.map((msg, index) => (
          <MessageBox key={index} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <div className="message-input">
        <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default index;
