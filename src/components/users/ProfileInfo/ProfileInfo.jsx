import React from "react";

const ProfileInfo = ({ user }) => {
  if (!user) return null;
  return (
    <div className="profile-info">
      <img
        src={user.avatar || user.image || "https://via.placeholder.com/150"}
        alt="Avatar"
        className="profile-avatar"
      />
      <h2>{user.username}</h2>
      <p>{user.email}</p>
      <div className="bio-section">
        <strong>Bio:</strong>
        <p>{user.bio || "Sin biografía."}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
