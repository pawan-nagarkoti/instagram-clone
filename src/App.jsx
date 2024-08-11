import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.scss";
import { Route, Routes } from "react-router-dom";
import UserProvider from "./services/UserContext";
import ProtectedRoute from "./services/ProtectedRoute";
import { Home, Create, Logout, Message, Profile, Search } from "./pages";
import { NoFound, Signup, Login } from "./pages";

const FacebookLayout = () => {
  return (
    <UserProvider>
      <div className="container-fluid">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="*" element={<NoFound />} />
          <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/message" element={<Message />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
          </Route>

          {/* <Route element={<ProtectedRoute allowedRoles={["admin", "guest"]} />}>
            <Route path="get-post" element={<GetAllPost />} />
            <Route path="update-profile" element={<UpdateUserProfile />} />
          </Route> */}
        </Routes>
      </div>
    </UserProvider>
  );
};

export default FacebookLayout;
