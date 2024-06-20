import React from "react";

const UserProfile = ({ name, age, location }) => {
  return (
    <>
      <h1 className="task-number">ЗАДАЧА №1</h1>
      <div className="user-profile">
        <h3>{name}</h3>
        <p>{age} years old</p>
        <p>{location}</p>
      </div>
    </>
  );
};

export default UserProfile;
