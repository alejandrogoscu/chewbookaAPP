import React from "react";

const UserCard = ({ image, title }) => {
  return (
    <div className="user-card">
      <img src={image} alt={title} className="user-card-image" />
      <h4>{title}</h4>
    </div>
  );
};

export default UserCard;
