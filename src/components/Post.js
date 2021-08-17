import React from "react";

// const post = {
//   id: 1,
//   description: "Three",
//   likes: 20,
//   image: {
//     url: "/uploads/download_fe8220c5ac.jpg",
//   },
// };
const API_URL = "http://localhost:1337";
const formatImageUrl = (url) => `${API_URL}${url}`;

export default ({ description, likes, url }) => {
  return (
    <div className="Post">
      <img className="Post__Image" src={formatImageUrl(url)} />
      <h4>{description}</h4>
      <div>
        <span> Likes: {likes}</span>
      </div>
    </div>
  );
};
