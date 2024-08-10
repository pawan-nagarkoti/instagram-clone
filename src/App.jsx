import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.scss";
import { Route, Routes } from "react-router-dom";
import { Home, Create, Logout, Message, Profile, Search } from "./pages";

const FacebookLayout = () => {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default FacebookLayout;
