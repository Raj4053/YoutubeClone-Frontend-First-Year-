import React from "react";

const SuggestionCard = () => {
  return (
    <div className="suggestion-card">
      <img
        className="suggestion-thumbnail"
        src="../src/assets/Thumbnail.webp"
        alt=""
      />

      <div className="card-body">
        <div className="card-text">
          <p className="title">Title</p>
          <p className="faded">Channel Name</p>
          <p className="faded">200K 2 months ago</p>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
