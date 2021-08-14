import React from "react";

const post = {
  id: 1,
  description: "Three",
  likes: 20,
  author: null,
  published_at: "2021-08-14T21:53:23.811Z",
  created_at: "2021-08-14T21:48:38.335Z",
  updated_at: "2021-08-14T21:53:23.833Z",
  image: {
    url: "/uploads/download_fe8220c5ac.jpg",
  },
};
const API_URL = "http://localhost:5000";
const formatImageUrl = (url) => `${API_URL}${url}`;

export default ({ description, likes, url }) => {
  return (
    <div className="Post">
      <img className="Post_Image" src={formatImageUrl(url)} />
      <h4>{description}</h4>
      <div>
        <span> Likes: {likes}</span>
      </div>
    </div>
  );
};
