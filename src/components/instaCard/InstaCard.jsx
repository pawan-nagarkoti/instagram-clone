import React from "react";
import "./InstaCard.scss";
import { LikeFilledIcon, LikeUnFillIcon, commentIcon, BookmarkUnFilledIcon, BookmarkFilledIcon, DeleteIcon } from "../../assets/icons";

export default function InstaCard() {
  return (
    <>
      <div className="instagram-card">
        <div className="header">
          <div>
            <img src="https://picsum.photos/200" alt="User Avatar" className="avatar" />
            <span className="username">Username</span>
          </div>
          <div className="cursor">{DeleteIcon}</div>
        </div>
        <div className="post-image">
          <img src="https://picsum.photos/200" alt="Post Image" />
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
          <span className="username">Username</span>
          <span className="caption">This is an example of an Instagram post description.</span>
        </div>
        <div className="comment-box">
          <textarea placeholder="Add a comment..."></textarea>
        </div>
      </div>
    </>
  );
}
