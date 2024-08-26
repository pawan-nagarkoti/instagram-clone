import React, { useEffect, useState } from "react";
import { Siderbar, MiddleOuterWraper, RightSidebar, CommonCard, Loading } from "../../components";
import "./profile.scss";
import { useNavigate } from "react-router-dom";
import { _get } from "../../services/api";

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
  const navigate = useNavigate();
  const [profileValues, setProfileValues] = useState([]);
  const [isProfileLoading, setIsProfileLoading] = useState(false);

  // This function is used for get profile data
  const getProfileData = async () => {
    setIsProfileLoading(true);
    try {
      const response = await _get(`social-media/profile`);
      if (response?.status) {
        setProfileValues(response?.data?.data);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Error Status Code:", error.response.status);
        console.error("Error Message:", error.response.data.message);
        showToast(error.response.data.message, "error");
      } else {
        console.error("An unknown error occurred.");
      }
    } finally {
      setIsProfileLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

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
            {isProfileLoading ? (
              <Loading />
            ) : (
              <div className="row">
                <div className="col-md-3 text-center">
                  <img src={profileValues?.account?.avatar?.url} alt="Profile" className="rounded-circle profile-pic-box" />
                </div>
                <div className="col-md-9">
                  <div className="d-flex align-items-center mb-3">
                    <h2 className="me-3">{profileValues?.account?.username}</h2>
                    <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => navigate("/edit-profile")}>
                      Edit Profile
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">Settings</button>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="me-4">
                      <strong>{profileData.posts}</strong> posts
                    </div>
                    <div className="me-4">
                      <strong>{profileValues?.followersCount}</strong> followers
                    </div>
                    <div>
                      <strong>{profileValues.followingCount}</strong> following
                    </div>
                  </div>
                  <div>
                    <strong>
                      {profileValues?.firstName} &nbsp;
                      {profileValues?.lastName}
                    </strong>
                    <p>{profileValues.bio}</p>
                  </div>
                </div>
              </div>
            )}
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
