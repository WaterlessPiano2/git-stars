import React from "react";
import { Repo } from "../interfaces";

export const Card = ({ id, name, stars, url }: Repo) => {
  return (
    <div className="cardContainer">
      <span>
        <a href={url}>{name}</a>
      </span>{" "}
      - <span>Stars: {stars}</span>
    </div>
  );
};

export default Card;
