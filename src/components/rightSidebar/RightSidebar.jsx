import React, { useEffect, useState } from "react";
import LeftRightContainer from "../leftRightContainer/LeftRightContainer";
import "./rightSidebar.scss";
import ProfileCard from "../profileCard/ProfileCard";
import Loading from "../Loading";
import { useToast } from "../../services/hook";
import { _get } from "../../services/api";

export default function RightSidebar() {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const getLoggedInUserDetail = async () => {
    setIsLoading(true);
    try {
      const response = await _get("social-media/profile");
      if (response?.status === 200) {
        setProfileData(response?.data?.data);
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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLoggedInUserDetail();
  }, []);
  return (
    <>
      <LeftRightContainer position="right" colSize="3">
        {isLoading ? <Loading /> : <ProfileCard image={profileData?.account?.avatar?.url} name={profileData?.account?.username} location={profileData?.location} followBtn={false} />}
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
