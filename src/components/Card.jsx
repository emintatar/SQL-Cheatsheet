import React from "react";

const Card = ({ name, desc }) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
