import React from "react";
import { Repo } from "../interfaces";

export const Card = ({ id, name, stars, url }: Repo) => {
  return (
    <span className="cardContainer">
      <span> {name}</span> - <span>{url}</span> - <span>Stars: {stars}</span>
    </span>
  );
};

export default Card;
