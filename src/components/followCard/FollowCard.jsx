import React, { useEffect, useState } from "react";
import "./followCard.scss";
import { useSocial } from "../../services/hook/SocialContext";
import { _get, _post } from "../../services/api";
import { useToast } from "../../services/hook";
import { useProfile } from "../../services/hook/ProfileContext";
import Loading from "../Loading";
import notFoundImage from "../../assets/images/notFound2.png";

export default function FollowCard({ data }) {
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [toggleFollowUnflowBtn, setToggleUnFollowBtn] = useState(data?.isFollowing);
  const { setHasClickedFollowUnfollowBtn } = useProfile();

  const image = data?.avatar?.url || "";
  const name = data?.username || "";
  const firstName = data?.profile?.firstName || "";
  const lastName = data?.profile?.lastName || "";
  const isFollow = data?.isFollowing;

  const handleFollowed = async () => {
    setToggleUnFollowBtn((pre) => !pre);
    setIsLoading(true);
    try {
      const response = await _post(`social-media/follow/${data?._id}`, {
        toBeFollowedUserId: data?._id,
      });
      if (response?.status === 200) {
        setHasClickedFollowUnfollowBtn((pre) => !pre);
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
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="follow-info-container mb-4">
        <div className="d-flex align-items-center">
          <img src={image ? image : notFoundImage} alt="Profile" className="rounded-circle me-3 follow-profile" />
          <div>
            <h6 className="m-0">{name}</h6>
            <p className="text-muted m-0">
              {firstName} &nbsp;
              {lastName}
            </p>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <button className="btn btn-link p-0 ms-auto text-primary" onClick={handleFollowed}>
              <strong className="follow-btn">{!toggleFollowUnflowBtn ? "Follow" : "UnFollow"}</strong>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
