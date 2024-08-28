import React, { useEffect, useState } from "react";
import "./InstaCard.scss";
import { LikeFilledIcon, LikeUnFillIcon, commentIcon, BookmarkUnFilledIcon, BookmarkFilledIcon, DeleteIcon } from "../../assets/icons";
import { _get } from "../../services/api";
import Loading from "../Loading";
export default function InstaCard() {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
                <div className="cursor">{DeleteIcon}</div>
              </div>
              <div className="post-image">
                <img src={data?.images[0]?.url} alt="Post Image" />
              </div>
              <div className="description">
                <div className="d-flex justify-content-between">
                  <div>
                    <span className="font-size cursor me-2">{true ? LikeFilledIcon : LikeUnFillIcon}</span>
                    <span className="font-size cursor">{commentIcon}</span>
                  </div>
                  <div>
                    <span className="font-size cursor">{true ? BookmarkUnFilledIcon : BookmarkFilledIcon}</span>
                  </div>
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
