import React, { useEffect, useState } from "react";
import "./editProfile.scss";
import { Siderbar, MiddleOuterWraper, RightSidebar, CommonCard, Input, Textarea, Button, Dropdown, Loading } from "../../components";
import { useForm } from "react-hook-form";
import { dropdownValuesForCountryCodes } from "../../util/constant";
import { _get, _patch } from "../../services/api";
import { useToast } from "../../services/hook";
import { useNavigate } from "react-router-dom";
import { formatDateToYYYYMMDD } from "../../util/helper";

export default function EditProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [getusername, setGetUsername] = useState("");
  const [profilePicPreview, setProfilePicPreview] = useState("https://via.placeholder.com/150");

  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      location: "",
      dob: "",
      countryCode: "",
      phoneNumber: "",
      bio: "",
    },
  });

  // get userprofile data;
  const getUserProfileData = async () => {
    try {
      const getUserProfileDataResponse = await _get(`social-media/profile`);
      if (getUserProfileDataResponse?.status) {
        const profileData = getUserProfileDataResponse?.data?.data;
        setGetUsername(profileData?.account?.username);
        setProfilePicPreview(profileData?.account?.avatar?.url);
        reset({
          firstName: profileData?.firstName,
          lastName: profileData?.lastName,
          location: profileData?.location,
          dob: formatDateToYYYYMMDD(profileData?.dob), // Format the date
          countryCode: profileData?.countryCode,
          phoneNumber: profileData?.phoneNumber,
          bio: profileData?.bio,
        });
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
  useEffect(() => {
    getUserProfileData();
  }, []);

  // edit profile form submit
  const onSubmit = async (data) => {
    const profileImageData = new FormData();
    profileImageData.append("avatar", data.profileImage[0]);
    const editProfileDataObject = {
      bio: data?.bio,
      countryCode: data?.countryCode,
      dob: data?.dob,
      firstName: data?.firstName,
      lastName: data?.lastName,
      location: data?.location,
      phoneNumber: data?.phoneNumber,
    };
    setIsLoading(true);
    try {
      const response = await _patch(`social-media/profile`, editProfileDataObject);
      const profileImageUploadResponse = await _patch(`users/avatar`, profileImageData);
      if (response?.status && profileImageUploadResponse?.status === 200) {
        showToast(response.data.message, "success");
        navigate("/profile");
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

  // Watch the profileImage field
  const watchProfileImage = watch("profileImage");
  useEffect(() => {
    if (watchProfileImage && watchProfileImage.length > 0) {
      const previewUrl = URL.createObjectURL(watchProfileImage[0]);
      setProfilePicPreview(previewUrl);
      // Clean up the URL object when the component unmounts or the image changes
      return () => URL.revokeObjectURL(previewUrl);
    }
  }, [watchProfileImage]);

  return (
    <>
      <div className="row">
        <Siderbar />
        <MiddleOuterWraper>
          <div className="edit-profile-container">
            <div className="edit-profile-content">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="profile-header d-flex align-items-center mb-4">
                  <img src={profilePicPreview} alt="Profile" className="rounded-circle profile-pic me-3" />
                  <div>
                    <h6 className="m-0">{getusername}</h6>
                    <input type="file" accept="image/*" className="form-control-file" style={{ display: "none" }} id="profilePicInput" {...register("profileImage")} />
                    <label htmlFor="profilePicInput" className="btn btn-link p-0 text-primary" style={{ cursor: "pointer" }}>
                      Change Profile Photo
                    </label>{" "}
                  </div>
                </div>
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
                      {isLoading ? <Loading /> : "update"}
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
