import React from "react";
import "./index.scss";

const Card = ({ user }) => {
  console.log(user);

  return (
    <>
      <div className="card">
        <img src={user.avatar} className="card image" alt="..." />
        <div className="card-body">
          <p className="card-text">{user.first_name}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
