import React from "react";
import LeftRightContainer from "../leftRightContainer/LeftRightContainer";
import "./rightSidebar.scss";

export default function RightSidebar() {
  const profileData = {
    username: "username",
    fullName: "Name Surname",
    profilePic: "https://via.placeholder.com/150",
  };

  const suggestions = [
    {
      username: "user1",
      profilePic: "https://via.placeholder.com/150",
      followedBy: "user2, user3",
    },
    {
      username: "user2",
      profilePic: "https://via.placeholder.com/150",
      followedBy: "user4, user5",
    },
  ];
  return (
    <>
      <LeftRightContainer position="right" colSize="3">
        <div className="profile-info mb-4">
          <div className="d-flex align-items-center">
            <img src={profileData.profilePic} alt="Profile" className="rounded-circle me-3 side-bar-profile" />
            <div>
              <h6 className="m-0">{profileData.username}</h6>
              <p className="text-muted m-0">{profileData.fullName}</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="suggestions mb-4">
          <div className="d-flex justify-content-between">
            <p className="text-muted">Suggestions For You</p>
            <button className="btn btn-link p-0 text-dark">See All</button>
          </div>
          {suggestions.map((suggestion, index) => (
            <div className="d-flex align-items-center mb-3" key={index}>
              <img src={suggestion.profilePic} alt="Suggestion" className="rounded-circle me-3 side-bar-profile" />
              <div>
                <h6 className="m-0">{suggestion.username}</h6>
                <p className="text-muted m-0">Followed by {suggestion.followedBy}</p>
              </div>
              <button className="btn btn-link p-0 ms-auto text-primary">
                <strong>Follow</strong>
              </button>
            </div>
          ))}
        </div>
      </LeftRightContainer>
    </>
  );
}
