import React from "react";
import LeftRightContainer from "../leftRightContainer/LeftRightContainer";
import { NavLink } from "react-router-dom";
import { navbarItem } from "../../util/constant";

export default function Siderbar() {
  return (
    <>
      <LeftRightContainer position="left" colSize="2">
        <h5 className="mt-3 gradient-text ">Instagram</h5>
        <ul className="nav flex-column">
          {navbarItem?.map(({ icon, name, path }, index) => (
            <li className="nav-item mt-3" key={index}>
              <NavLink
                to={path}
                exact="true"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "black",
                  fontWeight: isActive ? "700" : "",
                })}
                className="nav-link"
              >
                {icon} &nbsp; &nbsp;
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </LeftRightContainer>
    </>
  );
}
