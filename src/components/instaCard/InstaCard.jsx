import React, { useEffect, useState } from "react";
import "./InstaCard.scss";
import { LikeFilledIcon, LikeUnFillIcon, commentIcon, BookmarkUnFilledIcon, BookmarkFilledIcon, DeleteIcon } from "../../assets/icons";
import { _delete, _get, _post } from "../../services/api";
import Loading from "../Loading";
import { useToast } from "../../services/hook";

export default function InstaCard() {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPostDeleteLoading, setIsPostDeleteLoading] = useState(false);
  const { showToast } = useToast();

  const getPostData = async () => {
    setIsLoading(true);
    try {
      const response = await _get("social-media/posts?page=1&limit=100");
      if (response?.status === 200) {
        setPostData(response?.data?.data?.posts);
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
    getPostData();
  }, []);

  // Delete post
  const handleDeletePost = async (postId) => {
    setIsPostDeleteLoading(true);
    try {
      const response = await _delete(`social-media/posts/${postId}`);
      if (response?.status === 200) {
        showToast(response.data.message, "success");
        getPostData();
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
      setIsPostDeleteLoading(false);
    }
  };

  // Add to bookmark page
  const handleBookmarkPage = async (postId) => {
    try {
      const response = await _post(`social-media/bookmarks/${postId}`);
      if (response?.status === 200) {
        showToast(response.data.message, "success");
        getPostData();
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

  // Like or unlike post
  const handleLikeUnlikePost = async (postId) => {
    try {
      const response = await _post(`social-media/like/post/${postId}`);
      if (response?.status === 200) {
        showToast(response.data.message, "success");
        getPostData();
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

  if (postData.length === 0 && !isLoading) {
    return <p>No post available</p>;
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        postData?.map((data, index) => (
          <div key={index}>
            <div className="instagram-card mb-4">
              <div className="header">
                <div>
                  <img src="https://picsum.photos/200" alt="User Avatar" className="avatar" />
                  <span className="username">{data?.author?.account?.username}</span>
                </div>
                <div className="cursor" onClick={() => handleDeletePost(data?._id)}>
                  {isPostDeleteLoading ? <Loading /> : DeleteIcon}
                </div>
              </div>
              <div className="post-image">
                <img src={data?.images[0]?.url ? data?.images[0]?.url : "https://via.placeholder.com/150"} alt="Post Image" />
              </div>
              <div className="description">
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="font-size cursor me-2" onClick={() => handleLikeUnlikePost(data?._id)}>
                      {data?.isLiked ? LikeFilledIcon : LikeUnFillIcon}
                    </span>
                    <span className="font-size cursor">{commentIcon}</span>
                  </div>
                  <div>
                    <span className="font-size cursor" onClick={() => handleBookmarkPage(data?._id)}>
                      {data?.isBookmarked ? BookmarkFilledIcon : BookmarkUnFilledIcon}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="mb-0">likes: {data?.likes} </p>
                  <p>comments: {data?.comments}</p>
                </div>
                <span className="username">
                  {data?.author?.firstName} {data?.author?.lastName}
                </span>
                <span className="caption">{data?.content}</span>
              </div>
              <div className="comment-box">
                <textarea placeholder="Add a comment..."></textarea>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
