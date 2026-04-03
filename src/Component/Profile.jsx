import React from 'react';
import { useLocation } from 'react-router-dom';


const Profile = () => {
  const { state } = useLocation();

  return (
    <div className="profile-container">
      
      <div className="profile-card">

        {/* Profile Image */}
        <img
          src={state?.photo || "https://i.pravatar.cc/150"}
          alt="Profile"
          className="profile-img"
        />

        {/* Name */}
        <h2>{state?.name || "No Name"}</h2>
        <p className="role">{state?.role || "No Role"}</p>

        {/* Info */}
        <div className="profile-info">
          <p><strong>Email:</strong> {state?.email || "Not provided"}</p>
          <p><strong>Location:</strong> {state?.location || "Unknown"}</p>
        </div>

        {/* Buttons */}
        <div className="profile-buttons">
          <button className="btn edit">Edit Profile</button>
          <button className="btn logout">Logout</button>
        </div>

      </div>

    </div>
  );
};

export default Profile;