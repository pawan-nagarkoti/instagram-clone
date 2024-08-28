import React, { useState, useEffect } from "react";
import { Siderbar, MiddleOuterWraper, RightSidebar, Loading } from "../../components";
import { useForm } from "react-hook-form";
import { _post } from "../../services/api";
import { useToast } from "../../services/hook";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [profilePicPreview, setProfilePicPreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset, watch } = useForm({});

  const onSubmit = async (data) => {
    setIsLoading(true);
    const postDataObject = {
      content: data?.postInfo,
      images: data?.postImage[0],
    };
    try {
      const response = await _post("social-media/posts", postDataObject, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response?.data?.success) {
        showToast(response.data.message, "success");
        navigate("/");
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
  const watchProfileImage = watch("postImage");
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
          <div className="container mt-4">
            <h5 className="mb-4">Create a Post</h5>

            {/* Form to create a new post */}
            <div className="card p-4 mb-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <textarea name="postText" className="form-control" placeholder="What's on your mind?" rows="3" {...register("postInfo")}></textarea>
                </div>
                <div className="mb-3">
                  <input type="file" name="postImage" className="form-control" accept="image/*" {...register("postImage")} />
                </div>
                {profilePicPreview && (
                  <div className="mb-3">
                    <img src={profilePicPreview} alt="" className="w-50 h-50" />
                  </div>
                )}
                <button type="submit" className="btn btn-primary">
                  {isLoading ? <Loading /> : "Post"}
                </button>
              </form>
            </div>
          </div>{" "}
        </MiddleOuterWraper>
        <RightSidebar />
      </div>
    </>
  );
}
