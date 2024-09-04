import React, { useEffect, useState } from "react";
import { CommonModal } from "../CommonModal";
import { useModal } from "../../services/hook/ModalContext";
import "./commentModal.scss";
import Loading from "../Loading";
import { useToast } from "../../services/hook";
import { _get, _post } from "../../services/api";

export default function CommentModal({ commentId }) {
  const { modalShow, handleClose } = useModal();
  const [hasCommentPost, setHasCommentPost] = useState("");
  const [isPostLoading, setIsPostLoading] = useState(false);
  const { showToast } = useToast();
  const [getCommentData, setGetCommentData] = useState([]);

  //   Post comment
  const postComment = async () => {
    setIsPostLoading(true);
    try {
      const response = await _post(`social-media/comments/post/${commentId}`, {
        content: hasCommentPost,
      });
      if (response?.data?.success) {
        showToast(response.data.message, "success");
        getAllCommentData();
        setHasCommentPost("");
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
      setIsPostLoading(false);
    }
  };

  //   This function is used for post comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setIsPostLoading(true);
    postComment();
  };

  //   Get all comments
  const getAllCommentData = async () => {
    try {
      const response = await _get(`social-media/comments/post/${commentId}?page=1&limit=100`);
      if (response?.status === 200) {
        setGetCommentData(response?.data?.data?.comments);
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
    if (commentId) {
      getAllCommentData();
    }
  }, [commentId]);

  return (
    <>
      <CommonModal show={modalShow} handleClose={handleClose} title="Modal title">
        <div className="comment-scroll-section">
          {getCommentData?.map((data, index) => (
            <div className="comment-box-container" key={index}>
              <img src={data?.author?.account?.avatar?.url ? data?.author?.account?.avatar?.url : "https://avatar.iran.liara.run/public"} alt="" className="comment-username-pic" />
              <div>
                <strong className="m-0">{data?.author?.account?.username}</strong>
                <p>{data?.content}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit} className="mt-3">
          <div className="input-modal-box">
            <input type="text" className="post-input-box" onChange={(e) => setHasCommentPost(e.target.value)} value={hasCommentPost} />
            <button className="post-modal-btn" type="submit">
              {isPostLoading ? <Loading /> : "Post"}
            </button>
          </div>
        </form>
      </CommonModal>
    </>
  );
}
