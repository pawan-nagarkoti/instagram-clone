import React, { useState } from "react";
import { Siderbar, MiddleOuterWraper, RightSidebar, CommonCard } from "../../components";
import "./profile.scss";

export default function Profile() {
  const profileData = {
    username: "username",
    fullName: "Name Surname",
    bio: "This is the bio of the user. It could include a brief description, hobbies, or anything else they want to share.",
    posts: 123,
    followers: "456k",
    following: 789,
    profilePic: "https://via.placeholder.com/150",
    photos: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
  };

  const [activeTab, setActiveTab] = useState("posts");

  const renderContent = () => {
    switch (activeTab) {
      case "posts":
        return (
          <div>
            <CommonCard data={profileData} />
          </div>
        );
      case "saved":
        return <div>Saved Content</div>;
      case "reels":
        return <div>Reels Content</div>;
      case "tags":
        return <div>Tags Content</div>;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="row">
        <Siderbar />
        <MiddleOuterWraper>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-3 text-center">
                <img src={profileData.profilePic} alt="Profile" className="rounded-circle profile-pic" />
              </div>
              <div className="col-md-9">
                <div className="d-flex align-items-center mb-3">
                  <h2 className="me-3">{profileData.username}</h2>
                  <button className="btn btn-outline-secondary btn-sm me-2">Edit Profile</button>
                  <button className="btn btn-outline-secondary btn-sm">Settings</button>
                </div>
                <div className="d-flex mb-3">
                  <div className="me-4">
                    <strong>{profileData.posts}</strong> posts
                  </div>
                  <div className="me-4">
                    <strong>{profileData.followers}</strong> followers
                  </div>
                  <div>
                    <strong>{profileData.following}</strong> following
                  </div>
                </div>
                <div>
                  <strong>{profileData.fullName}</strong>
                  <p>{profileData.bio}</p>
                </div>
              </div>
            </div>
            <hr />

            <div className="container mt-4">
              <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                  <button className={`nav-link ${activeTab === "posts" ? "active" : ""}`} onClick={() => setActiveTab("posts")}>
                    <i className="bi bi-grid"></i> Posts
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${activeTab === "saved" ? "active" : ""}`} onClick={() => setActiveTab("saved")}>
                    <i className="bi bi-bookmark"></i> Saved
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${activeTab === "reels" ? "active" : ""}`} onClick={() => setActiveTab("reels")}>
                    <i className="bi bi-play-circle"></i> Reels
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${activeTab === "tags" ? "active" : ""}`} onClick={() => setActiveTab("tags")}>
                    <i className="bi bi-person-square"></i> Tags
                  </button>
                </li>
              </ul>
              <div className="tab-content mt-4">{renderContent()}</div>
            </div>
          </div>
        </MiddleOuterWraper>
        <RightSidebar />
      </div>
    </>
  );
}
