import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <div className="content">
      <div>Ава и описание</div>
        <MyPosts />
    </div>
  );
};

export default Profile;
