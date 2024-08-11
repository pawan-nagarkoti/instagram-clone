import React from "react";
import LeftRightContainer from "../leftRightContainer/LeftRightContainer";
import { NavLink, useNavigate } from "react-router-dom";
import { navbarItem } from "../../util/constant";
import Cookies from "js-cookie";

export default function Siderbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove cookies
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    Cookies.remove("role");
    // Navigate to the login page
    navigate("/login");
    // Reload the page to clear any remaining state
    window.location.reload();
  };
  return (
    <>
      <LeftRightContainer position="left" colSize="2">
        <h5 className="mt-3 gradient-text ">Instagram</h5>
        <ul className="nav flex-column">
          {navbarItem?.map(({ icon, name, path }, index) => (
            <li className="nav-item mt-3" key={index}>
              <NavLink
                to={name === "Logout" ? "/login" : path}
                exact="true"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "black",
                  fontWeight: isActive ? "700" : "",
                })}
                className="nav-link"
              >
                <span onClick={name === "Logout" ? handleLogout : undefined}>
                  {icon} &nbsp; &nbsp;
                  {name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </LeftRightContainer>
    </>
  );
}
