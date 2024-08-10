import React from "react";
import LeftRightContainer from "../leftRightContainer/LeftRightContainer";

export default function Siderbar() {
  return (
    <>
      <LeftRightContainer position="left" colSize="2">
        <h5>Logo</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Pawan
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Singh
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 3
            </a>
          </li>
          {/* Add more links as needed */}
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Link 4
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 5
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 6
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Link 7
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 8
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 9
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Link 10
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 11
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 12
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Link 13
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 14
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link 15
            </a>
          </li>

          {/* Add more links as needed */}
        </ul>
      </LeftRightContainer>
    </>
  );
}
