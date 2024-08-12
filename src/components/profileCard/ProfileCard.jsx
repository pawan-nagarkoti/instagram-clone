import React from "react";
import "./profileCard.scss";

export default function ProfileCard() {
  return (
    <>
      <div className="profile-info mb-4">
        <div className="d-flex align-items-center">
          <img src="https://via.placeholder.com/150" alt="Profile" className="rounded-circle me-3 side-bar-profile" />
          <div>
            <h6 className="m-0">Pawan Singh</h6>
            <p className="text-muted m-0">Pawan singh nagarkoti</p>
          </div>
          <button className="btn btn-link p-0 ms-auto text-primary">
            <strong className="custom-font-weight">Follow</strong>
          </button>
        </div>
      </div>
    </>
  );
}
