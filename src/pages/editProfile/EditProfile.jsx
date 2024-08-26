import React, { useState } from "react";
import "./editProfile.scss";
import { Siderbar, MiddleOuterWraper, RightSidebar, CommonCard, Input, Textarea, Button, Dropdown } from "../../components";
import { useForm } from "react-hook-form";
import { dropdownValuesForCountryCodes } from "../../util/constant";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

              <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="First Name" {...register("firstName")} />
                <Input label="Last Name" {...register("lastName")} />
                <Input label="Location" {...register("location")} />
                <Input label="DOB" type="date" {...register("dob")} />
                <Dropdown options={dropdownValuesForCountryCodes} label="Country Code" {...register("countryCode")} />
                <Input label="Phone Number" type="number" {...register("phoneNumber")} />
                <Textarea label="Bio" {...register("bio")} />
                <div className="mb-3 row">
                  <div className="col-sm-9 offset-sm-3">
                    <Button className="btn-primary" type="submit">
                      update
                    </Button>
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
