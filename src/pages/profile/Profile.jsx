import React, { useEffect, useState } from "react";
import { Siderbar, MiddleOuterWraper, RightSidebar, CommonCard, Loading, ProfileCard, Button } from "../../components";
import "./profile.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { _get, _post } from "../../services/api";
import { useToast } from "../../services/hook";
import { useSocial } from "../../services/hook/SocialContext";

export default function Profile() {
  const { showToast } = useToast();
  const [postCount, setPostCount] = useState(0);
  const { setFollowData } = useSocial();
  const { pathname, state } = useLocation();

  const [activeTab, setActiveTab] = useState("posts");
  const navigate = useNavigate();
  const [profileValues, setProfileValues] = useState([]);
  const [isProfileLoading, setIsProfileLoading] = useState(false);
  const [bookmarkedData, setBookmarkedData] = useState([]);
  const [myPostData, setMyPostData] = useState([]);
  const [hasFollowed, setHasFollowed] = useState("");

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

  // Get bookmarked data
  const getBookmarkedData = async () => {
    try {
      const response = await _get("social-media/bookmarks?page=1&limit=100");
      if (response?.data?.success) {
        setBookmarkedData(response?.data?.data?.bookmarkedPosts);
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
    }
  };

  // Get my post data
  const getMyPostData = async () => {
    try {
      const response = await _get("social-media/posts/get/my?page=1&limit=100");
      if (response?.status === 200) {
        setPostCount(response?.data?.data?.totalPosts);
        setMyPostData(response?.data?.data?.posts);
        // setMyPostData(response?.data?.data?.posts[0]?.author?.coverImage?.url);
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
    }
  };

  // Get others profile page
  const getOtherProfilePage = async () => {
    setIsProfileLoading(true);
    try {
      const response = await _get(`social-media/profile/u/${state}`);
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
    // getProfileData();
    // getBookmarkedData();
    // getMyPostData();

    if (pathname === "/follow-page") {
      getOtherProfilePage();
    } else {
      getProfileData();
      getBookmarkedData();
      getMyPostData();
    }
  }, [pathname]);

  const renderContent = () => {
    switch (activeTab) {
      case "posts":
        return <>{myPostData.length === 0 ? <p>Data is not found</p> : myPostData?.map((data, index) => <CommonCard key={index} data={data} />)}</>;
      case "saved":
        return <>{bookmarkedData.length === 0 ? <p>Data is not found</p> : bookmarkedData?.map((data, index) => <CommonCard key={index} data={data} />)}</>;
      case "reels":
        return <div>Reels Content</div>;
      case "tags":
        return <div>Tags Content</div>;
      default:
        return null;
    }
  };

  const handleFollowingList = async () => {
    try {
      const response = await _get(`social-media/follow/list/following/${profileValues.account.username}?page=1&limit=100`);
      if (response?.status === 200) {
        setFollowData(response?.data?.data);
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
    }
  };

  const handleFollowed = async () => {
    try {
      const response = await _post(`social-media/follow/${profileValues?.account?._id}`, {
        toBeFollowedUserId: profileValues?._id,
      });
      if (response?.status === 200) {
        setHasFollowed(response.data.data);
        getOtherProfilePage();
        showToast(response.data.message, "success");
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
                    {pathname === "/follow-page" ? (
                      <>
                        <button className="btn btn-outline-secondary btn-sm me-2" onClick={handleFollowed}>
                          {!profileValues?.isFollowing ? "Follow" : "Unfollow"}
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => navigate("/edit-profile")}>
                          Edit Profile
                        </button>
                        <button className="btn btn-outline-secondary btn-sm">Settings</button>
                      </>
                    )}
                  </div>
                  <div className="d-flex mb-3">
                    <div className="me-4">
                      {" "}
                      <strong>{postCount}</strong> posts{" "}
                    </div>
                    <div className="me-4">
                      <strong>{profileValues?.followersCount}</strong> followers
                    </div>
                    <div onClick={handleFollowingList}>
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

            {/* Tab Navigation */}
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
              <div className="tab-content mt-4 row">{renderContent()}</div>
            </div>
          </div>
        </MiddleOuterWraper>
        <RightSidebar />
      </div>
    </>
  );
}
