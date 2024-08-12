import React from "react";
import LeftRightContainer from "../leftRightContainer/LeftRightContainer";
import "./rightSidebar.scss";
import ProfileCard from "../profileCard/ProfileCard";

export default function RightSidebar() {
  return (
    <>
      <LeftRightContainer position="right" colSize="3">
        <ProfileCard />

        <hr />

        <div className="suggestions mb-4">
          <div className="d-flex justify-content-between">
            <p className="text-muted fw-bold">Suggestions For You</p>
            <button className="btn btn-link p-0 text-dark">See All</button>
          </div>
          <ProfileCard />
        </div>
      </LeftRightContainer>
    </>
  );
}
