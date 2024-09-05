import React, { useEffect, useState } from "react";
import { CommonModal } from "../CommonModal";
import { useModal } from "../../services/hook/ModalContext";
import "./commentModal.scss";
import Loading from "../Loading";
import { useToast } from "../../services/hook";
import { _delete, _get, _patch, _post } from "../../services/api";

export default function CommentModal({ commentId }) {
  const { modalShow, handleClose } = useModal();
  const [hasCommentPost, setHasCommentPost] = useState("");
  const [isPostLoading, setIsPostLoading] = useState(false);
  const { showToast } = useToast();
  const [getCommentData, setGetCommentData] = useState([]);
  const [hasCommentDeleteLoading, setHasCommentDeleteLoading] = useState(false);
  const [deletedCommentId, setDeletedCommentId] = useState(null);
  const [getCommentDataLoading, setGetCommentDataLoading] = useState(false);
  const [editCommentData, setEditCommentData] = useState(null);
  const [editCommentDataId, setEditCommentDataId] = useState(null);
  const [loginUserDetail, setLoginUserDetail] = useState(null);

  //   Add comment
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

  // Edit comment
  const editComment = async () => {
    setIsPostLoading(true);
    try {
      const response = await _patch(`social-media/comments/${editCommentDataId}`, {
        content: editCommentData,
      });
      if (response?.data?.success) {
        showToast(response.data.message, "success");
        getAllCommentData();
        setEditCommentData("");
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
    editCommentData ? editComment() : postComment();
  };

  // Get login user data
  const getLoginUserData = async () => {
    try {
      const response = await _get(`social-media/profile`);
      if (response?.status === 200) {
        setLoginUserDetail(response?.data?.data);
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

  //   Get all comments
  const getAllCommentData = async () => {
    setGetCommentDataLoading(true);
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
      setGetCommentDataLoading(false);
    }
  };
  useEffect(() => {
    if (commentId) {
      getAllCommentData();
      getLoginUserData();
    }
  }, [commentId]);

  // Delete comments
  const deleteComments = async (deleteCommentId) => {
    setDeletedCommentId(deleteCommentId);
    setHasCommentDeleteLoading(true);
    try {
      const response = await _delete(`social-media/comments/${deleteCommentId}`);
      if (response?.status === 200) {
        getAllCommentData();
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
      setHasCommentDeleteLoading(false);
    }
  };

  // It is used for get comment data when we click on edit button
  const handleEditCommentData = async (commentData, editCommentId) => {
    setEditCommentData(commentData);
    setEditCommentDataId(editCommentId);
  };

  return (
    <>
      <CommonModal show={modalShow} handleClose={handleClose} title="Modal title">
        <div className="comment-scroll-section">
          {getCommentDataLoading ? (
            <Loading />
          ) : (
            getCommentData?.map((data, index) => (
              <div className="comment-box-container" key={index}>
                <img src={data?.author?.account?.avatar?.url ? data?.author?.account?.avatar?.url : "https://avatar.iran.liara.run/public"} alt="" className="comment-username-pic" />
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                    <strong className="m-0">{data?.author?.account?.username}</strong>
                    {loginUserDetail?.account?._id === data?.author?.account?._id && (
                      <div className="d-flex gap-2 mx-5">
                        <button className="btn btn-primary" onClick={() => handleEditCommentData(data?.content, data?._id)}>
                          edit
                        </button>
                        <button className="btn btn-danger" onClick={() => deleteComments(data?._id)} disabled={hasCommentDeleteLoading && deletedCommentId === data?._id}>
                          {hasCommentDeleteLoading && deletedCommentId === data?._id ? <Loading /> : "delete"}
                        </button>
                      </div>
                    )}
                  </div>

                  <p>{data?.content}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <form onSubmit={handleCommentSubmit} className="mt-3">
          <div className="input-modal-box">
            <input
              type="text"
              className="post-input-box"
              onChange={editCommentData ? (e) => setEditCommentData(e.target.value) : (e) => setHasCommentPost(e.target.value)}
              value={editCommentData ? editCommentData : hasCommentPost}
            />
            <button className="post-modal-btn" type="submit">
              {/* {isPostLoading ? <Loading /> : "Post"} */}
              {isPostLoading ? <Loading /> : editCommentData ? "Edit Post" : "Add Post"}
            </button>
          </div>
        </form>
      </CommonModal>
    </>
  );
}
