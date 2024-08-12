import React, { useState } from "react";
import "./editProfile.scss";
import { Siderbar, MiddleOuterWraper, RightSidebar, CommonCard } from "../../components";

export default function EditProfile() {
  const [profileData, setProfileData] = useState({
    profilePic: "https://via.placeholder.com/150",
    name: "Name Surname",
    username: "username",
    website: "",
    bio: "",
    email: "email@example.com",
    phoneNumber: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", profileData);
  };
  return (
    <>
      <div className="row">
        <Siderbar />
        <MiddleOuterWraper>
          <div className="edit-profile-container">
            <div className="edit-profile-content">
              <div className="profile-header d-flex align-items-center mb-4">
                <img src={profileData.profilePic} alt="Profile" className="rounded-circle profile-pic me-3" />
                <div>
                  <h6 className="m-0">{profileData.username}</h6>
                  <button className="btn btn-link p-0 text-primary">Change Profile Photo</button>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3 row align-items-center">
                  <label htmlFor="name" className="col-sm-3 col-form-label">
                    Name
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="name" name="name" value={profileData.name} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="mb-3 row align-items-center">
                  <label htmlFor="username" className="col-sm-3 col-form-label">
                    Username
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="username" name="username" value={profileData.username} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="mb-3 row align-items-center">
                  <label htmlFor="website" className="col-sm-3 col-form-label">
                    Website
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="website" name="website" placeholder="Website" value={profileData.website} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="mb-3 row align-items-center">
                  <label htmlFor="bio" className="col-sm-3 col-form-label">
                    Bio
                  </label>
                  <div className="col-sm-9">
                    <textarea className="form-control" id="bio" name="bio" rows="3" placeholder="Bio" value={profileData.bio} onChange={handleInputChange}></textarea>
                  </div>
                </div>

                <div className="mb-3 row align-items-center">
                  <label htmlFor="email" className="col-sm-3 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" id="email" name="email" value={profileData.email} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="mb-3 row align-items-center">
                  <label htmlFor="phoneNumber" className="col-sm-3 col-form-label">
                    Phone Number
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={profileData.phoneNumber} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="mb-3 row align-items-center">
                  <label htmlFor="gender" className="col-sm-3 col-form-label">
                    Gender
                  </label>
                  <div className="col-sm-9">
                    <select className="form-select" id="gender" name="gender" value={profileData.gender} onChange={handleInputChange}>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-sm-9 offset-sm-3">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </MiddleOuterWraper>
        <RightSidebar />
      </div>
    </>
  );
}
