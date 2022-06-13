import React from "react";
import { Repo } from "../interfaces";

export const Card = ({ id, name, stars, url }: Repo) => {
  return (
    <div className="cardContainer">
      <span> {name}</span> - <span>{url}</span> - <span>Stars: {stars}</span>
    </div>
  );
};

export default Card;
