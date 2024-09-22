import React from "react";
import "./profileCard.scss";
import notFoundImage from "../../assets/images/notFound2.png";

export default function ProfileCard({ image = notFoundImage, name = "", about = "", followBtn = false }) {
  return (
    <>
      <div className="profile-info mb-4">
        <div className="d-flex align-items-center">
          <img src={image ? image : notFoundImage} alt="Profile" className="rounded-circle me-3 side-bar-profile" />
          <div>
            <h6 className="m-0">{name}</h6>
            <p className="text-muted m-0">{about}</p>
          </div>
          {followBtn && (
            <button className="btn btn-link p-0 ms-auto text-primary">
              <strong className="custom-font-weight">Follow</strong>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
