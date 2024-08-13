import React, { useState } from "react";
import { Siderbar, MiddleOuterWraper, RightSidebar } from "../../components";

export default function Create() {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const postText = e.target.postText.value;
    const postImage = e.target.postImage.files[0];

    if (!postText && !postImage) return;

    const newPost = {
      text: postText,
      image: postImage ? URL.createObjectURL(postImage) : null,
    };

    setPosts([newPost, ...posts]);

    // Reset the form
    e.target.reset();
  };
  return (
    <>
      <div className="row">
        <Siderbar />
        <MiddleOuterWraper>
          <div className="container mt-4">
            <h5 className="mb-4">Create a Post</h5>

            {/* Form to create a new post */}
            <div className="card p-4 mb-4">
              <form onSubmit={handlePostSubmit}>
                <div className="mb-3">
                  <textarea name="postText" className="form-control" placeholder="What's on your mind?" rows="3"></textarea>
                </div>
                <div className="mb-3">
                  <input type="file" name="postImage" className="form-control" accept="image/*" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Post
                </button>
              </form>
            </div>

            {/* Displaying posts */}
            {posts.map((post, index) => (
              <div className="card mb-4" key={index}>
                <div className="card-body">
                  {post.image && <img src={post.image} alt="Post" className="card-img-top mb-3" />}
                  {post.text && <p className="card-text">{post.text}</p>}
                </div>
              </div>
            ))}
          </div>{" "}
        </MiddleOuterWraper>
        <RightSidebar />
      </div>
    </>
  );
}
