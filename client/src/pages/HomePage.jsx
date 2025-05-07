import React from "react";

const HomePage = ({ user }) => {
  return (
    <div>
      HomePage {user.fullName}, {user.email}
      <img
        src={user.profilePic}
        alt="profile"
        className="size-20 rounded-full"
      />
    </div>
  );
};

export default HomePage;
